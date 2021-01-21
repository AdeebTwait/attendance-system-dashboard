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
    actions:{},
    getters:{},
}