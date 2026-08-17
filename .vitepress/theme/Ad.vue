<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// session-scoped dismiss: gone for this visit, back next visit
const dismissed = ref(
  typeof window !== 'undefined' &&
  sessionStorage.getItem('leafBlogAdDismissed') === '1'
)

// only appears once the reader has actually started reading
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function dismiss() {
  dismissed.value = true
  sessionStorage.setItem('leafBlogAdDismissed', '1')
}
</script>

<template>
  <div v-if="!dismissed" class="ad-float" :class="{ 'is-visible': scrolled }">
    <button class="ad-close mono-label" type="button" aria-label="Dismiss" @click="dismiss">✕</button>
    <a
      href="https://thecreativeleaf.com"
      target="_blank"
      rel="noopener noreferrer"
      class="ad-tile tile group"
    >
      <img
        src="https://github.com/user-attachments/assets/f9bc3cae-5c34-43df-b138-fcaf28d03cda"
        alt="Leaf Studio"
        width="457"
        height="336"
        loading="lazy"
      />

      <div class="p-4">
        <span class="ad-chip mono-label">CREATIVE LEAF</span>
        <p class="ad-title !m-0 !mt-2 !mb-1">We build products too.</p>
        <p class="ad-copy !m-0 !mb-3">
          From the creators of Leaf PHP, a studio that's shipped frameworks and products used by millions. Let's build yours.
        </p>
        <span class="ad-cta inline-flex items-center gap-1.5 group-hover:gap-2.5">
          Start your project
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </a>
  </div>
</template>

<style scoped>
.ad-float {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 288px;
  z-index: 40;
  display: none;
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition: opacity 200ms ease, transform 200ms ease;
}

.ad-float.is-visible {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}

/* floating over content only where there is room beside the column */
@media (min-width: 1024px) {
  .ad-float {
    display: block;
  }
}

.ad-close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  width: 22px;
  height: 22px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  color: var(--text-2);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 0;
  padding: 0;
  font-size: 11px;
}

.ad-close:hover {
  color: var(--text-1);
}

.ad-tile {
  display: block;
  overflow: hidden;
  text-decoration: none;
}

.ad-tile img {
  display: block;
  width: 100%;
  height: 132px;
  object-fit: cover;
  border-bottom: 1px solid var(--line);
}

.ad-chip {
  color: var(--brand);
  display: inline-block;
}

.ad-title {
  color: var(--text-1);
  font-weight: 600;
  font-size: 14px;
}

.ad-copy {
  color: var(--text-2);
  font-size: 12.5px;
  line-height: 1.55;
}

.ad-cta {
  color: var(--brand);
  font-size: 12.5px;
  font-weight: 600;
  transition: gap 150ms ease;
}
</style>
