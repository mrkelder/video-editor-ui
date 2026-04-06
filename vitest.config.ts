import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";

const isHeaded = process.env.VITEST_HEADED === "true";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      headless: !isHeaded,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
    },
  },
});
