// Sanity del theme MUI compilado.
// Guarda contra la regresión de `responsiveFontSizes()`, que hacía parseFloat()
// sobre los fontSize fluidos (clamp()) y los convertía en "NaNrem".
// Se corre DESPUÉS del build (necesita dist/).
import { AppTheme, GaiaCompatTheme } from '../dist/index.mjs';

let failed = false;
const themes = [
  ['AppTheme', AppTheme],
  ['GaiaCompatTheme', GaiaCompatTheme],
];

for (const [name, theme] of themes) {
  const typ = theme?.typography ?? {};

  // 1) No debe haber ningún "NaN" en toda la tipografía (variantes + breakpoints).
  if (JSON.stringify(typ).includes('NaN')) {
    console.error(`✗ ${name}: typography contiene "NaN" (¿responsiveFontSizes sobre clamp()?)`);
    failed = true;
  }

  // 2) Los títulos deben tener un fontSize definido y válido.
  for (const v of ['hero', 'h1', 'h2', 'h3', 'h4', 'body1']) {
    if (!typ[v]) continue; // hero/body1 pueden no existir como variante MUI
    const fs = typ[v].fontSize;
    if (fs == null || String(fs).includes('NaN')) {
      console.error(`✗ ${name}: typography.${v}.fontSize inválido = ${JSON.stringify(fs)}`);
      failed = true;
    }
  }
}

if (failed) {
  console.error('\n✗ Sanity del theme FALLÓ.');
  process.exit(1);
}
console.log('✓ Sanity del theme OK (tipografía válida, sin NaN)');
