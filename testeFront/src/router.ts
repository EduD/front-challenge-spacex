import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/Animes.vue') // Importa o componente Animes sob demanda
  },
  {
    path: '/detalhes-animes/:id',
    name: 'DetalhesAnimes',
    component: () => import('./components/DetalhesAnimes.vue') // Importa o componente DetalhesAnime sob demanda
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
