import {defineConfig} from 'vitest/config';
import {resolve} from 'path';
import react from '@vitejs/plugin-react-swc';
import {visualizer} from 'rollup-plugin-visualizer';
import {chunkSplitPlugin} from 'vite-plugin-chunk-split';
import {PluginOption} from 'vite';
import eslint from '@nabla/vite-plugin-eslint';

export default defineConfig(function(mode) {
  const env = mode.command;

  const reactPlugins: [string, Record<string, any>][] = [];
  env === 'build' && reactPlugins.push(['swc-plugin-react-remove-properties', {}]);

  return {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },
    plugins: [
      react({
        plugins: reactPlugins,
      }),
      eslint(),
      visualizer({filename: './visualizer/index.html'}) as PluginOption,
      chunkSplitPlugin({
        strategy: 'default',
        customSplitting: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      }) as PluginOption,
    ],
    css: {
      modules: {
        generateScopedName: '[local]-[hash:base64:5]',
      },

    },
    test: {
      include: ['src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
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
