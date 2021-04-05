<template>
  <div class="d-flex flex-column flex-root">
    <!--begin::Login-->
    <div
      class="login login-5 login-signin-on d-flex flex-row-fluid"
      id="kt_login"
    >
      <div
        class="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid"
        style="background-image: url(media/bg/bg-2.jpg);"
      >
        <div
          class="login-form text-center text-white p-7 position-relative overflow-hidden"
        >
          <!--begin::Login Header-->
          <div class="d-flex flex-center mb-15">
            <a href="#">
              <img
                src="media/logos/logo-letter-13.png"
                class="max-h-75px"
                alt=""
              />
            </a>
          </div>
          <!--end::Login Header-->
          <!--begin::Login Sign in form-->
          <div class="login-signin">
            <div class="mb-20">
              <h3 class="opacity-40 font-weight-normal">Masuk ke Aplikasi</h3>
              <p class="opacity-40">Masukkan Akun Anda</p>
            </div>
            <form class="form" id="kt_login_signin_form">
              <div class="form-group">
                <input
                  class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                  type="text"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                  ref="email"
                  v-model="form.email"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                  type="password"
                  placeholder="Password"
                  name="password"
                  v-model="form.password"
                />
              </div>
              <div
                class="form-group d-flex flex-wrap justify-content-between align-items-center px-8 opacity-60"
              >
                <div class="checkbox-inline">
                  <label
                    class="checkbox checkbox-outline checkbox-white text-white m-0"
                  >
                    <input type="checkbox" name="remember" />
                    <span></span>Remember me</label
                  >
                </div>
              </div>
              <div class="form-group text-center mt-10">
                <button
                  id="kt_login_signin_submit"
                  class="btn btn-pill btn-primary opacity-90 px-15 py-3"
                  ref="kt_login_signin_submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <!--end::Login Sign in form-->
        </div>
      </div>
    </div>
    <!--end::Login-->
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/classic/login-5.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
import { LOGIN, LOGOUT } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  name: "login-1",
  data() {
    return {
      state: "signin",
      form: {
        email: null,
        password: null
      }
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return (
        process.env.BASE_URL + "media/svg/illustrations/login-visual-1.svg"
      );
    }
  },
  mounted() {
    const signin_form = KTUtil.getById("kt_login_signin_form");

    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });

    this.fv.on("core.form.valid", () => {
      var email = this.form.email;
      var password = this.form.password;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send login request
        this.$store
          .dispatch(LOGIN, { email, password })
          // go to which page after successfully login
          .then(() => this.$router.push({ name: "dashboard" }))
          .catch(() => {});

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    });

    this.fv.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    }
  }
};
</script>
