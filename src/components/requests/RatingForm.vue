<script setup>
import { Star } from 'lucide-vue-next'
import { reactive, ref } from 'vue'
import AppButton from '../shared/AppButton.vue'

const emit = defineEmits(['submit'])

const scoreLabels = { 1: 'يحتاج تحسين', 2: 'مقبول', 3: 'جيد', 4: 'جيد جداً', 5: 'ممتاز' }
const errors = ref({})
const form = reactive({ score: 0, comment: '' })

function submitForm() {
  errors.value = {}
  if (!form.score) errors.value.score = 'اختر درجة التقييم من 1 إلى 5.'
  if (Object.keys(errors.value).length) return
  emit('submit', { score: form.score, comment: form.comment })
}
</script>

<template>
  <form class="azm-card p-4" @submit.prevent="submitForm">
    <fieldset class="mb-3">
      <legend class="form-label fw-bold fs-5">ما مدى رضاك عن الخدمة؟</legend>
      <div class="d-flex align-items-center gap-2 flex-wrap">
        <div class="stars d-flex" role="radiogroup" aria-label="درجة التقييم من 1 إلى 5">
          <button
            v-for="value in 5"
            :key="value"
            type="button"
            class="star-btn"
            role="radio"
            :aria-checked="form.score === value"
            :aria-label="`${value} من 5 - ${scoreLabels[value]}`"
            @click="form.score = value"
          >
            <Star :size="34" :class="{ filled: value <= form.score }" aria-hidden="true" />
          </button>
        </div>
        <span class="fw-bold score-label" aria-live="polite">
          {{ form.score ? scoreLabels[form.score] : '' }}
        </span>
      </div>
      <p v-if="errors.score" class="text-danger fw-bold mt-2 mb-0">{{ errors.score }}</p>
    </fieldset>
    <fieldset class="mb-3">
      <legend class="form-label fw-bold fs-5">ما مدى رضاك عن مقدم الخدمة؟</legend>
      <div class="d-flex align-items-center gap-2 flex-wrap">
        <div class="stars d-flex" role="radiogroup" aria-label="درجة التقييم من 1 إلى 5">
          <button
            v-for="value in 5"
            :key="value"
            type="button"
            class="star-btn"
            role="radio"
            :aria-checked="form.score === value"
            :aria-label="`${value} من 5 - ${scoreLabels[value]}`"
            @click="form.score = value"
          >
            <Star :size="34" :class="{ filled: value <= form.score }" aria-hidden="true" />
          </button>
        </div>
        <span class="fw-bold score-label" aria-live="polite">
          {{ form.score ? scoreLabels[form.score] : '' }}
        </span>
      </div>
      <p v-if="errors.score" class="text-danger fw-bold mt-2 mb-0">{{ errors.score }}</p>
    </fieldset>
    <div class="mb-4">
      <label for="comment" class="form-label fw-bold">ملاحظاتك (اختياري)</label>
      <textarea id="comment" v-model.trim="form.comment" class="form-control" rows="4"></textarea>
    </div>
    <AppButton type="submit" class="btn-lg">إرسال التقييم</AppButton>
  </form>
</template>

<style scoped>
.star-btn {
  background: none;
  border: 0;
  padding: 0.35rem;
  min-width: 44px;
  min-height: 44px;
  color: var(--azm-muted);
  cursor: pointer;
}

.star-btn svg.filled {
  color: #d97706;
  fill: #f59e0b;
}

.score-label {
  color: var(--azm-primary-dark);
  min-width: 6rem;
}
</style>
