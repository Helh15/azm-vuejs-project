<script setup>
import { computed, reactive, watch } from 'vue'
import { paymentMethods } from '../../data/mockData'

const props = defineProps({
  modelValue: { type: Object, required: true },
})

const emit = defineEmits(['update:modelValue'])

const form = reactive({
  payment_method: props.modelValue.payment_method || 'bank_transfer',
  account_holder_name: props.modelValue.account_holder_name || '',
  receipt_file: props.modelValue.receipt_file || '',
})

const activeMethod = computed(() => paymentMethods.find((method) => method.id === form.payment_method))

watch(form, () => emit('update:modelValue', { ...form }), { deep: true })

function handleFileChange(event) {
  form.receipt_file = event.target.files?.[0]?.name || ''
}
</script>

<template>
  <section class="azm-card p-4" aria-labelledby="payment-title">
    <h2 id="payment-title" class="h5 fw-bold">  طريقة الدفع</h2>
    <p class="text-muted-azm">*طريقة الدفع الحالية هي التحويل البنكي.</p>

    <div class="row g-3 mb-3">
      <div v-for="method in paymentMethods" :key="method.id" class="col-6">
        <label class="payment-method" :class="{ active: form.payment_method === method.id, disabled: !method.enabled }">
          <input v-model="form.payment_method" type="radio" :value="method.id" :disabled="!method.enabled" />
          <span>{{ method.name }}</span>
          <small v-if="method.coming_soon">قريباً</small>
        </label>
      </div>
    </div>

    <div v-if="activeMethod?.id === 'bank_transfer'" class="col g-3">
      <div >
            <h2 id="payment-title" class="h5 fw-bold">بيانات التحويل البنكي</h2>

        <label for="account_holder_name" class="form-label fw-bold">اسم صاحب الحساب المحول منه</label>
        <input
          id="account_holder_name"
          v-model.trim="form.account_holder_name"
          class="form-control form-control-lg"
          type="text"
          autocomplete="name"
          required
        />
      </div>
      <div>
        <label for="receipt_file" class="form-label fw-bold">إرفاق إيصال التحويل</label>
        <input id="receipt_file" class="form-control form-control-lg" type="file" accept=".pdf,image/*" @change="handleFileChange" />
        <p v-if="form.receipt_file" class="small text-success mt-2 mb-0">تم اختيار الملف: {{ form.receipt_file }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.payment-method {
  min-height: 74px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border: 1px solid var(--azm-border);
  border-radius: 8px;
  padding: 0.8rem;
  background: #fff;
}

.payment-method.active {
  border-color: var(--azm-primary);
}

.payment-method.disabled {
  color: var(--azm-muted);
  background: var(--azm-soft);
}
</style>
