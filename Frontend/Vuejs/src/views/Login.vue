<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <!-- <div class="login100-pic js-tilt" data-tilt>
					<img src="../images/5172658.jpg" alt="IMG"> 
				</div> -->

        <form class="login100-form validate-form" @submit.prevent="login()">
          <span class="login100-form-title"> Candidate Login </span>

          <div
            class="wrap-input100 validate-input"
            :class="{ error: v$.user.username.$errors.length }"
          >
            <input
              class="input100"
              type="text"
              name="username"
              placeholder="Username"
              v-model="v$.user.username.$model"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <!-- error message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.user.username.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
            :class="{ error: v$.user.password.$errors.length }"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Password"
              v-model="v$.user.password.$model"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
            <!-- error message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.user.password.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn">Login</button>
          </div>

          <div class="text-center p-t-12">
            <span class="txt1"> Forgot </span>
            <a class="txt2" href="#"> Username / Password? </a>
          </div>

          <div class="text-center p-t-136">
            <router-link class="txt2" to="/register">
              Create your Account
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import BrewMethodsAPI from "../api/resources/BrewMethods";

const url = "http://localhost:3002/login";

export default {
  name: "Login",
  setup() {
    return { v$: useVuelidate() };
  },
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      user: {
        username: {
          required,
          min: minLength(4),
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    };
  },
  props: {
    page: { type: String, require: true },
    check: { type: Function, require: true },
    updatePerson: "",
  },

  methods: {
    login: async function () {
      const jsonData = JSON.stringify(this.user);

      const data = await BrewMethodsAPI.store(url, jsonData);

      this.sendAlert(data);
    },
    sendAlert: function (data) {
      const getData = JSON.parse(data);

      if (getData.responseCode === 0) {
        this.$toast.error(getData.responseMsg, {
          type: "error",
          position: "top",
          dismissible: false,
          max: 1,
        });
      } else {
        this.$router.push({
          name: "Homepage",
          params: { data: getData.responseMsg },
        });
      }
    },
  },
};
</script>

<style scoped>
@import "../styles/Login.css";
</style>
