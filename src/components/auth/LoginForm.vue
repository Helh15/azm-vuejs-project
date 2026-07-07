<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['submit'])
const loginMode = ref('email')
const errors = ref({})
const form = reactive({ email: 'beneficiary@example.com', phone: '0553262424', password: 'demo12345' })

function submitForm() {
  errors.value = {}
  if (loginMode.value === 'email' && !form.email) errors.value.email = 'البريد الإلكتروني مطلوب.'
  if (loginMode.value === 'phone' && !form.phone) errors.value.phone = 'رقم الجوال مطلوب.'
  if (!form.password) errors.value.password = 'كلمة المرور مطلوبة.'
  if (Object.keys(errors.value).length) return
  emit('submit', { ...form, loginMode: loginMode.value })
}
</script>

<template>
  <form class="d-grid gap-3" @submit.prevent="submitForm">
    <div class="btn-group w-100" role="group" aria-label="طريقة تسجيل الدخول">
      <button type="button" class="btn btn-sm" :class="loginMode === 'email' ? 'btn-azm' : 'btn-outline-azm'" @click="loginMode = 'email'">
        البريد الإلكتروني
      </button>
      <button type="button" class="btn btn-sm" :class="loginMode === 'phone' ? 'btn-azm' : 'btn-outline-azm'" @click="loginMode = 'phone'">
        رقم الجوال
      </button>
    </div>
    <div v-if="loginMode === 'email'">
      <label for="email" class="form-label fw-bold">البريد الإلكتروني</label>
      <input id="email" v-model.trim="form.email" class="form-control" type="email" autocomplete="email" />
      <p v-if="errors.email" class="text-danger small mt-1 mb-0">{{ errors.email }}</p>
    </div>
    <div v-else>
      <label for="phone" class="form-label fw-bold">رقم الجوال</label>
      <input id="phone" v-model.trim="form.phone" class="form-control" type="tel" autocomplete="tel" />
      <p v-if="errors.phone" class="text-danger small mt-1 mb-0">{{ errors.phone }}</p>
    </div>
    <div>
      <label for="password" class="form-label fw-bold">كلمة المرور</label>
      <input id="password" v-model="form.password" class="form-control" type="password" autocomplete="current-password" />
      <p v-if="errors.password" class="text-danger small mt-1 mb-0">{{ errors.password }}</p>
    </div>
    <button type="submit" class="btn btn-azm fw-bold w-100 mt-1">تسجيل الدخول</button>
  </form>
</template>
