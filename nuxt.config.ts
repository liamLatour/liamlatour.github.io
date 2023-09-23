// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    baseURL: '/PersonalPage',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/PersonalPage/favicon.ico" }]
  },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json'
          },{
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr.json'
          }
        ],
        lazy: true,
        baseUrl: 'https://liamlatour.github.io/PersonalPage/',
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        langDir: 'lang'
      }
    ]
  ],
  css: [
    '~/assets/index.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
})