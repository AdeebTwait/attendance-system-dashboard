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
            console.log(hall)
        },
        DELETE_HALL(state, hallId) {
            let halls = state.halls.filter(h => h.id != hallId);
            state.halls = halls;
        },
        EDIT_HALL(state, hall) {
            let updatedHall = state.halls.find(h => h.id == hall.id);
            updatedHall = hall;
        },
    },
    actions:{
        async loadAll({ commit, dispatch }) {
            let halls = await Api().get('halls');
            
            commit('SET_HALLS', halls);
        },
        async create({ commit }, hall) {
            let savedHall = await Api().post('halls', hall);
            commit('ADD_HALL', savedHall.data);
            return savedHall.data;
        },
        async delete({ commit }, hall) {
            let response = await Api().delete(`halls/${hall.id}`);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_HALL', hall.id);
            }
        },
        async edit({ commit }, hall) {
            let response = await Api().put(`halls/${hall.id}`, hall);
            let newHall = response.data;
            commit('EDIT_HALL', newHall);
            return newHall;
        },
    },
    getters:{},
}