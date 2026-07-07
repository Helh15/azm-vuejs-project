<script setup>
import { ArrowLeft, CalendarDays, CheckCircle2, CircleAlert, Clock3, Tag } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ServiceIcon from '../services/ServiceIcon.vue'

const props = defineProps({
  request: { type: Object, required: true },
})

const statusKind = computed(() => {
  const status = props.request.status || ''
  if (status.includes('مكتمل') || status.includes('تأكيد') || status.includes('تقييم')) return 'success'
  if (status.includes('مرفوض')) return 'danger'
  return 'pending'
})

const statusIcon = computed(
  () => ({ success: CheckCircle2, danger: CircleAlert, pending: Clock3 })[statusKind.value],
)
</script>

<template>
  <article class="azm-card lift-card h-100 overflow-hidden d-flex flex-column">
    <div class="card-media" aria-hidden="true">
      <ServiceIcon :name="request.service?.icon" :size="64" />
    </div>
    <div class="p-4 pt-0 d-flex flex-column flex-grow-1">
      <span class="icon-circle card-float-icon" aria-hidden="true">
        <ServiceIcon :name="request.service?.icon" :size="30" />
      </span>
      <div class="d-flex align-items-start justify-content-between gap-2 mb-1">
        <h2 class="h6 fw-bold mb-0">{{ request.service?.service_name }}</h2>
        <span class="status-text small" :class="`is-${statusKind}`">
          <component :is="statusIcon" :size="15" aria-hidden="true" />
          {{ request.status }}
        </span>
      </div>
      <ul class="list-unstyled d-grid gap-1 text-muted-azm small mb-3">
        <li class="d-flex align-items-center gap-2">
          <CalendarDays :size="15" aria-hidden="true" />
          {{ new Date(request.date).toLocaleDateString('ar-SA') }}
        </li>
        <li class="d-flex align-items-center gap-2">
          <Tag :size="15" aria-hidden="true" />
          {{ request.request_type === 'direct_paid' ? 'طلب مباشر مدفوع' : 'طلب مشروط مجاني' }}
        </li>
      </ul>
      <div class="d-flex align-items-center justify-content-between gap-3 mt-auto pt-2">
        <span class="text-muted-azm small">طلب رقم {{ request.request_id }}</span>
        <div class="d-flex flex-wrap gap-2 justify-content-end">
          <RouterLink
            v-if="request.can_confirm_receipt"
            class="btn btn-azm btn-sm fw-bold"
            :to="{ name: 'confirm-receipt', params: { id: request.request_id } }"
          >
            تأكيد الاستلام
          </RouterLink>
          <RouterLink
            v-if="request.can_rate"
            class="btn btn-azm btn-sm fw-bold"
            :to="{ name: 'rate-service', params: { id: request.request_id } }"
          >
            تقييم الخدمة
          </RouterLink>
          <RouterLink
            class="btn btn-outline-azm btn-sm fw-bold"
            :to="{ name: 'request-status', params: { id: request.request_id } }"
          >
            حالة الطلب <ArrowLeft :size="15" aria-hidden="true" />
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>
