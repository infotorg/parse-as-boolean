import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/parse-as-boolean.js',
  output: [
    {
      file: 'dist/parse-as-boolean.cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/parse-as-boolean.esm.js',
      exports: 'named',
      format: 'esm',
    },
    {
      file: 'dist/parse-as-boolean.umd.js',
      format: 'umd',
      name: 'parseAsBoolean',
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
