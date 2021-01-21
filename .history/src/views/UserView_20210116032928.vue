<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form :title="`${lecture.courseName} Course`" card_title="Course Information">
            <template #inputs>
                
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
            // this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully edited your video, ${video.name}.`});
            this.$router.push({name: 'users'});
        },
    },
}
</script>