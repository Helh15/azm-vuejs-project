<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppFooter from './components/layout/AppFooter.vue'
import AppHeader from './components/layout/AppHeader.vue'

const route = useRoute()
const hideChrome = computed(() => Boolean(route.meta.hideChrome))
</script>

<template>
  <div class="app-shell">
    <AppHeader v-if="!hideChrome" />
    <main id="main-content" class="app-main">
      <RouterView />
    </main>
    <AppFooter v-if="!hideChrome" />
  </div>
</template>
