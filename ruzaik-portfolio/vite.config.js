import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// change this to your repo name
export default defineConfig({
  plugins: [react()],
  base: '/ruzaik-portfolio/',   // <-- IMPORTANT
})
