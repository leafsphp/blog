<template>
  <div class="antialiased">
    <div class="border-b" style="border-color: var(--line)">
      <nav class="lg:max-w-screen-md mx-auto px-4 sm:px-6 xl:px-0 flex justify-between items-center py-5">
        <a class="flex items-center font-bold" style="color: var(--text-1)" href="/" aria-label="Leaf Blog">
          <img class="inline-block mr-2.5" style="width: 30px; height: 30px" alt="logo" src="https://leafphp.dev/logo-circle.png" />
          <span class="hidden md:inline text-[15px] tracking-tight">Leaf Blog</span>
        </a>
        <div class="flex items-center gap-5">
          <a href="#" aria-label="Toggle theme" @click.prevent="toggleMode">
            <SunIcon size="1.1x" style="color: var(--text-3)" />
          </a>
          <a class="mono-label nav-link" href="https://discord.gg/Pkrm9NJPE3">Discord</a>
          <a class="mono-label nav-link" href="https://leafphp.dev/support/">Sponsor</a>
          <a class="mono-label nav-link !text-[var(--brand)]" href="https://leafphp.dev" target="_blank"
            rel="noopener">Docs →</a>
        </div>
      </nav>
    </div>
    <main class="lg:max-w-screen-md mx-auto px-4 sm:px-6 xl:px-0">
      <Home v-if="isIndex" />
      <Article v-else />
    </main>
    <footer class="border-t mt-16" style="border-color: var(--line)">
      <div class="lg:max-w-screen-md mx-auto px-4 sm:px-6 xl:px-0 flex flex-wrap items-center justify-between gap-3 py-8">
        <span class="text-sm" style="color: var(--text-3)">Made with 🍃 by the Leaf team</span>
        <span class="mono-label" style="color: var(--text-3)">leafphp.dev</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import { SunIcon } from '@zhuowenli/vue-feather-icons'

if (typeof window !== 'undefined') {
  import('twitter-widgets').then((widgets) => {
    widgets.load()
  });
}

let isDark = (typeof window !== 'undefined' && (window.localStorage["isDark"] || false));

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/');

onMounted(() => {
  applyMode();
});

const applyMode = () => {
  const body = document.body;

  if (isDark === 'true' || isDark === true) {
    body.classList.remove("-light");
  } else {
    body.classList.add("-light");
  }
};

const toggleMode = () => {
  if (typeof window === "undefined") {
    return;
  }

  const newMode = !isDark;

  window.localStorage["isDark"] = newMode;
  isDark = newMode;

  applyMode();
};
</script>

<style scoped>
.nav-link {
  color: var(--text-3);
  transition: color 150ms ease;
}

.nav-link:hover {
  color: var(--text-1);
}
</style>
