import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
  server: {
    historyApiFallback: true, // Ensures React Router works in dev and production
  },
});
