// Genera dist/illustrations/<nombre>.svg, el espejo de <AppIllustration> para CSS / Astro y Tailwind.
// Se ejecuta en el build, DESPUÉS de tsup: pinta cada escena con el mismo componente que usa React, así
// que el SVG no puede divergir de lo que ve un producto con MUI. Se pega en línea, no con <img>: lo pinta
// illustrations.css, y una imagen externa no hereda el CSS de la página.

import { mkdirSync, writeFileSync } from 'node:fs';
import { createElement } from 'react';
import { prerender } from 'react-dom/static';

const { AppIllustration, ILLUSTRATION_NAMES } = await import('../dist/illustrations.mjs');

mkdirSync(new URL('../dist/illustrations/', import.meta.url), { recursive: true });
for (const name of ILLUSTRATION_NAMES) {
  // prerender espera a que cargue la escena diferida; renderToString pintaría el marcador de carga.
  const { prelude } = await prerender(createElement(AppIllustration, { name }));
  let html = '';
  for await (const chunk of prelude) html += Buffer.from(chunk).toString('utf8');
  const svg = /<svg[\s\S]*<\/svg>/.exec(html)?.[0];
  if (!svg || !svg.includes(`class="cei-ill cei-ill-s-${name}"`)) {
    console.error(`✗ La escena ${name} no se pintó`);
    process.exit(1);
  }
  writeFileSync(new URL(`../dist/illustrations/${name}.svg`, import.meta.url), `${svg}\n`);
}
console.log(`✓ dist/illustrations/*.svg generados (${ILLUSTRATION_NAMES.length})`);
