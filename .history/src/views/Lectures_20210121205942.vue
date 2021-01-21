<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

        <div class="container-fluid mt--7">
            <!-- <router-link to="/lectures/create" class="btn btn-secondary mb-4">Create New Course</router-link> -->
            <div class="row">
                <div class="col">
                    <lectures-table :data="lectures" title="Registered Courses"></lectures-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import LecturesTable from './Tables/LecturesTable'
  import { mapState } from 'vuex';

  export default {
    name: 'lectures',
    components: {
      LecturesTable
    },
    computed: {
      ...mapState({
        lectures: state => state.lectures.lectures
      })
    },
    
  };
</script>
<style></style>
