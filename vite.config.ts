// app.config.ts
import { defineConfig } from '@tanstack/start/config'
import { cloudflareAdapter } from '@tanstack/start-adapter-cloudflare'

export default defineConfig({
  server: {
    preset: 'cloudflare-pages',
  },
})
