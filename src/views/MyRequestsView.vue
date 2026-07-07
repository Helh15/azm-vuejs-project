<script setup>
import EmptyState from '../components/shared/EmptyState.vue'
import RequestCard from '../components/requests/RequestCard.vue'
import SectionTitle from '../components/shared/SectionTitle.vue'
import { useRequestsStore } from '../stores/requestsStore'

const requestsStore = useRequestsStore()
</script>

<template>
  <section class="section-band">
    <div class="container">
      <SectionTitle title="طلباتي" description="متابعة الطلبات التجريبية وحالة كل خدمة." />
      <p class="visually-hidden" aria-live="polite">{{ requestsStore.latestMessage }}</p>
      <EmptyState
        v-if="!requestsStore.enrichedRequests.length"
        title="لا توجد طلبات بعد"
        description="ابدأ من صفحة الخدمات واختر الخدمة المناسبة."
      />
      <div v-else class="row g-4">
        <div v-for="request in requestsStore.enrichedRequests" :key="request.request_id" class="col-md-6 col-lg-4">
          <RequestCard :request="request" />
        </div>
      </div>
    </div>
  </section>
</template>
