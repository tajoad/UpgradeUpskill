<template>
    <div class="welcome">
        <div class="welcome-text">
            <h3>
                Hi {{ this.firstName }}. Its another day to Learn. Lets get started!
            </h3>
            <p>
              <span>"</span>{{ this.getQuote }}<span>"</span> 
            </p>
            <p class="text-author">{{ this.getAuthor }}</p>
        </div>
        <div class="welcome-img">
            <img src="../images/people-lifestyle.jpg" alt="">
        </div>
    </div>
  
      <!-- blocks -->
      <div class="box-container">

        <div class="box box1">
            <div class="text">
                <h2 class="topic-heading">Start Learning</h2>
            </div>
            <div>
            <img src= "../images/icons8-learning-50 (3).png"
                alt="Views">
            </div>
        </div>
       
        <div class="box box3">
            <div class="text">
                <h2 class="topic-heading">Progress Status</h2>
                <!-- <h2 class="topic">Comments</h2> -->
            </div>
            <div>
            <img src= "../images/icons8-in-progress-50.png"
                alt="comments">
            </div>
        </div>

        <div class="box box4">
            <div class="text">
                <h2 class="topic-heading">Certifications</h2>
                <!-- <h2 class="topic">Published</h2> -->
            </div>
            <div>
            <img src= "../images/icons8-certificate-96.png" alt="published">
            </div>
        </div>
        </div>


       <div class="report-container">
           <div class="report-header">
               <h1 class="recent-Articles">Top Learners</h1>
               <button class="view">View All</button>
           </div>
  
           <div class="report-body">
               <div class="report-topic-heading">
                   <h3 class="t-op">Article</h3>
                   <h3 class="t-op">Views</h3>
                   <h3 class="t-op">Comments</h3>
                   <h3 class="t-op">Status</h3>
               </div>
  
               <div class="items">
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 73</h3>
                       <h3 class="t-op-nextlvl">2.9k</h3>
                       <h3 class="t-op-nextlvl">210</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 72</h3>
                       <h3 class="t-op-nextlvl">1.5k</h3>
                       <h3 class="t-op-nextlvl">360</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 71</h3>
                       <h3 class="t-op-nextlvl">1.1k</h3>
                       <h3 class="t-op-nextlvl">150</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 70</h3>
                       <h3 class="t-op-nextlvl">1.2k</h3>
                       <h3 class="t-op-nextlvl">420</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 69</h3>
                       <h3 class="t-op-nextlvl">2.6k</h3>
                       <h3 class="t-op-nextlvl">190</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 68</h3>
                       <h3 class="t-op-nextlvl">1.9k</h3>
                       <h3 class="t-op-nextlvl">390</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 67</h3>
                       <h3 class="t-op-nextlvl">1.2k</h3>
                       <h3 class="t-op-nextlvl">580</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 66</h3>
                       <h3 class="t-op-nextlvl">3.6k</h3>
                       <h3 class="t-op-nextlvl">160</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
                   <div class="item1">
                       <h3 class="t-op-nextlvl">Article 65</h3>
                       <h3 class="t-op-nextlvl">1.3k</h3>
                       <h3 class="t-op-nextlvl">220</h3>
                       <h3 class="t-op-nextlvl lavel-tag">Published</h3>
                   </div>
  
               </div>
           </div>
       </div>
</template>

<script>
  import BrewMethodsAPI from '../api/resources/BrewMethods';
  import navbar from '../StaticJsonFile/navbar.json';
    let items;

    items = navbar;

  
  const url = "http://localhost:3002/getusers";
  const quoteUrl = "https://type.fit/api/quotes";
      export default {
      name: "LandingPage",
      data() {
          return{
              id:this.$route.params.data,
              items,
              selected: undefined,
              firstName: null,
              lastName: null,
              getQuote: null,
              getAuthor: null
          }
      },
      methods: {
          pushData: async function() {
              const jsonData= JSON.stringify(this.id);
  
              const data = await BrewMethodsAPI.index( url, jsonData );
  
              const changeData = JSON.parse(data);

              this.firstName = changeData[0].first_name;

              this.lastName = changeData[0].last_name;
          },
          updateNav: function() {
            let nav = document.querySelector(".navcontainer");
            nav.classList.toggle("navclose");
          },

          passID: function() {
                this.$emit('pass-ID', this.id);
          },
          getQuotes: async function() {
            const getQuoteData = await BrewMethodsAPI.indexOnly(quoteUrl);

            const quoteOutput = JSON.parse(getQuoteData);

            const getRandom = Math.floor(Math.random() * 100) + 1;

            this.getQuote = quoteOutput[getRandom].text;
            this.getAuthor = quoteOutput[getRandom].author; 
          },
      },
      mounted() {
           this.pushData();
           this.passID();
           setInterval(this.getQuotes() ,1000);
            // window.beforeunload = this.getQuotes();
      },

  }
</script>

<style scoped>
    @import url("../styles/Homepage.css");
</style>