import { createStore } from 'vuex';
import { fetchNewsList } from '@/api/index.js';

export const store = createStore({

    /** 
     * Vuex 구조도
     * 
     * 1. Action    : 비동기처리
     * 2. Mutation  : 데이터 가공
     * 3. State     : 상태반영 
     */

    state: {
        news: []
    },

    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        }
    },

    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then( response => {
                    context.commit('SET_NEWS', response.data);
                })
                .catch( error => {
                    console.log(error);
                    
                })
        }
    }

});