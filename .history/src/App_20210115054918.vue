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
  },
};
</script>
