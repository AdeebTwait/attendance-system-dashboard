<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

        <div class="container-fluid mt--7">
            <router-link to="/halls/create" class="btn btn-secondary mb-4">Create New Hall</router-link>
            <div class="row">
                <div class="col">
                    <halls-table :data="halls" title="Available Halls"></halls-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import HallsTable from './Tables/HallsTable'
  import { mapState } from 'vuex';

  export default {
    name: 'halls',
    components: {
      HallsTable
    },
    computed: {
      ...mapState({
        halls: state => state.halls.halls
      })
    },
    
  };
</script>
<style></style>
