<script setup>
import { ArrowLeft } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useServicesStore } from '../../stores/servicesStore'
import SectionTitle from '../shared/SectionTitle.vue'
import ServiceCard from '../services/ServiceCard.vue'

const servicesStore = useServicesStore()
</script>

<template>
  <section class="section-band section-band-soft" aria-labelledby="featured-title">
    <div class="container">
      <SectionTitle
        id="featured-title"
        eyebrow="خدماتنا"
        title="خدمات مختارة"
        description="ابدأ من الخدمة المناسبة ثم اختر المسار الذي يلائم حالتك: مباشر مدفوع أو مشروط بدراسة حالة."
      />
      <div class="row g-4 mb-5">
        <div v-for="service in servicesStore.featuredServices" :key="service.service_id" class="col-md-6 col-lg-4">
          <ServiceCard :service="service" />
        </div>
      </div>
      <div class="text-center">
        <RouterLink class="btn btn-azm btn-lg fw-bold px-5" :to="{ name: 'services' }">
          عرض جميع الخدمات
          <ArrowLeft :size="20" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
