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
                  :data="halls"
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
                <span class="name mb-0 text-sm">{{row.number}}</span>
              </div>
            </div>
          </th>
          <td class="budget" @click="onRowClick(row)">
            {{row.description}}
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" :href="`/halls/${row.id}`">View</a>
                <a class="dropdown-item" :href="`/halls/${row.id}/edit`">Update</a>
                <a class="dropdown-item" :href="`/halls/${row.id}/delete`">Delete</a>
              </template>
            </base-dropdown>
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
      title: String
    },
    props {
        halls: [],
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        onRowClick(row) {
            this.$router.push({name: 'view hall', params: {id:row._id}})
        },
    },
  }
</script>
<style>
</style>
