import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/router";
import Toaster from "@meforma/vue-toaster";
import 'video.js/dist/video-js.css'

// import './assets/main.css'

/*
    Font Awesome CSS
*/

// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

/*
    Bootstrap CSS, JS
*/

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toaster);

app.mount("#app");
