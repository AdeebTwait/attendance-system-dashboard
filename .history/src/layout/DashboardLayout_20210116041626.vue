<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Fingerprint Attendance"
      title="Fingerprint Attendance"
    >
      <template slot="links">
        <!-- <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        /> -->

        <sidebar-item :link="{name: 'Halls', path: '/halls'}"/>
        <sidebar-item :link="{name: 'Lectures',  path: '/lectures'}"/>
        <sidebar-item :link="{name: 'Users',  path: '/users'}"/>


      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
  
      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <v-snackbar
              v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
              :key="snackbar.text + Math.random()"
              v-model="snackbar.showing"
              :timeout=2000
              :color="snackbar.color"
              :style="`bottom: ${(index * 60) + 8}px`"
            >
              {{snackbar.text}}


            </v-snackbar>
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';
  import VSnackbars from "v-snackbars"
import { mapState } from 'vuex';


  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition,
      "v-snackbar": VSnackbars
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    },
    computed: {
    ...mapState({
      // currentUser: state => state.users.currentUser, 
      snackbars: state => state.snackbar.snackbars
    })
  },
  };
</script>
<style lang="scss">
</style>
