// ============================================================
//  CEICOL — Sombras y efectos
//  Valores tomados de styles.css (:root).
// ============================================================

// Efecto vidrio (usado en la caja de logo del hero, overlays claros)
export const glassEffect = {
  background: 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.7)',
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
};
