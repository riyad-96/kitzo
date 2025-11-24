import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const umd = './src/kitzo/vanilla/index.umd.js';
const esm = './src/kitzo/vanilla/index.esm.js';
const react = './src/kitzo/react/index.jsx';

export default [
  {
    input: umd,
    output: {
      file: './dist/vanilla/vanilla.umd.js',
      format: 'umd',
      name: 'kitzo',
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: esm,
    output: {
      file: './dist/vanilla/vanilla.esm.js',
      format: 'esm',
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: react,
    output: {
      file: './dist/react/react.esm.js',
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
