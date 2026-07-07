<script setup>
import { Inbox } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="azm-card p-5 text-center">
    <Inbox class="mb-3 text-muted-azm" :size="44" aria-hidden="true" />
    <h2 class="h4 fw-bold">{{ title }}</h2>
    <p v-if="description" class="text-muted-azm mb-0">{{ description }}</p>
  </div>
</template>
