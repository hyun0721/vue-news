import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
// import ItemView from "@/views/ItemView.vue";
// import UserView from "@/views/UserView.vue"

const base_url = 'myProject';

const routes = [
    { path: `/`                 , redirect: { name: 'home' } },
    { path: `/${base_url}`      , redirect: { name: 'home' } },

    { path: `/${base_url}/home` , name: 'home'   , component: HomePage },
    { path: `/${base_url}/news` , name: 'news'   , component: NewsView  },
    { path: `/${base_url}/ask`  , name: 'ask'    , component: AskView   },
    { path: `/${base_url}/jobs` , name: 'jobs'   , component: JobsView  },
];

// const routes = [
//     { path: "/", redirect: `/news`, component: HomePage },
//     { path: `/news` , component: NewsView },
//     { path: `/ask` , component: AskView },
//     { path: `/jobs` , component: JobsView },
//     { path: `/Item` , component: ItemView },
//     { path: `/User` , component: UserView },
// ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export { router };
