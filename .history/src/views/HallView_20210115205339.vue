<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form :title="`Hall ${hall.hallNumber}`" card_title="Hall Information">
            <template #inputs>
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Hall Number"
                            placeholder="Hall Number"
                            input-classes="form-control-alternative"
                            v-model="hall.hallNumber"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Hall Description"
                            placeholder="Hall Description"
                            input-classes="form-control-alternative"
                            v-model="hall.hallDescription"
                        />
                    </div>
                </div>      
            </template>
            <template #submit>
                <button class="btn btn-success">Update</button>
            </template>
        </base-form>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'view-hall',
    computed: {
        hall(){
            return this.halls.find(hall => hall._id == this.$route.params.id) || {}
        },
        ...mapState({
            halls: state => state.halls.halls,
            // currentUser: state => state.users.currentUser
        }),
    },
    methods: {
        async saveVideo() {
            let hall = await this.$store.dispatch('halls/update', this.hall);
            // this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully edited your video, ${video.name}.`});
            this.$router.push({name: 'view-hall', params: hall._id});
        },
    },
}
</script>