<script setup>
import { CheckCircle2, Clock3, CircleAlert } from 'lucide-vue-next'

const props = defineProps({
  status: { type: String, required: true },
})

function badgeClass(status) {
  if (status.includes('مكتمل') || status.includes('تأكيد') || status.includes('تقييم')) return 'text-bg-success'
  if (status.includes('مرفوض')) return 'text-bg-danger'
  return 'text-bg-warning'
}

function iconFor(status) {
  if (status.includes('مكتمل') || status.includes('تأكيد') || status.includes('تقييم')) return CheckCircle2
  if (status.includes('مرفوض')) return CircleAlert
  return Clock3
}
</script>

<template>
  <span class="badge d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2" :class="badgeClass(props.status)">
    <component :is="iconFor(props.status)" :size="16" aria-hidden="true" />
    {{ status }}
  </span>
</template>
