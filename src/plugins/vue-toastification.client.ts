import Toast, { PluginOptions } from "vue-toastification"

export default defineNuxtPlugin((nuxtApp) => {
   const options: PluginOptions = {
      // You can set your default options here
      timeout: 5000,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      hideProgressBar: true,
      newestOnTop: true,
      transition: "Vue-Toastification__fade",
   }
   nuxtApp.vueApp.use(Toast, options)
})
