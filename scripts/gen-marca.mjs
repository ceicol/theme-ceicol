// Genera dist/marca/*.svg: los logos de CEICOL optimizados con svgo, sin cambiar el dibujo.
// El original queda en src/marca/: son los vectores disponibles, contornos calcados de un mapa de bits, y
// una pasada mejor de svgo, o un vector nuevo, se hace aquí sin que los productos cambien nada.
// `npm run check:marca` comprueba el peso y que el dibujo no cambió.

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { optimize } from 'svgo';

const src = new URL('../src/marca/', import.meta.url);
const out = new URL('../dist/marca/', import.meta.url);
mkdirSync(out, { recursive: true });

const files = readdirSync(src).filter((f) => f.endsWith('.svg'));
for (const file of files) {
  const { data } = optimize(readFileSync(new URL(file, src), 'utf8'), { path: file, multipass: true });
  writeFileSync(new URL(file, out), data);
}
console.log(`✓ dist/marca/*.svg optimizados (${files.length})`);
