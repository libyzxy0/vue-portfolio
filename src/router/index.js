import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Main.vue'),
      meta: {
        title: 'Jan Liby Dela Costa - Web Developer'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About.vue'), 
      meta: {
        title: 'Jan Liby Dela Costa - About'
      }
    }, 
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/Projects.vue'), 
      meta: {
        title: 'Jan Liby Dela Costa - Projects'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    ? to.meta.title
    : 'Jan Liby Dela Costa - Web Developer';
  next()
})

export default router