<template>
    <div>
         <Header />
   </div>
   <div class="main-container">
         <NavBars />
    <div class="main">
        <ProfileDetails />
    </div>
   </div>
   </template>
   
   <script>
   import Header from './Header.vue';
   import NavBars from './NavBars.vue'
import ProfileDetails from './ProfileDetails.vue';
 
       export default {
       name: "Profile",
       components: { Header, NavBars, ProfileDetails },
     }
   </script>
   
   <style scoped>
       @import url("../styles/Homepage.css");
   </style>