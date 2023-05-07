<template>
  <form @submit.prevent="SaveProfile" enctype="multipart/form-data">
    <div class="container-fluid rounded bg-white">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex img-main flex-column mx-auto align-items-center text-center"
          >
            <div class="uploading-image mb-2">
              <img
                :src="this.updatedImage"
                v-if="updatedImage"
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
            <span class="font-weight-bold">{{ user.companyName }}</span
            ><span class="text-black-50">{{ user.companyEmail }}</span
            ><span class="text-black-50">{{ user.PhoneNumber }}</span>
          </div>
        </div>
        <div class="col border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6 py-3">
                <label class="labels">Company Name</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  v-model="user.companyName"
                  readonly
                />
              </div>
              <div class="col-md-6 py-3">
                <label class="labels">Mobile Number</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  v-model="user.PhoneNumber"
                />
              </div>
              <div class="col-md-6 py-3">
                <label class="labels"> Company Email</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter email"
                  v-model="user.companyEmail"
                  readonly
                />
              </div>
              <div class="col-md-6 pt-3">
                <label class="labels">Select Sector</label>
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
          <div class="col-md-17 border-right">
            <div class="text-center">
              <button class="btn btn-primary profile-button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import BrewMethodsAPI from "../api/resources/BrewMethods";
const url = "http://localhost:3002/getadminuser";
const backendUrl = "http://localhost:3002/";
const userDataUrl = "http://localhost:3002/updateAdmin";
const getUserData = "http://localhost:3002/displayadmin";
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
        companyName: null,
        companyEmail: null,
        PhoneNumber: null,
        address: null,
        sector: null,
        imageName: null,
      },

      previewImage: null,
      updatedImage: null,
    };
  },
  methods: {
    getProfile: async function () {
      const jsonData = JSON.stringify(this.userid);

      const data = await BrewMethodsAPI.index(url, jsonData);

      const changeData = JSON.parse(data);

      console.log(changeData);

      this.user.companyName = changeData[0].companyName;

      this.user.companyEmail = changeData[0].companyEmail;

      this.user.PhoneNumber = changeData[0].phoneNumber;

      this.user.sector = changeData[0].sector;
    },

    async SaveProfile() {
      //const getOtherDetails = this.otherDetails;

      const fd = new FormData();

      fd.append("userid", this.userid);
      fd.append("PhoneNumber", this.user.PhoneNumber);
      fd.append("sector", this.user.sector);
      fd.append("file", this.imageUrl);

      const data = await BrewMethodsAPI.imgPost(userDataUrl, fd);

      location.reload();
    },
    uploadImage(e) {
      this.imageUrl = e.target.files[0];
    },

    getUserData: async function () {
      const items = await BrewMethodsAPI.index(getUserData, this.userid);

      const newData = JSON.parse(items);
      console.log(newData[0].imageName);
      if (newData[0].imageName != null && newData[0].imageName != "undefined") {
        const updateImg = `${backendUrl}${newData[0].imageName}`;
        this.updatedImage = updateImg;
        this.sendAlert("Profile Updated Successfully");
      }
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
    this.getUserData();
  },
};
</script>

<style scoped>
@import url("../styles/ProfileDetails.css");
</style>
