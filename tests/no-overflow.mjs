import { readFileSync } from 'fs';
import { join } from 'path';
import { JSDOM } from 'jsdom';

const html = readFileSync(join('dist', 'index.html'), 'utf8');
const dom = new JSDOM(html, { pretendToBeVisual: true, url: 'http://localhost' });
const { window } = dom;

const hasOverflow = window.document.body.scrollWidth > window.innerWidth;
if (hasOverflow) {
  console.error('Horizontal overflow detected');
  process.exit(1);
} else {
  console.log('No horizontal overflow detected');
}
