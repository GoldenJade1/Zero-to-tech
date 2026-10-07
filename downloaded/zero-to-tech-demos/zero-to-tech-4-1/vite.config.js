import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// Derive absolute paths from this file's own location, so `vite` works no matter
// which directory you launch it from.
const r = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  // Reference built assets relatively (./assets/...), so dist/ runs from any
  // sub-path or any static server.
  base: "./",

  server: {
    host: true, // listen on 0.0.0.0 so a Windows browser can reach the WSL dev server
    port: 5173,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      // Multi-page app: BOTH html files must be listed as entries,
      // otherwise the missing one is simply not emitted.
      input: {
        index: r("index.html"),
        textLab: r("text-lab.html"),
      },
    },
  },
});
