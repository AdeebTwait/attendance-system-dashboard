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
            let response = await Api().get('/videos');
            let videos = response.data.data;
            videos.forEach(v => {
                v.attributes.tag_ids = v.relationships.tags.data.map(t => t.id);
            });

            commit('SET_VIDEOS', videos.map(v => v.attributes));
        },
        async create({ commit }, video) {
            let response = await Api().post('/videos', video);
            let savedVideo = response.data.data.attributes;
            commit('ADD_VIDEO', savedVideo);
            return savedVideo;
        },
        async delete({ commit }, video) {
            let response = await Api().delete(`/videos/${video.id}`);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_VIDEO', video.id);
            }
        },
        async edit({ commit }, video) {
            let response = await Api().put(`/videos/${video.id}`, video);
            let newVideo = response.data.data.attributes;
            commit('EDIT_VIDEO', newVideo);
            return newVideo;
        },
    },
    getters:{},
}