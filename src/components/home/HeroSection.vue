<script setup>
import { ArrowLeft, ClipboardList } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import heroUrl from '../../assets/images/hero-placeholder.png'
import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()
</script>

<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroUrl})` }">
    <div class="hero-overlay">
      <div class="container">
        <div class="hero-content py-5">
          <p class="eyebrow-chip mb-3">جمعية ذوي الإعاقة ببريدة</p>
          <h1 class="hero-title fw-bold mb-3">خدمات عزم أقرب إليك</h1>
          <p class="hero-lead mb-4">منصة رقمية ميسرة لطلب خدمات جمعية عزم ومتابعة الطلبات بسهولة ووضوح.</p>
          <div class="d-flex flex-wrap gap-3">
            <RouterLink class="btn btn-light-azm fw-bold px-4" :to="{ name: 'services' }">
              تعرّف على الخدمات
              <ArrowLeft :size="18" aria-hidden="true" />
            </RouterLink>
            <RouterLink
              v-if="authStore.isAuthenticated"
              class="btn btn-hero-outline fw-bold px-4"
              :to="{ name: 'my-requests' }"
            >
              <ClipboardList :size="18" aria-hidden="true" />
              طلباتي
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 72px);
  display: flex;
}

.hero-overlay {
  background: linear-gradient(
    105deg,
    rgba(7, 91, 120, 0.93) 0%,
    rgba(14, 127, 163, 0.82) 45%,
    rgba(14, 127, 163, 0.4) 100%
  );
  padding: 48px 0;
  flex: 1;
  display: flex;
  align-items: center;
}

.hero-overlay .container {
  width: 100%;
}

.hero-content {
  max-width: 640px;
  color: #fff;
}

.hero-content .eyebrow-chip {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.35);
  color: #fff;
}

.hero-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
}

.hero-lead {
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.8;
  color: #f2fbfd;
}

.btn-hero-outline {
  --bs-btn-color: #fff;
  --bs-btn-border-color: rgba(255, 255, 255, 0.85);
  --bs-btn-hover-bg: rgba(255, 255, 255, 0.15);
  --bs-btn-hover-border-color: #fff;
  --bs-btn-hover-color: #fff;
  border-width: 2px;
}

@media (max-width: 575.98px) {
  .hero-overlay {
    padding: 32px 0;
  }
}
</style>
