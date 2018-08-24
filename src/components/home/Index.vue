<template>
  <v-app id="inspire">
    <header-user></header-user>

    <v-content>
      <div style="margin-top: 5%">

        <h3>Seja Bem vindo: {{user}}  <span></span></h3>
        
      </div>
      <!-- <div style="margin-top: 5%">
        <h2>Minhas Peladas</h2>

      </div>
      <v-container
        fluid
        grid-list-md
        fill-height
      >
        <v-layout

          row wrap
        >
          <v-flex
            xs12 sm4 md5
            v-for="pelada of peladaUser"
            :key="pelada.nome"
          >
         
            <v-card  hover >

              <v-toolbar dark color="white">
                <v-toolbar-title dark color="red" style="color: red">Nome-Pelada: {{pelada.nome}} </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-media
                  src="https://conteudo.imguol.com.br/c/esporte/6c/2017/09/06/neymar-e-mbappe-se-encontram-pela-primeira-vez-em-treino-do-psg-1504716753721_615x300.jpg"
                  height="200px"
              >

              </v-card-media>
              <v-card-text>
                <span class="headline black--text">Id: {{pelada.id}}</span>
              </v-card-text>
              <v-card-text>
                <span class="headline black--text">Dono: {{pelada.dono}}</span>
              </v-card-text>
              <v-card-text>
                <span class=" headline black--text">Limite de Gols: {{pelada.configuracao.limite_gols}} </span>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon
                    @click="peladaId(pelada.id)"
                  >
                    visibility
                  </v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-flex>
        </v-layout>

      </v-container> -->

    </v-content>

  </v-app>




   
</template>


<style scoped>
  #inspire{
    height: 1220px;
  }
</style>

<script>
  import axios from 'axios'
  import token from "../../services/token";
  import Header from './header/header';
  import store from '@/store'
  import {mapState, mapActions} from 'vuex'
  import router from '../../router/index'
  // import {store} from '../../store'
  const endpoint = 'http://127.0.0.1:8000/api/user-peladas/';

  const endpointPelada = 'http://127.0.0.1:8000/api/pelada/';



  export  default {

    components: {
      'header-user' : Header
    },
    data () {
      return {
        peladaUser:[],
        pelada: '',
        peladaUserId:[],
        cards: [
          { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        ]
      }
    },
      computed:{
     
        user(){
          const {name} = this.$store.state.user.name;
          return  JSON.stringify(name)
        }
     
      },
      methods:{

          peladaId(id){
            router.push(
              {
                path: `/pelada/`+id
              }
            )

          },

          ...mapActions(['changeUser'])
      },
      mounted(){

        



      },

     created(){
       const storage = localStorage.getItem("userName")
        JSON.stringify(storage)
        const payload ={
          name: storage
        }

        this.changeUser(payload)

     }


    }


</script>
