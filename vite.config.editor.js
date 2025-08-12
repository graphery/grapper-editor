import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    target: 'es2019',
    minify: true,
    // Bundle JS del editor:
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'GrapperEditor',
      formats: ['es'],
      fileName: () => 'editor.js'
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        exports: 'named'
      },
      external: []
    }
  }
})
