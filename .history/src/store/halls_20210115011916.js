import Api from "@/services/api";
import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        halls: [],
    },
    mutations:{
        SET_VIDEOS(state, videos) {
            state.videos = videos;
        },
        ADD_VIDEO(state, video) {
            let videos = state.videos.concat(video);
            state.videos = videos;
        },
        DELETE_VIDEO(state, videoId) {
            let videos = state.videos.filter(v => v.id != videoId)
            state.videos = videos;
        },
        EDIT_VIDEO(state, video) {
            let v = state.videos.find(v => v.id == video.id)
            v = video;
        },
    },
    actions:{},
    getters:{},
}