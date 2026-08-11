// Genera dist/tailwind.cjs — un preset de Tailwind desde los MISMOS tokens.
// El consumidor: presets: [require('theme-ceicol/tailwind')].
// Colores de marca/escala → valores concretos (soportan modificador de opacidad).
// Roles semánticos → var(--cei-*) (voltean con el tema).

import { writeFileSync } from 'node:fs';
import {
  brandColors,
  spacingConstants,
  borderRadius,
  shadows,
  fontFamilies,
  fontSizes,
  semanticRoles,
  animations,
} from '../dist/tokens.mjs';

const kebab = (s) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

// Colores de marca/estado/superficie (concretos)
const COLOR_GROUPS = ['primary', 'accent', 'tech', 'success', 'warning', 'error', 'info', 'contrast', 'surface', 'cta', 'link'];
const colors = {};
for (const g of COLOR_GROUPS) {
  const val = brandColors[g];
  if (!val) continue;
  const obj = {};
  for (const [k, v] of Object.entries(val)) obj[k === 'main' ? 'DEFAULT' : kebab(k)] = v;
  colors[g] = obj;
}
// Roles semánticos de color → var() (theme-aware). Elevación va a boxShadow.
for (const grp of semanticRoles) {
  for (const name of Object.keys(grp.roles)) {
    if (name.startsWith('elevation')) continue;
    colors[name] = `var(--cei-${name})`;
  }
}

const spacing = Object.fromEntries(Object.entries(spacingConstants).map(([k, v]) => [k, v]));
const radius = Object.fromEntries(Object.entries(borderRadius).map(([k, v]) => [k, v]));
const fontSize = Object.fromEntries(Object.entries(fontSizes).map(([k, v]) => [k, v]));
const fontFamily = Object.fromEntries(Object.entries(fontFamilies).map(([k, v]) => [k, v]));

const boxShadow = { ...Object.fromEntries(Object.entries(shadows).map(([k, v]) => [k, v])) };
for (const grp of semanticRoles) {
  for (const name of Object.keys(grp.roles)) {
    if (name.startsWith('elevation')) boxShadow[name] = `var(--cei-${name})`;
  }
}

// Movimiento → utilidades duration-* y ease-* (misma escala que CSS/MUI).
const transitionDuration = Object.fromEntries(
  Object.entries(animations.duration).map(([k, v]) => [k, `${v}ms`]),
);
const transitionTimingFunction = Object.fromEntries(
  Object.entries(animations.easing).map(([k, v]) => [kebab(k), v]),
);

const preset = {
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius: radius,
      fontSize,
      fontFamily,
      boxShadow,
      transitionDuration,
      transitionTimingFunction,
    },
  },
};

const banner = '// CEICOL Tailwind preset — generado desde theme-ceicol. NO editar a mano.\n';
writeFileSync(
  new URL('../dist/tailwind.cjs', import.meta.url),
  banner + 'module.exports = ' + JSON.stringify(preset, null, 2) + ';\n',
);
console.log('✓ dist/tailwind.cjs (preset Tailwind) generado');
