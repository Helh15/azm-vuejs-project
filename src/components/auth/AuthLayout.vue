<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import logoUrl from '../../assets/images/azm-logo.webp'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  wide: { type: Boolean, default: false },
})
</script>

<template>
  <div class="auth-screen">
    <div class="auth-top container d-flex align-items-center justify-content-between">
      <RouterLink :to="{ name: 'home' }" class="d-inline-flex">
        <img :src="logoUrl" alt="جمعية عزم" width="110" height="45" />
      </RouterLink>
      <RouterLink :to="{ name: 'home' }" class="auth-back">
        <ArrowRight :size="16" aria-hidden="true" />
        العودة للرئيسية
      </RouterLink>
    </div>
    <div class="auth-wrap" :class="{ wide }">
      <div class="auth-card azm-card">
        <span class="auth-icon icon-circle" aria-hidden="true">
          <slot name="icon" />
        </span>
        <h1 class="auth-title fw-bold text-center mb-1">{{ title }}</h1>
        <p v-if="description" class="text-muted-azm text-center mb-4">{{ description }}</p>
        <slot />
      </div>
      <div class="auth-footer text-center">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-screen {
  min-height: 100vh;
  background:
    radial-gradient(circle at 85% 0%, rgba(43, 166, 184, 0.14), transparent 45%),
    radial-gradient(circle at 10% 100%, rgba(14, 127, 163, 0.1), transparent 45%),
    linear-gradient(180deg, #fbfdfe 0%, #eef7fa 100%);
  padding-bottom: 48px;
}

.auth-top {
  padding-top: 1.25rem;
}

.auth-back {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--azm-primary-dark);
  font-weight: 700;
  text-decoration: none;
  font-size: 0.95rem;
}

.auth-back:hover {
  text-decoration: underline;
}

.auth-wrap {
  max-width: 430px;
  margin: 2rem auto 0;
  padding: 0 1rem;
}

.auth-wrap.wide {
  max-width: 480px;
}

.auth-card {
  padding: 2rem 1.75rem;
  box-shadow: 0 18px 45px rgba(7, 91, 120, 0.1);
}

.auth-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  margin: 0 auto 1rem;
  background: #fff;
  border: 1px solid var(--azm-border);
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(7, 91, 120, 0.12);
  color: var(--azm-primary-dark);
}

.auth-title {
  font-size: 1.45rem;
}

.auth-footer {
  margin-top: 1.25rem;
  font-size: 0.95rem;
}
</style>
