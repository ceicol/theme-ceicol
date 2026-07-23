// Genera dist/tokens.css (custom properties) desde los tokens compilados.
// Se ejecuta en el build, DESPUÉS de tsup, leyendo dist/tokens.mjs — así
// el CSS siempre refleja la misma fuente de verdad que el tema MUI.

import { writeFileSync } from 'node:fs';
import {
  brandColors,
  spacingConstants,
  borderRadius,
  shadows,
  transitionStyles,
  fontFamilies,
} from '../dist/tokens.mjs';

const lines = [
  '/* CEICOL design tokens — generado desde theme-ceicol. NO editar a mano. */',
  ':root {',
];

// ── Color ── (main → --cei-{grupo}; resto → --cei-{grupo}-{sub})
for (const [group, val] of Object.entries(brandColors)) {
  for (const [k, v] of Object.entries(val)) {
    const name = k === 'main' ? `--cei-${group}` : `--cei-${group}-${k}`;
    lines.push(`  ${name}: ${v};`);
  }
}

const flat = [
  ['space', spacingConstants],
  ['radius', borderRadius],
  ['shadow', shadows],
  ['transition', transitionStyles],
  ['font', fontFamilies],
];
for (const [prefix, obj] of flat) {
  lines.push('');
  for (const [k, v] of Object.entries(obj)) {
    lines.push(`  --cei-${prefix}-${k}: ${v};`);
  }
}

lines.push('}', '');
writeFileSync(new URL('../dist/tokens.css', import.meta.url), lines.join('\n'));
console.log('✓ dist/tokens.css generado');
