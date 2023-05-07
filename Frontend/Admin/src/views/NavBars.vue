<template>
  <div class="navcontainer">
    <nav class="nav">
      <div class="nav-upper-options">
        <router-link
          :to="{ name: 'Homepage', params: { data: this.id } }"
          class="button nav-option"
          exact
        >
          <i class="fas fa-tachometer-alt fa-fw me-3"></i>
          <span class="text">Dashboard</span>
        </router-link>
        <router-link
          :to="{ name: 'Profile', params: { id: this.id } }"
          class="button nav-option"
        >
          <i class="fas fa-chart-area fa-fw me-3"></i>
          <span class="text">Setup</span>
        </router-link>
        <router-link
          :to="{ name: 'LearningRoom', params: { id: this.id } }"
          class="button nav-option"
        >
          <i class="fa fa-book fa-fw me-3"></i>
          <span class="text">Modules</span>
        </router-link>
        <router-link to="/team" class="button nav-option">
          <i class="fa fa-users fa-fw me-3"></i>
          <span class="text">Team</span>
        </router-link>
        <router-link to="/" class="button nav-option">
          <i class="fas fa-lock fa-fw me-3"></i>
          <span class="text">Log Out</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import BrewMethodsAPI from "../api/resources/BrewMethods";
const url = "http://localhost:3002/getusers";

export default {
  name: "Homepage",
  data: function () {
    return {
      id: this.$route.params.data,
    };
  },
};
</script>

<style scoped>
@import url("../styles/Homepage.css");
</style>
