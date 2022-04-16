import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
  ],
  css: {
    modules: {
      generateScopedName: '[local]-[hash:base64:5]',
    },
  },
  test: {
    include: ['__tests__/*.tsx', '__tests__/*.{test, spec}.tsx'],
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@routes': resolve(__dirname, 'src/routes/index'),
      '@apis': resolve(__dirname, 'src/apis/index'),
      '@components': resolve(__dirname, 'src/components/index'),
      '@hooks': resolve(__dirname, 'src/hooks/index'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@stores': resolve(__dirname, 'src/stores/index'),
      '@utils': resolve(__dirname, 'src/utils/index'),
    },
  },
});
