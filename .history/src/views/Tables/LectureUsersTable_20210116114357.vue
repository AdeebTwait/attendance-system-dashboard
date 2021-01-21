<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="data"
                  type="hover">
        <template slot="columns">
          <th>Name</th>
          <th>University ID</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row" @click="onRowClick(row)">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.name}}</span>
              </div>
            </div>
          </th>
          <td class="budget" @click="onRowClick(row)">
            {{row.universityID}}
          </td>

          <!-- <td class="text-right">
              <a @click="deleteUser(row)" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash text-danger"></i>
              </a>
          </td> -->

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <!-- <base-pagination total="30"></base-pagination> -->
    </div>

  </div>
</template>
<script>
  export default {
    name: 'lecture-users-table',
    props: {
      type: {
        type: String
      },
      title: String,
      data: Array,
    },
    methods: {
        onRowClick(user) {
            this.$router.push({name: 'view-user', params: {id:user._id}})
        },
        deleteUser(user) {
          let response = confirm(`Are you sure you want to delete user ${user.name}`)
          if(response){
            this.$notify({verticalAlign: 'bottom', horizontalAlign: 'right', message: `The user ${user.name} has been deleted.`});
            this.$store.dispatch('users/delete', user);
          }
        },
    },
  }
</script>
<style>
</style>
