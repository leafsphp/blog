<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const stack = computed(() =>
  frontmatter.value.contributors
    ? [frontmatter.value.github, ...frontmatter.value.contributors]
    : []
)
</script>

<template>
  <dl class="pt-2 pb-8">
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul class="flex space-x-8 sm:space-x-12">
        <li v-if="stack.length" class="flex items-center space-x-4">
          <div class="flex items-center">
            <a
              v-for="(login, i) in stack"
              :key="login"
              :href="`https://github.com/${login}`"
              target="_blank"
              rel="noopener noreferrer"
              :title="login"
              class="relative block rounded-full"
              :style="{ zIndex: stack.length - i, marginLeft: i === 0 ? '0' : '-10px' }"
            >
              <img
                :src="`https://github.com/${login}.png?size=96`"
                :alt="`${login} avatar`"
                class="w-10 h-10 rounded-full"
                style="border: 2px solid var(--bg); box-shadow: 0 0 0 1px var(--line)"
              />
            </a>
          </div>
          <dl class="text-sm font-medium leading-5 whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd style="color: var(--text-1)">{{ frontmatter.author }}</dd>
            <dt class="sr-only">Contributors</dt>
            <dd class="mono-label" style="color: var(--text-2)">
              + {{ frontmatter.contributors.length }} contributors
            </dd>
          </dl>
        </li>
        <li v-else class="flex items-center space-x-3">
          <img
            v-if="frontmatter.github"
            :src="`https://github.com/${frontmatter.github}.png`"
            :alt="`${frontmatter.author} image`"
            class="w-10 h-10 rounded-full"
            style="border: 1px solid var(--line)"
          />
          <img
            v-else-if="frontmatter.twitter"
            :src="`https://avatars.io/twitter/${frontmatter.twitter}`"
            :alt="`${frontmatter.author} image`"
            class="w-10 h-10 rounded-full"
            style="border: 1px solid var(--line)"
          />
          <dl class="text-sm font-medium leading-5 whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd style="color: var(--text-1)">{{ frontmatter.author }}</dd>
            <dt v-if="frontmatter.twitter" class="sr-only">Twitter</dt>
            <dd v-if="frontmatter.twitter">
              <a
                :href="'https://twitter.com/' + frontmatter.twitter"
                target="_blank"
                rel="noopnener noreferrer"
                class="link mono-label"
                >{{ frontmatter.twitter }}</a
              >
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
