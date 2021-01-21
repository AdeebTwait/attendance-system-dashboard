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
        ADD_USER(state, user) {
            let users = state.users.concat(user);
            state.users = users;
        },
        DELETE_USER(state, userId) {
            let users = state.users.filter(l => l._id != userId);
            state.users = users;
        },
        UPDATE_USER(state, user) {
            let updatedUser = state.users.find(l => l._id == user.id);
            updatedUser = user;
        },
    },
    actions: {
        async loadAll({ commit, dispatch }) {
            let response = await Api().get('users');
            let users = response.data;

            commit('SET_USERS', users);
        },
        async create({ commit }, user) {
            let response = await Api().post('users', user);
            let savedUser = response.data;
            commit('ADD_USER', savedUser);
            return savedUser;
        },
        async delete({ commit }, user) {
            let response = await Api().delete(`users/${user._id}`);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_USER', user._id);
            }
        },
        async update({ commit }, user) {
            let response = await Api().post(`users/${user._id}/update`, user);
            let newUser = response.data;
            commit('UPDATE_USER', newUser);
            return newUser;
        },
    },
    getters: {},
}