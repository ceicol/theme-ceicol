// Genera dist/marca/*.svg: los logos de CEICOL optimizados con svgo, sin cambiar el dibujo.
// La fuente queda en src/marca/, dibujada en vector limpio. svgo conserva el role="img" de la raíz, que por
// defecto quita, para que el nombre del logo se anuncie también cuando el SVG va en línea.
// `npm run check:marca` comprueba el peso, el nombre y que el dibujo no cambió.

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { optimize } from 'svgo';

const src = new URL('../src/marca/', import.meta.url);
const out = new URL('../dist/marca/', import.meta.url);
mkdirSync(out, { recursive: true });

const files = readdirSync(src).filter((f) => f.endsWith('.svg'));
for (const file of files) {
  const { data } = optimize(readFileSync(new URL(file, src), 'utf8'), {
    path: file,
    multipass: true,
    plugins: [{ name: 'preset-default', params: { overrides: { removeUnknownsAndDefaults: { keepRoleAttr: true } } } }],
  });
  writeFileSync(new URL(file, out), data);
}
console.log(`✓ dist/marca/*.svg optimizados (${files.length})`);
