<script setup>
import { Accessibility, Bus, ThumbsUp, Users, Wrench } from 'lucide-vue-next'
import { mockStats } from '../../data/mockData'
import SectionTitle from '../shared/SectionTitle.vue'

const icons = { Users, Accessibility, Bus, Wrench, ThumbsUp }
</script>

<template>
  <section class="section-band bg-brand-gradient" aria-labelledby="stats-title">
    <div class="container">
      <SectionTitle
        id="stats-title"
        eyebrow="أثرنا بالأرقام"
        title="أرقام تعكس أثر خدمات عزم"
        description="إحصائيات توضح حجم الخدمات المقدمة للمستفيدين ورضاهم عنها."
      />
      <ul class="stats-grid list-unstyled mb-0">
        <li v-for="stat in mockStats" :key="stat.key" class="stat-card text-center">
          <span class="icon-circle icon-on-dark stat-icon mb-2">
            <component :is="icons[stat.icon]" :size="22" aria-hidden="true" />
          </span>
          <strong class="stat-value d-block">{{ stat.value }}</strong>
          <span class="stat-label">{{ stat.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section-band :deep(h2),
.section-band :deep(p) {
  color: #fff;
}

.section-band :deep(.text-azm-label) {
  color: #d6f0f7;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: var(--azm-radius);
  padding: 1.25rem 0.75rem;
  color: #fff;
}

.stat-icon {
  width: 46px;
  height: 46px;
}

.stat-value {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  line-height: 1.3;
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: #eafcff;
}
</style>
