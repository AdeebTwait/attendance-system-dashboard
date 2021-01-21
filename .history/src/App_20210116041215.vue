<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + Math.random()"
      
      :timeout=2000
      :color="snackbar.color"
      :style="`bottom: ${(index * 60) + 8}px`"
    >
      {{snackbar.text}}


    </v-snackbar>
  </div>
</template>


<script>

import { mapState } from 'vuex';
import VSnackbars from "v-snackbars"


export default {
  name: 'App',
  components:{
    "v-snackbar": VSnackbars
  },
  mounted(){
    this.$store.dispatch('halls/loadAll');
    this.$store.dispatch('lectures/loadAll');
    this.$store.dispatch('users/loadAll');
  },
  computed: {
    ...mapState({
      // currentUser: state => state.users.currentUser, 
      snackbars: state => state.snackbar.snackbars
    })
  },
};
</script>
