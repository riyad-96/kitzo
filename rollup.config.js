import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const react = './src/kitzo/index.jsx';
const functions = './src/kitzo/functions.js';

export default [
  {
    input: functions,
    output: {
      file: './dist/functions/index.js',
      format: 'esm',
      sourcemap: true,
    },
  },
  {
    input: react,
    output: {
      file: './dist/react/index.js',
      format: 'esm',
      sourcemap: true,
    },
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
      resolve({ extensions: ['.js', '.jsx'] }),
      commonjs(),
      babel({
        presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx'],
      }),
    ],
  },
];
