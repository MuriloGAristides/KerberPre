import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <- o caminho que você usa no navegador
  plugins: [react()],
})
