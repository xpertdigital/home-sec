// vite.config.ts
export default defineConfig({
  plugins: [
    tanstackStart({
      spa: {
        enabled: true, // This is the key setting for Cloudflare Pages
      },
    }),
  ],
