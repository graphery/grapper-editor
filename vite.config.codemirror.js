import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'src/cm',
    emptyOutDir: false,
    sourcemap: true,
    target: 'es2019',
    minify: true,
    lib: {
      entry: resolve(__dirname, './src/cm/codemirror.source.js'),
      name: 'GrapperCodeMirror',
      formats: ['es'],
      fileName: () => 'codemirror.js'
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        exports: 'named',
        entryFileNames: (chunkInfo) =>
          chunkInfo.isEntry ? 'codemirror.js' : '[name].js'
      },
      external: []
    }
  },
  resolve: {
    dedupe: [
      '@codemirror/state',
      '@codemirror/view',
      '@codemirror/language'
    ]
  },
  optimizeDeps: {
    esbuildOptions: { target: 'es2019' }
  }
})
