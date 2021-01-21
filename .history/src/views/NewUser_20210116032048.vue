<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form title="New User" card_title="User Information">
            <template #inputs>
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Course Number"
                            placeholder="Course Number"
                            input-classes="form-control-alternative"
                            v-model="lecture.courseNumber"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Course Description"
                            placeholder="Course Description"
                            input-classes="form-control-alternative"
                            v-model="lecture.courseName"
                        />
                    </div>
                </div>        
            </template>
            <template #submit>
                <button @click="createUser" class="btn btn-success">Save</button>
            </template>
        </base-form>
    </div>
</template>

<script>
export default {
    name: 'new-user',
    data() {
        return {
            user:{},
        }
    },
    methods: {
        async createUser() {
            let user = await this.$store.dispatch('users/create', this.user);
            // this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully created a new video, ${user.userNumber}.`});
            this.$router.push({ name: 'view-user', params: {id: user._id}});
        }
    }
}
</script>