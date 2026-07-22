// src/mui-types.ts
import "@mui/material/styles";
import "@mui/material/Button";

// src/theme.ts
import {
  createTheme,
  responsiveFontSizes
} from "@mui/material/styles";

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
  // Gaia usaba `cta` como su acento dorado. Rol = acento secundario →
  // en CEICOL es el turquesa (accent), coherente con la paleta del tema.
  cta: {
    main: "#0d9488",
    light: "#2dd4bf"
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

// src/tokens/layout.ts
var borderRadius = {
  sm: "6px",
  md: "12px",
  lg: "18px",
  xl: "24px",
  xxl: "54px",
  round: "50%",
  // Compat theme-gaia (deprecado): Gaia usa `pill` para el radio máximo.
  pill: "9999px"
};
var spacingConstants = {
  xs: "8px",
  sm: "16px",
  md: "24px",
  lg: "40px",
  xl: "80px",
  xxl: "140px",
  // Compat theme-gaia (deprecado): claves que Gaia usa y CEICOL no.
  min: "8px",
  // Gaia `min` → CEICOL xs
  base: "16px"
  // Gaia `base` → CEICOL sm
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
var themeOptions = {
  palette: {
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
    // ─── Claves COMPAT con theme-gaia (deprecadas) ───
    // Mismos nombres que usa Gaia, con valores de CEICOL, para
    // que un producto Gaia adopte la marca cambiando solo el import.
    tertiary: {
      main: brandColors.contrast.main,
      light: brandColors.contrast.light,
      glass: "rgba(15, 23, 42, 0.10)",
      contrastText: brandColors.text.white
    },
    // Gaia usaba `cta` como su ACENTO dorado (títulos, bordes, "gold").
    // Rol = acento secundario → en CEICOL es el turquesa (accent).
    cta: {
      main: brandColors.accent.main,
      light: brandColors.accent.light,
      glass: "rgba(13, 148, 136, 0.12)",
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
    },
    text: {
      primary: brandColors.text.body,
      secondary: brandColors.text.muted,
      light: brandColors.text.white
      // compat theme-gaia: texto sobre fondos oscuros
    },
    background: {
      default: brandColors.background.default,
      paper: brandColors.background.paper
    },
    divider: brandColors.border.light
  },
  // API principal (variantes h1–h4, body1…) + variantes COMPAT de Gaia
  typography: { ...typography, ...gaiaCompatTypography },
  shape: { borderRadius: 12 },
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
        root: {
          transition: `all ${durFast}ms ${easeOut}`,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          borderRadius: borderRadius.md,
          padding: "0.75rem 1.5rem",
          display: "inline-flex",
          alignItems: "center",
          gap: spacingConstants.xs,
          lineHeight: 1
        }
      },
      variants: [
        // Primario — fondo azul de marca
        {
          props: { variant: "cei-primary" },
          style: {
            backgroundColor: brandColors.primary.main,
            color: brandColors.text.white,
            boxShadow: "0 4px 14px rgba(48, 112, 149, 0.2)",
            "&:hover": {
              backgroundColor: brandColors.primary.dark,
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(48, 112, 149, 0.3)"
            },
            "&:active": { transform: "translateY(0) scale(0.98)" }
          }
        },
        // Secundario — fondo claro con borde
        {
          props: { variant: "cei-secondary" },
          style: {
            backgroundColor: brandColors.background.paper,
            color: brandColors.text.heading,
            border: `1px solid ${brandColors.border.light}`,
            boxShadow: shadows.sm,
            "&:hover": {
              backgroundColor: brandColors.background.subtle,
              borderColor: brandColors.border.medium,
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
            color: brandColors.text.heading,
            border: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: brandColors.background.subtle
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
            boxShadow: "0 4px 14px rgba(48, 112, 149, 0.2)",
            "&:hover": {
              backgroundColor: brandColors.primary.dark,
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(48, 112, 149, 0.3)"
            },
            "&:active": { transform: "translateY(0) scale(0.98)" }
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
            boxShadow: "0 4px 14px rgba(48, 112, 149, 0.2)",
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
            backgroundColor: brandColors.background.paper,
            color: brandColors.text.heading,
            border: `1px solid ${brandColors.border.light}`,
            borderRadius: borderRadius.md,
            boxShadow: shadows.sm,
            "&:hover": {
              backgroundColor: brandColors.background.subtle,
              borderColor: brandColors.border.medium
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
            backgroundColor: brandColors.background.paper,
            color: brandColors.primary.main,
            border: "1px solid transparent",
            "&:hover": { boxShadow: shadows.sm },
            "&:active, &.Mui-active": {
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
            backgroundColor: brandColors.background.paper,
            color: brandColors.primary.main,
            border: `1px solid ${brandColors.primary.main}`,
            "&:hover": { boxShadow: shadows.sm, borderColor: "transparent" },
            "&:active, &.Mui-active": {
              backgroundColor: brandColors.primary.main,
              color: brandColors.text.white,
              border: "none"
            }
          }
        }
      ]
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
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: borderRadius.lg }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          transition: `border-color ${durNormal}ms ${easeOut}`
        }
      }
    }
  }
};
var theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);
var theme_default = theme;
var gaiaCompatOptions = {
  ...themeOptions,
  palette: {
    ...themeOptions.palette,
    text: {
      primary: brandColors.text.heading,
      // muy oscuro
      secondary: brandColors.text.white,
      // muy claro (sobre fondos oscuros)
      light: brandColors.text.white
    }
  }
};
var gaiaCompatTheme = createTheme(gaiaCompatOptions);
gaiaCompatTheme = responsiveFontSizes(gaiaCompatTheme);
export {
  theme_default as AppTheme,
  gaiaCompatTheme as GaiaCompatTheme,
  animations,
  borderRadius,
  brandColors,
  fluid,
  fontFamilies,
  gaiaCompatTypography,
  glassEffect,
  shadows,
  spacingConstants,
  transitionStyles,
  typography
};
