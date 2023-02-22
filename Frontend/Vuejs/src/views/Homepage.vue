<template>
    <div>
            <Header />
    </div>
    <div class="main-container">
            <NavBars :sentID = "this.userId"/>
    <div class="main">
          
            <LandingPage v-on:pass-ID="getID"/>
    </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import NavBars from './NavBars.vue'
  import LandingPage from './LandingPage.vue';

      export default {
      name: "Homepage",
      components: { LandingPage, Header, NavBars },
      data: function() {
          return {
              userId: null
          }
      },
      methods: {
        getID(id) {
           this.userId = id;
        }
      },
    }
  </script>
  
  <style scoped>
      @import url("../styles/Homepage.css");
  </style>