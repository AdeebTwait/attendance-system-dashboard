<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form title="New Course" card_title="Course Information">
            <template #inputs>
                    
            </template>
            <template #submit>
                <button @click="createLecture" class="btn btn-success">Save</button>
            </template>
        </base-form>
    </div>
</template>

<script>
export default {
    name: 'new-lecture',
    data() {
        return {
            lecture:{},
        }
    },
    methods: {
        async createLecture() {
            let lecture = await this.$store.dispatch('lectures/create', this.lecture);
            // this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully created a new video, ${lecture.lectureNumber}.`});
            this.$router.push({ name: 'view-lecture', params: {id: lecture._id}});
        }
    }
}
</script>