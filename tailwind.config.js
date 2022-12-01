/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: ["./src/**/*.{js,vue,ts}"],
   theme: {
      extend: {
         colors: {
            primary: "rgba(var(--color-primary), <alpha-value>)",
         },
      },
   },
   plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
