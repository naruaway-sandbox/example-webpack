import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "dist-vite",
  },
  plugins: [
    // @ts-expect-error: the default export of '@vitejs/plugin-react' is broken when the app's package.json has "type: module"
    react(),
  ],
});
