<template>
  <section class="dashboard">
    <div class="dash-content">
      <div class="overview">
        <div class="title">
          <i class="uil uil-tachometer-fast-alt"></i>
          <span class="text">Dashboard</span>
        </div>

        <div class="boxes">
          <div class="box box1">
            <i class="uil uil-thumbs-up"></i>
            <span class="text">Total Likes</span>
            <span class="number">50,120</span>
          </div>
          <div class="box box2">
            <i class="uil uil-comments"></i>
            <span class="text">Comments</span>
            <span class="number">20,120</span>
          </div>
          <div class="box box3">
            <i class="uil uil-share"></i>
            <span class="text">Total Share</span>
            <span class="number">10,120</span>
          </div>
        </div>
      </div>

      <div class="activity">
        <div class="title">
          <i class="uil uil-clock-three"></i>
          <span class="text">Recent Activity</span>
        </div>

        <div class="activity-data">
          <div class="data names">
            <span class="data-title">Name</span>
            <span class="data-list">Prem Shahi</span>
            <span class="data-list">Deepa Chand</span>
            <span class="data-list">Manisha Chand</span>
            <span class="data-list">Pratima Shahi</span>
            <span class="data-list">Man Shahi</span>
            <span class="data-list">Ganesh Chand</span>
            <span class="data-list">Bikash Chand</span>
          </div>
          <div class="data email">
            <span class="data-title">Email</span>
            <span class="data-list">premshahi@gmail.com</span>
            <span class="data-list">deepachand@gmail.com</span>
            <span class="data-list">prakashhai@gmail.com</span>
            <span class="data-list">manishachand@gmail.com</span>
            <span class="data-list">pratimashhai@gmail.com</span>
            <span class="data-list">manshahi@gmail.com</span>
            <span class="data-list">ganeshchand@gmail.com</span>
          </div>
          <div class="data joined">
            <span class="data-title">Joined</span>
            <span class="data-list">2022-02-12</span>
            <span class="data-list">2022-02-12</span>
            <span class="data-list">2022-02-13</span>
            <span class="data-list">2022-02-13</span>
            <span class="data-list">2022-02-14</span>
            <span class="data-list">2022-02-14</span>
            <span class="data-list">2022-02-15</span>
          </div>
          <div class="data type">
            <span class="data-title">Type</span>
            <span class="data-list">New</span>
            <span class="data-list">Member</span>
            <span class="data-list">Member</span>
            <span class="data-list">New</span>
            <span class="data-list">Member</span>
            <span class="data-list">New</span>
            <span class="data-list">Member</span>
          </div>
          <div class="data status">
            <span class="data-title">Status</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BrewMethodsAPI from "../api/resources/BrewMethods";
import navbar from "../StaticJsonFile/navbar.json";
let items;

items = navbar;

const url = "http://localhost:3002/getuser";
const getUserData = "http://localhost:3002/displayperson";
const backendUrl = "http://localhost:3002/";
const quoteUrl = "https://type.fit/api/quotes";
export default {
  name: "LandingPage",
  data() {
    return {
      id: this.$route.params.data,
      items,
      selected: undefined,
      firstName: null,
      lastName: null,
      getQuote: null,
      getAuthor: null,
      updatedImage: null,
    };
  },
  methods: {
    pushData: async function () {
      const jsonData = JSON.stringify(this.id);

      const data = await BrewMethodsAPI.index(url, jsonData);

      const changeData = JSON.parse(data);

      this.firstName = changeData[0].first_name;

      this.lastName = changeData[0].last_name;
    },
    updateNav: function () {
      let nav = document.querySelector(".navcontainer");
      nav.classList.toggle("navclose");
    },

    passID: function () {
      this.$emit("pass-ID", this.id);
    },
    getQuotes: async function () {
      const getQuoteData = await BrewMethodsAPI.indexOnly(quoteUrl);

      const quoteOutput = JSON.parse(getQuoteData);

      const getRandom = Math.floor(Math.random() * 100) + 1;

      this.getQuote = quoteOutput[getRandom].text;
      this.getAuthor = quoteOutput[getRandom].author;
    },
    getUserData: async function () {
      const items = await BrewMethodsAPI.index(getUserData, this.id);

      const newData = JSON.parse(items);
      this.updatedImage = newData[0].imageName;
      const updateImg = `${backendUrl}${newData[0].imageName}`;
      this.updatedImage = updateImg;
    },
  },
  mounted() {
    this.pushData();
    this.passID();
    this.getUserData();
    setInterval(this.getQuotes(), 1000);
    // window.beforeunload = this.getQuotes();
  },
};
</script>

<style scoped>
@import url("../styles/LandingPage.css");
</style>
