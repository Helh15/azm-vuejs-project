<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="section-title mx-auto mb-4 text-center">
    <p v-if="eyebrow" class="text-azm-label mb-2">{{ eyebrow }}</p>
    <h2 class="fw-bold mb-3">{{ title }}</h2>
    <p v-if="description" class="text-muted-azm mb-0">{{ description }}</p>
  </div>
</template>

<style scoped>
.section-title {
  max-width: 720px;
}

.text-azm-label {
  color: var(--azm-primary-dark);
  font-weight: 800;
}
</style>
