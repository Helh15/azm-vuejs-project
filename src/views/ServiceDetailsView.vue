<script setup>
import { FileSearch } from 'lucide-vue-next'
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PaymentTransferForm from '../components/services/PaymentTransferForm.vue'
import ServiceIcon from '../components/services/ServiceIcon.vue'
import ServiceTypeSelector from '../components/services/ServiceTypeSelector.vue'
import AppButton from '../components/shared/AppButton.vue'
import EmptyState from '../components/shared/EmptyState.vue'
import { useAuthStore } from '../stores/authStore'
import { useRequestsStore } from '../stores/requestsStore'
import { useServicesStore } from '../stores/servicesStore'

const props = defineProps({
  id: { type: String, required: true },
})

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const requestsStore = useRequestsStore()
const servicesStore = useServicesStore()
const service = computed(() => servicesStore.getServiceById(props.id))
const requestType = ref('')
const successMessage = ref('')
const errors = ref({})
const payment = reactive({ payment_method: 'bank_transfer', account_holder_name: '', receipt_file: '' })

const serviceImages = import.meta.glob('../assets/images/services/*.png', {
  eager: true,
  import: 'default',
})

const imageUrl = computed(() => service.value && serviceImages[`../assets/images/services/${service.value.image}`])

function createRequestAndRedirect(payload) {
  const request = requestsStore.createRequest({ user_id: authStore.user.user_id, ...payload })
  successMessage.value = 'تم إرسال الطلب، سيتم تحويلك إلى صفحة الحالة.'
  setTimeout(() => router.push({ name: 'request-status', params: { id: request.request_id } }), 500)
}

function submitRequest() {
  errors.value = {}
  if (requestType.value === 'direct_paid') {
    if (!payment.account_holder_name) errors.value.account_holder_name = 'اسم صاحب الحساب مطلوب.'
    if (!payment.receipt_file) errors.value.receipt_file = 'إرفاق الإيصال مطلوب.'
  }
  if (Object.keys(errors.value).length || !service.value) return

  const payload = {
    service_id: service.value.service_id,
    request_type: requestType.value,
    payment: requestType.value === 'direct_paid' ? { ...payment, amount_paid: service.value.price } : null,
  }

  if (!authStore.isAuthenticated) {
    sessionStorage.setItem('pendingServiceRequest', JSON.stringify(payload))
    router.push({ name: 'login', query: { redirect: route.fullPath } })
    return
  }

  createRequestAndRedirect(payload)
}
</script>

<template>
  <EmptyState
    v-if="!service"
    class="container my-5"
    title="الخدمة غير موجودة"
    description="تحقق من رابط الخدمة وحاول مرة أخرى."
  />
  <template v-else>
    <section
      class="service-banner bg-brand-gradient"
      :style="{
        backgroundImage: imageUrl ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${imageUrl})` : null,
        viewTransitionName: `service-image-${service.service_id}`,
      }"
      aria-hidden="true"
    >
    </section>
    <section class="section-band pt-0 details-band">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-5">
            <article class="azm-card p-4 h-100 service-summary">
              <span class="icon-circle service-hero-icon mb-3">
                <ServiceIcon :name="service.icon" :size="32" />
              </span>
              <h1 class="h3 fw-bold" :style="{ viewTransitionName: `service-title-${service.service_id}` }">
                {{ service.service_name }}
              </h1>
              <p class="text-muted-azm">{{ service.full_description }}</p>
              <dl class="row mb-0 summary-list">
                <dt class="col-6">سعر الخدمة المباشرة</dt>
                <dd
                  class="col-6 fw-bold mb-2"
                  :style="{ viewTransitionName: `service-price-${service.service_id}` }"
                >
                  {{ service.price }} ريال
                </dd>
                <dt class="col-6">المسار المشروط</dt>
                <dd class="col-6 mb-0">مجاني بعد دراسة الحالة</dd>
              </dl>
            </article>
          </div>
          <div class="col-lg-7">
            <form class="d-grid gap-3" @submit.prevent="submitRequest">
              <ServiceTypeSelector v-model="requestType" :price="service.price" />
              <template v-if="requestType">
                <PaymentTransferForm v-if="requestType === 'direct_paid'" v-model="payment" />
                <div v-else class="azm-card conditional-note p-3 d-flex gap-3 align-items-start">
                  <span class="icon-circle note-icon flex-shrink-0">
                    <FileSearch :size="22" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 class="h6 fw-bold">سيتم تحويل طلبك إلى دراسة الحالة</h2>
                    <p class="mb-0 text-muted-azm small">
                      يقوم الباحث الاجتماعي بدراسة حالتك وتحديد الأهلية، وقد يكون القرار مجانياً بالكامل أو دعماً
                      جزئياً. ستصلك حالة الطلب أولاً بأول في صفحة طلباتي.
                    </p>
                  </div>
                </div>
                <div v-if="Object.keys(errors).length" class="alert alert-danger" role="alert">
                  <p v-for="error in errors" :key="error" class="mb-1">{{ error }}</p>
                </div>
                <AppButton type="submit">
                  {{ requestType === 'direct_paid' ? 'تأكيد الطلب والدفع' : 'إرسال الطلب لدراسة الحالة' }}
                </AppButton>
              </template>
              <p v-if="successMessage" class="text-success fw-bold mb-0" aria-live="polite">{{ successMessage }}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<style scoped>
.service-banner {
  height: 50vh;
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.5);
  background-size: cover;
  background-position: center;
}

.details-band {
  margin-top: 32px;
}

.service-summary {
  border-top: 3px solid var(--azm-accent);
}

.service-hero-icon {
  width: 64px;
  height: 64px;
}

.summary-list dt {
  color: var(--azm-muted);
  font-weight: 700;
}

.conditional-note {
  border-inline-start: 3px solid var(--azm-accent);
}

.note-icon {
  width: 44px;
  height: 44px;
}
</style>
