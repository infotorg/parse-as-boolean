import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/parse-as-boolean.js',
  output: [
    {
      file: 'dist/parse-as-boolean.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/parse-as-boolean.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/parse-as-boolean.umd.js',
      format: 'umd',
      name: 'parseAsBoolean',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
