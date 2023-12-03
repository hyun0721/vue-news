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
        jobList: [],
        userInfo: {},
        itemInfo: {},
    },


    getters: {
        fetchedNews(state) { return state.news; } ,
        fetchedAsk(state) { return state.askList; } ,
        fetchedUser(state) { return state.userInfo; } ,
        fetchedItem(state) { return state.itemInfo; } , 
    },


    mutations: mutation,


    actions: actions

});