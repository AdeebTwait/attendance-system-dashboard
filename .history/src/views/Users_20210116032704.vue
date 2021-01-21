<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

        <div class="container-fluid mt--7">
            <router-link to="/users/create" class="btn btn-secondary mb-4">Create New Course</router-link>
            <div class="row">
                <div class="col">
                    <users-table :data="users" title="Available Courses"></users-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import UsersTable from './Tables/UsersTable'
  import { mapState } from 'vuex';

  export default {
    name: 'users',
    components: {
      UsersTable
    },
    computed: {
      ...mapState({
        users: state => state.users.users
      })
    },
    
  };
</script>
<style></style>
