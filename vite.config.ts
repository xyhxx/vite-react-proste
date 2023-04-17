import {defineConfig} from 'vitest/config';
import {resolve} from 'path';
import react from '@vitejs/plugin-react-swc';
import {visualizer} from 'rollup-plugin-visualizer';
import {PluginOption} from 'vite';
import eslint from '@nabla/vite-plugin-eslint';

export default defineConfig(function ({mode}) {
  const plugins: [string, Record<string, any>][] = [];

  if (mode === 'production')
    plugins.push([
      'swc-plugin-react-remove-properties',
      {
        properties: ['data-testid'],
      },
    ]);

  return {
    base: './',
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
    plugins: [
      react({
        plugins,
      }),
      eslint(),
      visualizer({filename: './visualizer/index.html'}) as PluginOption,
    ],
    css: {
      modules: {
        generateScopedName: '[local]-[hash:base64:5]',
      },
    },
    test: {
      include: ['__tests__/*.tsx', '__tests__/*.{test, spec}.tsx'],
      environment: 'jsdom',
      setupFiles: './src/setupTest.ts',
    },
    resolve: {
      alias: {
        '@styles': resolve(__dirname, 'src/styles'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@routes': resolve(__dirname, 'src/routes'),
        '@apis': resolve(__dirname, 'src/apis'),
        '@components': resolve(__dirname, 'src/components'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@stores': resolve(__dirname, 'src/stores'),
        '@models': resolve(__dirname, 'src/models'),
        '@utils': resolve(__dirname, 'src/utils'),
      },
    },
  };
});
