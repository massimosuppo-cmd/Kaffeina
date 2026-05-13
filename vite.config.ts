import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "", "");
  return {
    base: '/Kaffeina/',
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'fix-repository-assets',
        transformIndexHtml(html) {
          return html.replaceAll('src="/assets/', 'src="assets/');
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, "./src"),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR === "true"
    }
  };
});
