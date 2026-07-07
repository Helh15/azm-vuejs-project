<script setup>
import { CreditCard, FileSearch } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import RequestTimeline from '../components/requests/RequestTimeline.vue'
import AppBadge from '../components/shared/AppBadge.vue'
import EmptyState from '../components/shared/EmptyState.vue'
import { useRequestsStore } from '../stores/requestsStore'

const props = defineProps({
  id: { type: String, required: true },
})

const requestsStore = useRequestsStore()
const request = computed(() => requestsStore.getRequestById(props.id))
const isPaid = computed(() => request.value?.request_type === 'direct_paid')

const statusHeadline = computed(() => {
  if (!request.value) return ''
  if (['completed', 'receipt_confirmed', 'rated'].includes(request.value.current_step)) {
    return 'اكتملت خدمتك بنجاح'
  }
  return isPaid.value ? 'جاري معالجة الدفع ومراجعة إيصال التحويل' : 'جاري دراسة الحالة ومراجعة الطلب'
})
</script>

<template>
  <section class="section-band">
    <div class="container status-page">
      <EmptyState v-if="!request" title="الطلب غير موجود" description="تحقق من رقم الطلب وحاول مرة أخرى." />
      <template v-else>
        <div class="status-hero azm-card p-4 p-md-5 text-center mb-4">
          <span class="icon-circle status-icon mb-3">
            <component :is="isPaid ? CreditCard : FileSearch" :size="34" aria-hidden="true" />
          </span>
          <h1 class="h2 fw-bold mb-2">{{ statusHeadline }}</h1>
          <p class="text-muted-azm mb-3">
            طلب رقم {{ request.request_id }} — {{ request.service?.service_name }}
          </p>
          <AppBadge :status="request.status" />
        </div>

        <div class="azm-card p-4">
          <div class="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
            <div>
              <h2 class="h4 fw-bold mb-1">مراحل الطلب</h2>
              <p class="text-muted-azm mb-0">
                تاريخ تقديم الطلب: {{ new Date(request.date).toLocaleDateString('ar-SA') }}
              </p>
            </div>
          </div>
          <RequestTimeline :current-step="request.current_step" :request-type="request.request_type" />
          <div class="d-flex flex-wrap gap-2 mt-4">
            <RouterLink
              v-if="request.can_confirm_receipt"
              class="btn btn-azm fw-bold"
              :to="{ name: 'confirm-receipt', params: { id: request.request_id } }"
            >
              تأكيد الاستلام
            </RouterLink>
            <RouterLink
              v-if="request.can_rate"
              class="btn btn-azm fw-bold"
              :to="{ name: 'rate-service', params: { id: request.request_id } }"
            >
              تقييم الخدمة
            </RouterLink>
            <RouterLink class="btn btn-outline-azm fw-bold" :to="{ name: 'my-requests' }">
              العودة إلى طلباتي
            </RouterLink>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.status-page {
  max-width: 880px;
}

.status-hero {
  border-top: 4px solid var(--azm-accent);
}

.status-icon {
  width: 72px;
  height: 72px;
}
</style>
