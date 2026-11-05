// Genera public/og.png (1200×627): la imagen de vista previa para LinkedIn y otras redes.
// Uso: npm run og
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const buildDir = join(here, 'build');
const out = resolve(here, '..', 'public', 'og.png');

// Mismo EAN-13 que el sitio (ver src/lib/ean.ts).
const L = ['0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'];
const R = L.map((c) => [...c].map((b) => (b === '0' ? '1' : '0')).join(''));
const G = R.map((c) => [...c].reverse().join(''));
const PARITY = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];
const base = '770202611050';
const sum = [...base].reduce((acc, c, i) => acc + Number(c) * (i % 2 ? 3 : 1), 0);
const number = base + ((10 - (sum % 10)) % 10);
let modules = '101';
for (let i = 1; i < 7; i++) modules += (PARITY[Number(number[0])][i - 1] === 'L' ? L : G)[Number(number[i])];
modules += '01010';
for (let i = 7; i < 13; i++) modules += R[Number(number[i])];
modules += '101';

const bars = [];
for (let i = 0; i < modules.length; ) {
  if (modules[i] !== '1') {
    i++;
    continue;
  }
  let w = 1;
  while (modules[i + w] === '1') w++;
  bars.push(`<i style="left:${(i / 95) * 100}%;width:${(w / 95) * 100}%"></i>`);
  i += w;
}

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anybody:wdth,wght@50..150,100..900&family=Martian+Mono:wght@400;600&display=swap">
<style>
  html, body { margin: 0; width: 1200px; height: 627px; overflow: hidden; }
  body { background: #ffdf00; color: #11184f; font-family: 'Anybody', Arial, sans-serif; position: relative; }
  .code { position: absolute; left: 64px; right: 64px; top: 56px; height: 300px; }
  .code i { position: absolute; top: 0; bottom: 0; background: #11184f; }
  h1 { position: absolute; left: 64px; right: 64px; top: 384px; margin: 0; font-size: 100px; line-height: 1; font-weight: 900; font-variation-settings: 'wdth' 95; white-space: nowrap; }
  p { position: absolute; left: 64px; top: 514px; margin: 0; font: 600 30px/1.2 'Martian Mono', monospace; }
</style></head>
<body>
  <div class="code">${bars.join('')}</div>
  <h1>Santiago García</h1>
  <p>Full-Stack · .NET + React</p>
</body></html>`;

const browser = [
  process.env.EDGE_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
]
  .filter(Boolean)
  .find((p) => existsSync(p));
if (!browser) {
  console.error('No se encontró Edge ni Chrome. Define EDGE_PATH con la ruta del navegador.');
  process.exit(1);
}

mkdirSync(buildDir, { recursive: true });
const htmlPath = join(buildDir, 'og.html');
writeFileSync(htmlPath, html, 'utf8');
execFileSync(browser, [
  '--headless',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1200,627',
  '--virtual-time-budget=5000',
  `--screenshot=${out}`,
  `file:///${htmlPath.replace(/\\/g, '/')}`,
]);
console.log(`✓ ${out}`);
