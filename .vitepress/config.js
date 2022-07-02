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
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'leaf, leaf3, leaf php, leaf php framework, leaf blog, php, php5, php7, opensource, open-source, components, leaf tutorial, project'
      }
    ],
    [
      'meta',
      {
        name: 'robots',
        content: 'index, sollow, all'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:site',
        content: '@leafphp'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    [
      'meta',
      {
        name: 'og:type',
        content: 'website'
      }
    ],
    [
      'meta',
      {
        name: 'og:image',
        content:
          'https://repository-images.githubusercontent.com/214705101/0ff19323-d2c5-46f5-a582-0b1f3a6eabcc'
      }
    ]
  ],
  vite: {
    build: {
      minify: 'terser'
    }
  }
})
