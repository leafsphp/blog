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
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
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
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-MG8M0KBY2E'
      }
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-MG8M0KBY2E');
      `
    ]
    // [
    //   'script',
    //   {
    //     src: 'https://giscus.app/client.js',
    //     'data-repo': 'leafsphp/blog',
    //     'data-repo-id': 'R_kgDOGmWb9w',
    //     'data-category': 'General',
    //     'data-category-id': 'DIC_kwDOGmWb984Ch-1p',
    //     'data-mapping': 'pathname',
    //     'data-strict': '0',
    //     'data-reactions-enabled': '1',
    //     'data-emit-metadata': '0',
    //     'data-input-position': 'top',
    //     'data-theme': 'preferred_color_scheme',
    //     'data-lang': 'en',
    //     'data-loading': 'lazy',
    //     crossorigin: 'anonymous',
    //     async: true
    //   }
    // ],
  ],
  vite: {
    build: {
      minify: 'terser'
    }
  }
})
