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

// ─────────────────────────────────────────────────────────────────────────────
// Tipografía: el contrato con los componentes de MUI.
//
// `theme.typography` son DOS cosas fundidas en un objeto:
//
//   · un VOCABULARIO de autor — lo que se escribe en `variant=`
//   · un CONTRATO de cableado — los slots que los componentes de MUI leen por
//     dentro para vestir su propio texto, sin que nadie escriba nada
//
// Medido sobre el MUI instalado: `h1`–`h5`, `overline`, `subtitle1` y
// `subtitle2` no los lee NINGÚN componente: son vocabulario puro y se mueven
// libremente. `body1`, `body2`, `button`, `caption` y `h6` sí los leen — 24
// componentes entre los cinco — y ahí una decisión de autor llega a sitios que
// no la pidieron.
//
// Costó meses verlo: toda celda de tabla salía a 18 px donde MUI pone 14, sin
// un número escrito en ningún producto, y este script decía «OK» porque solo
// miraba el color.
//
// La regla: si el theme MUEVE un slot que algún componente lee, o separa las
// dos puertas —el valor de autor en `MuiTypography.styleOverrides.<slot>`— o
// lo declara aceptado aquí abajo, con su motivo. Nada se queda sin decidir.
import { createTheme } from '@mui/material/styles';
import { AppTheme } from '../dist/index.mjs';
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const RAIZ_MUI = new URL('../node_modules/@mui/material', import.meta.url).pathname;

/** Qué slots lee cada componente de MUI, leído del paquete y no de memoria. */
function consumidores() {
  const mapa = {};
  let dirs;
  try { dirs = readdirSync(RAIZ_MUI); } catch { return null; }
  for (const d of dirs) {
    if (!/^[A-Z]/.test(d)) continue;
    const f = join(RAIZ_MUI, d, d + '.js');
    if (!existsSync(f)) continue;
    const src = readFileSync(f, 'utf8');
    for (const v of Object.keys(createTheme().typography)) {
      if (typeof createTheme().typography[v] !== 'object') continue;
      const esparce = src.includes(`typography.${v}`);
      const pide = new RegExp(`variant: ?["']${v}["']`).test(src);
      if (esparce || pide) (mapa[v] ||= []).push(d);
    }
  }
  return mapa;
}

/**
 * Slots de contrato que el theme mueve A PROPÓSITO sin separar las puertas.
 * Cada uno con su motivo: quien lo quite tiene que sustituirlo por una razón,
 * no por un silencio.
 */
const ACEPTADOS = {
  h6: 'Lo lee solo DialogTitle, que fija su propio fontSize en este mismo theme.',
  body1: 'Solo cambia el interlineado (1.5 → 1.6). El tamaño es el de MUI.',
  caption: '12 → 14 px en FormHelperText y StepIcon. 12 px es ilegible para un texto de ayuda, y la escala de CEICOL no baja de 14 para texto corrido.',
  button: 'Solo peso e interlineado, sin tamaño. Button, Fab, Tab y ToggleButton lo quieren igual que el resto de la interfaz.',
};

const consumido = consumidores();
if (!consumido) {
  errors.push('No se pudo leer @mui/material para comprobar el contrato de tipografía. Instala las dependencias.');
} else {
  const stock = createTheme().typography;
  const mio = AppTheme.typography;
  const puertaDeAutor = AppTheme.components?.MuiTypography?.styleOverrides ?? {};

  for (const [slot, quienes] of Object.entries(consumido)) {
    const a = stock[slot], b = mio[slot];
    if (!a || !b) continue;
    const movido = String(a.fontSize) !== String(b.fontSize)
      || String(a.fontWeight) !== String(b.fontWeight)
      || String(a.lineHeight) !== String(b.lineHeight);
    if (!movido) continue;
    if (slot in puertaDeAutor) continue;          // las dos puertas, separadas
    if (slot in ACEPTADOS) continue;              // decidido y escrito
    errors.push(
      `typography.${slot} se mueve respecto a MUI y lo leen ${quienes.length} componente(s) ` +
      `(${quienes.slice(0, 6).join(', ')}${quienes.length > 6 ? '…' : ''}). ` +
      `O publica el valor de autor en components.MuiTypography.styleOverrides.${slot}, ` +
      `o añádelo a ACEPTADOS en este script con su motivo.`
    );
  }
}

if (errors.length) {
  console.error('✗ Parity MUI ROTO:\n  - ' + errors.join('\n  - '));
  process.exit(1);
}
console.log('✓ Parity MUI OK (color cableado, y ningún slot de tipografía movido sin decidir)');
