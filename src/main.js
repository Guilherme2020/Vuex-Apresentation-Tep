import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'


import StarRating from 'vue-star-rating'

Vue.component('star-rating', StarRating);
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.use(Vuex);
window.axios = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};
new Vue({
  store,
  beforeCreate () {
    this.$store.commit('CHANGE_USERNAME')
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
