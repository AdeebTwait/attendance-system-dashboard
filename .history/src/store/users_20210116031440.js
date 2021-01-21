/* eslint-disable no-unused-vars */
import Api from "@/services/api";

export default {
    namespaced: true,
    state: {
        users: [],
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_USER(state, lecture) {
            let users = state.users.concat(lecture);
            state.users = users;
        },
        DELETE_USER(state, lectureId) {
            let users = state.users.filter(l => l._id != lectureId);
            state.users = users;
        },
        UPDATE_USER(state, lecture) {
            let updatedlecture = state.users.find(l => l._id == lecture.id);
            updatedlecture = lecture;
        },
    },
    actions: {
        async loadAll({ commit, dispatch }) {
            let response = await Api().get('users');
            let users = response.data;

            commit('SET_USERS', users);
        },
        async create({ commit }, lecture) {
            let response = await Api().post('users', lecture);
            let savedLecture = response.data;
            commit('ADD_USER', savedLecture);
            return savedLecture;
        },
        async delete({ commit }, lecture) {
            let response = await Api().delete(`users/${lecture._id}`);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_USER', lecture._id);
            }
        },
        async update({ commit }, lecture) {
            let response = await Api().post(`users/${lecture._id}/update`, lecture);
            let newLecture = response.data;
            commit('UPDATE_USER', newLecture);
            return newLecture;
        },
        // async addStudents({ commit }, lecture) {

        // },
        // async deleteStudent({ commit }, lecture) {

        // },
    },
    getters: {},
}