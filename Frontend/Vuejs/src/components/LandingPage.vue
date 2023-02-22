<template>
    <pre>{{ isPage }}</pre>
    <div class="container">
        <div class="row">
            <div v-if="!isPage">
                <Login :check="login()"/>
            </div>
            <div v-if="isPage">
                <Register :check="register()"/>
            </div>
        </div>
    </div>
</template>

<script>
import Login from './Login.vue';
import Register from './Register.vue';

    export default {
    name: "LandingPage",
    components: { Login, Register },
    data: function() {
        return {
            isPage: null
        }
    },
    methods : {
        login : function() {
            this.isPage = false;
        },
        register: function() {
            this.isPage = true;
        }
    }, 
}
</script>

<style scoped>

</style>