import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
// import ElementPlus from "unplugin-element-plus/vite";
export default defineConfig({
  plugins: [
    vue(),
    // ElementPlus(),
    // ...
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  server: {
    port: 5000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 这个resolve是添加的别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
})
