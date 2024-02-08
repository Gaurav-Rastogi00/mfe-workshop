import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "detail-remote",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteApp": "./src/components/ItemDetails.vue",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
