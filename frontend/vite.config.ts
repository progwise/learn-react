import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTest.ts"],
  },
  server: {
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
});
