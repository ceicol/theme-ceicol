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

// Escala de tamaños de tipografía (canónica CEICOL, fluida con clamp).
// Fuente única para títulos y párrafos en todos los stacks.
export const fontSizes = {
  hero: 'clamp(2.5rem, 6vw, 4.5rem)',
  h1: 'clamp(2rem, 4.5vw, 2.4rem)',
  h2: 'clamp(1.6rem, 3.5vw, 1.9rem)',
  h3: 'clamp(1.25rem, 2.5vw, 1.5rem)',
  h4: fluid(24, 20), // 20→24px — subtítulo de sección. MOVIDO en el major.
  h5: fluid(18, 16), // 16→18px — título compacto. Es el `h4` anterior.
  h6: '1rem', // 16px fijo — el más pequeño en display
  // ⚠ ESTA CAPA Y LA DE VARIANTES NO COINCIDEN EN h1, h2 NI h3, y no es un
  // descuido de este cambio: viene de antes. `--cei-font-size-h3` vale
  // `clamp(1.25rem, 2.5vw, 1.5rem)` = 20–24 px, mientras `variant="h3"` vale
  // `fluid(30, 26)` = 26–30 px. **Dos escalas con el mismo nombre y hasta 6 px
  // de diferencia.**
  //
  // Ya ha costado: una tabla de canje se escribió con los valores de los
  // tokens para decidir destinos de variantes, y de ahí salió una corrección
  // equivocada enviada a un producto.
  //
  // `h4`, `h5` y `h6` sí quedan alineados con sus variantes —los tres se
  // declaran arriba con el mismo `fluid()`—, así que la divergencia se reduce
  // a los tres primeros escalones. Unificarlos es otro cambio con su propio
  // alcance: mueve `--cei-font-size-h1` de 38 a 72 px para cualquiera que
  // escriba CSS a mano. Va anotado y no se hace de refilón aquí.
  body: '1rem',
  bodyLg: '1.125rem',
  small: '0.875rem', // 14px — texto secundario
  xs: '0.75rem', // 12px — captions, metadatos
  xxs: '0.65rem', // 10.4px — MÍNIMO ABSOLUTO. Microetiqueta: una o dos
  //                 palabras, mayúsculas, con letter-spacing. Nunca texto
  //                 corrido; para eso el suelo es `xs` (12px).
  /**
   * @deprecated 8.8 px no es un tamaño legible ni siquiera para una etiqueta.
   * Se retira en `1.0`. Migración: usar `xxs` (10.4 px).
   *
   * El comentario que estaba aquí decía «~9px», y ese redondeo es parte del
   * problema: 0.55rem son **8.8** px. Un producto lo aplicó a 366 elementos
   * —chips de categoría, contadores, etiquetas de tipo— sin que nada
   * protestara, porque el token existía y el espécimen de la documentación lo
   * mostraba con una frase completa, como cualquier tamaño de texto.
   * Publicar un tamaño es autorizarlo.
   *
   * Consumidores conocidos: 0. Los 7 usos de Gaia_StoryMap ya están en `xxs`;
   * geo-visor, Gaia_Fichas y Gaia_DMS nunca lo usaron.
   */
  xxxs: '0.55rem',
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
  // ── La rampa son SEIS niveles desde el major ──────────────────────────────
  //
  // Hasta aquí eran cuatro, y la razón entre escalones consecutivos —que es
  // como se juzga una escala— decía que faltaba uno:
  //
  //             @375    @1440
  //   h1 / h2   1.25     1.89
  //   h2 / h3   1.23     1.27
  //   h3 / h4   1.63  ←  1.67  ←   la escala es regular en 1.24 y salta aquí
  //   h4 / body2 0.89    1.00  ←   y el encabezado más pequeño medía IGUAL
  //                                que el cuerpo grande
  //
  // La media geométrica entre `h3` y `h4` cae en 20 px a 375 y 23 a 1440, que
  // es `fluid(24, 20)`. Así que `h4` se mueve ahí y **el `h4` de antes pasa a
  // ser `h5`**, con lo que ningún tamaño desaparece de la rampa: se le pone el
  // nombre que le corresponde por posición.
  //
  // No se deduce de un producto. Que Gaia escribiera 24 px a mano con
  // `h3xlSemibold` era el síntoma; TerraInfo choca por el otro extremo y usa
  // `h5` 33 veces porque cuatro niveles no le alcanzan. Dos productos por
  // caminos opuestos señalan el mismo hueco.
  //
  // **Es breaking y se sabe**: los `variant="h4"` existentes crecen de 18 a 24
  // px a 1440 —124 usos medidos en los cuatro productos Gaia— y cada uno
  // necesita su ronda visual. Va en el major, con la guía de migración.
  //
  // Nivel 4 — subtítulo de sección
  h4: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.bold,
    fontSize: fluid(24, 20),
    lineHeight: 1.3,
  },
  // Nivel 5 — título compacto: cabeceras de panel, de collapse, de tarjeta.
  // Es exactamente el `h4` anterior, para que el escalón no se pierda.
  h5: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.bold,
    fontSize: fluid(18, 16),
    lineHeight: 1.3,
  },
  // Nivel 6 — el más pequeño de la familia display. Fijo: por debajo de 16 px
  // un encabezado en display deja de leerse como encabezado.
  h6: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.semibold,
    fontSize: '1rem', // 16px
    lineHeight: 1.4,
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
