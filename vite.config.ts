import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 1337,
  },
  base: "/przemusdev/",
  plugins: [react()],
});
