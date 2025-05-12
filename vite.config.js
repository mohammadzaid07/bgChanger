import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/bgChanger/', // Add this line — use your repo name
  plugins: [react(), tailwindcss()],
})
