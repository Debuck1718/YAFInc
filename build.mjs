import { mkdirSync, cpSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
mkdirSync(dist, { recursive: true });

// Copy root html, css, js files
for (const file of readdirSync(process.cwd())) {
  if (file.endsWith('.html') || file === 'site.css' || file === 'site.js') {
    cpSync(join(process.cwd(), file), join(dist, file), { recursive: true });
  }
}

// Copy public directory
cpSync(join(process.cwd(), 'public'), join(dist, 'public'), { recursive: true });

console.log('Build completed: static files copied to dist/');
