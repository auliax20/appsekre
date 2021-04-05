<template>
  <div>
    <b-card>
      <b-card-title class="col-12">
        Tambah Organisasi
      </b-card-title>
      <form class="form" id="kt_form">
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Kode Organisasi</label>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="kode"
                placeholder="Kode Organisasi"
                v-model="organisasi.kode"
              />
              <span class="form-text text-muted"
                >Masukkan Kode Organisasi.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Nama Organisasi</label>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                name="nama"
                placeholder="Nama Organisasi"
                v-model="organisasi.nama"
              />
              <span class="form-text text-muted"
                >Masukkan Nama Organisasi.</span
              >
            </div>
          </div>
        </div>
        <div>
          <button
            v-on:click="submit"
            class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
            data-wizard-type="action-submit"
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
import { CREATE_ORGANISASI } from "@/core/services/store/organisasi.module";
import Swal from "sweetalert2";
export default {
  name: "tambahOrganisasi",
  data() {
    return {
      organisasi: {
        kode: null,
        nama: null
      }
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Organisasi", route: "master" },
      { title: "Tambah Organisasi" }
    ]);
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      this.$store.dispatch(CREATE_ORGANISASI, this.organisasi);
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      });
    }
  }
};
</script>
