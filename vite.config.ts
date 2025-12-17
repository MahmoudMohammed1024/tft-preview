import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tft-preview/', // 👈 مهم جدا
  plugins: [react()],
})
