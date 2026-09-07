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
// Roles semánticos de color → var() (theme-aware). Elevación va a boxShadow,
// y las sombras de texto a textShadow.
//
// La exclusión NO es cosmética: este bucle mete en `colors` todo rol que no
// empiece por `elevation`, así que un rol cuyo valor es una sombra acabaría
// publicado como color y Tailwind generaría `bg-text-shadow-media`, que es
// una utilidad sin sentido con un valor que no es un color. El filtro tiene
// que enumerar lo que NO es color, no dar por hecho que todo lo demás sí.
const NO_ES_COLOR = (n) => n.startsWith('elevation') || n.startsWith('text-shadow');
for (const grp of semanticRoles) {
  for (const name of Object.keys(grp.roles)) {
    if (NO_ES_COLOR(name)) continue;
    colors[name] = `var(--cei-${name})`;
  }
}

// Tailwind no trae utilidad de text-shadow, así que se publican bajo su propia
// clave: quien la quiera la engancha con un plugin, y mientras tanto el valor
// está disponible y no contamina la paleta.
const textShadow = {};
for (const grp of semanticRoles) {
  for (const name of Object.keys(grp.roles)) {
    if (name.startsWith('text-shadow')) {
      textShadow[name.replace(/^text-shadow-?/, '') || 'DEFAULT'] = `var(--cei-${name})`;
    }
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
      textShadow,
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
