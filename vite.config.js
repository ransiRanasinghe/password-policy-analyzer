import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sets base path for GitHub Pages deployment. 
  // Replacing process.env.GITHUB_REPOSITORY name dynamically during build.
  base: process.env.NODE_ENV === 'production' ? '/password-policy-analyzer/' : '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})