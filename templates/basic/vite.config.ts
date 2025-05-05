import react from '@vitejs/plugin-react-swc'
import * as path from 'node:path'
import { defineConfig } from 'vitest/config'
import packageJson from './package.json' with { type: 'json' }
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import { transformWithEsbuild } from 'vite'

export const alias = {
  '@demo': resolve(__dirname, 'src/packages/demo'),
  '@': resolve(__dirname, 'src'),
}

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!/src\/.*\.js$/.exec(id)) return null

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 ** 2, // 5 MB
      },
      manifest: {
        name: 'Vite React RTKQuery Storybook App Template',
        short_name: 'VRA RTKQ Storybook Template',
        description:
          'A template for building frontend applications using Vite, React with TypeScript ReduxToolkit Query and Storybook.',
        icons: [
          {
            src: 'corner.svg',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'corner.svg',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'corner.svg',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
    }),
  ],
  resolve: { alias },

  base: '/',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  server: {
    port: 3000,
    hmr: {
      overlay: false,
    },
    watch: {
      usePolling: true,
    },
  },
  optimizeDeps: {
    force: true,
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@storybook/react-vite',
      '@storybook/addon-essentials',
    ],
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      },
    },
  },

  test: {
    root: import.meta.dirname,
    name: packageJson.name,
    environment: 'jsdom',

    typecheck: {
      enabled: true,
      tsconfig: path.join(import.meta.dirname, 'tsconfig.json'),
    },

    globals: true,
    watch: false,
    setupFiles: ['./src/setupTests.ts'],
  },
})
