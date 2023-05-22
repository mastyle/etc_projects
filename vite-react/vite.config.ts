import * as path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@context',
        replacement: path.resolve(__dirname, 'src/context')
      },
      {
        find: '@provider',
        replacement: path.resolve(__dirname, 'src/provider')
      }
    ]
  },
  plugins: [react()]
});
