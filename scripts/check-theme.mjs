// Sanity del theme MUI compilado. Se corre DESPUÉS del build (necesita dist/).
// Guarda contra dos regresiones reales:
//  1) responsiveFontSizes() convirtiendo títulos fluidos (clamp) en "NaNrem".
//  2) colores inválidos en el palette (p. ej. var(--cei-*)) que rompen
//     alpha()/decomposeColor() de MUI 9 al renderizar cualquier componente.
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ThemeProvider, Button, Chip, Alert } from '@mui/material';
import { AppTheme, GaiaCompatTheme } from '../dist/index.mjs';

let failed = false;
const themes = [
  ['AppTheme', AppTheme],
  ['GaiaCompatTheme', GaiaCompatTheme],
];

for (const [name, theme] of themes) {
  const typ = theme?.typography ?? {};

  // 1) Tipografía sin NaN.
  if (JSON.stringify(typ).includes('NaN')) {
    console.error(`✗ ${name}: typography contiene "NaN" (¿responsiveFontSizes sobre clamp()?)`);
    failed = true;
  }
  for (const v of ['hero', 'h1', 'h2', 'h3', 'h4', 'body1']) {
    if (!typ[v]) continue;
    const fs = typ[v].fontSize;
    if (fs == null || String(fs).includes('NaN')) {
      console.error(`✗ ${name}: typography.${v}.fontSize inválido = ${JSON.stringify(fs)}`);
      failed = true;
    }
  }

  // 2) Render-smoke: MUI calcula alpha()/canales sobre el palette al renderizar.
  //    Un color inválido (var(), color-mix()) lanzaría aquí.
  try {
    renderToString(
      React.createElement(
        ThemeProvider,
        { theme },
        React.createElement(
          React.Fragment,
          null,
          React.createElement(Button, { variant: 'text', color: 'primary' }, 'a'),
          React.createElement(Button, { variant: 'contained', color: 'primary' }, 'b'),
          React.createElement(Button, { variant: 'outlined', color: 'secondary' }, 'c'),
          React.createElement(Chip, { label: 'x', color: 'success' }),
          React.createElement(Alert, { severity: 'warning' }, 'y'),
        ),
      ),
    );
  } catch (e) {
    console.error(`✗ ${name}: el render de MUI lanzó — ${e.message}\n   (¿un color del palette usa var()/color-mix()? MUI 9 no los procesa con alpha())`);
    failed = true;
  }
}

if (failed) {
  console.error('\n✗ Sanity del theme FALLÓ.');
  process.exit(1);
}
console.log('✓ Sanity del theme OK (tipografía válida + render MUI sin errores de color)');
