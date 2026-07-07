<script setup>
import { Ear, Eye, Keyboard } from 'lucide-vue-next'
</script>

<template >
  <section class="notice" aria-labelledby="accessibility-title">
    <div class="container">
      <div class="notice-inner d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3">
        <div class="notice-icons d-flex gap-2" aria-hidden="true">
          <Eye :size="22" />
          <Ear :size="22" />
          <Keyboard :size="22" />
        </div>
        <div>
          <h2 id="accessibility-title" class="h5 fw-bold mb-1">دعم سهولة الوصول</h2>
          <p class="mb-0">صممت الواجهات بتباين واضح، أزرار كبيرة، وتنقل مناسب للوحة المفاتيح وقارئات الشاشة.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.notice {
  background: var(--azm-secondary);
  border-block: 1px solid var(--azm-border);
  padding: 18px 0;
}

.notice-inner {
  color: var(--azm-primary-dark);
}
</style>
