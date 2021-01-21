<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form :title="`${lecture.courseName} Course`" card_title="Course Information">
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
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Start Time"
                            placeholder="Start Time"
                            input-classes="form-control-alternative"
                            v-model="lecture.startTime"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="End Time"
                            placeholder="End Time"
                            input-classes="form-control-alternative"
                            v-model="lecture.endTime"
                        />
                    </div>
                </div>      
                <div class="row">
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="Start Time"
                            placeholder="Start Time"
                            input-classes="form-control-alternative"
                            v-model="lecture.startTime"
                        />
                    </div>
                    <div class="col-lg-6">
                        <base-input alternative=""
                            label="End Time"
                            placeholder="End Time"
                            input-classes="form-control-alternative"
                            v-model="lecture.endTime"
                        />
                    </div>
                </div>      
            </template>
            <template #submit>
                <button @click="saveLecture" class="btn btn-success">Update</button>
            </template>
        </base-form>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'view-lecture',
    computed: {
        lecture(){
            return this.lectures.find(lecture => lecture._id == this.$route.params.id) || {}
        },
        ...mapState({
            lectures: state => state.lectures.lectures,
            // currentUser: state => state.users.currentUser
        }),
    },
    methods: {
        async saveLecture() {
            await this.$store.dispatch('lectures/update', this.lecture);
            // this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully edited your video, ${video.name}.`});
            this.$router.push({name: 'lectures'});
        },
    },
}
</script>