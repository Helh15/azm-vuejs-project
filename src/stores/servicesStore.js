import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { mockServices } from '../data/mockData'

export const useServicesStore = defineStore('services', () => {
  const services = ref(mockServices)

  const featuredServices = computed(() => services.value.slice(0, 3))

  function fetchServices() {
    return services.value
  }

  function getServiceById(serviceId) {
    return services.value.find((service) => service.service_id === Number(serviceId))
  }

  return { services, featuredServices, fetchServices, getServiceById }
})
