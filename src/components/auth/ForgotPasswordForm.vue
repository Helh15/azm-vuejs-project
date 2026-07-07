<script setup>
import { ref } from 'vue'

const email = ref('')
const message = ref('')

function submitForm() {
  message.value = email.value ? 'تم إرسال تعليمات الاستعادة التجريبية.' : 'اكتب البريد الإلكتروني أولاً.'
}
</script>

<template>
  <form class="d-grid gap-3" @submit.prevent="submitForm">
    <div>
      <label for="forgot-email" class="form-label fw-bold">البريد الإلكتروني</label>
      <input id="forgot-email" v-model.trim="email" class="form-control" type="email" autocomplete="email" />
    </div>
    <button type="submit" class="btn btn-azm fw-bold w-100">إرسال رابط الاستعادة</button>
    <p v-if="message" class="text-center small mb-0" aria-live="polite">{{ message }}</p>
  </form>
</template>
