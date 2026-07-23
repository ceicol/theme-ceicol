// ============================================================
//  CEICOL — Espaciado y bordes
//  Valores tomados de styles.css (:root).
// ============================================================

// Radios — escala canónica CEICOL (fuente única para landing y productos).
export const borderRadius = {
  sm: '6px',
  md: '12px',
  lg: '18px',
  xl: '24px',
  xxl: '54px',
  round: '50%',
  pill: '9999px', // radio máximo (compat theme-gaia)
};

// Escala de espaciado — canónica CEICOL (la de la landing).
// xs 8 · sm 16 · md 24 · lg 40 · xl 80 · xxl 140 (px)
export const spacingConstants = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '80px',
  xxl: '140px',
  // Compat theme-gaia (deprecado): alias de nombres que Gaia usa.
  min: '8px', // → xs
  base: '16px', // → sm
};
