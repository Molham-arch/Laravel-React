import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const path = (value) => fileURLToPath(new URL(value, import.meta.url));
export default defineConfig({
  root: path('./'),
  publicDir: false,
  plugins: [react()],
  resolve: { alias: [
    { find: '@/Layouts/MasterLayout', replacement: path('./Layout.jsx') },
    { find: '@inertiajs/react', replacement: path('./inertia.jsx') },
    { find: 'ziggy-js', replacement: path('./routes.js') },
    { find: '@', replacement: path('../resources/js') },
  ] },
  build: { outDir: path('../dist-demo'), emptyOutDir: true },
});
