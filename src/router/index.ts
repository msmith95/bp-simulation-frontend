import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import TakeScreener from "../views/screener/TakeScreener.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'take-screener',
            path: '/screener/:id',
            component: TakeScreener,
        }
    ]
})
