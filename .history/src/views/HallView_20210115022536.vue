<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form :title="`Hall ${number}`" card_title="Hall Information">
            <template #inputs>
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Hall Number"
                            placeholder="Hall Number"
                            input-classes="form-control-alternative"
                            v-model="number"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Hall Description"
                            placeholder="Hall Description"
                            input-classes="form-control-alternative"
                            v-model="description"
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
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'view-hall',
    computed: {
        hall(){
            return this.halls.find(vid => vid.id == this.$route.params.id) || {}
        },
        ...mapGetters(),
        ...mapState({
            halls: state => state.halls,
            // currentUser: state => state.users.currentUser
        }),
    }
}
</script>