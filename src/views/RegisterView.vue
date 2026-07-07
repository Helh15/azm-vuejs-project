<script setup>
import { UserRoundPlus } from 'lucide-vue-next'
import { useRouter, RouterLink } from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'
import { useAuthStore } from '../stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

function handleRegister(payload) {
  authStore.register(payload)
  router.push({ name: 'my-requests' })
}
</script>

<template>
  <AuthLayout
    title="إنشاء حساب جديد"
    description="سجّل بياناتك للاستفادة من خدمات جمعية عزم"
    wide
  >
    <template #icon>
      <UserRoundPlus :size="24" aria-hidden="true" />
    </template>
    <RegisterForm @submit="handleRegister" />
    <template #footer>
      <p class="mb-0">
        لديك حساب بالفعل؟
        <RouterLink :to="{ name: 'login' }" class="fw-bold">تسجيل الدخول</RouterLink>
      </p>
    </template>
  </AuthLayout>
</template>
