// ============================================================
//  CEICOL — Movimiento
//  Ritmo rápido y directo (150/250/300ms), acorde a la
//  personalidad de la marca. Valores tomados de styles.css.
// ============================================================

export const animations = {
  // Duración (ms) — escala corta y precisa. Marca de datos: ágil, nunca lento.
  duration: {
    instant: 90, // micro-feedback táctil: press, tick, anillo de foco
    fast: 150, // hover, color/fondo, cambios de estado pequeños
    normal: 250, // transición por defecto
    slow: 300, // superficies, paneles, reveals mayores
  },
  easing: {
    // Decelerada (entra rápido, asienta suave) — entradas y estados. Firma de la marca.
    out: 'cubic-bezier(0.16, 1, 0.3, 1)',
    // Estándar equilibrada — cambios de estado en ambos sentidos.
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Acelerada — salidas (algo que desaparece).
    in: 'cubic-bezier(0.4, 0, 1, 1)',
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
