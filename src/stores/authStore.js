import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { mockUsers } from '../data/mockData'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loginMessage = ref('')

  const isAuthenticated = computed(() => Boolean(user.value))

  function login() {
    user.value = mockUsers[0]
    loginMessage.value = 'تم تسجيل الدخول بنجاح.'
  }

  function register(formData) {
    user.value = { ...mockUsers[0], ...formData, user_id: 2, status: 'active' }
    loginMessage.value = 'تم إنشاء الحساب التجريبي بنجاح.'
  }

  function logout() {
    user.value = null
    loginMessage.value = ''
  }

  return { user, loginMessage, isAuthenticated, login, register, logout }
})
