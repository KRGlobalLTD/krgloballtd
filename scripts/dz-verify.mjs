import { execSync } from 'child_process';
import { readFileSync } from 'fs';

// SAFE-GUARD: ensures Dark Zone additions stay monochrome
const allowed = new Set(['#000000', '#ffffff', '#111', '#161616', '#1f1f1f', '#e5e5e5', '#f5f5f5', '#2a2a2a']);

const files = execSync('git diff --name-only --diff-filter=ACM HEAD').toString().trim().split('\n').filter(Boolean);
let ok = true;

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const matches = text.match(/#([0-9a-fA-F]{3,6})/g) || [];
  for (const m of matches) {
    const hex = m.length === 4 ? `#${m[1]}${m[1]}${m[2]}${m[2]}${m[3]}${m[3]}` : m.toLowerCase();
    if (!allowed.has(hex)) {
      console.error(`Disallowed color ${m} in ${file}`);
      ok = false;
    }
  }
}

const css = readFileSync('src/index.css', 'utf8');
if (!css.includes('.dark-zone')) {
  console.error('Missing .dark-zone utilities in src/index.css');
  ok = false;
}

if (ok) {
  console.log('Dark Zone verification passed');
} else {
  process.exit(1);
}
