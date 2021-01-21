<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
    
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
