import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/portfolio/',
   server: { fs: { deny: ['.env', '.env.*', '*.{crt,pem}', 'custom.secret'] } },
   quietDeps: true,
   build: {
     rollupOptions: {
       output: {
         manualChunks: {
           'vendor': ['react', 'react-dom', 'react-router', 'swiper', 'lenis'],
           'i18n': ['react-i18next', 'i18next'],
         },
       },
     },
     minify: 'terser',
     terserOptions: {
       compress: {
         drop_console: true,
       },
     },
   },
})
