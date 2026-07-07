<script setup>
import { Check } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
  currentStep: { type: String, required: true },
  requestType: { type: String, default: 'direct_paid' },
})

const paidSteps = [
  { key: 'payment_review', label: 'مراجعة الدفع' },
  { key: 'completed', label: 'تنفيذ الخدمة' },
  { key: 'receipt_confirmed', label: 'تأكيد الاستلام' },
  { key: 'rated', label: 'التقييم' },
]

const freeSteps = [
  { key: 'case_study_review', label: 'دراسة الحالة' },
  { key: 'completed', label: 'تنفيذ الخدمة' },
  { key: 'receipt_confirmed', label: 'تأكيد الاستلام' },
  { key: 'rated', label: 'التقييم' },
]

const steps = computed(() => (props.requestType === 'direct_paid' ? paidSteps : freeSteps))
const currentIndex = computed(() => steps.value.findIndex((step) => step.key === props.currentStep))
</script>

<template>
  <ol class="timeline list-unstyled mb-0">
    <li
      v-for="(step, index) in steps"
      :key="step.key"
      :class="{ active: index === currentIndex, done: currentIndex > -1 && index < currentIndex }"
      :aria-current="index === currentIndex ? 'step' : undefined"
    >
      <span class="timeline-marker" aria-hidden="true">
        <Check v-if="currentIndex > -1 && index < currentIndex" :size="16" />
        <template v-else>{{ index + 1 }}</template>
      </span>
      <span class="timeline-label">
        {{ step.label }}
        <small v-if="index === currentIndex" class="d-block">المرحلة الحالية</small>
      </span>
    </li>
  </ol>
</template>

<style scoped>
.timeline {
  display: grid;
  gap: 1.1rem;
}

.timeline li {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  color: var(--azm-muted);
  position: relative;
}

.timeline li:not(:last-child)::before {
  content: '';
  position: absolute;
  inset-inline-start: 17px;
  top: 36px;
  bottom: -18px;
  width: 2px;
  background: var(--azm-border);
}

.timeline-marker {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 999px;
  border: 2px solid var(--azm-border);
  background: #fff;
  font-weight: 800;
  z-index: 1;
}

.timeline li.done .timeline-marker {
  background: var(--azm-primary);
  border-color: var(--azm-primary);
  color: #fff;
}

.timeline li.done {
  color: var(--azm-text);
}

.timeline li.active {
  color: var(--azm-primary-dark);
  font-weight: 800;
}

.timeline li.active .timeline-marker {
  border-color: var(--azm-primary);
  color: var(--azm-primary-dark);
  box-shadow: 0 0 0 4px rgba(14, 127, 163, 0.15);
}

.timeline-label small {
  font-weight: 400;
  color: var(--azm-muted);
}
</style>
