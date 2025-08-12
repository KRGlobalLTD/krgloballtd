import fs from 'fs';
import path from 'path';

interface Config {
  dry: boolean;
  includeGlobs: string[];
  excludeGlobs: string[];
  maxChangedLinesPerFile: number;
}

function globToRegExp(glob: string): RegExp {
  const escaped = glob
    .replace(/[-/\\^$+?.()|[\]{}]/g, '\\$&')
    .replace(/\\\*\\\*/g, '.*')
    .replace(/\\\*/g, '[^/]*');
  return new RegExp('^' + escaped + '$');
}

function walk(dir: string, list: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, list); else list.push(full);
  }
  return list;
}

function matches(file: string, patterns: RegExp[]): boolean {
  return patterns.some((r) => r.test(file));
}

const args = process.argv.slice(2);
let configPath = '.codex-i18n.json';
let dryRun: boolean | undefined;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--config') configPath = args[++i];
  if (args[i] === '--dry') dryRun = true;
}

const cfg: Config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
if (dryRun === undefined) dryRun = cfg.dry;

const include = cfg.includeGlobs.map(globToRegExp);
const exclude = cfg.excludeGlobs.map(globToRegExp);

const files = walk('src').filter((f) => matches(f, include) && !matches(f, exclude));
const report: Array<{ file: string; line: number; snippet: string; suggestedKey: string; valueFR: string }> = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, idx) => {
    if (/t\(\s*['"`]/.test(line)) return;
    const regex = /(['"`])([^'"`]+)\1/g;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(line))) {
      const value = m[2].trim();
      if (!value) continue;
      const key = value.toLowerCase().replace(/[^a-z0-9]+/g, '.').replace(/\.+/g, '.');
      report.push({ file, line: idx + 1, snippet: line.trim(), suggestedKey: key, valueFR: value });
    }
  });
}

const outPath = path.join('scripts', 'i18n-report.json');
if (!dryRun) {
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
} else {
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
}

console.log(`i18n audit complete (${report.length} entries)`);
