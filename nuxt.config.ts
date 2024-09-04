export default defineNuxtConfig({
  compatibilityDate: '2024-08-28',
  devtools: { enabled: false },
  devServer: {
    port: 8000,

  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-quasar-ui',
    'nuxt-viewport',
  ],
  quasar: {
    components: {
      defaults: {
        QBtn: {
          dense: true,
          flat: true,
        },
        QInput: {
          dense: true,
        },
      },
    },
  },
  css: ['@/assets/style/main.scss'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  alias: {
    scss: '/assets/scss',
    components: '/components',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Наследие - тестовое задание',
    },
  },
})