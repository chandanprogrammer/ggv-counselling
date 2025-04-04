import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { config } from 'dotenv';

// // Load environment variables from .env file
// config();

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api': 'http://localhost:3000',
    }
  },
  plugins: [react(), tailwindcss()],

  // Your Vite configuration
  // define: {
  //   'process.env': process.env
  // }
});
