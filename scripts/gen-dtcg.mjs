// Genera dist/tokens.json en formato W3C Design Tokens (DTCG).
// Artefacto estándar, consumible por herramientas de diseño y agentes de IA
// como fuente de verdad. Se emite desde los MISMOS tokens compilados que el
// resto de salidas (dist/tokens.mjs), así que nunca diverge.
//
// Nota: los `shadow` se emiten con $value string (multi-capa) en vez del
// objeto compuesto DTCG, por pragmatismo; el valor es fiel al CSS.

import { writeFileSync } from 'node:fs';
import {
  brandColors,
  spacingConstants,
  borderRadius,
  shadows,
  fontFamilies,
  fontSizes,
  semanticRoles,
} from '../dist/tokens.mjs';

const kebab = (s) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

// Mapa var CSS -> ruta DTCG, para resolver alias en los roles semánticos.
const varToPath = new Map();
const dtcg = {
  $description:
    'CEICOL design tokens (formato W3C Design Tokens / DTCG). Generado desde theme-ceicol — NO editar a mano.',
};

// ── Color (primitivos) ──
dtcg.color = {};
for (const [group, val] of Object.entries(brandColors)) {
  dtcg.color[group] = {};
  for (const [k, v] of Object.entries(val)) {
    const sub = k === 'main' ? 'main' : kebab(k);
    dtcg.color[group][sub] = { $type: 'color', $value: v };
    const varName = k === 'main' ? `--cei-${group}` : `--cei-${group}-${kebab(k)}`;
    varToPath.set(varName, `color.${group}.${sub}`);
  }
}

// ── Dimensiones / tipografía / sombras ──
const dim = (obj, key, prefix) => {
  dtcg[key] = {};
  for (const [k, v] of Object.entries(obj)) {
    dtcg[key][k] = { $type: 'dimension', $value: v };
    varToPath.set(`--cei-${prefix}-${kebab(k)}`, `${key}.${k}`);
  }
};
dim(spacingConstants, 'space', 'space');
dim(borderRadius, 'radius', 'radius');
dim(fontSizes, 'fontSize', 'font-size');

dtcg.fontFamily = {};
for (const [k, v] of Object.entries(fontFamilies)) {
  dtcg.fontFamily[k] = { $type: 'fontFamily', $value: v };
  varToPath.set(`--cei-font-${kebab(k)}`, `fontFamily.${k}`);
}

dtcg.shadow = {};
for (const [k, v] of Object.entries(shadows)) {
  dtcg.shadow[k] = { $type: 'shadow', $value: v };
  varToPath.set(`--cei-shadow-${kebab(k)}`, `shadow.${k}`);
}

// ── Roles semánticos ── (alias a primitivo si es var() directo; string si es color-mix/valor)
const resolve = (expr) => {
  const m = /^var\((--cei-[a-z0-9-]+)\)$/.exec(expr.trim());
  return m && varToPath.has(m[1]) ? `{${varToPath.get(m[1])}}` : expr;
};
dtcg.semantic = {};
for (const group of semanticRoles) {
  for (const [name, role] of Object.entries(group.roles)) {
    const $type = name.startsWith('elevation') ? 'shadow' : 'color';
    const token = { $type, $value: resolve(role.light) };
    if (role.dark != null) {
      token.$extensions = { 'com.ceicol.theme': { dark: resolve(role.dark) } };
    }
    dtcg.semantic[name] = token;
  }
}

writeFileSync(
  new URL('../dist/tokens.json', import.meta.url),
  JSON.stringify(dtcg, null, 2) + '\n',
);
console.log('✓ dist/tokens.json (DTCG) generado');
