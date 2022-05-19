import "vuetify/styles"; // Global CSS has to be imported
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import store from "./store/index";
loadFonts();
createApp(App).use(router).use(vuetify).use(store).mount("#app");
