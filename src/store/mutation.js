export default {

    SET_NEWS(state, news) {
        state.news = news;
    },

    SET_ASK(state, ask) {
        state.askList = ask;
    },

    SET_JOBS(state, jobs){
        state.jobList = jobs;
    },

    SET_USER(state, users){
        state.userInfo = users;
    },

    SET_ITEM(state, items){
        state.itemInfo = items;
    }
}