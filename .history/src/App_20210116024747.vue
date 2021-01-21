<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
  </div>
</template>


<script>

export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('halls/loadAll');
    this.$store.dispatch('lectures/loadAll');
    this.$store.dispatch('users/loadAll');
  },
};
</script>
