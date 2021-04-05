<template>
  <div>
    <b-card>
      <b-card-title class="col-12">
        Tambah Pegawai
      </b-card-title>
      <div
        class="wizard wizard-2"
        id="wizard_pegawai"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <!--begin: Wizard Nav -->
        <div class="wizard-nav border-right py-4 px-6 py-lg-10 px-lg-8">
          <div class="wizard-steps">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x">
                    <inline-svg src="media/svg/icons/General/User.svg" />
                  </span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    Informasi Pegawai
                  </h3>
                  <div class="wizard-desc">
                    Detail Pegawai
                  </div>
                </div>
              </div>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x">
                    <inline-svg src="media/svg/icons/Map/Compass.svg" />
                  </span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    Informasi User
                  </h3>
                  <div class="wizard-desc">
                    Informasi User Pegawai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav -->
        <!--begin: Wizard Body -->
        <div class="wizard-body py-4 px-6 py-lg-10 px-lg-8">
          <!--begin: Wizard Form-->
          <div class="row">
            <div class="offset-xxl-2 col-xxl-8">
              <form class="form" id="kt_form">
                <!--begin: Wizard Step 1-->
                <div
                  class="pb-5"
                  data-wizard-type="step-content"
                  data-wizard-state="current"
                >
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Masukkan Informasi Pegawai
                  </h4>
                  <div class="form-group">
                    <label>Nama Pegawai</label>
                    <input
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="nama"
                      placeholder="Nama Pegawai"
                      v-model="pegawai.name"
                    />
                    <span class="form-text text-muted"
                      >Masukkan Nama lengkap.</span
                    >
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="form-group">
                        <label>NIP</label>
                        <input
                          type="text"
                          class="form-control form-control-solid form-control-lg"
                          name="nip"
                          placeholder="NIP"
                          v-model="pegawai.nip"
                        />
                        <span class="form-text text-muted">Masukkan NIP.</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="row">
                        <div class="col-xl-12">
                          <div class="form-group">
                            <label>Nama Organisasi</label>
                            <vue-bootstrap-typeahead
                              v-model="queryOrganisasi"
                              inputClass="form-control form-control-solid form-control-lg"
                              :data="getOrganisasi"
                              :serializer="item => item.nama"
                              @hit="selectedOrganisasi = $event.id"
                              placeholder="Ketikkan nama organisasi"
                            />
                            <span class="form-text text-muted"
                              >Pilih Nama Organisasi.</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="row">
                        <div class="col-xl-12">
                          <div class="form-group">
                            <label>Nama Bidang</label>
                            <vue-bootstrap-typeahead
                              v-model="queryBidang"
                              inputClass="form-control form-control-solid form-control-lg"
                              :data="getBidang"
                              :serializer="item => item.nama"
                              @hit="pegawai.bidang_id = $event.id"
                              placeholder="Ketikkan nama bidang"
                            />
                            <span class="form-text text-muted"
                              >Pilih Nama Bidang.</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Pangkat</label>
                        <input
                          type="pangkat"
                          class="form-control form-control-solid form-control-lg"
                          name="pangkat"
                          placeholder="Pangkat"
                          v-model="pegawai.pangkat"
                        />
                        <span class="form-text text-muted"
                          >Masukkan Pangkat.</span
                        >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Golongan</label>
                        <input
                          type="golongan"
                          class="form-control form-control-solid form-control-lg"
                          name="golongan"
                          placeholder="Golongan"
                          v-model="pegawai.golongan"
                        />
                        <span class="form-text text-muted"
                          >Masukkan Golongan.</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="form-group">
                        <label>Jabatan</label>
                        <input
                          type="jabatan"
                          class="form-control form-control-solid form-control-lg"
                          name="jabatan"
                          placeholder="Jabatan"
                          v-model="pegawai.jabatan"
                        />
                        <span class="form-text text-muted"
                          >Masukkan Jabatan.</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!--end: Wizard Step 1-->
                <!--begin: Wizard Step 2-->
                <div class="pb-5" data-wizard-type="step-content">
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Masukkan Informasi User
                  </h4>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control form-control-solid form-control-lg"
                      name="email"
                      placeholder="Email"
                      v-model="pegawai.email"
                    />
                    <span class="form-text text-muted"
                      >Masukkan Alamat Email.</span
                    >
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          class="form-control form-control-solid form-control-lg"
                          name="password"
                          placeholder="Password"
                          v-model="pegawai.password"
                        />
                        <span class="form-text text-muted"
                          >Masukkan Password.</span
                        >
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Konfirmasi Password</label>
                        <input
                          type="password"
                          class="form-control form-control-solid form-control-lg"
                          name="password_confirmation"
                          placeholder="Konfirmasi Password"
                          v-model="pegawai.password_confirmation"
                        />
                        <span class="form-text text-muted"
                          >Konfirmasi Password.</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!--end: Wizard Step 2-->
                <!--begin: Wizard Actions -->
                <div class="d-flex justify-content-between border-top pt-10">
                  <div class="mr-2">
                    <button
                      class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                      data-wizard-type="action-prev"
                    >
                      Previous
                    </button>
                  </div>
                  <div>
                    <button
                      v-on:click="submit"
                      class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                      data-wizard-type="action-submit"
                    >
                      Submit
                    </button>
                    <button
                      class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                      data-wizard-type="action-next"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
                <!--end: Wizard Actions -->
              </form>
            </div>
          </div>
        </div>
        <!--end: Wizard Body -->
      </div>
    </b-card>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-2.scss";
</style>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { CREATE_PEGAWAI } from "@/core/services/store/pegawai.module";
import { GET_ORGANISASI } from "@/core/services/store/organisasi.module";
import { GET_BIDANG } from "@/core/services/store/bidang.module";
import { mapGetters, mapState } from "vuex";
import KTWizard from "@/assets/js/components/wizard";
import KTUtil from "@/assets/js/components/util";
import Swal from "sweetalert2";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
export default {
  name: "tambahKepegawaian",
  components: {
    VueBootstrapTypeahead
  },
  data() {
    return {
      selectedOrganisasi: null,
      queryBidang: null,
      queryOrganisasi: null,
      pegawai: {
        name: null,
        nip: null,
        pangkat: null,
        golongan: null,
        jabatan: null,
        email: null,
        password: null,
        password_confirmation: null,
        bidang_id: 1
      }
    };
  },
  watch: {
    selectedOrganisasi: function(val) {
      this.$store.dispatch(GET_BIDANG, { organisasi_id: val });
    }
  },
  computed: {
    ...mapState({
      errors: state => state.pegawai.errors
    }),
    ...mapGetters(["getOrganisasi", "getBidang"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Kepegawaian", route: "master" },
      { title: "Tambah Kepegawaian" }
    ]);
    const wizard = new KTWizard("wizard_pegawai", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });

    this.$store.dispatch(GET_ORGANISASI);
  },
  methods: {
    doSomethingOnHidden() {
      alert("hidden");
    },
    submit: function(e) {
      e.preventDefault();
      this.$store.dispatch(CREATE_PEGAWAI, this.pegawai);
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
