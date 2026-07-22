// ============================================================
//  Tipografía fluida — genera clamp() para escalado responsivo.
//  Reutiliza el enfoque probado en theme-gaia.
// ============================================================

/**
 * Genera un string CSS clamp() para tipografía fluida entre móvil y desktop.
 *
 * @param maxPx    Tamaño en desktop (viewport ~1440px).
 * @param minPx    (Opcional) Tamaño en móvil (viewport ~375px). Por defecto 70% del max.
 * @param minFloor Tamaño mínimo absoluto en px (nunca por debajo). Por defecto 16.
 */
export const fluid = (maxPx: number, minPx?: number, minFloor = 16) => {
  const baseMin = minPx ?? Math.round(maxPx * 0.7);
  const minSize = Math.max(baseMin, minFloor);

  const minWidth = 375;
  const maxWidth = 1440;
  const root = 16;

  const slope = (maxPx - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minSize;

  const minRem = `${(minSize / root).toFixed(4)}rem`;
  const preferred = `${(yAxisIntersection / root).toFixed(4)}rem + ${(slope * 100).toFixed(4)}vw`;
  const maxRem = `${(maxPx / root).toFixed(4)}rem`;

  return `clamp(${minRem}, ${preferred}, ${maxRem})`;
};
