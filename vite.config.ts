const path = require('path');
const { defineConfig } = require('vite');
import vue from '@vitejs/plugin-vue';

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/theme.ts'),
      name: 'theme',
      formats: ['es'], // adding 'umd' requires globals set to every external module
      fileName: (format) => `theme.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: false,
  },
});
