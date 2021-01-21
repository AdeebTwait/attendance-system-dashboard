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
            let videos = response.data.data;

            commit('SET_VIDEOS', videos);
        },
        async create({ commit }, video) {
            let response = await Api().post('halls', video);
            let savedHall = response.data.data.attributes;
            commit('ADD_VIDEO', savedHall);
            return savedHall;
        },
        async delete({ commit }, video) {
            let response = await Api().delete(`halls/${hall.id}`);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_VIDEO', hall.id);
            }
        },
        async edit({ commit }, video) {
            let response = await Api().put(`halls/${hall.id}`, video);
            let newVideo = response.data.data.attributes;
            commit('EDIT_VIDEO', newVideo);
            return newVideo;
        },
    },
    getters:{},
}