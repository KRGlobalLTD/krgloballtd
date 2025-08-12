import fs from 'fs';
import path from 'path';

function readJSON(file: string) {
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

function writeJSON(file: string, data: unknown) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}

const pkgPath = path.resolve('package.json');
const pkg = readJSON(pkgPath);

let framework: 'next' | 'vite' | 'unknown' = 'unknown';
if (pkg.dependencies?.next || pkg.devDependencies?.next) {
  framework = 'next';
} else if (pkg.dependencies?.vite || pkg.devDependencies?.vite) {
  framework = 'vite';
}
console.log(`Framework detected: ${framework}`);

// Force Node 20
fs.writeFileSync('.nvmrc', '20\n');
fs.writeFileSync('.node-version', '20\n');

pkg.scripts = pkg.scripts || {};
if (!pkg.scripts.build) {
  pkg.scripts.build = framework === 'next' ? 'next build' : 'vite build';
  console.log(`Added build script: ${pkg.scripts.build}`);
}

pkg.scripts['codex:fix-deploy'] = 'tsx scripts/fix-deploy.ts';
console.log('Added script: codex:fix-deploy');
writeJSON(pkgPath, pkg);

// netlify.toml
let netlifyContent = '[build]\ncommand = "npm run build"\n';
if (framework === 'vite') {
  netlifyContent += 'publish = "dist"\n';
}
fs.writeFileSync('netlify.toml', netlifyContent);
console.log('Updated netlify.toml');

// Replace imports and gather env vars
const exts = ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'];
const modifiedFiles: string[] = [];
const envKeys = new Set<string>();
const selfPath = path.resolve('scripts/fix-deploy.ts');
function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const resolved = path.resolve(full);
    if (resolved === selfPath) continue;
    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'dist', 'build', '.turbo', '.next'].includes(entry.name)) continue;
      walk(full);
    } else if (exts.some(e => entry.name.endsWith(e))) {
      let content = fs.readFileSync(full, 'utf-8');
      if (content.includes('three/examples/jsm/')) {
        content = content.replace(/three\/examples\/jsm\//g, 'three-stdlib/');
        fs.writeFileSync(full, content);
        modifiedFiles.push(full);
      }
      const envRegex = /process\.env\.([A-Z0-9_]+)/g;
      let match;
      while ((match = envRegex.exec(content))) {
        envKeys.add(match[1]);
      }
    }
  }
}
walk('.');
if (modifiedFiles.length) {
  console.log('Replaced imports in: ' + modifiedFiles.join(', '));
}
// Warn for undefined env vars
for (const key of envKeys) {
  if (process.env[key] === undefined) {
    console.warn(`Warning: environment variable ${key} is not defined`);
  }
}

console.log('Files modified: ' + modifiedFiles.length);
