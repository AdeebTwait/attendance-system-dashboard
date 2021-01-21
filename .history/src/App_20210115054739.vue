<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
  </div>
</template>


<script>

export default {
  name: 'App',
  created(){
    this.$store.dispatch('halls/loadAll');
  },
};
</script>
