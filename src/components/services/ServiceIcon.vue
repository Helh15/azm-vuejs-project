<script setup>
import { Accessibility, Bus, HeartPulse, Home, Shirt, Wrench } from 'lucide-vue-next'

defineProps({
  name: { type: String, default: 'Accessibility' },
  size: { type: Number, default: 34 },
})

const icons = { Accessibility, Bus, HeartPulse, Home, Shirt, Wrench }
</script>

<template>
  <component :is="icons[name] || Accessibility" :size="size" aria-hidden="true" />
</template>
