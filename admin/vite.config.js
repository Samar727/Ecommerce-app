import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,
    
  }
})


// export default {
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3754',
//         changeOrigin: true,
//       },
//     },
//   },
// };