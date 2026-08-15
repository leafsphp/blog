<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'

const ecosystem = [
  { name: 'Leaf', tagline: 'The framework', url: 'https://leafphp.dev' },
  { name: 'Alchemy', tagline: 'QA from one config', url: 'https://alchemy.leafphp.dev' },
  { name: 'Seedling', tagline: 'Console apps', url: 'https://seedling.leafphp.dev' },
  { name: 'Auth', tagline: 'Authentication', url: 'https://auth.leafphp.dev' },
  { name: 'Db', tagline: 'Database', url: 'https://db.leafphp.dev' },
  { name: 'Fetch', tagline: 'HTTP client', url: 'https://fetch.leafphp.dev' },
  { name: 'Kata', tagline: 'Design systems for AI', url: 'https://kata.leafphp.dev' },
  { name: 'Hana JS', tagline: 'Frontend framework', url: 'https://hanabira.dev' },
]
</script>

<template>
  <div>
    <header class="pt-14 pb-12">
      <p class="eyebrow mb-4">The Leaf Blog</p>
      <h1 class="text-4xl sm:text-5xl font-bold leading-[1.05]">
        Notes from the people<br />making PHP fun again.
      </h1>
      <p class="mt-4 text-lg" style="color: var(--text-3)">
        Updates, tips &amp; opinions from the maintainers of Leaf PHP.
      </p>
      <p class="mono-label mt-6 eco-strip">
        <span style="color: var(--text-3)">// the family</span>
        <template v-for="(product, index) in ecosystem" :key="product.name">
          <a class="eco-link" :href="product.url" target="_blank" rel="noopener" :title="product.tagline">{{ product.name }}</a><span
            v-if="index < ecosystem.length - 1" style="color: var(--text-3)"> · </span>
        </template>
      </p>
    </header>

    <ul>
      <div v-for="{ title, href, date, excerpt }, index of posts" :key="href">
        <li class="tile mb-px">
          <article class="p-7 sm:p-8">
            <div class="space-y-4">
              <p class="mono-label" style="color: var(--text-3)">{{ date?.string }}</p>
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a class="post-title" :href="href">{{ title }}</a>
              </h2>
              <div v-if="excerpt" class="prose max-w-none" style="color: var(--text-3)" v-html="excerpt"></div>
              <div class="pt-1">
                <a class="link mono-label" aria-label="read more" :href="href">Read more →</a>
              </div>
            </div>
          </article>
        </li>

        <li v-if="index === 0" class="tile mb-px" style="overflow: hidden">
          <iframe src="https://leafphp.substack.com/embed" width="100%" height="320" frameborder="0"
            scrolling="no"></iframe>
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.eco-strip { line-height: 2; }
.eco-strip > span:first-child { margin-right: 10px; }
.eco-link { text-decoration: none; color: var(--text-1); transition: color 150ms ease; }
.eco-link:hover { color: var(--brand); }

.post-title {
  color: var(--text-1);
  transition: color 150ms ease;
}

.post-title:hover {
  color: var(--brand);
}
</style>
