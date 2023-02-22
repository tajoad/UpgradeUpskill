<template>
    <div class="container-fluid rounded bg-white">
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
            </div>
            <div class="col border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Profile Settings</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" v-model="user.firstName" readonly></div>
                        <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" v-model="user.lastName" placeholder="surname" readonly></div>
                        <div class="col-md-6"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""></div>
                        <div class="col-md-6"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value=""></div>
                        <div class="col-md-6"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter email" v-model="user.email" readonly></div>
                        <div class="col-md-6"><label class="labels">Country</label>
                            <select name="select_box" class="form-select form-control" id="select_box" placeholder="state">
                                <option value="">Select Countries</option>
                                <option value={{item}} v-for="item in countries">{{item}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><label class="labels">State/Region</label>
                            <select name="select_box" class="form-select form-control" id="select_box" placeholder="state">
                                <option value="">Select State</option>
                                <option value={{item}} v-for="item in naijaStates">{{item}}</option>
                            </select>
                        </div>
                        <div class="col-md-6"><label class="labels">Select Desired Sector</label>
                            <select name="select_box" class="form-select form-control" id="select_box" placeholder="sector">
                                <option value="">Select Sector</option>
                                <option value="1">Information Technology</option>
                                <option value="2">Engineering</option>
                                <option value="3">Health</option>
                                <option value="4">Telecommunications</option>
                                <option value="5">Oil and Gas</option>
                                <option value="6">NGO</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <!-- <div class="col-md-3 border-right"> -->
                <!-- <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div> -->
            <!-- </div> -->
            <div class="col">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center education"><span>Edit Education</span><span class="border px-3 p-1 add-experience" @click="addEducation()"><i class="fa fa-plus"></i>&nbsp;Education</span></div><br>
                    <div id="education">
                        <div class="col-md-12"><label class="labels">Degree</label><input type="text" class="form-control" placeholder="Degree" value=""></div> <br>
                        <div class="col-md-12"><label class="labels">Institution</label><input type="text" class="form-control" placeholder="Institution" value=""></div> <br>
                        <div class="col-md-12"><label class="labels">Additional Details</label><textarea type="textarea" class="form-control" placeholder="additional details" value=""></textarea></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience" @click="addExperience()"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                    <div id="experience">
                        <div class="col-md-12"><label class="labels">Organization</label><input type="text" class="form-control" placeholder="Organization" value=""></div> <br>
                        <div class="col-md-12"><label class="labels">Duration</label><input type="text" class="form-control" placeholder="Duration" value=""></div> <br>
                        <div class="col-md-12"><label class="labels">Additional Details</label><textarea type="text" class="form-control" placeholder="additional details" value=""></textarea></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-17 border-right">
            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
        </div>
    </div>
    </template>
    
    <script>
        import BrewMethodsAPI from '../api/resources/BrewMethods';
        const url = "http://localhost:3002/getusers";
        import NaijaStates from 'naija-state-local-government';
        const countries = "https://restcountries.com/v3.1/all"
        import useVuelidate from '@vuelidate/core'
        import { required}  from '@vuelidate/validators'


        export default {
            name:"ProfileDetails",
            setup () {
                return { v$: useVuelidate() }
            },
            validations() {
                return {
                    user: {
                        // firstName: { 
                        //     required, name_validation: {
                        //     $validator: validName,
                        //     $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
                        //     } 
                        // },
                    },
                }
            },
            data() {
                return{
                    userid:this.$route.params.data,    
                    user: {
                        firstName: null,
                        lastName: null,
                        email: null  
                    },
                    naijaStates: NaijaStates.states(),
                    countries: null
                }
            },
            methods: {
                addExperience: function() {
                   document.getElementById("experience").innerHTML += `<div class="col-md-12 mt-4">
                                                                            <label class="labels" style="font-size:11px">Organization</label>
                                                                            <input type="text" class="form-control" placeholder="Organization" value="">
                                                                        </div> <br>
                                                                        <div class="col-md-12">
                                                                            <label class="labels" style="font-size:11px">Duration</label>
                                                                            <input type="text" class="form-control" placeholder="Duration" value="">
                                                                        </div> <br>
                                                                        <div class="col-md-12">
                                                                            <label class="labels" style="font-size:11px">Additional Details</label>
                                                                            <textarea type="text" class="form-control" placeholder="additional details" value=""></textarea>
                                                                        </div>`
                },
                addEducation: function() {
                    document.getElementById("education").innerHTML += `<div class="col-md-12 mt-4">
                                                                            <label class="labels" style="font-size:11px">Degree</label>
                                                                            <input type="text" class="form-control" placeholder="experience" value="">
                                                                        </div> <br>
                                                                        <div class="col-md-12">
                                                                            <label class="labels" style="font-size:11px">Institution</label>
                                                                            <input type="text" class="form-control" placeholder="Institution" value="">
                                                                        </div> <br>
                                                                        <div class="col-md-12">
                                                                            <label class="labels" style="font-size:11px">Additional Details</label>
                                                                            <textarea type="text" class="form-control" placeholder="additional details" value=""></textarea>
                                                                        </div>`
                },
                getProfile: async function() {
                    const jsonData= JSON.stringify(this.userid);

                    const data = await BrewMethodsAPI.index( url, jsonData );

                    const changeData = JSON.parse(data);

                    this.user.firstName = changeData[0].first_name;

                    this.user.lastName = changeData[0].last_name;

                    this.user.email = changeData[0].email;
                },
                getCountries: async function() {             
                    const items = await BrewMethodsAPI.getCountries(countries);
                    const sortItems = [];

                    items.forEach(element => {
                        sortItems.push(element.name.common);
                    });
                    const sortedItems = sortItems.sort();

                    this.countries = sortedItems;
                },
            },
            mounted() {
                    this.getProfile();
                    this.getCountries();
            }
        }

    </script>
    
    <style scoped>
        @import url('../styles/ProfileDetails.css');
    </style>