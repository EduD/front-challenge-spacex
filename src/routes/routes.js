import AnimeList from '@/components/AnimeList.vue'
import AnimeDetail from '@/components/AnimeDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'AnimesList',
        path: '/',
        component: AnimeList
    },
    {
        name: 'AnimeDetail',
        path: '/anime/:id?',
        component: AnimeDetail
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router