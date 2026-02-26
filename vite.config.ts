import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist',
      rollupTypes: true,
      include: ['src/lib'],
      cleanVueFileName: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/lib/react/index.ts'),
        fns: path.resolve(__dirname, 'src/lib/functions/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/lib',
        entryFileNames: ({ name }) => `${name}.js`,
      },
    },
  },
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, './src'),
      '@fns': path.resolve(__dirname, './src/lib/functions/index.ts'),
      '@react': path.resolve(__dirname, './src/lib/react/index.ts'),
    },
  },
});
