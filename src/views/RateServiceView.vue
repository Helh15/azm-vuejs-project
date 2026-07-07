<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import RatingForm from '../components/requests/RatingForm.vue'
import EmptyState from '../components/shared/EmptyState.vue'
import SectionTitle from '../components/shared/SectionTitle.vue'
import { useRequestsStore } from '../stores/requestsStore'

const props = defineProps({
  id: { type: String, required: true },
})

const router = useRouter()
const requestsStore = useRequestsStore()
const request = computed(() => requestsStore.getRequestById(props.id))
const message = ref('')

function submitRating(payload) {
  requestsStore.rateRequest(props.id, payload)
  message.value = 'تم حفظ التقييم.'
  setTimeout(() => router.push({ name: 'my-requests' }), 500)
}
</script>

<template>
  <section class="section-band">
    <div class="container auth-page">
      <EmptyState v-if="!request" title="الطلب غير موجود" />
      <template v-else>
        <SectionTitle title="تقييم الخدمة" :description="request.service?.service_name" />
        <RatingForm @submit="submitRating" />
        <p class="text-success fw-bold mt-3 mb-0" aria-live="polite">{{ message }}</p>
      </template>
    </div>
  </section>
</template>

<style scoped>
.auth-page {
  max-width: 760px;
}
</style>
