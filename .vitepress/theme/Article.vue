<script setup>
import Date from './Date.vue'
import Author from './Author.vue'
import Ad from './Ad.vue'
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
  <article>
    <header class="pt-14 space-y-4">
      <p class="mono-label" style="color: var(--text-3)">
        <time :datetime="date?.time">{{ date?.string }}</time>
      </p>
      <h1 class="text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl md:text-5xl">
        {{ data.title }}
      </h1>
      <Author />
    </header>

    <div class="pb-16 xl:pb-20">
      <div class="border-t" style="border-color: var(--line)">
        <Content class="prose max-w-none pt-10 pb-8" />
        <div class="tile" style="overflow: hidden">
          <iframe src="https://leafphp.substack.com/embed" width="100%" height="320" frameborder="0"
            scrolling="no"></iframe>
        </div>
        <Ad />
      </div>

      <footer class="mt-10">
        <div class="grid sm:grid-cols-2 gap-px" style="background: var(--line); border: 1px solid var(--line)">
          <a v-if="prevPost" :href="prevPost.href" class="pager-tile">
            <span class="mono-label" style="color: var(--text-3)">← Previous article</span>
            <span class="pager-title">{{ prevPost.title }}</span>
          </a>
          <div v-else class="pager-tile" aria-hidden="true"></div>
          <a v-if="nextPost" :href="nextPost.href" class="pager-tile sm:text-right">
            <span class="mono-label" style="color: var(--text-3)">Next article →</span>
            <span class="pager-title">{{ nextPost.title }}</span>
          </a>
          <div v-else class="pager-tile" aria-hidden="true"></div>
        </div>
        <div class="pt-8">
          <a class="link mono-label" href="/">← Back to the blog</a>
        </div>
      </footer>
    </div>
  </article>
</template>

<style scoped>
.pager-tile {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 22px;
  background: var(--panel);
  min-height: 88px;
}

.pager-title {
  color: var(--text-1);
  font-weight: 600;
  font-size: 15px;
  line-height: 1.4;
  transition: color 150ms ease;
}

a.pager-tile:hover .pager-title {
  color: var(--brand);
}
</style>
