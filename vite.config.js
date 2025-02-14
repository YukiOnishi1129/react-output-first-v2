import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const repositoryName = "vue-output-first";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? `/${repositoryName}/` : "/",
});
