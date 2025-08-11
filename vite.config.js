import { defineConfig } from 'vite'
import { resolve }      from 'path'

export default defineConfig({
  build        : {
    outDir        : 'dist',          // cambia si prefieres otra carpeta
    emptyOutDir   : false,      // no borres todo si ya hay otros builds
    sourcemap     : true,
    target        : 'es2019',        // JS nativo moderno en navegadores
    minify        : false,           // ponlo en 'esbuild' si quieres minificar
    lib           : {
      entry    : resolve(__dirname, './src/cm/codemirror.source.js'),
      name     : 'GrapperCodeMirror', // nombre global para IIFE
      formats  : ['es'],   // ES module y IIFE (opcional)
      fileName : () => './src/cm/codemirror.js',
    },
    rollupOptions : {
      // Fuerza bundle único (sin code-splitting/dynamic chunks)
      output : {
        inlineDynamicImports : true,
        exports              : 'named',
        // Para el build ES, evita renombrados raros
        entryFileNames : (chunkInfo) => {
          // Mantén exactamente "codemirror.js" para el formato ES
          return chunkInfo.isEntry ? 'codemirror.js' : '[name].js'
        }
      },
      // No marques dependencias externas: queremos TODO dentro
      external : []
    }
  },
  resolve      : {
    // Vite ya resuelve módulos de Node para navegador;
    // estas opciones ayudan a evitar duplicados de CM6.
    dedupe : [
      '@codemirror/state',
      '@codemirror/view',
      '@codemirror/language'
    ]
  },
  optimizeDeps : {
    // Deja que Vite pre-procese deps si lo ve necesario
    esbuildOptions : {target : 'es2019'}
  }
})
