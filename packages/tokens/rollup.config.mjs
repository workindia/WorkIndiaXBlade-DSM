import { babel as pluginBabel } from '@rollup/plugin-babel';
import pluginResolve from '@rollup/plugin-node-resolve';
import pluginCommonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: (id) => {
    // Keep @babel/runtime external
    return id === '@babel/runtime' || id.startsWith('@babel/runtime/');
  },
  plugins: [
    pluginResolve({ extensions: ['.ts', '.js'] }),
    pluginCommonjs(),
    pluginBabel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      extensions: ['.ts', '.js'],
    }),
  ],
};
