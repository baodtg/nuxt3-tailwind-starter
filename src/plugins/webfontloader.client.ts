export default defineNuxtPlugin(() => {
   import("webfontloader").then(({ default: WebFont }) => {
      WebFont.load({
         google: {
            families: ["Lato:300,400,500,700,900"],
         },
      })
   })
})
