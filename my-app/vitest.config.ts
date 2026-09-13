import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    coverage: {
      // Directs the coverage module to look specifically inside src
      include: ["src/**/*.{ts,tsx,js,jsx}"],
      exclude: ["src/main.tsx", "src/vite-env.d.ts"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
