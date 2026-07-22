// ============================================================
//  CEICOL — Movimiento
//  Ritmo rápido y directo (150/250/300ms), acorde a la
//  personalidad de la marca. Valores tomados de styles.css.
// ============================================================

export const animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 300,
  },
  easing: {
    // Curva de salida suave usada en toda la landing
    out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

// Helpers pre-armados para sx={{ transition: ... }}
export const transitionStyles = {
  fast: `all ${animations.duration.fast}ms ${animations.easing.out}`,
  normal: `all ${animations.duration.normal}ms ${animations.easing.out}`,
  slow: `all ${animations.duration.slow}ms ${animations.easing.out}`,
  // Compat theme-gaia (deprecado): Gaia expone `smooth` y `bounce`.
  // Se mapean al movimiento de CEICOL (rápido y directo).
  smooth: `all ${animations.duration.slow}ms ${animations.easing.out}`,
  bounce: `all ${animations.duration.slow}ms ${animations.easing.out}`,
};
