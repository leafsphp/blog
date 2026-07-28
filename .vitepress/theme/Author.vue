<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <dl class="pt-2 pb-8">
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul class="flex space-x-8 sm:space-x-12">
        <li class="flex items-center space-x-3">
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
