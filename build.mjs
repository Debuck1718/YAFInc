import { mkdirSync, cpSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

// Copy root html, css, js files
for (const file of readdirSync(process.cwd())) {
  if (file.endsWith('.html') || file === 'site.css' || file === 'site.js') {
    cpSync(join(process.cwd(), file), join(dist, file), { recursive: true });
  }
}

// Copy static assets without relying on Vercel's special public-directory handling.
cpSync(join(process.cwd(), 'assets'), join(dist, 'assets'), { recursive: true });

console.log('Build completed: static files copied to dist/');
