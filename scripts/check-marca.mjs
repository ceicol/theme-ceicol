// Comprueba los logos publicados en dist/marca/ contra sus originales de src/marca/.
// Requiere haber corrido `npm run build`.
//
// 1) Ninguno pasa del tope de peso. Los originales son calcos de entre 39 y 183 KB; optimizados quedan en
//    10–58 KB, y un calco nuevo de 180 KB no vuelve a entrar sin que nadie lo vea.
// 2) La optimización no cambia el dibujo. Original y optimizado se pintan al triple de su tamaño con resvg, y
//    se cuentan los píxeles con tinta que difieren en más de 8 niveles en algún canal: solo puede haberlos
//    en el antialias de los bordes, y como mucho en el 0,1 % de la tinta.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const MAX_BYTES = 64 * 1024;
const MAX_DIFF = 0.001;
const src = new URL('../src/marca/', import.meta.url);
const out = new URL('../dist/marca/', import.meta.url);
const errors = [];
const kb = (bytes) => `${(bytes / 1024).toFixed(1).replace('.', ',')} KB`;

const paint = (svg, width) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: width }, background: 'rgba(0,0,0,0)' }).render();

const originals = readdirSync(src).filter((f) => f.endsWith('.svg'));
if (!originals.length) errors.push('src/marca/ no tiene logos');
for (const file of originals) {
  const published = new URL(file, out);
  if (!existsSync(published)) {
    errors.push(`Salida faltante: dist/marca/${file} (¿corriste build?)`);
    continue;
  }
  const before = readFileSync(new URL(file, src), 'utf8');
  const after = readFileSync(published, 'utf8');
  const bytes = statSync(published).size;
  if (bytes > MAX_BYTES) errors.push(`dist/marca/${file} pesa ${kb(bytes)}, sobre el tope de ${kb(MAX_BYTES)}`);

  const width = Math.round(new Resvg(before).width * 3);
  const [a, b] = [paint(before, width), paint(after, width)];
  if (a.width !== b.width || a.height !== b.height) {
    errors.push(`dist/marca/${file} cambió de proporción: ${a.width}×${a.height} y ${b.width}×${b.height}`);
    continue;
  }
  const [pa, pb] = [a.pixels, b.pixels];
  let ink = 0;
  let diff = 0;
  for (let i = 0; i < pa.length; i += 4) {
    if (pa[i + 3] === 0 && pb[i + 3] === 0) continue;
    ink++;
    if (Math.max(...[0, 1, 2, 3].map((k) => Math.abs(pa[i + k] - pb[i + k]))) > 8) diff++;
  }
  const share = ink ? diff / ink : 1;
  if (share > MAX_DIFF) {
    errors.push(`dist/marca/${file} cambió el dibujo: difiere el ${(share * 100).toFixed(3).replace('.', ',')} % de la tinta, sobre el 0,1 %`);
  }
  console.log(`  ${file}: ${kb(Buffer.byteLength(before))} → ${kb(bytes)}, difiere el ${(share * 100).toFixed(3).replace('.', ',')} % de la tinta`);
}

if (errors.length) {
  console.error('✗ Marca ROTA:\n  - ' + errors.join('\n  - '));
  process.exit(1);
}
console.log(`✓ Marca OK (${originals.length} logos, todos bajo ${kb(MAX_BYTES)} y con el mismo dibujo que el original)`);
