// Comprueba los logos publicados en dist/marca/ contra su fuente de src/marca/.
// Requiere haber corrido `npm run build`.
//
// 1) Ninguno pasa del tope de peso. Dibujados en vector limpio pesan 0,7 KB el isotipo y 15,9 KB el logo;
//    el calco que circulaba antes pesaba hasta 179 KB, y no vuelve a entrar sin que nadie lo vea.
// 2) Conservan su nombre: role="img" y aria-label="CEICOL" en la raíz.
// 3) La optimización no cambia el dibujo. Fuente y publicado se pintan con resvg a cuatro anchos (la quinta
//    parte de su tamaño, la mitad, el tamaño y el triple), y se cuentan los píxeles que cambian más de 40
//    niveles en algún canal: no puede haber más que el 0,05 % de la tinta en ninguno.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const MAX_BYTES = 20 * 1024;
const MAX_DIFF = 0.0005;
const ESCALAS = [0.2, 0.5, 1, 3];
const src = new URL('../src/marca/', import.meta.url);
const out = new URL('../dist/marca/', import.meta.url);
const errors = [];
const kb = (bytes) => `${(bytes / 1024).toFixed(1).replace('.', ',')} KB`;
const pct = (v) => `${(v * 100).toFixed(3).replace('.', ',')} %`;

const fuentes = readdirSync(src).filter((f) => f.endsWith('.svg'));
if (!fuentes.length) errors.push('src/marca/ no tiene logos');
for (const file of fuentes) {
  const published = new URL(file, out);
  if (!existsSync(published)) {
    errors.push(`Salida faltante: dist/marca/${file} (¿corriste build?)`);
    continue;
  }
  const before = readFileSync(new URL(file, src), 'utf8');
  const after = readFileSync(published, 'utf8');
  const bytes = statSync(published).size;
  if (bytes > MAX_BYTES) errors.push(`dist/marca/${file} pesa ${kb(bytes)}, sobre el tope de ${kb(MAX_BYTES)}`);
  const raiz = after.slice(0, after.indexOf('>'));
  if (!raiz.includes('role="img"') || !raiz.includes('aria-label="CEICOL"')) errors.push(`dist/marca/${file} perdió el role="img" o su aria-label`);

  const natural = new Resvg(before).width;
  let peor = 0;
  for (const escala of ESCALAS) {
    const width = Math.round(natural * escala);
    const [pa, pb] = [before, after].map((svg) => new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().pixels);
    if (pa.length !== pb.length) {
      errors.push(`dist/marca/${file} cambió de proporción a ${width} px`);
      continue;
    }
    let ink = 0;
    let diff = 0;
    for (let i = 0; i < pa.length; i += 4) {
      if (pa[i + 3] === 0 && pb[i + 3] === 0) continue;
      ink++;
      if (Math.max(...[0, 1, 2, 3].map((k) => Math.abs(pa[i + k] - pb[i + k]))) > 40) diff++;
    }
    const share = ink ? diff / ink : 1;
    peor = Math.max(peor, share);
    if (share > MAX_DIFF) errors.push(`dist/marca/${file} cambió el dibujo a ${width} px: se ve distinto el ${pct(share)} de la tinta`);
  }
  console.log(`  ${file}: ${kb(Buffer.byteLength(before))} → ${kb(bytes)}, se ve distinto como mucho el ${pct(peor)} de la tinta`);
}

if (errors.length) {
  console.error('✗ Marca ROTA:\n  - ' + errors.join('\n  - '));
  process.exit(1);
}
console.log(`✓ Marca OK (${fuentes.length} logos, todos bajo ${kb(MAX_BYTES)}, con su nombre y el mismo dibujo que su fuente)`);
