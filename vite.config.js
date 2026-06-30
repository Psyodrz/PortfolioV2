import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: '/PortfolioV2/',
    server: {
      proxy: {
        '/api/sendEmail': {
          target: 'https://api.resend.com/emails',
          changeOrigin: true,
          rewrite: (path) => '',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`
          }
        }
      }
    }
  }
})
