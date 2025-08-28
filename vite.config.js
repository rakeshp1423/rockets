// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // useful for some environments
    port: 5173,
    // Use polling if file watchers are unreliable (WSL, network drives)
    watch: {
      usePolling: false,
      interval: 100,
    },
    // If browser can't connect to the HMR websocket, try specifying hmr host/protocol
    // hmr: { protocol: "ws", host: "localhost", port: 5173 }
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
