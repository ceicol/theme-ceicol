// Genera dist/tokens.css (custom properties) desde los tokens compilados.
// Se ejecuta en el build, DESPUÉS de tsup, leyendo dist/tokens.mjs — así
// el CSS siempre refleja la misma fuente de verdad que el tema MUI.

import { writeFileSync, copyFileSync } from 'node:fs';
import {
  brandColors,
  spacingConstants,
  borderRadius,
  shadows,
  transitionStyles,
  fontFamilies,
  fontSizes,
  animations,
  semanticRoles,
} from '../dist/tokens.mjs';

const lines = [
  '/* CEICOL design tokens — generado desde theme-ceicol. NO editar a mano. */',
  ':root {',
];

const kebab = (s) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

// ── Color ── (main → --cei-{grupo}; resto → --cei-{grupo}-{sub})
for (const [group, val] of Object.entries(brandColors)) {
  for (const [k, v] of Object.entries(val)) {
    const name = k === 'main' ? `--cei-${group}` : `--cei-${group}-${kebab(k)}`;
    lines.push(`  ${name}: ${v};`);
  }
}

const flat = [
  ['space', spacingConstants],
  ['radius', borderRadius],
  ['shadow', shadows],
  ['transition', transitionStyles],
  ['font', fontFamilies],
  ['font-size', fontSizes],
];
for (const [prefix, obj] of flat) {
  lines.push('');
  for (const [k, v] of Object.entries(obj)) {
    lines.push(`  --cei-${prefix}-${kebab(k)}: ${v};`);
  }
}

// Duraciones y easing (crudos, para composición manual de transiciones)
lines.push('');
for (const [k, v] of Object.entries(animations.duration)) {
  lines.push(`  --cei-duration-${k}: ${v}ms;`);
}
lines.push(`  --cei-ease-out: ${animations.easing.out};`);

lines.push('}', '');
writeFileSync(new URL('../dist/tokens.css', import.meta.url), lines.join('\n'));
console.log('✓ dist/tokens.css generado');

// Copiar los primitivos de componentes (CSS autorado) al dist
copyFileSync(
  new URL('../src/components.css', import.meta.url),
  new URL('../dist/components.css', import.meta.url),
);
console.log('✓ dist/components.css copiado');

// Generar la capa semántica (roles claro/oscuro) desde semanticRoles (TS).
function genSemanticCss() {
  const out = [
    '/* CEICOL — capa semántica (roles) · generado desde theme-ceicol. NO editar a mano. */',
    '/* Los componentes consumen estos roles; un tema los reasigna. Requiere tokens.css. */',
    '',
    ':root {',
    '  color-scheme: light;',
  ];
  for (const group of semanticRoles) {
    out.push('', `  /* ${group.title} */`);
    for (const [name, role] of Object.entries(group.roles)) {
      const c = role.comment ? ` /* ${role.comment} */` : '';
      out.push(`  --cei-${name}: ${role.light};${c}`);
    }
  }
  out.push('}', '', ":root[data-theme='dark'] {", '  color-scheme: dark;');
  for (const group of semanticRoles) {
    const dark = Object.entries(group.roles).filter(([, r]) => r.dark != null);
    if (!dark.length) continue;
    out.push('', `  /* ${group.title} */`);
    for (const [name, role] of dark) out.push(`  --cei-${name}: ${role.dark};`);
  }
  out.push('}', '');
  return out.join('\n');
}
writeFileSync(new URL('../dist/semantic.css', import.meta.url), genSemanticCss());
console.log('✓ dist/semantic.css generado');
