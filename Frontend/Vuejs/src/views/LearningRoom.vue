<template>
  <div>
    <Header />
  </div>
  <div class="main-container">
    <NavBars />
    <div class="main">
      <div class="row">
        <div class="col-9">
          <Video />
        </div>
        <div class="col-3 px-3 py-3 courses">
          <div>
            <h3 class="courses-header pb-3">Training Catalog</h3>
          </div>
          <div class="card">
            <img
              src="https://source.unsplash.com/random/1920x1080/?training,school"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import NavBars from "./NavBars.vue";
import Video from "./Videos/Video.vue";

export default {
  name: "LearningRoom",
  components: { Header, NavBars, Video },
};
</script>

<style scoped>
@import url("../styles/LearningRoom.css");
@import url("../styles/Homepage.css");
</style>
