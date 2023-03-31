import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { getExternals } from '@peterek/rollup-externals'
import { peerDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'helpers',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: getExternals(peerDependencies)
    },
    sourcemap: true,
    target: 'esnext',
    minify: true
  },
  plugins: [dts()]
})
