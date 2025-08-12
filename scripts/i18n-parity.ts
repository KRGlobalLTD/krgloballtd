import fs from 'fs';
import path from 'path';

function readJSON(p: string) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8')) as Record<string, unknown>;
  } catch {
    return {};
  }
}

function flatten(obj: Record<string, unknown>, prefix = ''): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v && !Array.isArray(v)) {
      Object.assign(out, flatten(v as Record<string, unknown>, key));
    } else {
      out[key] = v;
    }
  }
  return out;
}

const frPath = path.join('src', 'i18n', 'fr.json');
const enPath = path.join('src', 'i18n', 'en.json');
const fr = flatten(readJSON(frPath));
const en = flatten(readJSON(enPath));

const missingInEn: string[] = [];
for (const k of Object.keys(fr)) {
  if (!(k in en)) missingInEn.push(k);
}

if (missingInEn.length) {
  console.log('Missing keys in en:', missingInEn.join(', '));
  for (const k of missingInEn) en[k] = fr[k];
} else {
  console.log('FR and EN dictionaries are in parity.');
}

const sorted = Object.keys(en)
  .sort()
  .reduce<Record<string, unknown>>((acc, key) => {
    const segs = key.split('.');
    let obj: Record<string, unknown> = acc;
    for (let i = 0; i < segs.length - 1; i++) {
      obj[segs[i]] = (obj[segs[i]] as Record<string, unknown> | undefined) || {};
      obj = obj[segs[i]] as Record<string, unknown>;
    }
    obj[segs[segs.length - 1]] = en[key];
    return acc;
  }, {});

fs.mkdirSync(path.dirname(enPath), { recursive: true });
fs.writeFileSync(enPath, JSON.stringify(sorted, null, 2));
