import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    minify: "terser",
    base:'/2d-portfolio'
  },
});
