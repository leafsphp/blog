<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'
</script>

<template>
  <ul>
    <div v-for="{ title, href, date, excerpt }, index of posts" :key="href">
      <li class="py-5 px-8 shadow-md mb-10 rounded-xl ring-1 ring-[rgba(62,175,124,.3)]">
        <article>
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a class="text-gray-900" :href="href">{{ title }}</a>
              </h2>
              <div v-if="excerpt" class="prose max-w-none text-gray-500" v-html="excerpt"></div>
            </div>
            <div class="text-base flex justify-between leading-6 font-medium">
              <a class="link" aria-label="read more" :href="href">Read more →</a>
              <Date :date="date" />
            </div>
          </div>
        </article>
      </li>

      <iframe v-if="index === 0" src="https://leafphp.substack.com/embed"
        class="ring-1 ring-[rgba(62,175,124,.3)]"
        style="display: #041D24; margin-bottom: 40px; border-radius: 12px;" width="100%" height="320" frameborder="0"
        scrolling="no"></iframe>
    </div>
  </ul>
</template>
