<script setup>
defineProps({
  modelValue: { type: String, required: true },
  price: { type: Number, required: true },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <fieldset class="d-grid gap-3">
    <legend class="h6 fw-bold mb-2">اختر نوع الخدمة لعرض الخطوات المطلوبة</legend>
    <label class="type-option" :class="{ active: modelValue === 'direct_paid' }">
      <input
        type="radio"
        name="service_type"
        value="direct_paid"
        :checked="modelValue === 'direct_paid'"
        @change="$emit('update:modelValue', 'direct_paid')"
      />
      <span>
        <strong>خدمة مباشرة مدفوعة</strong>
        <small>تظهر خطوة التحويل البنكي. السعر الحالي {{ price }} ريال.</small>
      </span>
    </label>
    <label class="type-option" :class="{ active: modelValue === 'conditional_free' }">
      <input
        type="radio"
        name="service_type"
        value="conditional_free"
        :checked="modelValue === 'conditional_free'"
        @change="$emit('update:modelValue', 'conditional_free')"
      />
      <span>
        <strong>خدمة مشروطة مجانية</strong>
        <small>يتم إرسال الطلب إلى دراسة الحالة ومراجعة الأهلية.</small>
      </span>
    </label>
  </fieldset>
</template>

<style scoped>
.type-option {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
  border: 1px solid var(--azm-border);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  background: #fff;
}

.type-option.active {
  border-color: var(--azm-primary);
  box-shadow: 0 0 0 3px rgba(14, 127, 163, 0.14);
}

.type-option small {
  display: block;
  color: var(--azm-muted);
  margin-top: 0.25rem;
}
</style>
