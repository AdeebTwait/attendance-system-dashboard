<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

    
        <base-form title="New Course" card_title="Course Information">
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
                        <div class="form-group">
                            <label for="hall_number" class="form-control-label">Hall Number</label>
                            <select v-model="lecture.hallNumber"  class="form-control" name="hall_number" id="hall_number">
                                <option v-for="hall in halls" :key="hall._id" :value="hall.hallNumber">{{hall.hallNumber}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 form-group">
                        <label for="teacher" class="form-control-label">Teacher</label>
                        <select v-model="lecture.teacher"  class="form-control" name="teacher" id="teacher">
                            <option v-for="teacher in teachers" :key="teacher._id" :value="teacher.name">{{teacher.name}}</option>
                        </select>
                    </div>
                </div>      
            </template>
            <template #submit>
                <button @click="createLecture" class="btn btn-success">Save</button>
            </template>
        </base-form>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'new-lecture',
    data() {
        return {
            lecture:{},
        }
    },
    computed: {
    ...mapState({
      halls: state => state.halls.halls
    })
  },
    methods: {
        async createLecture() {
            let lecture = await this.$store.dispatch('lectures/create', this.lecture);
            this.$notify({verticalAlign: 'bottom', horizontalAlign: 'right', message: `You have successfully created a new course, ${lecture.courseName}.`});

            this.$router.push({ name: 'lectures'});
        }
    }
}
</script>