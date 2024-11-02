import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "src", dest: "src" },
        { src: "public", dest: "public" },
      ],
    }),
  ],
});
