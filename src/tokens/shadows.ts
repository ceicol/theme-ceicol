// ============================================================
//  CEICOL — Sombras y efectos
//  Valores tomados de styles.css (:root).
// ============================================================

// Efecto vidrio. Usa el rol semántico --cei-bg-glass (deriva de --cei-bg-raised),
// por lo que voltea automáticamente en dark. El borde usa --cei-line para
// acompañar el tema. Ambos con fallback por si la capa semantic.css no se cargó.
export const glassEffect = {
  background: 'var(--cei-bg-glass, color-mix(in srgb, var(--cei-background-paper) 60%, transparent))',
  backdropFilter: 'blur(8px)',
  border: '1px solid var(--cei-line, rgba(255, 255, 255, 0.7))',
};

// MUI espera un array de 25 sombras (índice 0..24).
// Mapeamos sm -> [1], md -> [4], lg -> [8], premium -> [16].
export const customShadowsArray = [
  'none', // 0
  '0 1px 3px rgba(15, 23, 42, 0.05)', // 1 -> sm
  'none',
  'none',
  '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)', // 4 -> md
  'none',
  'none',
  'none',
  '0 10px 15px -3px rgba(0, 114, 152, 0.08), 0 4px 6px -4px rgba(0, 114, 152, 0.08)', // 8 -> lg
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  '0 20px 40px -15px rgba(0, 114, 152, 0.12)', // 16 -> premium
];

// Acceso semántico directo (para sx / styled)
export const shadows = {
  sm: customShadowsArray[1],
  md: customShadowsArray[4],
  lg: customShadowsArray[8],
  premium: customShadowsArray[16],
  glow: '0 0 30px rgba(13, 148, 136, 0.08)', // halo ambiental (acento turquesa)
  glowTech: '0 0 8px rgba(34, 211, 238, 0.55)', // glow tenue y brillante (cian tech: nodos, indicadores activos)
  button: '0 4px 14px rgba(0, 114, 152, 0.2)', // sombra de CTA de marca (reposo)
  buttonHover: '0 6px 20px rgba(0, 114, 152, 0.3)', // sombra de CTA de marca (hover)
};
