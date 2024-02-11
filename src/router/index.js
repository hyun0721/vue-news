import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
// import createListView from "@/views/CreateListView";

const base_url = 'myProject';

const routes = [
    { path: `/`                 , redirect: { name: 'home' } },
    { path: `/${base_url}`      , redirect: { name: 'home' } },

    { path: `/${base_url}/home` , name: 'home'   , component: HomePage },

    { path: `/${base_url}/news` , name: 'news'   , component: NewsView  },
    { path: `/${base_url}/ask`  , name: 'ask'    , component: AskView   },
    { path: `/${base_url}/jobs` , name: 'jobs'   , component: JobsView  },
    // { path: `/${base_url}/news` , name: 'news'   , component: createListView('NewsView')  },
    // { path: `/${base_url}/ask`  , name: 'ask'    , component: createListView('AskView')   },
    // { path: `/${base_url}/jobs` , name: 'jobs'   , component: createListView('JobsView')  },
    
    { path: `/${base_url}/user/:id` , name: 'user'   , component: UserView  },
    { path: `/${base_url}/item/:id` , name: 'item'   , component: ItemView  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export { router };
