import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import chokidar from 'chokidar'
import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const isProduction = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['ramda'],
  plugins: [
    isProduction ? del({ targets: 'dist/*' }) : null,
    del({ targets: 'dist/*' }),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ],
  watch: {
    chokidar,
    include: 'src/**'
  }
}
