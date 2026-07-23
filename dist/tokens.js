"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tokens.ts
var tokens_exports = {};
__export(tokens_exports, {
  animations: () => animations,
  borderRadius: () => borderRadius,
  brandColors: () => brandColors,
  fontFamilies: () => fontFamilies,
  fontSizes: () => fontSizes,
  glassEffect: () => glassEffect,
  shadows: () => shadows,
  spacingConstants: () => spacingConstants,
  transitionStyles: () => transitionStyles
});
module.exports = __toCommonJS(tokens_exports);

// src/tokens/colors.ts
var brandColors = {
  // ─── Marca ───
  primary: {
    main: "#007298",
    // Azul CEICOL
    light: "#0391b2",
    dark: "#005a7a",
    bg: "#e1f0f8"
    // fondo de acento azul claro
  },
  // ─── Acción / datos ───
  accent: {
    main: "#0d9488",
    // Turquesa
    light: "#2dd4bf",
    bg: "#f0fdfa"
  },
  // ─── Acento tech (cian/sky) — secciones oscuras y visualizaciones ───
  //  Acentos brillantes de alto contraste sobre fondos oscuros/tech.
  //  Distintos del turquesa de marca; pensados para dataviz, glows y
  //  detalles en modo oscuro. Disponibles para todos los productos.
  tech: {
    main: "#0ea5e9",
    // sky-500
    light: "#22d3ee",
    // cyan-400 (el más brillante)
    dark: "#0284c7",
    // sky-600
    bg: "#ecfeff"
    // cyan-50
  },
  // ─── Colores funcionales (estado del sistema) ───
  success: {
    main: "#10b981",
    // Verde — éxito
    light: "#34d399",
    bg: "#ecfdf5"
  },
  warning: {
    main: "#d97706",
    // Ámbar — advertencia
    light: "#f59e0b",
    bg: "#fffbeb"
  },
  error: {
    main: "#dc2626",
    // Rojo — error / destructivo (definido en esta fase)
    light: "#ef4444",
    bg: "#fef2f2"
  },
  info: {
    main: "#2563eb",
    // Azul informativo (distinto del azul de marca)
    light: "#3b82f6",
    bg: "#eff6ff"
  },
  // ─── Fondo de énfasis (secciones oscuras, footer) ───
  contrast: {
    main: "#0f172a",
    light: "#1e293b"
  },
  // ─── Compat theme-gaia (deprecado) ───
  // Gaia usaba `cta` como su acento dorado. Se traduce al AZUL de marca
  // de CEICOL (decisión de marca: máxima cohesión en azul, como la landing).
  cta: {
    main: "#007298",
    light: "#0391b2"
  },
  // Gaia expone `link` como token crudo. En CEICOL el link es el azul de marca.
  link: {
    main: "#007298"
  },
  // ─── Texto ───
  text: {
    heading: "#0f172a",
    // títulos / máximo énfasis
    body: "#334155",
    // cuerpo de lectura
    muted: "#64748b",
    // secundario / metainformación
    mutedLight: "#94a3b8",
    // secundario claro (sobre fondos oscuros)
    white: "#ffffff",
    // sobre fondos oscuros
    // Compat theme-gaia (deprecado): Gaia usa text.dark / text.light.
    dark: "#0f172a",
    // → equivale a heading (texto muy oscuro)
    light: "#ffffff"
    // → equivale a white (texto claro sobre fondos oscuros)
  },
  // ─── Superficies ───
  background: {
    default: "#f8fafc",
    // fondo estándar de página
    subtle: "#f1f5f9",
    // secciones alternadas
    paper: "#ffffff",
    // tarjetas, formularios
    // Compat theme-gaia (deprecado): Gaia usa background.main / background.light.
    main: "#f8fafc",
    // → equivale a default
    light: "#ffffff"
    // → equivale a paper
  },
  // ─── Bordes ───
  border: {
    light: "#e2e8f0",
    medium: "#cbd5e1"
  }
};

// src/tokens/layout.ts
var borderRadius = {
  sm: "6px",
  md: "12px",
  lg: "18px",
  xl: "24px",
  xxl: "54px",
  round: "50%",
  pill: "9999px"
  // radio máximo (compat theme-gaia)
};
var spacingConstants = {
  xs: "8px",
  sm: "16px",
  md: "24px",
  lg: "40px",
  xl: "80px",
  xxl: "140px",
  // Compat theme-gaia (deprecado): alias de nombres que Gaia usa.
  min: "8px",
  // → xs
  base: "16px"
  // → sm
};

// src/tokens/shadows.ts
var glassEffect = {
  background: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.7)"
};
var customShadowsArray = [
  "none",
  // 0
  "0 1px 3px rgba(15, 23, 42, 0.05)",
  // 1 -> sm
  "none",
  "none",
  "0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",
  // 4 -> md
  "none",
  "none",
  "none",
  "0 10px 15px -3px rgba(48, 112, 149, 0.08), 0 4px 6px -4px rgba(48, 112, 149, 0.08)",
  // 8 -> lg
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "0 20px 40px -15px rgba(48, 112, 149, 0.12)"
  // 16 -> premium
];
var shadows = {
  sm: customShadowsArray[1],
  md: customShadowsArray[4],
  lg: customShadowsArray[8],
  premium: customShadowsArray[16],
  glow: "0 0 30px rgba(13, 148, 136, 0.08)"
};

// src/tokens/animations.ts
var animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 300
  },
  easing: {
    // Curva de salida suave usada en toda la landing
    out: "cubic-bezier(0.16, 1, 0.3, 1)"
  }
};
var transitionStyles = {
  fast: `all ${animations.duration.fast}ms ${animations.easing.out}`,
  normal: `all ${animations.duration.normal}ms ${animations.easing.out}`,
  slow: `all ${animations.duration.slow}ms ${animations.easing.out}`,
  // Compat theme-gaia (deprecado): Gaia expone `smooth` y `bounce`.
  // Se mapean al movimiento de CEICOL (rápido y directo).
  smooth: `all ${animations.duration.slow}ms ${animations.easing.out}`,
  bounce: `all ${animations.duration.slow}ms ${animations.easing.out}`
};

// src/utils/fluidTypography.ts
var fluid = (maxPx, minPx, minFloor = 16) => {
  const baseMin = minPx != null ? minPx : Math.round(maxPx * 0.7);
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

// src/tokens/typography.ts
var FONT_DISPLAY = "'Big Shoulders Display', 'Inter', system-ui, sans-serif";
var FONT_BODY = "'Inter', system-ui, -apple-system, sans-serif";
var FONT_MONO = "'JetBrains Mono', monospace";
var WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
};
var fontFamilies = {
  display: FONT_DISPLAY,
  body: FONT_BODY,
  mono: FONT_MONO
};
var fontSizes = {
  hero: "clamp(2.5rem, 6vw, 4.5rem)",
  h1: "clamp(2rem, 4.5vw, 2.4rem)",
  h2: "clamp(1.6rem, 3.5vw, 1.9rem)",
  h3: "clamp(1.25rem, 2.5vw, 1.5rem)",
  body: "1rem",
  bodyLg: "1.125rem",
  small: "0.875rem",
  // 14px — texto secundario
  xs: "0.75rem",
  // 12px — captions, metadatos
  xxs: "0.65rem",
  // ~10px — etiquetas, badges
  xxxs: "0.55rem"
  // ~9px — micro-etiquetas, overlines densas
};
var typography = {
  fontFamily: FONT_BODY,
  // ─── Títulos (Big Shoulders Display) ───
  // Nivel 1 — título de pantalla / hero
  h1: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.extrabold,
    fontSize: fluid(72, 40),
    lineHeight: 1.1,
    letterSpacing: 0
  },
  // Nivel 2 — título de sección
  h2: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.extrabold,
    fontSize: fluid(38, 32),
    lineHeight: 1.2,
    letterSpacing: 0
  },
  h3: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.bold,
    fontSize: fluid(30, 26),
    lineHeight: 1.25
  },
  // Nivel 3 — subtítulo / nombre de componente
  h4: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.bold,
    fontSize: fluid(24, 20),
    lineHeight: 1.3
  },
  // ─── Cuerpo e interfaz (Inter) ───
  // Nivel 4 — texto de cuerpo
  body1: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.regular,
    fontSize: "1rem",
    // 16px
    lineHeight: 1.6
  },
  body2: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.regular,
    fontSize: "1.125rem",
    // 18px — variante de lectura destacada
    lineHeight: 1.7
  },
  // Etiqueta de categoría (uppercase, el ".subtitle" de la landing)
  overline: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.bold,
    fontSize: "0.875rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    lineHeight: 1.4
  },
  // Texto de apoyo (labels, timestamps, captions)
  caption: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.regular,
    fontSize: "0.875rem",
    // 14px
    lineHeight: 1.5
  },
  button: {
    fontFamily: FONT_BODY,
    fontWeight: WEIGHTS.semibold,
    fontSize: "0.875rem",
    textTransform: "none",
    lineHeight: 1
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  animations,
  borderRadius,
  brandColors,
  fontFamilies,
  fontSizes,
  glassEffect,
  shadows,
  spacingConstants,
  transitionStyles
});
