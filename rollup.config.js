const esm = './src/index.umd.js';
const umd = './src/index.esm.js';

export default [
  {
    input: umd,
    output: {
      file: './dist/kitzo.umd.js',
      format: 'umd',
      name: 'kitzo',
    },
  },
  {
    input: esm,
    output: {
      file: './dist/kitzo.esm.js',
      format: 'esm',
    },
  },
];
