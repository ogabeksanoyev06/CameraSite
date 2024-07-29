// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   devtools: { enabled: true },
   app: {
      head: {
         link: [
            {
               rel: 'icon',
               type: 'image/svg',
               href: '/favicon.svg'
            }
         ]
      },
      pageTransition: { name: 'page', mode: 'out-in' }
   },

   css: ['@/assets/styles/main.css'],
   modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/i18n', 'nuxt-swiper', '@pinia/nuxt'],

   runtimeConfig: {
      public: {
         apiBaseUrl: 'http://admin.fireprotection.uz'
      }
   },

   build: {
      transpile: ['vue-toastification']
   },

   i18n: {
      locales: ['uz', 'ru'],
      defaultLocale: 'uz',
      vueI18n: './i18n.config.ts'
   }
});
