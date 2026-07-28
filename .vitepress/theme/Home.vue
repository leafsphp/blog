<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'
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
.post-title {
  color: var(--text-1);
  transition: color 150ms ease;
}

.post-title:hover {
  color: var(--brand);
}
</style>
