/// <reference types="vitest" />
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      plugins: [
        visualizer({
          title: 'Plumejs example repo',
          open: false
        })
      ]
    }
  },
  server: {
    host: true,
    port: 3001,
    open: '/',
    watch: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest.setup.js'],
    deps: {
      inline: [/^(?!.*vitest).*$/]
    },
    coverage: {
      include: ['src/**'],
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      cleanOnRerun: true,
      reportsDirectory: 'coverage'
    }
  }
});
