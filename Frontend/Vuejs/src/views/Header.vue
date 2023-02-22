<template>
       <!-- for header part -->
        <header>
            <div class="logosec">
        <div class="logo"><img class="logo-img" src="../images/default.png" alt=""></div>
        
        <div class="searchbar2">
            <div class="search-input">
            <input type="text"
                    name=""
                    id=""
                    placeholder="Search">
                </div>
                <div class="search-img">
                    <i class="fa fa-search" aria-hidden="true"></i>                 
                </div>
        </div>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            class="icn menuicn" @click="openNav()"
            id="menuicn"
            alt="menu-icon">
    </div>
    
    <div class="searchbar">
        <input type="text"
                placeholder="Search">
        <div class="searchbtn">
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
    </div>
    
    <div class="message">
        <div class="circle"></div>
        <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                class="icn"
                alt="">
        <div class="dp">
            <img src="../images/people-lifestyle.jpg"
                class="dpicn"
                alt="dp">
            </div>
    </div>
    
    </header>
</template>

<script>
    export default {
        name:"Header",
        methods: {
            openNav: function() {
                let menuicn = document.querySelector(".menuicn");
                let nav = document.querySelector(".navcontainer");
                
                    nav.classList.toggle("navclose");
            }
        }

    }
</script>

<style scoped>
    @import url('../styles/Homepage.css');
</style>