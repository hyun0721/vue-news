import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import NewsView from '@/views/NewsView.vue';
import AskView  from '@/views/AskView.vue';
import JobsView from '@/views/JobsView.vue';

const routes = [
    { path: "/", component: HomePage },
    { path: "/news", component: NewsView },
    { path: "/ask", component: AskView },
    { path: "/jobs", component: JobsView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }