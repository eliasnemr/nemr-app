import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: "/",
  };

  // if (command !== "serve") {
  //   config.base = "/nemr-app/";
  // }

  return config;
});
