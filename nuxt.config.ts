// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt'],
  alias: {
// "~" :"."
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: [
    '~/assets/css/style.css'
  ],
  ssr: true,
  devtools: { enabled: true }
})