import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Leaf Blog',
  description: 'The offical blog for Leaf PHP',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ],
  vite: {
    build: {
      minify: 'esbuild'
    }
  }
})
