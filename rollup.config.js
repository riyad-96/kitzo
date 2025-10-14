import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const umd = './src/vanilla/index.umd.js';
const esm = './src/vanilla/index.esm.js';
const react = './src/react/index.jsx';

export default [
  {
    input: umd,
    output: {
      file: './dist/kitzo.umd.js',
      format: 'umd',
      name: 'kitzo',
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: esm,
    output: {
      file: './dist/kitzo.esm.js',
      format: 'esm',
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: react,
    output: {
      file: './dist/react.esm.js',
      format: 'esm',
    },
    external: ['react', 'react-dom'],
    plugins: [
      resolve({ extensions: ['.js', '.jsx'] }),
      commonjs(),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx'],
      }),
    ],
  },
];
