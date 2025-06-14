import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from "@iconify/vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App).use(store).use(router).use(Icon).mount("#app");
