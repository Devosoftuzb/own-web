// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-aos'],
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: "DevoSoft",
      link: [
        {
          rel:"preconnect",
          href:"https://fonts.googleapis.com"
        },
        {
          rel:"preconnect",
          href:"https://fonts.gstatic.com",
        },
        {
          rel:"stylesheet",
          href:"https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
      meta: [{ name: "author", content: "DevoSoft" }],
    },
  },
})