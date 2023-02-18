import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.tsx'),
      name: 'react-fixed-size-accordion',
      fileName: format => `react-fixed-size-accordion.${ format }.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },

  plugins: [react()],
})
