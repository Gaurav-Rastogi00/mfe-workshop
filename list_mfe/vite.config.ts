import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./RemoteApp": "./src/App.vue"
      },
      shared: ['vue']
  })
  ],
  build: {
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    target: "esnext"
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
