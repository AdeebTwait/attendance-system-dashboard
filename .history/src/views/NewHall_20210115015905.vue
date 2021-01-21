<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form title="New Hall" card_title="Hall Information">
            <template #inputs>
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Hall Number"
                            placeholder="Hall Number"
                            input-classes="form-control-alternative"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Hall Description"
                            placeholder="Hall Description"
                            input-classes="form-control-alternative"
                        />
                    </div>
                </div>      
            </template>
            <template #submit>
                <button @click="createHall" class="btn btn-success">Save</button>
            </template>
        </base-form>
    </div>
</template>

<script>
export default {
    name: 'new-hall',
    data() {
        return {
            hall:{},
        }
    },
    methods: {
        async createHall() {
            let hall = await this.$store.dispatch('halls/create', this.hall);
            // this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully created a new video, ${video.name}.`});
            this.$router.push({ name: 'video-watch', params: {id: hall.id}});
        }
    }
}
</script>