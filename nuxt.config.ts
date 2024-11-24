// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/fonts/georgia.css','~/assets/scss/normalize.scss', '~/assets/scss/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Herdgame',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: "Herd is an online Dj Battling Game project." },
        { name: 'keywords', content: "game, nft, team, herdgame, herd, fraktar, crypto, cryptocurrency, dj, music, battle" },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  routeRules: {
    "/": { prerender: true },
  },
})
