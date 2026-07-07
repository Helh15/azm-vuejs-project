<script setup>
import { LogIn } from 'lucide-vue-next'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout.vue'
import LoginForm from '../components/auth/LoginForm.vue'
import { useAuthStore } from '../stores/authStore'
import { useRequestsStore } from '../stores/requestsStore'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const requestsStore = useRequestsStore()

function handleLogin() {
  authStore.login()

  const pendingRequestJson = sessionStorage.getItem('pendingServiceRequest')
  if (pendingRequestJson) {
    sessionStorage.removeItem('pendingServiceRequest')
    const payload = JSON.parse(pendingRequestJson)
    const request = requestsStore.createRequest({ user_id: authStore.user.user_id, ...payload })
    router.push({ name: 'request-status', params: { id: request.request_id } })
    return
  }

  router.push(route.query.redirect || { name: 'my-requests' })
}
</script>

<template>
  <AuthLayout
    title="تسجيل الدخول"
    description="ادخل بياناتك للوصول إلى خدماتك وطلباتك"
  >
    <template #icon>
      <LogIn :size="24" aria-hidden="true" />
    </template>
    <LoginForm @submit="handleLogin" />
    <template #footer>
      <p class="mb-1">
        ليس لديك حساب؟
        <RouterLink :to="{ name: 'register' }" class="fw-bold">تسجيل جديد</RouterLink>
      </p>
      <RouterLink :to="{ name: 'forgot-password' }">استعادة كلمة المرور</RouterLink>
    </template>
  </AuthLayout>
</template>
