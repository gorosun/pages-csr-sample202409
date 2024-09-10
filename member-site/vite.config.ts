import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // TypeScriptのエイリアスをサポート
  ],
  build: {
    sourcemap: false, // ソースマップの生成を無効化
  }
})