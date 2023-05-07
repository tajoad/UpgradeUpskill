<template>
  <div>
    <Header />
  </div>
  <div class="main-container">
    <NavBars />
    <div class="main">
      <div class="row mx-2 my-2">
        <div class="col-3 sidebar">
          <div class="create-modules">
            <button class="btn btn-primary p-1" @click="toggleModal">
              Create Module
            </button>
          </div>
          <div class="card">
            <div class="card-header header">Modules</div>
            <div class="modules">
              <div
                class="list-group border-0 grp"
                v-for="item in this.getAllModules"
              >
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div class="p-1 grp-list">
                    <div class="d-flex list w-100 justify-content-between">
                      <h6 class="mb-1" id="text">{{ item.Module }}</h6>
                      <i
                        class="fa fa-chevron-circle-right"
                        id="icon"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="home">
            <Modal @close="toggleModal" :modalActive="modalActive">
              <div class="my-2 py-2">
                <form class="mx-2 p-2" @submit.prevent="submitModule()">
                  <div class="form-group mb-3">
                    <label for="formGroupExampleInput">Module Title</label>
                    <input
                      type="text"
                      class="form-control px-2 py-1"
                      id="formGroupExampleInput"
                      v-model="v$.module.title.$model"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="formGroupExampleInput2"
                      >Module Description</label
                    >
                    <input
                      type="text"
                      class="form-control px-2 py-1"
                      id="formGroupExampleInput2"
                      v-model="v$.module.description.$model"
                    />
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex justify-content-start">
                        <button
                          class="btn btn-danger close mt-3 p-2"
                          type="button"
                          @click="closeModule()"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-end">
                        <button class="btn btn-primary mt-3 p-2">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import NavBars from "./NavBars.vue";
import Modal from "./Modal.vue";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import BrewMethodsAPI from "../api/resources/BrewMethods";

const url = "http://localhost:3002/submitModule";

const getModules = "http://localhost:3002/getmodules";

export default {
  name: "LearningRoom",
  props: {
    methodName: { type: Function, require: true },
  },
  data: function () {
    return {
      module: {
        title: "",
        description: "",
      },
      getAllModules: "",
    };
  },
  components: { Header, NavBars, Modal },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal, v$: useVuelidate() };
  },
  validations() {
    return {
      module: {
        title: {
          required,
          min: minLength(4),
        },
        description: {
          required,
          min: minLength(6),
        },
      },
    };
  },
  methods: {
    submitModule: async function () {
      console.log(this.module);
      const jsonData = JSON.stringify(this.module);

      const data = await BrewMethodsAPI.store(url, jsonData);

      // this.sendAlert(data);
      this.toggleModal();
      Location.reload();
    },

    getModules: async function () {
      const data = await BrewMethodsAPI.indexOnly(getModules);

      const changeData = JSON.parse(data);

      this.getAllModules = changeData;
    },
    closeModule: function () {
      this.toggleModal();
    },
    sendAlert: function (data) {
      const getData = JSON.parse(data);

      if (getData.responseCode === 0) {
        this.$toast.error("Error submitting Module", {
          type: "error",
          position: "top",
          dismissible: false,
          max: 1,
        });
      } else {
        this.$toast.success("Submitted Successfully", {
          type: "success",
          position: "top-right",
          dismissible: false,
          max: 1,
        });
      }
    },
  },
  mounted() {
    this.getModules();
  },
};
</script>

<style lang="scss" scoped>
@import url("../styles/LearningRoom.css");
@import url("../styles/Homepage.css");
.home {
  .modal-content {
    display: flex;
    flex-direction: column;
    h1,
    p {
      margin-bottom: 16px;
    }
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
    }
  }
}
</style>
