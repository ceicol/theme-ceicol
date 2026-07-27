// Parity check MUI — evita drift entre los tokens y la integración MUI.
// Regla: todo color de marca con forma de paleta (tiene `.main`) que NO sea
// un color estándar de MUI debe estar (a) en el augment de tipos y (b)
// cableado en la paleta del tema. Si agregas un color y olvidas MUI, falla.
//
// Requiere `npm run build` (lee dist/tokens.mjs).

import { readFileSync } from 'node:fs';
import { brandColors } from '../dist/tokens.mjs';

const muiTypes = readFileSync(new URL('../src/mui-types.ts', import.meta.url), 'utf8');
const themeSrc = readFileSync(new URL('../src/theme.ts', import.meta.url), 'utf8');

// Colores que MUI define nativamente (no requieren augment de tipos).
const MUI_STANDARD = new Set(['primary', 'secondary', 'success', 'warning', 'error', 'info']);
// Grupos que tienen `main` por compat pero NO son colores de paleta,
// sino estructuras estándar de MUI (TypeBackground, TypeText, etc.).
const NOT_PALETTE_COLOR = new Set(['background', 'text', 'common', 'grey', 'divider', 'action']);

const errors = [];
for (const [group, val] of Object.entries(brandColors)) {
  if (NOT_PALETTE_COLOR.has(group)) continue;
  if (!val || typeof val !== 'object' || !('main' in val)) continue; // solo colores tipo-paleta
  const inTheme = new RegExp(`\\b${group}:\\s*\\{`).test(themeSrc);
  if (!inTheme) errors.push(`El color "${group}" (con .main) no está cableado en la paleta (src/theme.ts).`);
  if (MUI_STANDARD.has(group)) continue; // nativo de MUI: no necesita augment
  const inTypes = new RegExp(`\\b${group}\\??:\\s*(PaletteColor|SimplePaletteColorOptions)`).test(muiTypes);
  if (!inTypes) errors.push(`El color "${group}" no está en el augment de tipos MUI (src/mui-types.ts).`);
}

if (errors.length) {
  console.error('✗ Parity MUI ROTO:\n  - ' + errors.join('\n  - '));
  process.exit(1);
}
console.log('✓ Parity MUI OK (cada color de marca está en la paleta y en el augment de tipos)');
