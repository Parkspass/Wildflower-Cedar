import Vuex from "vuex";
import Vue from "vue";
import flowers from "./modules/flowers";

// Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    flowers,
  },
});
