// https://nuxt.com/docs/api/configuration/nuxt-config
// import yaml from '@rollup/plugin-yaml';
export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   devtools: { enabled: true },
   app: {
      head: {
         meta: [
            {
               name: 'google-site-verification',
               content: 's8PpDj31rC-iSAKtvqyv1guGDEmx7-Y-Qh8te23Tgnw'
            },
            {
               name: 'yandex-verification',
               content: 'baf88001a58d5f35'
            }
         ],
         link: [
            {
               rel: 'icon',
               type: 'image/png',
               href: '/favicon.png'
            }
         ],
         script: [
            {
               src: 'https://mc.yandex.ru/metrika/tag.js',
               async: true
            },
            {
               children: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                          m[i].l=1*new Date();
                          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                          
                          ym(98548155, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                          });`
            },
            {
               src: 'https://www.googletagmanager.com/gtag/js?id=G-M4B04J0W79',
               async: true
            },
            {
               children: `window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-M4B04J0W79');`
            }
         ]
      }
   },

   css: ['@/assets/styles/main.css'],
   modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/i18n', 'nuxt-swiper', '@pinia/nuxt'],

   runtimeConfig: {
      public: {
         apiBaseUrl: process.env.API_BASE_URL || 'https://admin.energymontajgroup.uz'
      }
   },

   build: {
      transpile: ['vue-toastification']
   },

   i18n: {
      locales: ['uz', 'ru'],
      defaultLocale: 'uz',
      vueI18n: './i18n.config.ts'
   },
   // vite: {
   //    plugins: [yaml()]
   // }
});
