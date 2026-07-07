<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="btn fw-bold px-4 py-2"
    :class="variant === 'outline' ? 'btn-outline-azm' : 'btn-azm'"
  >
    <slot />
  </button>
</template>
