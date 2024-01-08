import {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
} from "@/api/index.js";

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then((response) => {
                context.commit("SET_NEWS", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    FETCH_ASK(context) {
        fetchAskList()
            .then((response) => {
                context.commit("SET_ASK", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    FETCH_JOBS(context) {
        fetchJobsList()
            .then((response) => {
                context.commit("SET_JOBS", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then((response) => {
                commit("SET_USER", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then((response) => {
                commit("SET_ITEM", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then((res) => {
                commit("SET_LIST", res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
