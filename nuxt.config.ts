// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-aos', '@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "eng-US",
        iso: "eng-US",
        name: "Eng",
        file: "eng.json"
      },
      {
        code: "ru-RU",
        iso: "ru-RU",
        name: "Rus",
        file: "ru.json"
      },
      {
        code: "uz-UZ",
        iso: "uz-UZ",
        name: "Uzb",
        file: "uz.json"
      }
    ],
    defaultLocale: "eng-US",
    // vueI18n: {
    //   fallbackLocale: "eng-US",
    // },
  },
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: "DEVOSOFT | IT Company",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.png",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
      meta: [{ name: "author", content: "DEVOSOFT" }],
    },
  },
})