// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	srcDir: "src/",
	modules: ["@nuxtjs/tailwindcss"],
	tailwindcss: {
		cssPath: "~/assets/styles/main.css",
		viewer: false,
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
});
