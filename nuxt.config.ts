import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   runtimeConfig: {
      apiSecret: "",
      public: {
         API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL, // Or a default value
      },
   },
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1.0",
         title: "My App",
         htmlAttrs: {
            lang: "en-US",
         },
         meta: [
            // <meta name="description" content="My amazing site">
            { name: "description", content: "My amazing site." },
         ],
         link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      },
   },
   ssr: false,
   srcDir: "src/",
   imports: {
      dirs: [
         // scan all modules within given directory
         "composables/**",
      ],
   },
   // Modules
   modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
   tailwindcss: {
      cssPath: "~/assets/styles/main.css",
      viewer: false,
   },
   // @ts-ignore
   i18n: {
      strategy: "no_prefix",
      locales: [
         {
            code: "en",
            file: "en-US.json",
         },
      ],
      lazy: true,
      langDir: "langs",
      defaultLocale: "en",
   },
   vite: {
      plugins: [svgLoader()],
   },
})
