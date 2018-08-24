
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import router from "./router/index";

Vue.use(Vuex);

const state = {
  user:{
    name: '',
    email: ''
  },
};

const mutations = {
    'CHANGE_USERNAME' (state,payload){
      state.user.name = payload
    }
};

const actions = {
    changeUser(context,payload){
      context.commit('CHANGE_USERNAME',payload)
    },

    login(context, {username,password}){
      const headers = {
        'Content-Type': 'application/json',
      };

      axios.post('http://127.0.0.1:8000/api/login',{username,password},{headers:headers})
        .then((response) => {
                if(response.status == 200){
                  console.log(response.data.token)
                  const username = response.data.user_name;
                  localStorage.setItem("userName",username);
                  router.push({ name: 'Home' })


                }
        })
        .catch(error => {
          console.log(error.message)
        })

    }
};
export default new Vuex.Store({

  state,
  getters:{

  },
  mutations,
  actions
})
