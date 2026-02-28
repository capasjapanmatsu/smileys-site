import { defineConfig } from 'vite'
import { writeFile } from 'node:fs/promises'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { SITEMAP_ROUTE_PATHS } from './src/app/routePaths'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://smileys.one',
      // Use routePaths as the single source of truth to avoid duplicate "/" entries
      // from dist HTML scanning + dynamicRoutes.
      extensions: [],
      dynamicRoutes: [...SITEMAP_ROUTE_PATHS],
      exclude: ['/404', '/404.html', '/samoyed-character', '/breeding-policy'],
      readable: true,
      generateRobotsTxt: true,
    }),
    {
      name: 'normalize-robots-txt',
      async closeBundle() {
        await writeFile(
          path.resolve(__dirname, 'dist/robots.txt'),
          'User-agent: *\nAllow: /\n\nSitemap: https://smileys.one/sitemap.xml\n',
          'utf8',
        )
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // 静的LP用ビルド最適化（コード分割で初期ロード軽量化）
  build: {
    // react-snap uses an older Chromium runtime; avoid optional chaining output.
    target: 'es2019',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['motion/react'],
        },
      },
    },
  },
})
