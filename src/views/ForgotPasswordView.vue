<script setup>
import { KeyRound } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout.vue'
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm.vue'
</script>

<template>
  <AuthLayout
    title="استعادة كلمة المرور"
    description="أدخل بريدك الإلكتروني وسنرسل لك رابط الاستعادة"
  >
    <template #icon>
      <KeyRound :size="24" aria-hidden="true" />
    </template>
    <ForgotPasswordForm />
    <template #footer>
      <RouterLink :to="{ name: 'login' }" class="fw-bold">العودة لتسجيل الدخول</RouterLink>
    </template>
  </AuthLayout>
</template>
