import Api from "@/services/api";
import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        halls: [],
    },
    mutations:{
        ADD_VIDEO(state, hall) {
            let halls = state.halls.concat(hall);
            state.halls = halls;
        },
    },
    actions:{},
    getters:{},
}