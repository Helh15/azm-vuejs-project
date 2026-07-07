<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['submit'])
const errors = ref({})
const form = reactive({
  name: '',
  national_id: '',
  phone: '',
  email: '',
  disability_type: 'حركية',
  password: '',
  password_confirmation: '',
})

function submitForm() {
  errors.value = {}
  if (form.name.trim().split(' ').length < 4) errors.value.name = 'اكتب الاسم الرباعي.'
  if (!/^\d{10}$/.test(form.national_id)) errors.value.national_id = 'رقم الهوية يجب أن يكون 10 أرقام.'
  if (!form.phone) errors.value.phone = 'رقم الجوال مطلوب.'
  if (!form.email) errors.value.email = 'البريد الإلكتروني مطلوب.'
  if (form.password.length < 8) errors.value.password = 'كلمة المرور لا تقل عن 8 أحرف.'
  if (form.password !== form.password_confirmation) errors.value.password_confirmation = 'كلمتا المرور غير متطابقتين.'
  if (Object.keys(errors.value).length) return
  emit('submit', { ...form })
}
</script>

<template>
  <form class="d-grid gap-3" @submit.prevent="submitForm">
    <div>
      <label for="name" class="form-label fw-bold">الاسم الرباعي</label>
      <input id="name" v-model.trim="form.name" class="form-control" type="text" autocomplete="name" />
      <p v-if="errors.name" class="text-danger small mt-1 mb-0">{{ errors.name }}</p>
    </div>
    <div>
      <label for="national_id" class="form-label fw-bold">رقم الهوية الوطنية</label>
      <input id="national_id" v-model.trim="form.national_id" class="form-control" inputmode="numeric" />
      <p v-if="errors.national_id" class="text-danger small mt-1 mb-0">{{ errors.national_id }}</p>
    </div>
    <div>
      <label for="register-phone" class="form-label fw-bold">رقم الجوال</label>
      <input id="register-phone" v-model.trim="form.phone" class="form-control" type="tel" autocomplete="tel" />
      <p v-if="errors.phone" class="text-danger small mt-1 mb-0">{{ errors.phone }}</p>
    </div>
    <div>
      <label for="register-email" class="form-label fw-bold">البريد الإلكتروني</label>
      <input id="register-email" v-model.trim="form.email" class="form-control" type="email" autocomplete="email" />
      <p v-if="errors.email" class="text-danger small mt-1 mb-0">{{ errors.email }}</p>
    </div>
    <div>
      <label for="disability_type" class="form-label fw-bold">نوع الإعاقة</label>
      <select id="disability_type" v-model="form.disability_type" class="form-select">
        <option>حركية</option>
        <option>ذهنية</option>
      </select>
    </div>
    <div>
      <label for="register-password" class="form-label fw-bold">كلمة المرور</label>
      <input id="register-password" v-model="form.password" class="form-control" type="password" autocomplete="new-password" />
      <p v-if="errors.password" class="text-danger small mt-1 mb-0">{{ errors.password }}</p>
    </div>
    <div>
      <label for="password_confirmation" class="form-label fw-bold">تأكيد كلمة المرور</label>
      <input id="password_confirmation" v-model="form.password_confirmation" class="form-control" type="password" autocomplete="new-password" />
      <p v-if="errors.password_confirmation" class="text-danger small mt-1 mb-0">{{ errors.password_confirmation }}</p>
    </div>
    <button type="submit" class="btn btn-azm fw-bold w-100 mt-1">إنشاء الحساب</button>
  </form>
</template>
