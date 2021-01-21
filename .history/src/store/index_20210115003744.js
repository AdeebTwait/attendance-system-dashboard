import Vue from "vue";
import Vuex from "vuex";
import tagsModule from './tags';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tags: tagsModule,
    },
});
