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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AppTheme: () => theme_default,
  GaiaCompatTheme: () => gaiaCompatTheme,
  animations: () => animations,
  borderRadius: () => borderRadius,
  brandColors: () => brandColors,
  fluid: () => fluid,
  fontFamilies: () => fontFamilies,
  fontSizes: () => fontSizes,
  gaiaCompatTypography: () => gaiaCompatTypography,
  glassEffect: () => glassEffect,
  shadows: () => shadows,
  spacingConstants: () => spacingConstants,
  transitionStyles: () => transitionStyles,
  typography: () => typography
});
module.exports = __toCommonJS(index_exports);

// src/theme.ts
var import_styles = require("@mui/material/styles");

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
  // ─── Superficies oscuras (temas dark de producto) ───
  //  Familia de superficies para UIs en modo oscuro. `brand` es el
  //  azul-petróleo de identidad de CEICOL (heroes/banners dark);
  //  `slate` es el neutro sobrio (mismo valor que contrast); `deep`
  //  es el negro azulado para el fondo más profundo y paneles de datos.
  surface: {
    brand: "#0a2530",
    // petróleo de marca — superficie dark principal
    slate: "#0f172a",
    // slate neutro (= contrast) — superficies sobrias
    deep: "#020617"
    // negro azulado — fondo profundo / paneles tech
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
  h4: fluid(18, 16),
  // 16→18px — título compacto (cabeceras de panel/collapse). Paridad con typography.h4.
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
  // Nivel 3 — subtítulo / título compacto (p. ej. cabeceras de panel/collapse).
  // Máximo 1.125rem (18px) para títulos densos; fluido 16→18px.
  h4: {
    fontFamily: FONT_DISPLAY,
    fontWeight: WEIGHTS.bold,
    fontSize: fluid(18, 16),
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

// src/tokens/shadows.ts
var glassEffect = {
  background: "var(--cei-bg-glass, color-mix(in srgb, var(--cei-background-paper) 60%, transparent))",
  backdropFilter: "blur(8px)",
  border: "1px solid var(--cei-line, rgba(255, 255, 255, 0.7))"
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
  "0 10px 15px -3px rgba(0, 114, 152, 0.08), 0 4px 6px -4px rgba(0, 114, 152, 0.08)",
  // 8 -> lg
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "0 20px 40px -15px rgba(0, 114, 152, 0.12)"
  // 16 -> premium
];
var shadows = {
  sm: customShadowsArray[1],
  md: customShadowsArray[4],
  lg: customShadowsArray[8],
  premium: customShadowsArray[16],
  glow: "0 0 30px rgba(13, 148, 136, 0.08)",
  // halo ambiental (acento turquesa)
  glowTech: "0 0 8px rgba(34, 211, 238, 0.55)"
  // glow tenue y brillante (cian tech: nodos, indicadores activos)
};

// src/tokens/layout.ts
var borderRadius = {
  xs: "4px",
  // radios pequeños (chips, inputs densos, detalles)
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
  xxs: "4px",
  // micro-espaciado (detalles, gaps mínimos)
  xtight: "6px",
  // gaps/paddings ajustados
  xs: "8px",
  xsm: "12px",
  // entre xs y sm
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

// src/compat.ts
var FONT_DISPLAY2 = "'Big Shoulders Display', 'Inter', system-ui, sans-serif";
var FONT_BODY2 = "'Inter', system-ui, -apple-system, sans-serif";
var W = { regular: 400, medium: 500, semibold: 600, bold: 700 };
var h = (weight, size, lineHeight = 1.2) => ({
  fontFamily: FONT_DISPLAY2,
  fontWeight: weight,
  fontSize: fluid(size),
  lineHeight
});
var t = (weight, size, lineHeight = 1.5) => ({
  fontFamily: FONT_BODY2,
  fontWeight: weight,
  fontSize: size > 16 ? fluid(size) : `${size}px`,
  lineHeight
});
var gaiaCompatTypography = {
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
  h3lgSemibold: h(W.semibold, 20, "26px"),
  h3Medium: h(W.medium, 18),
  // Body
  bodyxxlRegular: t(W.regular, 24),
  bodyxxlRegularSpacing: t(W.regular, 24, "38.2px"),
  bodyxxlSemiboldSpacing: t(W.semibold, 24, "38.2px"),
  bodyxlBoldSpacing: t(W.bold, 18, "28.1px"),
  bodyxlSemibold: t(W.semibold, 18),
  bodyxlMedium: t(W.medium, 18),
  bodyxlMediumSpacing: t(W.medium, 18, "28.1px"),
  bodyxlRegular: t(W.regular, 18),
  bodylgMedium: t(W.medium, 16),
  bodylgRegular: t(W.regular, 16),
  bodyRegular: t(W.regular, 14),
  bodyRegularSpacing: t(W.regular, 14, "20.4px"),
  bodyMedium: t(W.medium, 14)
};

// src/theme.ts
var easeOut = animations.easing.out;
var durNormal = animations.duration.normal;
var durFast = animations.duration.fast;
var createMapButtonVariant = (variantName, config) => {
  const radial = `radial-gradient(54.15% 54.15% at 46% 46%, ${config.gradient.center} 76.92%, ${config.gradient.edge} 100%)`;
  const anim = `opacity ${durNormal}ms ${easeOut}, transform ${durNormal}ms ${easeOut}`;
  return {
    props: { variant: variantName },
    style: {
      width: "50px",
      height: "50px",
      minWidth: "50px",
      borderRadius: borderRadius.round,
      padding: spacingConstants.xs,
      position: "relative",
      overflow: "visible",
      background: radial,
      border: "1px solid transparent",
      boxShadow: "none",
      color: brandColors.text.white,
      "& .MuiSvgIcon-root, & svg": {
        color: "inherit",
        fill: "currentColor",
        width: "100%",
        height: "100%"
      },
      "&::after": {
        content: "attr(data-label)",
        position: "absolute",
        left: "100%",
        marginLeft: 0,
        top: 0,
        width: "max-content",
        maxWidth: "160px",
        backgroundColor: config.labelBg,
        color: brandColors.text.white,
        padding: "6px 12px",
        borderRadius: borderRadius.sm,
        borderBottomLeftRadius: 0,
        textWrap: "balance",
        overflowWrap: "break-word",
        textAlign: "start",
        pointerEvents: "none",
        fontFamily: fontFamilies.body,
        fontSize: "14px",
        fontWeight: 500,
        boxShadow: shadows.sm,
        zIndex: 10,
        opacity: 0,
        transform: "translateY(-100%) translateX(-10px)",
        transition: anim
      },
      "&::before": {
        content: '""',
        position: "absolute",
        left: "100%",
        marginLeft: "2px",
        top: "6px",
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderRight: `10px solid ${config.labelBg}`,
        zIndex: 10,
        pointerEvents: "none",
        opacity: 0,
        transform: "translateY(-100%) translateX(-10px)",
        transition: anim
      },
      "&:hover": {
        boxShadow: shadows.sm,
        background: radial,
        border: "1px solid transparent",
        "&::after": { opacity: 1, transform: "translateY(-100%) translateX(0)" },
        "&::before": { opacity: 1, transform: "translateY(-100%) translateX(0)" }
      },
      "&:active, &.Mui-active": {
        background: config.active.background,
        borderColor: config.active.border,
        boxShadow: "none",
        "&::after, &::before": {
          opacity: 0,
          transform: "translateY(-100%) translateX(-5px)"
        }
      }
    }
  };
};
var brandPalette = {
  primary: {
    main: brandColors.primary.main,
    light: brandColors.primary.light,
    dark: brandColors.primary.dark,
    bg: brandColors.primary.bg,
    glass: "rgba(0, 114, 152, 0.12)",
    contrastText: brandColors.text.white
  },
  // En MUI, "secondary" = el color de acción/datos de CEICOL (turquesa).
  secondary: {
    main: brandColors.accent.main,
    light: brandColors.accent.light,
    bg: brandColors.accent.bg,
    glass: "rgba(13, 148, 136, 0.12)",
    contrastText: brandColors.text.white
  },
  // Alias semántico explícito para quien prefiera nombrarlo "accent".
  accent: {
    main: brandColors.accent.main,
    light: brandColors.accent.light,
    bg: brandColors.accent.bg,
    glass: "rgba(13, 148, 136, 0.12)",
    contrastText: brandColors.text.white
  },
  // Acento tech (cian/sky) — dataviz, glows y detalles en modo oscuro.
  tech: {
    main: brandColors.tech.main,
    light: brandColors.tech.light,
    dark: brandColors.tech.dark,
    bg: brandColors.tech.bg,
    glass: "rgba(14, 165, 233, 0.12)",
    contrastText: brandColors.contrast.main
  },
  success: {
    main: brandColors.success.main,
    light: brandColors.success.light,
    bg: brandColors.success.bg,
    contrastText: brandColors.text.white
  },
  warning: {
    main: brandColors.warning.main,
    light: brandColors.warning.light,
    bg: brandColors.warning.bg,
    contrastText: brandColors.text.heading
  },
  error: {
    main: brandColors.error.main,
    light: brandColors.error.light,
    bg: brandColors.error.bg,
    contrastText: brandColors.text.white
  },
  info: {
    main: brandColors.info.main,
    light: brandColors.info.light,
    bg: brandColors.info.bg,
    contrastText: brandColors.text.white
  },
  contrast: {
    main: brandColors.contrast.main,
    light: brandColors.contrast.light,
    contrastText: brandColors.text.white
  },
  // Superficies oscuras para temas dark de producto.
  surface: {
    brand: brandColors.surface.brand,
    slate: brandColors.surface.slate,
    deep: brandColors.surface.deep
  },
  // ─── Claves COMPAT con theme-gaia (deprecadas) ───
  // Mismos nombres que usa Gaia, con valores de CEICOL, para
  // que un producto Gaia adopte la marca cambiando solo el import.
  tertiary: {
    main: brandColors.contrast.main,
    light: brandColors.contrast.light,
    glass: "rgba(15, 23, 42, 0.10)",
    contrastText: brandColors.text.white
  },
  // Gaia usaba `cta` como su acento dorado (títulos, bordes, "gold").
  // Decisión de marca: se traduce al AZUL de marca de CEICOL.
  cta: {
    main: brandColors.primary.main,
    light: brandColors.primary.light,
    glass: "rgba(0, 114, 152, 0.12)",
    contrastText: brandColors.text.white
  },
  // Gaia usaba `green` como su color de MARCA/ACTIVO (green.button = estado
  // activo/seleccionado). Rol = color de marca principal → en CEICOL es el AZUL.
  // Así los estados activos y acentos "verdes" pasan a azul CEICOL, coherentes.
  green: {
    main: brandColors.primary.main,
    light: brandColors.primary.light,
    bg: brandColors.primary.bg,
    glass: "rgba(0, 114, 152, 0.12)",
    button: brandColors.primary.dark,
    // activo: azul oscuro, buen contraste como fondo y texto
    contrastText: brandColors.text.white
  },
  brown: {
    main: brandColors.text.heading,
    light: brandColors.text.muted,
    glass: "rgba(51, 65, 85, 0.10)",
    contrastText: brandColors.text.white
  },
  link: {
    main: brandColors.primary.main,
    light: brandColors.primary.light,
    contrastText: brandColors.text.white
  }
};
var lightPalette = {
  ...brandPalette,
  text: {
    primary: brandColors.text.body,
    secondary: brandColors.text.muted,
    light: brandColors.text.white
    // compat theme-gaia
  },
  background: {
    default: brandColors.background.default,
    paper: brandColors.background.paper
  },
  divider: brandColors.border.light
};
var darkPalette = {
  ...brandPalette,
  text: {
    primary: brandColors.text.white,
    secondary: brandColors.text.mutedLight,
    light: brandColors.text.white
  },
  background: {
    default: brandColors.surface.deep,
    paper: brandColors.surface.brand
  },
  divider: "rgba(255, 255, 255, 0.12)"
};
var themeOptions = {
  // MUI 9: variables CSS + esquemas claro/oscuro. El dark se activa con el
  // MISMO atributo data-theme que usa la capa CSS de CEICOL.
  cssVariables: { colorSchemeSelector: '[data-theme="%s"]' },
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette }
  },
  // API principal (variantes h1–h4, body1…) + variantes COMPAT de Gaia
  typography: { ...typography, ...gaiaCompatTypography },
  // Radio base de MUI para Paper/Card/Menu sin radio explícito. Se mantiene
  // discreto (como el theme original) para no inflar el radio de las tarjetas;
  // los componentes que quieren más radio lo fijan con borderRadius.lg, etc.
  shape: { borderRadius: 4 },
  shadows: Array(25).fill("none").map((_, i) => customShadowsArray[i] || "none"),
  // Variables globales del sistema
  customShape: borderRadius,
  customSpacing: spacingConstants,
  customTransitions: transitionStyles,
  effectShadows: shadows,
  fontFamilies,
  components: {
    // Encabezados heredan la fuente display automáticamente
    MuiCssBaseline: {
      styleOverrides: {
        body: { fontFamily: fontFamilies.body },
        "h1, h2, h3, h4": { fontFamily: fontFamilies.display }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Solo estilo tipográfico/transición. NO se fija padding/gap/borderRadius
        // globales: eso lo maneja MUI según el tamaño (size), como en el theme
        // original. Las variantes cei-* definen su propio padding cuando aplica.
        root: {
          transition: `all ${durFast}ms ${easeOut}`,
          textTransform: "none",
          fontWeight: 600,
          lineHeight: 1.2
        }
      },
      variants: [
        // Primario — fondo azul de marca
        {
          props: { variant: "cei-primary" },
          style: {
            backgroundColor: brandColors.primary.main,
            color: brandColors.text.white,
            boxShadow: "0 4px 14px rgba(0, 114, 152, 0.2)",
            "&:hover": {
              backgroundColor: brandColors.primary.dark,
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(0, 114, 152, 0.3)"
            },
            "&:active": { transform: "translateY(0) scale(0.98)" }
          }
        },
        // Secundario — fondo claro con borde
        {
          props: { variant: "cei-secondary" },
          style: {
            backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
            color: `var(--cei-fg-strong, ${brandColors.text.heading})`,
            border: `1px solid var(--cei-line, ${brandColors.border.light})`,
            boxShadow: shadows.sm,
            "&:hover": {
              backgroundColor: `var(--cei-bg-sunken, ${brandColors.background.subtle})`,
              borderColor: `var(--cei-line-strong, ${brandColors.border.medium})`,
              transform: "translateY(-2px)"
            },
            "&:active": { transform: "translateY(0) scale(0.98)" }
          }
        },
        // Fantasma (ghost) — solo texto, para acciones terciarias / cancelar
        {
          props: { variant: "cei-ghost" },
          style: {
            backgroundColor: "transparent",
            color: `var(--cei-fg-strong, ${brandColors.text.heading})`,
            border: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: `var(--cei-bg-sunken, ${brandColors.background.subtle})`
            },
            "&:active": { transform: "scale(0.98)" }
          }
        },
        // Destructivo — fondo rojo, solo acciones irreversibles
        {
          props: { variant: "cei-destructive" },
          style: {
            backgroundColor: brandColors.error.main,
            color: brandColors.text.white,
            "&:hover": {
              backgroundColor: brandColors.error.main,
              filter: "brightness(0.93)",
              transform: "translateY(-2px)"
            },
            "&:active": { transform: "translateY(0) scale(0.98)" }
          }
        },
        // Grande — para CTAs de hero / sección
        {
          props: { variant: "cei-large" },
          style: {
            backgroundColor: brandColors.primary.main,
            color: brandColors.text.white,
            padding: "1rem 2rem",
            fontSize: "1rem",
            borderRadius: borderRadius.lg,
            boxShadow: "0 4px 14px rgba(0, 114, 152, 0.2)",
            "&:hover": {
              backgroundColor: brandColors.primary.dark,
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(0, 114, 152, 0.3)"
            },
            "&:active": { transform: "translateY(0) scale(0.98)" }
          }
        },
        // ─── Icon buttons (API CEICOL) ───
        // Botón circular de solo ícono. Reemplazo moderno de gaia-icon-*;
        // el color usa el rol --cei-brand para voltear con el tema.
        {
          props: { variant: "cei-icon-glass" },
          style: {
            minWidth: "40px",
            width: "40px",
            height: "40px",
            padding: "8px",
            borderRadius: borderRadius.round,
            backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
            color: `var(--cei-brand, ${brandColors.primary.main})`,
            border: "1px solid transparent",
            "&:hover": { boxShadow: shadows.sm },
            '&:active, &.Mui-active, &[aria-pressed="true"]': {
              ...glassEffect,
              color: `var(--cei-brand, ${brandColors.primary.main})`,
              borderColor: `var(--cei-brand, ${brandColors.primary.main})`
            }
          }
        },
        {
          props: { variant: "cei-icon-outline" },
          style: {
            minWidth: "40px",
            width: "40px",
            height: "40px",
            padding: "8px",
            borderRadius: borderRadius.round,
            backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
            color: `var(--cei-brand, ${brandColors.primary.main})`,
            border: `1px solid var(--cei-brand, ${brandColors.primary.main})`,
            "&:hover": { boxShadow: shadows.sm, borderColor: "transparent" },
            '&:active, &.Mui-active, &[aria-pressed="true"]': {
              backgroundColor: `var(--cei-brand, ${brandColors.primary.main})`,
              color: brandColors.text.white,
              border: "none"
            }
          }
        },
        // ─── Variantes COMPAT con theme-gaia (deprecadas) ───
        // Reexponen los nombres genéricos de botón de Gaia con el
        // aspecto de CEICOL. NO se incluyen los botones de mapa de
        // Gaia Amazonas (amazonia/panamazonia/macroterritorio).
        {
          props: { variant: "gaia-cta-contained" },
          style: {
            backgroundColor: brandColors.primary.main,
            color: brandColors.text.white,
            borderRadius: borderRadius.md,
            boxShadow: "0 4px 14px rgba(0, 114, 152, 0.2)",
            "&:hover": {
              backgroundColor: brandColors.primary.dark,
              transform: "translateY(-2px)"
            },
            "&:active": { transform: "translateY(0) scale(0.98)" }
          }
        },
        {
          props: { variant: "gaia-cta-outlined" },
          style: {
            backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
            color: `var(--cei-fg-strong, ${brandColors.text.heading})`,
            border: `1px solid var(--cei-line, ${brandColors.border.light})`,
            borderRadius: borderRadius.md,
            boxShadow: shadows.sm,
            "&:hover": {
              backgroundColor: `var(--cei-bg-sunken, ${brandColors.background.subtle})`,
              borderColor: `var(--cei-line-strong, ${brandColors.border.medium})`
            },
            "&:active": { transform: "scale(0.98)" }
          }
        },
        {
          props: { variant: "gaia-icon-glass" },
          style: {
            minWidth: "40px",
            width: "40px",
            height: "40px",
            padding: "8px",
            borderRadius: borderRadius.round,
            backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
            color: brandColors.primary.main,
            border: "1px solid transparent",
            "&:hover": { boxShadow: shadows.sm },
            '&:active, &.Mui-active, &[aria-pressed="true"]': {
              ...glassEffect,
              color: brandColors.primary.main,
              borderColor: brandColors.primary.main
            }
          }
        },
        {
          props: { variant: "gaia-icon-outline" },
          style: {
            minWidth: "40px",
            width: "40px",
            height: "40px",
            padding: "8px",
            borderRadius: borderRadius.round,
            backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
            color: brandColors.primary.main,
            border: `1px solid ${brandColors.primary.main}`,
            "&:hover": { boxShadow: shadows.sm, borderColor: "transparent" },
            '&:active, &.Mui-active, &[aria-pressed="true"]': {
              backgroundColor: brandColors.primary.main,
              color: brandColors.text.white,
              border: "none"
            }
          }
        },
        // Botones de región (gama CEICOL, tres colores distinguibles)
        createMapButtonVariant("gaia-amazonia", {
          gradient: { center: "#2dd4bf", edge: "#0d9488" },
          // turquesa
          labelBg: brandColors.accent.main,
          active: { border: brandColors.accent.main, background: "rgba(13, 148, 136, 0.12)" }
        }),
        createMapButtonVariant("gaia-panamazonia", {
          gradient: { center: "#0391b2", edge: "#007298" },
          // azul de marca
          labelBg: brandColors.primary.main,
          active: { border: brandColors.primary.main, background: "rgba(0, 114, 152, 0.12)" }
        }),
        createMapButtonVariant("gaia-macroterritorio", {
          gradient: { center: "#f59e0b", edge: "#d97706" },
          // ámbar (acento cálido, como el dorado original)
          labelBg: brandColors.warning.main,
          active: { border: brandColors.warning.main, background: "rgba(217, 119, 6, 0.12)" }
        })
      ]
    },
    // IconButton no expone prop `variant` en MUI. Por eso:
    //  · root   → default global sutil: todos los <IconButton> se sienten CEICOL
    //             (color de marca en hover + transición), respetando su color prop.
    //  · clases → variantes opt-in por className (`cei-icon-outline`/`cei-icon-glass`),
    //             con el mismo aspecto que sus equivalentes de MuiButton, para los
    //             iconos prominentes. Hovers autocontenidos (no heredan el default).
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: `all ${durFast}ms ${easeOut}`,
          "&:hover": {
            backgroundColor: `var(--cei-bg-sunken, ${brandColors.background.subtle})`,
            color: `var(--cei-brand, ${brandColors.primary.main})`
          },
          "&.cei-icon-outline": {
            borderRadius: borderRadius.round,
            backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
            color: `var(--cei-brand, ${brandColors.primary.main})`,
            border: `1px solid var(--cei-brand, ${brandColors.primary.main})`,
            "&:hover": {
              backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
              color: `var(--cei-brand, ${brandColors.primary.main})`,
              boxShadow: shadows.sm,
              borderColor: "transparent"
            },
            '&:active, &.Mui-active, &[aria-pressed="true"]': {
              backgroundColor: `var(--cei-brand, ${brandColors.primary.main})`,
              color: brandColors.text.white,
              border: "none"
            }
          },
          "&.cei-icon-glass": {
            borderRadius: borderRadius.round,
            backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
            color: `var(--cei-brand, ${brandColors.primary.main})`,
            border: "1px solid transparent",
            "&:hover": {
              backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
              color: `var(--cei-brand, ${brandColors.primary.main})`,
              boxShadow: shadows.sm
            },
            '&:active, &.Mui-active, &[aria-pressed="true"]': {
              ...glassEffect,
              color: `var(--cei-brand, ${brandColors.primary.main})`,
              borderColor: `var(--cei-brand, ${brandColors.primary.main})`
            }
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: brandColors.primary.main,
          textDecorationColor: brandColors.primary.light,
          transition: `color ${durFast}ms ${easeOut}`,
          "&:hover": { color: brandColors.primary.dark }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: brandColors.contrast.main,
          color: brandColors.text.white,
          fontSize: "0.75rem",
          borderRadius: borderRadius.sm
        },
        arrow: { color: brandColors.contrast.main }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          transition: `border-color ${durNormal}ms ${easeOut}`,
          // Borde del input → rol (visible en claro y oscuro)
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `var(--cei-line-strong, ${brandColors.border.medium})`
          }
        }
      }
    },
    // Alert — fondo teñido del color semántico sobre la superficie del tema
    // (color-mix adapta el tinte a claro/oscuro); texto por rol.
    // MUI 9: los estilos por-severidad se declaran con la API `variants`
    // (los slots standardSuccess/… se removieron del styleOverrides).
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          borderLeft: "3px solid",
          fontFamily: fontFamilies.body,
          color: `var(--cei-fg-strong, ${brandColors.text.heading})`
        }
      },
      variants: [
        {
          props: { variant: "standard", severity: "success" },
          style: { backgroundColor: `color-mix(in srgb, var(--cei-success) 14%, var(--cei-bg-raised, ${brandColors.background.paper}))`, borderLeftColor: brandColors.success.main }
        },
        {
          props: { variant: "standard", severity: "warning" },
          style: { backgroundColor: `color-mix(in srgb, var(--cei-warning) 14%, var(--cei-bg-raised, ${brandColors.background.paper}))`, borderLeftColor: brandColors.warning.main }
        },
        {
          props: { variant: "standard", severity: "error" },
          style: { backgroundColor: `color-mix(in srgb, var(--cei-error) 14%, var(--cei-bg-raised, ${brandColors.background.paper}))`, borderLeftColor: brandColors.error.main }
        },
        {
          props: { variant: "standard", severity: "info" },
          style: { backgroundColor: `color-mix(in srgb, var(--cei-info) 14%, var(--cei-bg-raised, ${brandColors.background.paper}))`, borderLeftColor: brandColors.info.main }
        }
      ]
    },
    // Chip — pill con la gama CEICOL
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: borderRadius.pill, fontWeight: 600 }
      }
    },
    // Dialog / Modal — radio y sombra premium (paper hereda background.paper → rol)
    MuiDialog: {
      styleOverrides: {
        paper: { borderRadius: borderRadius.lg, boxShadow: shadows.premium }
      }
    },
    // Tabs — indicador y tab activo en el azul de marca (rol: aclara en oscuro)
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: `var(--cei-brand, ${brandColors.primary.main})`, height: 2 }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          color: `var(--cei-fg-muted, ${brandColors.text.muted})`,
          "&.Mui-selected": { color: `var(--cei-brand, ${brandColors.primary.main})`, fontWeight: 700 }
        }
      }
    },
    // Tabla de datos — texto y bordes por rol
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
          color: `var(--cei-fg-strong, ${brandColors.text.heading})`,
          borderBottom: `2px solid var(--cei-line-strong, ${brandColors.border.medium})`
        },
        root: { borderBottom: `1px solid var(--cei-line, ${brandColors.border.light})` }
      }
    },
    // Avatar — fondo teñido de marca adaptable
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: `color-mix(in srgb, var(--cei-primary) 12%, var(--cei-bg-raised, ${brandColors.background.paper}))`,
          color: `var(--cei-brand, ${brandColors.primary.dark})`,
          fontFamily: fontFamilies.body,
          fontWeight: 600
        }
      }
    },
    // Accordion — bordes suaves por rol; fondo por rol
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: `1px solid var(--cei-line, ${brandColors.border.light})`,
          borderRadius: `${borderRadius.md} !important`,
          boxShadow: "none",
          backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
          "&::before": { display: "none" }
        }
      }
    },
    // Paginación — item activo en azul de marca (rol)
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          "&.Mui-selected": {
            backgroundColor: `var(--cei-brand, ${brandColors.primary.main})`,
            color: brandColors.text.white
          }
        }
      }
    }
  }
};
var theme = (0, import_styles.createTheme)(themeOptions);
var theme_default = theme;
var gaiaCompatOptions = {
  ...themeOptions,
  colorSchemes: {
    // Compat: en claro, texto secundario/light en blanco (para fondos oscuros
    // de Gaia). El resto de la paleta se mantiene. Dark igual que AppTheme.
    light: {
      palette: {
        ...lightPalette,
        text: {
          primary: brandColors.text.heading,
          secondary: brandColors.text.white,
          light: brandColors.text.white
        }
      }
    },
    dark: { palette: darkPalette }
  }
};
var gaiaCompatTheme = (0, import_styles.createTheme)(gaiaCompatOptions);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppTheme,
  GaiaCompatTheme,
  animations,
  borderRadius,
  brandColors,
  fluid,
  fontFamilies,
  fontSizes,
  gaiaCompatTypography,
  glassEffect,
  shadows,
  spacingConstants,
  transitionStyles,
  typography
});
