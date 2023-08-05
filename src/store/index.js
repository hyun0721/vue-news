import { createStore } from 'vuex';

import mutation from '@/store/mutation.js';
import actions from '@/store/actions.js';

export const store = createStore({

    /** 
     * Vuex 구조도
     * 
     * 1. Action    : 비동기처리
     * 2. Mutation  : 데이터 가공
     * 3. State     : 상태반영 
     */

    state: {
        news: [],
        askList: [],
        jobList: []
    },


    getters: {
        fetchedAsk(state) { return state.askList ; } 
    },


    mutations: mutation,


    actions: actions

});