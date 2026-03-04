//import { defineConfig } from "vite";
/*import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));*/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// This configuration is updated to correctly handle GitHub Pages deployment.
export default defineConfig(({ mode }) => ({
  // CRITICAL FIX: The 'base' property must be set to your repository name
  // for GitHub Pages deployment (since the site is served from a subdirectory).
  // IMPORTANT: Use '/profile/' as the repository name you are deploying to.
  base: "/profile/", // <--- 🌟 FIX APPLIED HERE

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));