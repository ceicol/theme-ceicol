// Contract test de tokens — falla si un grupo/salida esperado desaparece.
// Protege a los consumidores de remociones accidentales (breaking) antes de publicar.
// Requiere haber corrido `npm run build` (lee dist/).

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];

// 1) Exports JS de tokens (fuente para MUI y Tailwind)
const tokens = await import(resolve(root, 'dist/tokens.mjs')).catch((e) => {
  errors.push(`No se pudo importar dist/tokens.mjs (¿corriste build?): ${e.message}`);
  return {};
});

const required = {
  'brandColors.primary.main': tokens.brandColors?.primary?.main,
  'brandColors.accent.main': tokens.brandColors?.accent?.main,
  'brandColors.tech.main': tokens.brandColors?.tech?.main,
  'brandColors.surface.brand': tokens.brandColors?.surface?.brand,
  'brandColors.text.body': tokens.brandColors?.text?.body,
  'spacingConstants.xxs': tokens.spacingConstants?.xxs,
  'spacingConstants.md': tokens.spacingConstants?.md,
  'borderRadius.xs': tokens.borderRadius?.xs,
  'borderRadius.md': tokens.borderRadius?.md,
  'fontSizes.body': tokens.fontSizes?.body,
  'fontSizes.xs': tokens.fontSizes?.xs,
  'shadows.glow': tokens.shadows?.glow,
  'shadows.glowTech': tokens.shadows?.glowTech,
};
for (const [key, val] of Object.entries(required)) {
  if (val == null) errors.push(`Token faltante: ${key}`);
}

// 2) Salidas CSS generadas/copiadas y sus variables/roles clave
const outputs = {
  'dist/tokens.css': ['--cei-primary', '--cei-tech', '--cei-space-md', '--cei-radius-md'],
  'dist/semantic.css': ['--cei-bg', '--cei-fg', '--cei-line', '--cei-bg-glass'],
  'dist/components.css': ['.cei-btn', '.cei-card', '.cei-glass'],
  'dist/tokens.json': ['"$value"', '"color"', '"semantic"', '"$type"'],
  'dist/tailwind.cjs': ['module.exports', 'colors', 'boxShadow'],
};
for (const [file, needles] of Object.entries(outputs)) {
  const path = resolve(root, file);
  if (!existsSync(path)) {
    errors.push(`Salida faltante: ${file} (¿corriste build?)`);
    continue;
  }
  const css = readFileSync(path, 'utf8');
  for (const needle of needles) {
    if (!css.includes(needle)) errors.push(`${file} no contiene "${needle}"`);
  }
}

if (errors.length) {
  console.error('✗ Contrato de tokens ROTO:\n  - ' + errors.join('\n  - '));
  process.exit(1);
}
console.log('✓ Contrato de tokens OK (exports + tokens.css + semantic.css + components.css)');
