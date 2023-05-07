<template>
    <div>
        <div class="top-header">
            <div>
                <button class="btn">Explore</button>
            </div>
            <div class="circular-landscape">
                <p>{{this.firstName}}  {{ this.lastName }}</p>
                <img src="../images/people-lifestyle.jpg" alt="">
            </div>
        </div>
        <div class="welcome">
            <h2>Welcome, {{ this.firstName }}</h2>
        </div>
    </div>
</template>

<script>
    import BrewMethodsAPI from '../api/resources/BrewMethods';
    const url = "http://localhost:3002/getusers";

    export default {
        name:"PersonalInfo",
        props: {
            id: {type: String, required: true }
        },

        data() {
            return{
                firstName: null,
                lastName: null,
            }
        },
        methods: {
            pushData: async function() {
                const jsonData= JSON.stringify(this.id);

                const data = await BrewMethodsAPI.index( url, jsonData );

                const changeData = JSON.parse(data);

                this.firstName = changeData[0].first_name;

                this.lastName = changeData[0].last_name;
            }
        },

        mounted() {
           this.pushData() 
        }
    }
</script>

<style scoped>
  
  
</style>