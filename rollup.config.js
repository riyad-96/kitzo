const umd = './src/index.umd.js';
const esm = './src/index.esm.js';

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
