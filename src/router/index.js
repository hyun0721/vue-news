import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import ItemView from "@/views/ItemView.vue";
import UserView from "@/views/UserView.vue"

const routes = [
    { path: "/", redirect: '/news' , component: HomePage },
    { path: "/news", component: NewsView },
    { path: "/ask", component: AskView },
    { path: "/jobs", component: JobsView },
    { path: "/Item", component: ItemView },
    { path: "/User", component: UserView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
