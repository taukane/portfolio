import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/portfolio/',
   server: { fs: { deny: ['.env', '.env.*', '*.{crt,pem}', 'custom.secret'] } }
})
