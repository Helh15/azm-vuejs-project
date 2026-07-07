<script setup>
import { ArrowLeft } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ServiceIcon from './ServiceIcon.vue'

const props = defineProps({
  service: { type: Object, required: true },
})

const serviceImages = import.meta.glob('../../assets/images/services/*.png', {
  eager: true,
  import: 'default',
})

const imageUrl = computed(() => serviceImages[`../../assets/images/services/${props.service.image}`])

function goToDetails(navigate) {
  if (!document.startViewTransition) return navigate()
  document.startViewTransition(() => navigate())
}
</script>

<template>
  <RouterLink
    v-slot="{ navigate, href }"
    custom
    :to="{ name: 'service-details', params: { id: service.service_id } }"
  >
    <a
      :href="href"
      class="azm-card lift-card h-100 overflow-hidden d-flex flex-column card-link"
      @click.prevent="goToDetails(navigate)"
    >
      <div
        class="card-media"
        :style="{ backgroundImage: `url(${imageUrl})`, viewTransitionName: `service-image-${service.service_id}` }"
        aria-hidden="true"
      ></div>
      <div class="p-4 pt-0 d-flex flex-column flex-grow-1">
        <span class="icon-circle card-float-icon" aria-hidden="true">
          <ServiceIcon :name="service.icon" :size="30" />
        </span>
        <h3 class="h6 fw-bold mb-1" :style="{ viewTransitionName: `service-title-${service.service_id}` }">
          {{ service.service_name }}
        </h3>
        <p class="text-muted-azm">{{ service.short_description }}</p>
        <div class="d-flex align-items-center justify-content-between gap-3 mt-auto pt-2">
          <span class="price-text" :style="{ viewTransitionName: `service-price-${service.service_id}` }">
            {{ service.price }} ريال
          </span>
          <span class="btn btn-azm fw-bold">
            طلب الخدمة <ArrowLeft :size="18" aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  </RouterLink>
</template>

<style scoped>
.card-media {
  background-size: cover;
  background-position: center;
}

.card-link {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.card-link:hover {
  color: inherit;
}
</style>
