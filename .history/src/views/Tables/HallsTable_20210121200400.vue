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
          <th>Hall Number</th>
          <th>Hall Description</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row" @click="onRowClick(row)">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.hallNumber}}</span>
              </div>
            </div>
          </th>
          <td class="budget" @click="onRowClick(row)">
            {{row.hallDescription}}
          </td>

          <td class="text-right">
              <a @click="deleteHall(row)" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash text-danger"></i>
              </a>
          </td>

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
    name: 'halls-table',
    props: {
      type: {
        type: String
      },
      title: String,
      data: Array,
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        onRowClick(hall) {
            this.$router.push({name: 'view-hall', params: {id:hall._id}})
        },
        deleteHall(hall) {
          let response = confirm(`Are you sure you want to delete hall ${hall.hallNumber}`)
          if(response){
            this.$notify({verticalAlign: 'top', horizontalAlign: 'right', message: `The hall ${hall.hallNumber} has been deleted.`});
            this.$store.dispatch('halls/delete', hall);
          }
        },
    },
  }
</script>
<style>
</style>
