// ============================================================
//  CEICOL — Tipografía
// ------------------------------------------------------------
//  Tres familias, cada una con rol exclusivo:
//   · Big Shoulders Display → títulos / display (h1–h4)
//   · Inter                 → cuerpo e interfaz (body, botones, labels)
//   · JetBrains Mono        → valores técnicos (código, coordenadas, tags)
//
//  Escala tomada de styles.css. Se mapea a las variantes
//  estándar de MUI (h1–h4, body1, body2, subtitle2, button,
//  caption, overline) para que <Typography variant="h1"/>
//  funcione sin nombres propietarios. Alcance real: la
//  jerarquía de 4 niveles del Design System, no más.
// ============================================================

import { ThemeOptions } from '@mui/material/styles';
import { fluid } from '../utils/fluidTypography';

const FONT_DISPLAY = "'Big Shoulders Display', 'Inter', system-ui, sans-serif";
const FONT_BODY = "'Inter', system-ui, -apple-system, sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

export const fontFamilies = {
  display: FONT_DISPLAY,
  body: FONT_BODY,
  mono: FONT_MONO,
};

export const typography: ThemeOptions['typography'] = {
  fontFamily: FONT_BODY,

  // ─── Títulos (Big Shoulders Display) ───
  // Nivel 1 — título de pantalla / hero
  h1: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.extrabold,
    fontSize: fluid(72, 40),
    lineHeight: 1.1,
    letterSpacing: 0,
  },
  // Nivel 2 — título de sección
  h2: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.extrabold,
    fontSize: fluid(38, 32),
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  h3: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.bold,
    fontSize: fluid(30, 26),
    lineHeight: 1.25,
  },
  // Nivel 3 — subtítulo / nombre de componente
  h4: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.bold,
    fontSize: fluid(24, 20),
    lineHeight: 1.3,
  },

  // ─── Cuerpo e interfaz (Inter) ───
  // Nivel 4 — texto de cuerpo
  body1: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.regular,
    fontSize: '1rem', // 16px
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.regular,
    fontSize: '1.125rem', // 18px — variante de lectura destacada
    lineHeight: 1.7,
  },

  // Etiqueta de categoría (uppercase, el ".subtitle" de la landing)
  overline: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.bold,
    fontSize: '0.875rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    lineHeight: 1.4,
  },

  // Texto de apoyo (labels, timestamps, captions)
  caption: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.regular,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.5,
  },

  button: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.semibold,
    fontSize: '0.875rem',
    textTransform: 'none',
    lineHeight: 1,
  },
};
