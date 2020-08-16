<template>
  <v-app>


      <v-app-bar
          app
          color="#F9A825"
    elevation="1"
    height="80"



        >

<v-row>
  <v-col  cols="5" class="mr-0 ml-0 pr-0 pl-0">
        <v-img
          src="https://smdc.com/content/themes/smdc/dist/images/smdc_logo.png"
          class="my-3"
          contain
          height="50"
          width="200"
        />

</v-col>
  <v-col  class="">

    <v-tabs
  class="hidden-sm-and-down my-3"
  optional
  slider-color="transparent"

>
  <v-tab
    v-for="(item, i) in items"
    :key="i"
    :to="item.path "
    active-class="text--primary"


    style="color:#FFFFFF !important; caret-color:#FFFFFF !important;"
    text
  >
    {{ item.name }}
  </v-tab>
</v-tabs>

</v-col>

</v-row>


          </v-app-bar>




    <v-main>
      <MainPage/>
    </v-main>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage';

export default {
  name: 'App',

  components: {
    MainPage,

  },

  computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '160vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`

      }
      },



  data: () => ({

    drawer: null,
      items: [

        {

          name:'Properties',
          path: 'properties',
        },
        {

          name: 'Apply as agent/broker',
          path: 'register',
        },
        {

          name:"Holding",
          path: 'holding',
        },
        {

          name: 'Log-in',
          path: 'login',
        },


      ],
    //
  }),
};
</script>

<style media="screen">
  .theme--light.v-tabs > .v-tabs-bar{

    background-color: transparent !important;
  }
</style>
