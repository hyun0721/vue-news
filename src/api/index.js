import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

export const fetchNewsList = () => {
    return axios.get(`${config.baseUrl}news/1.json`);
}

export const fetchAskList = () => {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

export const fetchJobsList = () => {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

export const fetchList = (pageName) => {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export const fetchUserInfo = (userName) => {
    return axios.get((`${config.baseUrl}user/${userName}.json`));
}

export const fetchCommentItem = (id) => {
    return axios.get((`${config.baseUrl}item/${id}.json`));
}