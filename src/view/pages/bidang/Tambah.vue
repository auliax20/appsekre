<template>
  <div>
    <b-card>
      <b-card-title class="col-12">
        Tambah Bidang
      </b-card-title>
      <form class="form" id="kt_form">
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Kode Bidang</label>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="kode"
                placeholder="Kode Organisasi"
                v-model="bidang.kode"
              />
              <span class="form-text text-muted">Masukkan Kode Bidang.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Nama Bidang</label>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="nama"
                placeholder="Nama Organisasi"
                v-model="bidang.nama"
              />
              <span class="form-text text-muted">Masukkan Nama Bidang.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Nama Organisasi</label>
              <vue-bootstrap-typeahead
                v-model="query"
                inputClass="form-control form-control-solid form-control-lg"
                :data="getOrganisasi"
                :serializer="item => item.nama"
                @hit="bidang.organisasi_id = $event.id"
                placeholder="Ketikkan nama organisasi"
              />
              <span class="form-text text-muted">Pilih Nama Organisasi.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-on:click="submit"
            class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
          >
            Submit
          </button>
        </div>
      </form>
    </b-card>
  </div>
</template>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { CREATE_BIDANG } from "@/core/services/store/bidang.module";
import { GET_ORGANISASI } from "@/core/services/store/organisasi.module";
import Swal from "sweetalert2";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
import { mapGetters, mapState } from "vuex";
export default {
  name: "tambahBidang",
  components: {
    VueBootstrapTypeahead
  },
  data() {
    return {
      bidang: {
        kode: null,
        nama: null,
        organisasi_id: null
      },
      query: null
    };
  },
  computed: {
    ...mapState({
      errors: state => state.bidang.errors
    }),
    ...mapGetters(["getOrganisasi"])
  },
  mounted() {
    this.$store.dispatch(GET_ORGANISASI);
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Bidang", route: "master" },
      { title: "Tambah Bidang" }
    ]);
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      this.$store.dispatch(CREATE_BIDANG, this.bidang);
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted !",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      });
    }
  }
};
</script>
