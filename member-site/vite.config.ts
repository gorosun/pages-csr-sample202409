/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: false, // ソースマップの生成を無効化
  },
  test: {
    globals: true, // グローバルにテストユーティリティを提供
    environment: 'happy-dom', // 仮想DOMを使用することでブラウザの動作をエミュレート
    coverage: {
      provider: 'v8', // V8エンジンを使用したカバレッジの生成
      reporter: ['text', 'json', 'html'], // 生成するレポートのフォーマット
    },
  },
});
