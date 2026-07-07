<script setup>
import ServiceCard from '../components/services/ServiceCard.vue'
import { useServicesStore } from '../stores/servicesStore'

const servicesStore = useServicesStore()
</script>

<template>
  <section class="page-hero bg-brand-gradient text-center">
    <div class="container">
      <h1 class="fw-bold text-white mb-3">الخدمات المتاحة</h1>
      <p class="page-hero-lead mx-auto mb-0">
        اختر الخدمة المناسبة ثم حدد مسار الطلب: مباشر مدفوع أو مشروط بدراسة حالة مجانية.
      </p>
    </div>
  </section>
  <section class="section-band section-band-soft">
    <div class="container">
      <div class="row g-4">
        <div v-for="service in servicesStore.services" :key="service.service_id" class="col-md-6 col-lg-4">
          <ServiceCard :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>
