<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

        <div class="container-fluid mt--7">
            <a href="/halls/create/" class="btn btn-secondary mb-4">Create New Hall</a>
            <div class="row">
                <div class="col">
                    <halls-table title="Available Halls"></halls-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import HallsTable from './Tables/HallsTable'
  export default {
    name: 'halls',
    components: {
      HallsTable
    }
  };
</script>
<style></style>
