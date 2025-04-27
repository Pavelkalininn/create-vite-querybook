import { defineConfig } from 'vitest/config'
import { alias } from './vite.config'

export default defineConfig({
  resolve: {
    alias,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules'],
    coverage: {
      all: false,
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'dist',
        'node_modules',
        'src/**/*.d.ts',
        'src/**/index.{js,jsx,ts,tsx}',
        'src/**/*.stories.{js,jsx,ts,tsx}',
        'src/**/*.test.{js,jsx,ts,tsx}',
      ],
    },
  },
})
