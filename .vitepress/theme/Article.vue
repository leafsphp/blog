<script setup>
import Date from './Date.vue'
import Author from './Author.vue'
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { data as posts } from '../posts.data'

const route = useRoute()
const { frontmatter: data } = useData()

if (typeof window !== 'undefined') {
  import('twitter-widgets').then((widgets) => {
    widgets.load()
  });
}

function findCurrentIndex() {
  return posts.findIndex((p) => {
    if (p.href === route.path && typeof p === 'object') {
      // console.log(p, 'p')
      return p
    }
  })
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()]?.date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<template>
  <article class="">
    <header class="pt-6 space-y-1 text-center">
      <Date :date="date" />
      <h1 class="
          text-3xl
          leading-9
          font-extrabold
          text-gray-900
          tracking-tight
          sm:text-4xl sm:leading-10
          md:text-5xl md:leading-14
        ">
        {{ data.title }}
      </h1>
    </header>

    <div class="
        divide-y
        divide-gray-200
        pb-16
        xl:pb-20
      ">
      <div class="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
        <Content class="prose max-w-none pt-10 pb-8" />
        <Author />
        <iframe src="https://leafphp.substack.com/embed"
          style="display: #041D24; margin-bottom: 20px; border-radius: 12px; border: none !important;" width="100%" height="320" frameborder="0"
          scrolling="no"></iframe>
      </div>

      <footer class="
          text-sm
          font-medium
          leading-5
          divide-y divide-gray-200
          xl:col-start-1 xl:row-start-2
        ">
        <div v-if="nextPost" class="py-8">
          <h2 class="text-xs tracking-wide uppercase text-gray-500">
            Next Article
          </h2>
          <div class="link">
            <a :href="nextPost.href">{{ nextPost.title }}</a>
          </div>
        </div>
        <div v-if="prevPost" class="py-8">
          <h2 class="text-xs tracking-wide uppercase text-gray-500">
            Previous Article
          </h2>
          <div class="link">
            <a :href="prevPost.href">{{ prevPost.title }}</a>
          </div>
        </div>
        <div class="pt-8">
          <a class="link" href="/">← Back to the blog</a>
        </div>
      </footer>
    </div>
  </article>
</template>
