<script setup>
import { Ghost, Instagram, Mail, MessageCircle, Music2, Phone, Twitter, Youtube } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import logoUrl from '../../assets/images/azm-logo.webp'
import { mockContact } from '../../data/mockData'

const contactLinks = [
  { label: 'واتساب', href: mockContact.whatsapp, icon: MessageCircle },
  { label: 'البريد الإلكتروني', href: `mailto:${mockContact.email}`, icon: Mail },
  { label: 'الهاتف: 0163850120', href: mockContact.phone, icon: Phone },
]

const socialLinks = [
  { label: 'تويتر', href: mockContact.social.twitter, icon: Twitter },
  { label: 'سناب شات', href: mockContact.social.snapchat, icon: Ghost },
  { label: 'انستغرام', href: mockContact.social.instagram, icon: Instagram },
  { label: 'يوتيوب', href: mockContact.social.youtube, icon: Youtube },
  { label: 'تيك توك', href: mockContact.social.tiktok, icon: Music2 },
]

const quickLinks = [
  { label: 'الرئيسية', to: { name: 'home' } },
  { label: 'الخدمات', to: { name: 'services' } },
  { label: 'طلباتي', to: { name: 'my-requests' } },
  { label: 'تسجيل الدخول', to: { name: 'login' } },
]
</script>

<template>
  <footer class="footer text-white">
    <div class="container py-4">
      <div class="row g-4">
        <div class="col-lg-4">
          <img class="footer-logo mb-3" :src="logoUrl" alt="شعار جمعية عزم" width="118" height="48" />
          <p class="footer-text mb-0">
            جمعية ذوي الإعاقة ببريدة «عزم» — منصة رقمية ميسرة لطلب الخدمات ومتابعة الطلبات بسهولة ووضوح.
          </p>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2">
          <h2 class="h6 fw-bold mb-3">روابط سريعة</h2>
          <ul class="list-unstyled d-grid gap-3 mb-0">
            <li v-for="link in quickLinks" :key="link.label">
              <RouterLink class="footer-link" :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <h2 class="h6 fw-bold mb-3">تواصل معنا</h2>
          <ul class="list-unstyled d-grid gap-3 mb-0">
            <li v-for="link in contactLinks" :key="link.label">
              <a class="footer-link gap-2" :href="link.href">
                <span class="icon-circle icon-on-dark footer-icon" aria-hidden="true">
                  <component :is="link.icon" :size="16" />
                </span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <h2 class="h6 fw-bold mb-3">حسابات الجمعية</h2>
          <ul class="list-unstyled d-grid gap-3 mb-0">
            <li v-for="link in socialLinks" :key="link.label">
              <a class="footer-link gap-2" :href="link.href" target="_blank" rel="noopener">
                <span class="icon-circle icon-on-dark footer-icon" aria-hidden="true">
                  <component :is="link.icon" :size="16" />
                </span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-3">
      <div class="container text-center">
        <p class="mb-0">جميع الحقوق محفوظة لجمعية ذوي الإعاقة ببريدة «عزم»</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--azm-primary-dark);
}

.footer-logo {
  background: #fff;
  border-radius: 10px;
  padding: 0.5rem 0.75rem;
  height: auto;
}

.footer-text {
  color: #d6f0f7;
  max-width: 340px;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.footer-link:hover,
.footer-link:focus {
  text-decoration: underline;
  color: #fff;
}

.footer-icon {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.18);
  color: #d6f0f7;
}
</style>
