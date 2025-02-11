import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import electron from 'vite-plugin-electron';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        entry: 'electron/main.ts',
        vite: {
          build: {
            outDir: 'dist/',
            rollupOptions: {
              output: {
                format: 'es',
              },
            },
          },
        },
      },

      {
        entry: 'electron/preload.ts',
        vite: {
          build: {
            outDir: 'dist/',
            rollupOptions: {
              output: {
                format: 'cjs',
              },
            },
            lib: {
              entry: 'electron/preload.ts',
              formats: ['cjs'],
              fileName: () => 'preload.js',
            },
          },
        },
      },
    ]),
    tsConfigPaths(),
  ],

  server: {
    port: Number(process.env.VITE_PORT) || 8888,
  },

  css: {
    postcss: './postcss.config.js',
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
