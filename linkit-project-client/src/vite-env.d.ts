/// <reference types="vite/client" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "redux-vendor": ["react-redux", "@reduxjs/toolkit"],
          "ui-vendor": ["framer-motion"],
          "utils-vendor": ["axios"],
          empresas: [
            "./src/components/Empresas/modulosEmpresas/moduloA/ModuloA",
            "./src/components/Empresas/modulosEmpresas/moduloB/moduloBH",
            "./src/components/Empresas/modulosEmpresas/moduloC/ModuloC",
            "./src/components/Empresas/modulosEmpresas/moduloD/ModuloD",
            "./src/components/Empresas/modulosEmpresas/moduloE/ModuloE",
            "./src/components/Empresas/modulosEmpresas/moduloF/ModuloF",
            "./src/components/Empresas/modulosEmpresas/moduloG/ModuloG",
            "./src/components/Empresas/modulosEmpresas/moduloH/ModuloH",
          ],
        },
      },
    },
  },
})

