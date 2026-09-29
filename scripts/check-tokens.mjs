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
  'brandColors.success.dark': tokens.brandColors?.success?.dark,
  'brandColors.success.lighter': tokens.brandColors?.success?.lighter,
};
for (const [key, val] of Object.entries(required)) {
  if (val == null) errors.push(`Token faltante: ${key}`);
}

// 2) Salidas CSS generadas/copiadas y sus variables/roles clave
const outputs = {
  'dist/tokens.css': ['--cei-primary', '--cei-tech', '--cei-space-md', '--cei-radius-md'],
  'dist/semantic.css': ['--cei-bg', '--cei-fg', '--cei-line', '--cei-bg-glass', '--cei-fg-success', '--cei-fg-primary'],
  'dist/components.css': ['.cei-btn', '.cei-card', '.cei-glass', '.cei-badge--info'],
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

// 3) El texto del badge se lee sobre su velo, en claro y en oscuro.
//
// Se mide con lo que se publica: los valores salen de dist/tokens.css y
// dist/semantic.css, y el velo es el mismo `color-mix` al 14 % que pinta
// `.cei-badge--<tono>` (y al 22 %, el hover del Chip clicable). Hasta la
// 0.38.0 el texto era el tono crudo y daba entre 2,22 y 4,45:1 en claro.
const cssVars = (css, selector) => {
  const start = css.indexOf(selector);
  if (start < 0) return {};
  const block = css.slice(css.indexOf('{', start) + 1, css.indexOf('}', start));
  return Object.fromEntries(
    [...block.matchAll(/(--cei-[a-z0-9-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]),
  );
};
const read = (file) => (existsSync(resolve(root, file)) ? readFileSync(resolve(root, file), 'utf8') : '');
const rawVars = cssVars(read('dist/tokens.css'), ':root');
const semanticCss = read('dist/semantic.css');
const scheme = {
  light: cssVars(semanticCss, ':root {'),
  dark: { ...cssVars(semanticCss, ':root {'), ...cssVars(semanticCss, "[data-theme='dark']") },
};
const resolveColor = (value, roles, depth = 0) => {
  const ref = /^var\((--cei-[a-z0-9-]+)(?:,\s*[^)]*)?\)$/.exec(value ?? '');
  if (!ref || depth > 5) return value;
  return resolveColor(roles[ref[1]] ?? rawVars[ref[1]], roles, depth + 1);
};
const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const luminance = (c) =>
  c.map((v) => v / 255).map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const mix = (a, b, p) => a.map((v, i) => v * p + b[i] * (1 - p));
const badgeCss = read('dist/components.css');
for (const tone of ['primary', 'accent', 'success', 'warning', 'error', 'info']) {
  const selector = tone === 'primary' ? '.cei-badge {' : `.cei-badge--${tone} {`;
  const rule = badgeCss.includes(selector) ? badgeCss.slice(badgeCss.indexOf(selector)).split('}')[0] : '';
  if (!rule.includes(`var(--cei-fg-${tone}`)) {
    errors.push(`components.css: ${selector.replace(' {', '')} no pinta su texto con --cei-fg-${tone}`);
  }
  for (const [name, roles] of Object.entries(scheme)) {
    const text = resolveColor(`var(--cei-fg-${tone})`, roles);
    const raised = resolveColor('var(--cei-bg-raised)', roles);
    const main = rawVars[`--cei-${tone}`];
    if (![text, raised, main].every((c) => /^#[0-9a-f]{6}$/i.test(c ?? ''))) {
      errors.push(`No se pudo resolver el badge ${tone} en ${name}: texto ${text}, fondo ${raised}, tono ${main}`);
      continue;
    }
    for (const percent of [14, 22]) {
      const ratio = contrast(rgb(text), mix(rgb(main), rgb(raised), percent / 100));
      if (ratio < 4.5) errors.push(`Badge ${tone} en ${name}, velo al ${percent} %: ${ratio.toFixed(2)}:1, bajo 4,5`);
    }
  }
}
for (const [name, roles] of Object.entries(scheme)) {
  const ratio = contrast(rgb(resolveColor('var(--cei-fg-neutral)', roles)), rgb(resolveColor('var(--cei-bg-sunken)', roles)));
  if (ratio < 4.5) errors.push(`Badge neutral en ${name}: ${ratio.toFixed(2)}:1, bajo 4,5`);
}

if (errors.length) {
  console.error('✗ Contrato de tokens ROTO:\n  - ' + errors.join('\n  - '));
  process.exit(1);
}
console.log('✓ Contrato de tokens OK (exports + tokens.css + semantic.css + components.css + contraste del badge en claro y oscuro)');
