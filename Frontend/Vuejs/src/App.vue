<template>
   <div>
      <RouterView></RouterView>
      <vue3-alert-box/>
   </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Customer from './components/Customer.vue';
import Employee from './components/Employee.vue';
import Greeting from './components/Greeting.vue';
import LandingPage from './components/LandingPage.vue';
import Register from './components/Register.vue';

  export default {
    components: { Customer, Employee, Counter, Greeting, Register, LandingPage }
}
</script>

<style>
    @import "./styles.css";
</style>