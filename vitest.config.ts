import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'], // ADICIONE ESTA LINHA
    alias: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
  },
})