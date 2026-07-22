// ============================================================
//  CEICOL — Espaciado y bordes
//  Valores tomados de styles.css (:root).
// ============================================================

export const borderRadius = {
  sm: '6px',
  md: '12px',
  lg: '18px',
  xl: '24px',
  xxl: '54px',
  round: '50%',
  // Compat theme-gaia (deprecado): Gaia usa `pill` para el radio máximo.
  pill: '9999px',
};

// Escala de espaciado de CEICOL (múltiplos con ritmo propio).
// xs 8 · sm 16 · md 24 · lg 40 · xl 80 · xxl 140 (px)
export const spacingConstants = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '80px',
  xxl: '140px',
  // Compat theme-gaia (deprecado): claves que Gaia usa y CEICOL no.
  min: '8px', // Gaia `min` → CEICOL xs
  base: '16px', // Gaia `base` → CEICOL sm
};
