const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

const packageJson = require('./package.json');

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ browser: true }),
    commonjs({ transformMixedEsModules: true }),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: ['react', 'react-dom'],
  onwarn(warning, warn) {
    // suppress "this is undefined" warnings
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
};

