import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/reactapp/",
  plugins: [react()],
  test: {
    // vitest configuration
    globals: true,
    environment: "jsdom",
  },
});
