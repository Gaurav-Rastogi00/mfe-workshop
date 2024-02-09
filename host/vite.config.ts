import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host-shell",
      remotes: {
        form: "http://localhost:4174/assets/remoteEntry.js",
        list: "http://localhost:4175/assets/remoteEntry.js",
        details: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["vue", "vue-router"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
