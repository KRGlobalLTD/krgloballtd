import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
let apply = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--apply') apply = true;
}

const reportPath = path.join('scripts', 'i18n-report.json');
if (!fs.existsSync(reportPath)) {
  console.error('No i18n-report.json found. Run i18n-audit first.');
  process.exit(1);
}
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8')) as Array<{
  file: string;
  line: number;
  snippet: string;
  suggestedKey: string;
  valueFR: string;
}>;

if (!apply) {
  console.log('i18n-apply report only. Use --apply to modify files.');
  process.exit(0);
}

for (const entry of report) {
  const content = fs.readFileSync(entry.file, 'utf8');
  const target = entry.valueFR;
  const wrapped = `t('${entry.suggestedKey}', '${target.replace(/'/g, "\\'")}')`;
  const updated = content.replace(target, wrapped);
  fs.writeFileSync(entry.file, updated, 'utf8');
}

console.log('i18n apply complete.');
