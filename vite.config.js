import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' agar aplikasi bisa dibuka dari sub-folder / subdomain website pribadi
export default defineConfig({ plugins: [react()], base: './' })
