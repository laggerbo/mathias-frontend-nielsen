import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves a project site from /<repo-name>/, so the base
  // must match the repository name for asset URLs to resolve correctly.
  base: "/mathias-frontend-nielsen/",
});
