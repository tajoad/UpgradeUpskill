<template>
  <div>
    <div class="container-fluid bg-white">
      <div class="row pt-1 px-5">
            <header class="px-5">
                    <div class="row align-content-end">
                        <div class="col">
                            <img src="../images/default.png" alt="" class="logo-img">
                        </div>
                        <div class="col align-content-end btn-move">
                            <router-link to="/login" class="btn btn-primary btn-m">Sign in</router-link>
                            <router-link to="/register" class="btn btn-primary btn-m">Register</router-link>
                        </div>
                    </div>
            </header>
        <div class="col-sm px-5 py-3 text-header">
            <h1>
                The Best Online C<span class="design">o</span>urse You will find
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim non eos explicabo ipsa a autem deleniti porro quas libero minima incidunt numquam unde maiores beatae</p>
            <button class="btn py-3 px-4 my-4 shadow rounded">Get Started</button>
            <div class = "row  mt-3 text-left txt">
                <div class="col">
                    <h2>94k</h2>
                    <p>Happy Students</p>
                </div>
                <div class="col-sm">
                    <h2>94k</h2>
                    <p>Happy Students</p>
                </div>
                <div class="col-sm">
                    <h2>94k</h2>
                    <p>Happy Students</p>
                </div>
            </div>
        </div>
        <div class="col d-flex justify-content-center main-img">
            <img src="../images/10782685_19197877.jpg"  alt="">
        </div>
      </div>
      <div class="row row2-bg py-5">
        <div class="col-sm d-flex justify-content-center">
            <div class="row px-4 py-4">
                <div class="col-4">
                    <img src="" alt="">
                </div>
                <div class="col-8 text1">
                    <h3>Online courses from experts</h3>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, natus.</p>
                </div>
            </div>
        </div>
        <div class="col-sm d-flex justify-content-center">
            <div class="row px-4 py-4">
                <div class="col-4">
                    <img src="" alt="">
                </div>
                <div class="col-8 text1">
                    <h3>Online courses from experts</h3>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, natus.</p>
                </div>
            </div>
        </div>
        <div class="col-sm d-flex justify-content-center">
            <div class="row px-4 py-4">
                <div class="col-4">
                    <img src="" alt="">
                </div>
                <div class="col-8 text1">
                    <h3>Online courses from experts</h3>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, natus.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetPage",
};
</script>

<style scoped>
    @import url("../styles/SetPage.css");
</style>
