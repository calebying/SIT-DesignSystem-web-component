/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [["nuxt-ssr-lit", { litElementPrefix: ["sit-"] }]],
  css: ["~/assets/css/main.css", "~/assets/css/test.css"],
  nitro: {
    moduleSideEffects: ["@sit-canvas/canvas-web-component"]
  },
  alias: {
    tslib: "tslib/tslib.es6.js"
  }
});
