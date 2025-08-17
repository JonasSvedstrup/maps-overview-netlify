// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  experimental: { appManifest: false },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@sentry/nuxt/module',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  compatibilityDate: '2024-12-18',

  sentry: {
    sourceMapsUploadOptions: {
      org: 'jonas-svedstrup',
      project: 'maps-overview',
    },

    autoInjectServerSentry: 'top-level-import',
  },

  sourcemap: {
    client: 'hidden',
  },
});