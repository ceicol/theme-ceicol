// ============================================================
//  CEICOL — Capa de compatibilidad con theme-gaia
// ------------------------------------------------------------
//  OBJETIVO: que un producto que hoy consume `theme-gaia`
//  pueda adoptar la marca CEICOL cambiando SOLO el import,
//  sin editar componentes. Para eso, este archivo reexpone el
//  vocabulario público genérico de Gaia (claves de paleta,
//  variantes de botón y las variantes tipográficas h1xxlBold…)
//  pero apuntando a los VALORES de CEICOL.
//
//  NO es la API principal. Los proyectos nuevos deben usar los
//  nombres limpios de CEICOL (primary, accent, success…,
//  variantes h1–h4 y cei-*). Todo lo de este archivo está
//  marcado como DEPRECADO y se retirará en una versión mayor
//  cuando ya no queden productos migrando desde Gaia.
//
//  Los botones de mapa de región (gaia-amazonia, gaia-panamazonia,
//  gaia-macroterritorio) SÍ se incluyen, recoloreados a la gama
//  CEICOL, porque hay productos (el geovisor) que los consumen.
//  Ver createMapButtonVariant en theme.ts.
// ============================================================

import { CSSProperties } from 'react';
import { fluid } from './utils/fluidTypography';

const FONT_DISPLAY = "'Big Shoulders Display', 'Inter', system-ui, sans-serif";
const FONT_BODY = "'Inter', system-ui, -apple-system, sans-serif";

const W = { regular: 400, medium: 500, semibold: 600, bold: 700 };

// Header en CEICOL usa la fuente display (Big Shoulders).
const h = (weight: number, size: number, lineHeight: number | string = 1.2): CSSProperties => ({
  fontFamily: FONT_DISPLAY,
  fontWeight: weight,
  fontSize: fluid(size),
  lineHeight,
});

// Body en CEICOL usa Inter. Clamp solo si supera 16px.
const t = (weight: number, size: number, lineHeight: number | string = 1.5): CSSProperties => ({
  fontFamily: FONT_BODY,
  fontWeight: weight,
  fontSize: size > 16 ? fluid(size) : `${size}px`,
  lineHeight,
});

// Mismos nombres y métricas que theme-gaia, con fuentes de CEICOL.
export const gaiaCompatTypography = {
  // Headers
  h1xxlBold: h(W.bold, 64, 1.1),
  h1xlBold: h(W.bold, 52),
  h1lgBold: h(W.bold, 40),
  h1Bold: h(W.bold, 36),
  h2xxlSemibold: h(W.semibold, 32),
  h2xxlMedium: h(W.medium, 32),
  h2lgMedium: h(W.medium, 28),
  h2Bold: h(W.bold, 28),
  h3xxlSemibold: h(W.semibold, 28),
  h3xlRegular: h(W.regular, 24),
  h3xlSemibold: h(W.semibold, 24),
  h3xlMedium: h(W.medium, 24),
  h3lgSemibold: h(W.semibold, 20, '26px'),
  h3Medium: h(W.medium, 18),
  // Body
  bodyxxlRegular: t(W.regular, 24),
  bodyxxlRegularSpacing: t(W.regular, 24, '38.2px'),
  bodyxxlSemiboldSpacing: t(W.semibold, 24, '38.2px'),
  bodyxlBoldSpacing: t(W.bold, 18, '28.1px'),
  bodyxlSemibold: t(W.semibold, 18),
  bodyxlMedium: t(W.medium, 18),
  bodyxlMediumSpacing: t(W.medium, 18, '28.1px'),
  bodyxlRegular: t(W.regular, 18),
  bodylgMedium: t(W.medium, 16),
  bodylgRegular: t(W.regular, 16),
  bodyRegular: t(W.regular, 14),
  bodyRegularSpacing: t(W.regular, 14, '20.4px'),
  bodyMedium: t(W.medium, 14),
};
