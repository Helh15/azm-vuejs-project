import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue') },
  { path: '/services/:id', name: 'service-details', component: () => import('../views/ServiceDetailsView.vue'), props: true },
  { path: '/login', name: 'login', component: () => import('../views/LoginView.vue'), meta: { hideChrome: true } },
  { path: '/register', name: 'register', component: () => import('../views/RegisterView.vue'), meta: { hideChrome: true } },
  { path: '/forgot-password', name: 'forgot-password', component: () => import('../views/ForgotPasswordView.vue'), meta: { hideChrome: true } },
  { path: '/my-requests', name: 'my-requests', component: () => import('../views/MyRequestsView.vue'), meta: { requiresAuth: true } },
  { path: '/request-status/:id', name: 'request-status', component: () => import('../views/RequestStatusView.vue'), props: true, meta: { requiresAuth: true } },
  { path: '/requests/:id/confirm', name: 'confirm-receipt', component: () => import('../views/ConfirmReceiptView.vue'), props: true, meta: { requiresAuth: true } },
  { path: '/requests/:id/rate', name: 'rate-service', component: () => import('../views/RateServiceView.vue'), props: true, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router
