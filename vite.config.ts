import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Função para gerar sitemap.xml automaticamente
function generateSitemapPlugin() {
  return {
    name: 'generate-sitemap',
    closeBundle() {
      const DOMAIN = 'https://spinespecialist.com.br';
      const today = new Date().toISOString().split('T')[0];

      const routes = [
        { path: '/', changefreq: 'weekly', priority: '1.0' },
        { path: '/artigos', changefreq: 'weekly', priority: '0.8' },
        { path: '/videos', changefreq: 'weekly', priority: '0.8' },
        { path: '/audios', changefreq: 'weekly', priority: '0.8' },
        { path: '/notas', changefreq: 'daily', priority: '0.8' },
        // Service SEO pages - indexable
        { path: '/quiropraxia', changefreq: 'monthly', priority: '0.7' },
        { path: '/osteopatia', changefreq: 'monthly', priority: '0.7' },
        { path: '/terapias-manuais', changefreq: 'monthly', priority: '0.7' },
      ];

      const urls = routes
        .map(
          (route) => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
        )
        .join('\n');

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

      const distPath = path.resolve(__dirname, 'dist');
      if (fs.existsSync(distPath)) {
        fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap, 'utf-8');
        console.log('✓ sitemap.xml gerado automaticamente!');
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && generateSitemapPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
