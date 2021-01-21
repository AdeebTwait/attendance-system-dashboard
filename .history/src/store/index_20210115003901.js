import Vue from "vue";
import Vuex from "vuex";
import usersModule from './users';
import lecturesModule from './lectures';
import hallsModule from './halls';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        users: usersModule,
        lectures: lecturesModule,
        halls: hallsModule,
    },
});
