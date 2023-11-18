import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// import "bootstrap/dist/css/bootstrap.min.css";
 import boostrap from "bootstrap/dist/js/bootstrap.bundle.js"
 import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './static/fontawesome-free-6.4.2-web/css/all.min.css'

createApp(App).use(router).mount("#app");
