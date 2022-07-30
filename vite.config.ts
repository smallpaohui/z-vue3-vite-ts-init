import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 引入jsx
import vueJsx from "@vitejs/plugin-vue-jsx";
// 引入svg图标组件
import svgLoader from "vite-svg-loader";
import { resolve } from "path";
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), vueJsx(), svgLoader()],
  server: {
    open: true,
    port: 8888,
    host: "0.0.0.0",
    proxy: {
      "/api": "http://150.158.41.119:8083/",
    },
  },
});
