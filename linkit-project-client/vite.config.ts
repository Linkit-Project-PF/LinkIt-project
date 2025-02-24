import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["pdfjs-dist/build/pdf.worker.min.js"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pdfWorker: ["pdfjs-dist/build/pdf.worker.min.js"],
        },
      },
    },
  },
})

