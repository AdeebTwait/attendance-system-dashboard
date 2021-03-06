import Api from "@/services/api";
import Vue from 'vue';

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
            let halls = state.halls.filter(h => h.id != hallId);
            state.halls = halls;
        },
        EDIT_HALL(state, hall) {
            let h = state.halls.find(h => h.id == hall.id);
            h = hall;
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