<script setup>
import { Building2, CalendarDays, Eye, FileBadge } from 'lucide-vue-next'
import { mockAbout } from '../../data/mockData'
import SectionTitle from '../shared/SectionTitle.vue'
</script>

<template>
  <section class="section-band" aria-labelledby="about-title">
    <div class="container">
      <SectionTitle id="about-title" eyebrow="من نحن" :title="mockAbout.title" />
      <div class="row g-4 align-items-stretch">
        <div class="col-lg-7">
          <div class="d-grid gap-3 h-100">
            <div class="d-flex flex-wrap gap-3">
              <p class="about-fact mb-0">
                <CalendarDays :size="20" aria-hidden="true" />
                تأسست في 11 / 4 / 1431هـ
              </p>
              <p class="about-fact mb-0">
                <FileBadge :size="20" aria-hidden="true" />
                رقم التسجيل (563)
              </p>
              <p class="about-fact mb-0">
                <Building2 :size="20" aria-hidden="true" />
                وزارة الموارد البشرية والتنمية الاجتماعية
              </p>
            </div>
            <p v-for="paragraph in mockAbout.paragraphs" :key="paragraph" class="about-paragraph mb-0">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <div class="col-lg-5">
          <aside class="vision-card bg-brand-gradient h-100 p-4">
            <span class="icon-circle icon-on-dark vision-icon mb-3">
              <Eye :size="24" aria-hidden="true" />
            </span>
            <h3 class="h4 fw-bold text-white">رؤيتنا</h3>
            <p class="vision-text mb-0">{{ mockAbout.vision }}</p>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-fact {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--azm-soft);
  color: var(--azm-primary-dark);
  border: 1px solid var(--azm-border);
  border-radius: 999px;
  padding: 0.5rem 1.1rem;
  font-weight: 700;
}

.about-paragraph {
  background: #fbfdfe;
  border: 1px solid var(--azm-border);
  border-inline-start: 4px solid var(--azm-accent);
  border-radius: var(--azm-radius);
  padding: 1.1rem 1.3rem;
}

.vision-card {
  border-radius: var(--azm-radius);
}

.vision-icon {
  width: 50px;
  height: 50px;
}

.vision-text {
  line-height: 1.9;
  color: #eafcff;
}
</style>
