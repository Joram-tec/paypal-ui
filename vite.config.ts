import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/paypal-ui/',
  plugins: [react()],
})
