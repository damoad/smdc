<template>

  <div>

  <v-fade-transition mode="out-in">

  <router-view></router-view>

    </v-fade-transition>

    <div style="margin-top:150px;">

    <v-footer
    dark
    padless
    absolute

  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Team Joy</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
  </div>

</template>

<script>
export default {

  data(){

    return{

      icons: [
       'mdi-facebook',
       'mdi-twitter',
       'mdi-linkedin',
       'mdi-instagram',
     ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>
