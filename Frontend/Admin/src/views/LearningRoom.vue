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
              <div class="list-group border-0 grp">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div class="p-1 grp-list">
                    <div class="d-flex list w-100 justify-content-between">
                      <h6 class="mb-1" id="text">List group item heading</h6>
                      <i
                        class="fa fa-chevron-circle-right"
                        id="icon"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between p-1">
                    <p class="mb-1">List group item heading</p>
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between p-1">
                    <p class="mb-1">List group item heading</p>
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="home">
            <Modal @close="toggleModal" :modalActive="modalActive">
              <div class="modal-content">
                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput">Example label</label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Example input"
                    />
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Another label</label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Another input"
                    />
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

export default {
  name: "LearningRoom",
  components: { Header, NavBars, Modal },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
};
</script>

<style scoped>
@import url("../styles/LearningRoom.css");
@import url("../styles/Homepage.css");
</style>
