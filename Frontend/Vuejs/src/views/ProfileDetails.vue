<template>
  <form @submit.prevent="SaveProfile" enctype="multipart/form-data">
    <div class="container-fluid rounded bg-white">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex img-main flex-column mx-auto align-items-center text-center"
          >
            <div class="uploading-image mb-2">
              <img :src="this.updatedImage" v-if="updatedImage"
                id="inputSrc"
                class="uploading-img"
              />
              <label v-else for="inputTag">
                Select Image <br />
                <i class="fa fa-2x fa-camera"></i>
                <input
                  id="inputTag"
                  type="file"
                  name="image"
                  accept="image/jpeg"
                  @change="uploadImage"
                />
                <br />
                <span id="imageName"></span>
              </label>
            </div>
            <div v-if="imageUrl" class="file-name">
              {{ this.imageUrl.name }}
            </div>
            <span class="font-weight-bold">{{ user.FirstName }}</span
            ><span class="text-black-50">{{ user.Email }}</span
            ><span> </span>
          </div>
        </div>
        <div class="col border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  v-model="user.FirstName"
                  readonly
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label
                ><input
                  type="text"
                  class="form-control"
                  v-model="user.LastName"
                  placeholder="surname"
                  readonly
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Mobile Number</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  v-model="user.PhoneNumber"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Address</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter address"
                  v-model="user.address"
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Email</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter email"
                  v-model="user.Email"
                  readonly
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Country</label>
                <select
                  name="select_box"
                  class="form-select form-control"
                  id="select_box"
                  placeholder="Country"
                  v-model="user.country"
                >
                  <option value="">Select Countries</option>
                  <option :value="{ item }" v-for="item in countries">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">State/Region</label>
                <select
                  name="select_box"
                  class="form-select form-control"
                  id="select_box"
                  placeholder="state"
                  v-model="user.state"
                >
                  <option value="">Select State</option>
                  <option :value="{ item }" v-for="item in naijaStates">
                    {{ item }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="labels">Select Desired Sector</label>
                <select
                  name="select_box"
                  class="form-select form-control"
                  id="select_box"
                  placeholder="sector"
                  required
                  v-model="user.sector"
                >
                  <option value="">Select Sector</option>
                  <option :value="1">Information Technology</option>
                  <option :value="2">Engineering</option>
                  <option :value="3">Health</option>
                  <option :value="4">Telecommunications</option>
                  <option :value="5">Oil and Gas</option>
                  <option :value="6">NGO</option>
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
            <div
              class="d-flex justify-content-between align-items-center education"
            >
              <span>Edit Education</span
              ><span
                class="border px-3 p-1 add-experience"
                @click="addEducation()"
                ><i class="fa fa-plus"></i>&nbsp;Education</span
              >
            </div>
            <br />
            <div id="education">
              <div class="col-md-12">
                <label class="labels">Degree</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Degree"
                  v-model="otherDetails.Degree"
                />
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Institution</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Institution"
                  v-model="otherDetails.Institution"
                />
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Additional Details</label
                ><textarea
                  type="textarea"
                  class="form-control"
                  placeholder="additional details"
                  v-model="otherDetails.edAddDetails"
                ></textarea>
              </div>
            </div>

            <!-- add new Degree -->

            <div id="education1" class="mt-5">
              <div class="col-md-12">
                <label class="labels">Degree</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Degree"
                  v-model="user.Degree"
                />
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Institution</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Institution"
                  v-model="user.Institution"
                />
              </div>
              <br />
              <div class="col-md-12">
                <label class="labels">Additional Details</label
                ><textarea
                  type="textarea"
                  class="form-control"
                  placeholder="additional details"
                  v-model="user.edAddDetails"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-3 py-5">
            <div
              class="d-flex justify-content-between align-items-center experience"
            >
              <span>Edit Experience</span
              ><span
                class="border px-3 p-1 add-experience"
                @click="addExperience()"
                ><i class="fa fa-plus"></i>&nbsp;Experience</span
              >
            </div>
            <br />
            <div id="experience">
              <div>
                <div class="col-md-12">
                  <label class="labels">Organization</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Organization"
                    v-model="user.Organization"
                  />
                </div>
                <br />
                <div class="col-md-12">
                  <label class="labels">Duration</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Duration"
                    v-model="user.Duration"
                  />
                </div>
                <br />
                <div class="col-md-12">
                  <label class="labels">Additional Details</label
                  ><textarea
                    type="text"
                    class="form-control"
                    placeholder="additional details"
                    v-model="user.exAddDetails"
                  ></textarea>
                </div>
              </div>
              <!-- add new experience -->
              <div id="experience1" class="mt-3">
                <div class="col-md-12">
                  <label class="labels">Organization</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Organization"
                    v-model="otherDetails.Organization"
                  />
                </div>
                <br />
                <div class="col-md-12">
                  <label class="labels">Duration</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Duration"
                    v-model="otherDetails.Duration"
                  />
                </div>
                <br />
                <div class="col-md-12">
                  <label class="labels">Additional Details</label
                  ><textarea
                    type="text"
                    class="form-control"
                    placeholder="additional details"
                    v-model="otherDetails.exAddDetails"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-17 border-right">
        <div class="mt-5 text-center">
          <button class="btn btn-primary profile-button">Save Profile</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import BrewMethodsAPI from "../api/resources/BrewMethods";
const url = "http://localhost:3002/getuser";
const backendUrl = "http://localhost:3002/";
const userDataUrl = "http://localhost:3002/createperson";
const getUserData = "http://localhost:3002/displayperson"
import NaijaStates from "naija-state-local-government";
const countries = "https://restcountries.com/v3.1/all";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "ProfileDetails",
  setup() {
    return { v$: useVuelidate() };
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
    };
  },
  data() {
    return {
      userid: this.$route.params.data,
      user: {
        userid: this.$route.params.data,
        LastName: null,
        FirstName: null,
        Email: null,
        PhoneNumber: null,
        address: null,
        country: null,
        state: null,
        sector: null,
        Degree: null,
        Institution: null,
        edAddDetails: null,
        Organization: null,
        Duration: null,
        exAddDetails: null,
        imageName: null,
      },
      otherDetails: {
        Degree: null,
        Institution: null,
        edAddDetails: null,
        Organization: null,
        Duration: null,
        exAddDetails: null,
      },
      previewImage: null,
      naijaStates: NaijaStates.states(),
      countries: null,
      imageUrl: null,
      updatedImage: null
    };
  },
  methods: {
    addExperience: function () {
      const getNewExperience = document.getElementById("experience1").innerHTML;
      document.getElementById("experience").innerHTML += getNewExperience;
    },
    addEducation: function () {
      const getNewEducation = document.getElementById("education1").innerHTML;
      document.getElementById("education").innerHTML += getNewEducation;
    },
    getProfile: async function () {
      const jsonData = JSON.stringify(this.userid);

      const data = await BrewMethodsAPI.index(url, jsonData);

      const changeData = JSON.parse(data);

      this.user.FirstName = changeData[0].first_name;

      this.user.LastName = changeData[0].last_name;

      this.user.Email = changeData[0].email;
    },
    getCountries: async function () {
      const items = await BrewMethodsAPI.getCountries(countries);
      const sortItems = [];

      items.forEach((element) => {
        sortItems.push(element.name.common);
      });
      const sortedItems = sortItems.sort();

      this.countries = sortedItems;
    },
    async SaveProfile() {
      //const getOtherDetails = this.otherDetails;

      const fd = new FormData();

      fd.append("userid", this.userid);
      fd.append("LastName", this.user.LastName);
      fd.append("FirstName", this.user.FirstName);
      fd.append("Email", this.user.Email);
      fd.append("PhoneNumber", this.user.PhoneNumber);
      fd.append("address", this.user.address);
      fd.append("country", this.user.country);
      fd.append("state", this.user.state);
      fd.append("sector", this.user.sector);
      fd.append("Degree", this.user.Degree);
      fd.append("Institution", this.user.Institution);
      fd.append("edAddDetails", this.user.edAddDetails);
      fd.append("Organization", this.user.Organization);
      fd.append("Duration", this.user.Duration);
      fd.append("exAddDetails", this.user.exAddDetails);
      fd.append("file", this.imageUrl);

      console.log(fd);

      const data = await BrewMethodsAPI.imgPost(userDataUrl, fd);

      //const changeData = JSON.parse(data);

      const x = URL.createObjectURL(this.imageUrl);
      console.log(x);
    },
    uploadImage(e) {
      this.imageUrl = e.target.files[0];
      // this.previewImage = image;
      // this.imageUrl = URL.createObjectURL(image);
      // console.log(this.imageUrl);
      // console.log(this.previewImage);
    },
    getUserData: async function () {
      const items = await BrewMethodsAPI.index(getUserData, this.userid);

      const newData = JSON.parse(items);
      this.updatedImage = newData[0].imageName
      const updateImg = `${backendUrl}${newData[0].imageName}`;
      this.updatedImage = updateImg;
    },
    sendAlert: function (data) {
      const getData = JSON.parse(data);

      if (getData.responseCode === 0) {
        this.$toast.error(getData.responseMsg, {
          type: "error",
          position: "top",
          dismissible: false,
          max: 1,
        });
      } else {
        this.$router.push({
          name: "Homepage",
          params: { data: getData.responseMsg },
        });
      }
    },
  },
  mounted() {
    this.getProfile();
    this.getCountries();
    this.getUserData();
  },
};
</script>

<style scoped>
@import url("../styles/ProfileDetails.css");
</style>
