/* eslint-disable no-unused-vars */
import Api from "@/services/api";

export default {
    namespaced: true,
    state: {
        halls: [],
    },
    mutations:{
        SET_HALLS(state, halls) {
            state.halls = halls;
        },
        ADD_HALL(state, hall) {
            let halls = state.halls.concat(hall);
            state.halls = halls;
        },
        DELETE_HALL(state, hallId) {
            let halls = state.halls.filter(h => h._id != hallId);
            state.halls = halls;
        },
        UPDATE_HALL(state, hall) {
            let updatedHall = state.halls.find(h => h._id == hall.id);
            updatedHall = hall;
        },
    },
    actions:{
        async loadAll({ commit, dispatch }) {
            let response = await Api().get('halls');
            let halls = response.data;

            commit('SET_HALLS', halls);
        },
        async create({ commit }, hall) {
            let response = await Api().post('halls', hall);
            let savedHall = response.data;
            commit('ADD_HALL', savedHall);
            return savedHall;
        },
        async delete({ commit }, hall) {
            let response = await Api().delete(`halls/${hall._id}`);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_HALL', hall._id);
            }
        },
        async update({ commit }, hall) {
            let response = await Api().post(`halls/${hall._id}/update`, hall);
            let newHall = response.data;
            commit('UPDATE_HALL', newHall);
            return newHall;
        },
    },
    getters:{},
}