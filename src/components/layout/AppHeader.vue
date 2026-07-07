<script setup>
import { LogOut, Menu, UserRound, UserRoundPlus, X } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import logoUrl from '../../assets/images/azm-logo.webp'
import { useAuthStore } from '../../stores/authStore'

const router = useRouter()
const authStore = useAuthStore()
const isOpen = ref(false)

const navItems = computed(() =>
  authStore.isAuthenticated
    ? [
        { to: { name: 'services' }, label: 'الخدمات' },
        { to: { name: 'my-requests' }, label: 'طلباتي' },
      ]
    : [
        { to: { name: 'home' }, label: 'الرئيسية' },
        { to: { name: 'services' }, label: 'الخدمات' },
      ],
)

function handleLogout() {
  authStore.logout()
  router.push({ name: 'home' })
}
</script>

<template>
  <header class="site-header bg-white border-bottom sticky-top">
    <a class="skip-link" href="#main-content">تخطي إلى المحتوى</a>
    <nav class="navbar navbar-expand-lg" aria-label="التنقل الرئيسي">
      <div class="container">
        <RouterLink class="navbar-brand d-flex align-items-center gap-2" :to="{ name: 'home' }">
          <img :src="logoUrl" alt="جمعية عزم" width="118" height="48" />
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          :aria-expanded="isOpen"
          aria-controls="main-navigation"
          aria-label="فتح أو إغلاق القائمة"
          @click="isOpen = !isOpen"
        >
          <component :is="isOpen ? X : Menu" :size="24" aria-hidden="true" />
        </button>

        <div id="main-navigation" class="collapse navbar-collapse" :class="{ show: isOpen }">
          <ul class="navbar-nav me-lg-4 mb-4 mb-lg-0 gap-lg-2">
            <li v-for="item in navItems" :key="item.label" class="nav-item">
              <RouterLink class="nav-link fw-bold" :to="item.to" @click="isOpen = false">
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
          <div class="d-flex flex-wrap align-items-center gap-3 ms-lg-auto">
            <template v-if="authStore.user">
              <span class="small text-muted-azm d-none d-md-inline">{{ authStore.user.name }}</span>
              <button class="btn btn-outline-azm fw-bold" type="button" @click="handleLogout">
                <LogOut :size="16" aria-hidden="true" />
                تسجيل الخروج
              </button>
            </template>
            <template v-else>
              <RouterLink class="btn btn-outline-azm fw-bold" :to="{ name: 'register' }">
                <UserRoundPlus :size="16" aria-hidden="true" />
                تسجيل جديد
              </RouterLink>
              <RouterLink class="btn btn-azm fw-bold" :to="{ name: 'login' }">
                <UserRound :size="16" aria-hidden="true" />
                تسجيل الدخول
              </RouterLink>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  box-shadow: 0 8px 24px rgba(31, 41, 55, 0.05);
}

@media (max-width: 991.98px) {
  .navbar {
    position: relative;
  }

  .navbar-collapse {
    position: absolute;
    inset-inline: 0;
    top: 100%;
    background: #fff;
    padding: 1.25rem;
    box-shadow: 0 16px 24px rgba(31, 41, 55, 0.1);
    max-height: calc(100vh - 72px);
    overflow-y: auto;
  }

  .navbar-nav {
    gap: 0.75rem;
  }

  .navbar-nav .nav-item + .nav-item {
    border-top: 1px solid var(--azm-border);
  }

  .navbar-toggler {
    min-width: 44px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}

.skip-link {
  position: absolute;
  inset-inline-start: 1rem;
  top: -5rem;
  background: var(--azm-primary-dark);
  color: #fff;
  padding: 0.75rem 1rem;
  z-index: 10000;
}

.skip-link:focus {
  top: 1rem;
}

.nav-link {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  color: var(--azm-text);
}

.nav-link.router-link-active {
  color: var(--azm-primary-dark);
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 8px;
  text-decoration-color: var(--azm-accent);
}
</style>
