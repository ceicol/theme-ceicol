// ============================================================
//  CEICOL — Espaciado y bordes
//  Valores tomados de styles.css (:root).
// ============================================================

// Radios. Valores alineados con la escala de Gaia para preservar los
// layouts de los productos que migran (lg = 24, no 18).
export const borderRadius = {
  sm: '6px',
  md: '12px',
  lg: '24px',
  xl: '24px',
  xxl: '54px',
  round: '50%',
  pill: '9999px', // radio máximo (compat theme-gaia)
};

// Escala de espaciado. Se conservan los valores de Gaia para que los
// productos que migran mantengan su ritmo visual original.
// min 8 · sm 12 · base 16 · md 24 · lg 48 · xl 96 · xxl 198 (px)
export const spacingConstants = {
  xs: '8px',
  sm: '12px',
  md: '24px',
  lg: '48px',
  xl: '96px',
  xxl: '198px',
  min: '8px',
  base: '16px',
};
