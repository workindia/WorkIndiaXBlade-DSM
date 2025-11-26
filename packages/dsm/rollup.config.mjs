import { babel as pluginBabel } from '@rollup/plugin-babel';
import pluginPeerDepsExternal from 'rollup-plugin-peer-deps-external';
import pluginResolve from '@rollup/plugin-node-resolve';
import pluginCommonjs from '@rollup/plugin-commonjs';

const externalDependencies = [
  '@razorpay/blade',
  '@workindia/tokens',
  '@babel/runtime',
];

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
    // Keep @razorpay/blade, @workindia/tokens, and @babel/runtime external
    return externalDependencies.some((dep) => id === dep || id.startsWith(`${dep}/`));
  },
  plugins: [
    pluginPeerDepsExternal(),
    pluginResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    pluginCommonjs(),
    pluginBabel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
  ],
};
