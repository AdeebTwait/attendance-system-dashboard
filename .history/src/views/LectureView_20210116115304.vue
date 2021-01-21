<template>
        
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

        <div class="mb-5">

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
                                label="Course Name"
                                placeholder="Course Name"
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
                        <div class="col-lg-6 form-group">
                            <label for="hall_number" class="form-control-label">Hall Number</label>
                            <select v-model="lecture.hallNumber"  class="form-control" name="hall_number" id="hall_number">
                                <option v-for="hall in halls" :key="hall._id" :value="hall.hallNumber">{{hall.hallNumber}}</option>
                            </select>
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
                    <button @click="saveLecture" class="btn btn-success">Update</button>
                </template>
            </base-form>
        </div>
        
        <div style="margin-top: 9rem !important; margin-bottom: 7rem !important">
            <base-form title="Add Students" card_title="" >
                <template #inputs>
                    <div class="row">
                        <div class="col-lg-6 form-group">
                            <label for="student" class="form-control-label">Student Name</label>
                            <select v-model="newStudent"  class="form-control" name="student" id="student">
                                <option v-for="student in students" :key="student._id" :value="student">{{student.name}}</option>
                            </select>
                        </div>
                    </div>      
                </template>
                <template #submit>
                    <button @click="addStudent"  class="btn btn-success">Add</button>
                </template>
            </base-form>
        </div>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <lecture-users-table :data="lecture.students" title="Students of this course"></lecture-users-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import LectureUsersTable from './Tables/LectureUsersTable';

export default {
    name: 'view-lecture',
    components: {
      LectureUsersTable
    },
    data() {
        return {
            newStudent: {},
        }
    },
    computed: {
        lecture(){
            return this.lectures.find(lecture => lecture._id == this.$route.params.id) || {}
        },
        students(){
            return this.users.filter(user => user.type == 'Student')
        },
        teachers(){
            return this.users.filter(user => user.type == 'Teacher')
        },
        ...mapState({
            lectures: state => state.lectures.lectures,
            halls: state => state.halls.halls,
            users: state => state.users.users,
            // currentUser: state => state.users.currentUser
        }),
    },
    methods: {
        async saveLecture() {
            await this.$store.dispatch('lectures/update', this.lecture);
            this.$notify({verticalAlign: 'bottom', horizontalAlign: 'right', message: `You have successfully edited the course`});
            this.$router.push({name: 'lectures'});
        },
        async addStudent() {
            await this.$store.dispatch('lectures/addStudent', this);
            this.$notify({verticalAlign: 'bottom', horizontalAlign: 'right', message: `You have successfully edited the course`});
            this.$router.push({name: 'lectures'});
        },
    },
}
</script>