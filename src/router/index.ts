// 创建一个路由器，并暴露出去

// 引入 createRouter
import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/components/Home/Home.vue";
import Achievements from "@/components/Achievements/Achievements.vue";
import About from "@/components/About/About.vue";

// 创建路由器
export default createRouter({
    // 路由器的工作模式
    history: createWebHistory(),
    routes: [
        {
            // 默认就展示home页面
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/achievements',
            component: Achievements
        },
        {
            path: '/about',
            component: About
        },
    ]
})
