<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form :title="`${user.name}`" card_title="User Information">
            <template #inputs>
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Name"
                            placeholder="Name"
                            input-classes="form-control-alternative"
                            v-model="user.name"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Email"
                            placeholder="Email"
                            input-classes="form-control-alternative"
                            v-model="user.email"
                            type="email"
                        />
                    </div>
                </div>        
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Type"
                            placeholder="Type"
                            input-classes="form-control-alternative"
                            v-model="user.type"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="University ID"
                            placeholder="University ID"
                            input-classes="form-control-alternative"
                            v-model="user.universityID"
                        />
                    </div>
                </div> 
            </template>
            <template #submit>
                <button @click="saveUser" class="btn btn-success">Update</button>
            </template>
        </base-form>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'view-user',
    computed: {
        user(){
            return this.users.find(user => user._id == this.$route.params.id) || {}
        },
        ...mapState({
            users: state => state.users.users,
            // currentUser: state => state.users.currentUser
        }),
    },
    methods: {
        async saveUser() {
            await this.$store.dispatch('users/update', this.user);
            this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully edited the user, ${this.user.name}.`});
            this.$router.push({name: 'users'});
        },
    },
}
</script>