import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v1: resolve(__dirname, 'v1.html'),
        'variant-b': resolve(__dirname, 'variant-b.html'),
        v2: resolve(__dirname, 'v2.html'),
        'v2-b': resolve(__dirname, 'v2-b.html'),
      },
    },
  },
});
