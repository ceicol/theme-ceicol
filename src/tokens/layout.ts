// ============================================================
//  CEICOL — Espaciado y bordes
//  Valores tomados de styles.css (:root).
// ============================================================

// Radios — escala canónica CEICOL (fuente única para landing y productos).
export const borderRadius = {
  xs: '4px', // radios pequeños (chips, inputs densos, detalles)
  sm: '6px',
  md: '12px',
  lg: '18px',
  xl: '24px',
  xxl: '54px',
  round: '50%',
  pill: '9999px', // radio máximo (compat theme-gaia)
};

// Escala de espaciado — canónica CEICOL (la de la landing).
// Micro:  xxs 4 · xtight 6 · xsm 12   (para gaps/paddings internos)
// Macro:  xs 8 · sm 16 · md 24 · lg 40 · xl 80 · xxl 140 (px)
export const spacingConstants = {
  xxs: '4px', // micro-espaciado (detalles, gaps mínimos)
  xtight: '6px', // gaps/paddings ajustados
  xs: '8px',
  xsm: '12px', // entre xs y sm
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '80px',
  xxl: '140px',
  // Compat theme-gaia (deprecado): alias de nombres que Gaia usa.
  min: '8px', // → xs
  base: '16px', // → sm
};
