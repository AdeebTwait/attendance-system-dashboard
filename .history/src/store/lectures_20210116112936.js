/* eslint-disable no-unused-vars */
import Api from "@/services/api";

export default {
    namespaced: true,
    state: {
        lectures: [],
    },
    mutations: {
        SET_LECTURES(state, lectures) {
            state.lectures = lectures;
        },
        ADD_LECTURE(state, lecture) {
            let lectures = state.lectures.concat(lecture);
            state.lectures = lectures;
        },
        DELETE_LECTURE(state, lectureId) {
            let lectures = state.lectures.filter(l => l._id != lectureId);
            state.lectures = lectures;
        },
        UPDATE_LECTURE(state, lecture) {
            let updatedlecture = state.lectures.find(l => l._id == lecture.id);
            updatedlecture = lecture;
        },
    },
    actions: {
        async loadAll({ commit, dispatch }) {
            let response = await Api().get('lectures');
            let lectures = response.data;

            commit('SET_LECTURES', lectures);
        },
        async create({ commit }, lecture) {
            let response = await Api().post('lectures', lecture);
            let savedLecture = response.data;
            commit('ADD_LECTURE', savedLecture);
            return savedLecture;
        },
        async delete({ commit }, lecture) {
            let response = await Api().delete(`lectures/${lecture._id}`);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_LECTURE', lecture._id);
            }
        },
        async update({ commit }, lecture) {
            let response = await Api().post(`lectures/${lecture._id}/update`, lecture);
            let newLecture = response.data;
            commit('UPDATE_LECTURE', newLecture);
            return newLecture;
        },
        async addStudent({ commit }, obj) {
            const newStudent{type, fingerprint,  } = obj.newStudent;
            let response = await Api().post(`lectures/${obj.lecture._id}/add-students`, newStudent);
            let newLecture = response.data;
            commit('UPDATE_LECTURE', newLecture);
            return newLecture;
        },
        // async deleteStudent({ commit }, lecture) {

        // },
    },
    getters: {},
}