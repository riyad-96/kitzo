import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist', // Explicitly set output to dist
      insertTypesEntry: true,
      rollupTypes: true, // Bundles types to keep the root clean
      staticImport: true,
      include: ['src/lib'],
      copyDtsFiles: false, // Prevents copying extra files into src
      cleanVueFileName: true,
    }),
  ],
  build: {
    // This clears the dist folder before every build
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/lib/react/index.ts'),
        fns: resolve(__dirname, 'src/lib/functions/index.ts'),
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
      '@': path.resolve(__dirname, './src'),
      '@react': path.resolve(__dirname, './src/lib/react/index.ts'),
    },
  },
});
