<script setup>
import { CheckCircle2, PackageCheck } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppButton from '../components/shared/AppButton.vue'
import EmptyState from '../components/shared/EmptyState.vue'
import { useRequestsStore } from '../stores/requestsStore'

const props = defineProps({
  id: { type: String, required: true },
})

const router = useRouter()
const requestsStore = useRequestsStore()
const request = computed(() => requestsStore.getRequestById(props.id))
const confirmed = ref(false)

function confirm() {
  requestsStore.confirmReceipt(props.id)
  confirmed.value = true
  setTimeout(() => router.push({ name: 'rate-service', params: { id: props.id } }), 1200)
}
</script>

<template>
  <section class="section-band">
    <div class="container confirm-page">
      <EmptyState v-if="!request" title="الطلب غير موجود" />
      <div v-else class="azm-card p-4 p-md-5 text-center">
        <template v-if="!confirmed">
          <span class="icon-circle confirm-icon mb-3">
            <PackageCheck :size="36" aria-hidden="true" />
          </span>
          <h1 class="h2 fw-bold mb-2">تأكيد استلام الخدمة</h1>
          <p class="text-muted-azm mb-1">طلب رقم {{ request.request_id }} — {{ request.service?.service_name }}</p>
          <p class="confirm-note mb-4">
            بالضغط على زر التأكيد أنت تقر بأنك استلمت الخدمة وأن مرحلة التنفيذ اكتملت. بعد التأكيد يمكنك تقييم
            الخدمة.
          </p>
          <AppButton type="button" class="btn-lg px-5" @click="confirm">نعم، أؤكد استلام الخدمة</AppButton>
        </template>
        <div v-else aria-live="polite">
          <span class="icon-circle success-icon mb-3">
            <CheckCircle2 :size="36" aria-hidden="true" />
          </span>
          <h1 class="h2 fw-bold text-success mb-2">تم تأكيد الاستلام بنجاح</h1>
          <p class="text-muted-azm mb-0">شكراً لك، سيتم تحويلك الآن إلى صفحة تقييم الخدمة.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.confirm-page {
  max-width: 720px;
}

.confirm-icon {
  width: 80px;
  height: 80px;
}

.success-icon {
  width: 80px;
  height: 80px;
  background: #e7f6ec;
  color: #1a7f37;
}

.confirm-note {
  max-width: 520px;
  margin-inline: auto;
}
</style>
