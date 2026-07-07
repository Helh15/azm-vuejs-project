<script setup>
import { GraduationCap, HandHeart, HeartPulse, Megaphone, Pause, Play } from 'lucide-vue-next'
import { ref } from 'vue'
import { mockGoals } from '../../data/mockData'

const icons = { HeartPulse, GraduationCap, HandHeart, Megaphone }
const isPaused = ref(false)
</script>

<template>
  <section class="goals" aria-label="أهداف جمعية عزم">
    <div class="container d-flex align-items-center gap-3">
      <button
        type="button"
        class="btn goals-toggle flex-shrink-0"
        :aria-pressed="isPaused"
        :aria-label="isPaused ? 'تشغيل شريط الأهداف' : 'إيقاف شريط الأهداف'"
        @click="isPaused = !isPaused"
      >
        <component :is="isPaused ? Play : Pause" :size="20" aria-hidden="true" />
      </button>
      <div class="goals-viewport flex-grow-1" :class="{ paused: isPaused }" tabindex="0">
        <div class="goals-track">
          <ul class="goals-group list-unstyled mb-0">
            <li v-for="goal in mockGoals" :key="goal.text" class="goal-item">
              <span class="icon-circle icon-on-dark goal-icon" aria-hidden="true">
                <component :is="icons[goal.icon]" :size="18" />
              </span>
              {{ goal.text }}
            </li>
          </ul>
          <ul class="goals-group list-unstyled mb-0" aria-hidden="true">
            <li v-for="goal in mockGoals" :key="goal.text" class="goal-item">
              <span class="icon-circle icon-on-dark goal-icon">
                <component :is="icons[goal.icon]" :size="18" />
              </span>
              {{ goal.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.goals {
  padding: 20px 0;
  background: var(--azm-primary-dark);
  color: #fff;
}

.goals-toggle {
  --bs-btn-color: #fff;
  --bs-btn-border-color: rgba(255, 255, 255, 0.6);
  --bs-btn-hover-bg: rgba(255, 255, 255, 0.15);
  --bs-btn-hover-border-color: #fff;
  --bs-btn-hover-color: #fff;
  width: 44px;
  border-radius: 999px;
}

.goals-viewport {
  overflow: hidden;
}

.goals-track {
  display: flex;
  width: max-content;
  animation: goals-scroll 40s linear infinite;
}

.goals-viewport.paused .goals-track,
.goals-viewport:hover .goals-track,
.goals-viewport:focus-within .goals-track,
.goals-viewport:focus .goals-track {
  animation-play-state: paused;
}

.goals-group {
  display: flex;
  gap: 3rem;
  flex-shrink: 0;
  padding-inline-end: 3rem;
}

.goal-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  white-space: nowrap;
}

.goal-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

@keyframes goals-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .goals-track {
    animation: none;
    width: auto;
    flex-wrap: wrap;
  }

  .goals-group[aria-hidden='true'] {
    display: none;
  }

  .goals-group {
    flex-wrap: wrap;
  }

  .goal-item {
    white-space: normal;
  }
}
</style>
