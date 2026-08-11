import {
  animations,
  borderRadius,
  brandColors,
  customShadowsArray,
  fluid,
  fontFamilies,
  fontSizes,
  glassEffect,
  shadows,
  spacingConstants,
  transitionStyles,
  typography
} from "./chunk-NJTQALMO.mjs";

// src/theme.ts
import {
  createTheme
} from "@mui/material/styles";

// src/compat.ts
var FONT_DISPLAY = "'Big Shoulders Display', 'Inter', system-ui, sans-serif";
var FONT_BODY = "'Inter', system-ui, -apple-system, sans-serif";
var W = { regular: 400, medium: 500, semibold: 600, bold: 700 };
var h = (weight, size, lineHeight = 1.2) => ({
  fontFamily: FONT_DISPLAY,
  fontWeight: weight,
  fontSize: fluid(size),
  lineHeight
});
var t = (weight, size, lineHeight = 1.5) => ({
  fontFamily: FONT_BODY,
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
        // Radio y tipografía desde tokens: borderRadius.md = 12px (igual que .cei-btn).
        // El padding va en sizeMedium/… (no en root) para no pelear con el sistema
        // de tamaños de MUI. Las variantes cei-* fijan su propio padding/radio.
        root: {
          borderRadius: borderRadius.md,
          transition: `all ${durFast}ms ${easeOut}`,
          textTransform: "none",
          fontWeight: 600,
          lineHeight: 1.2
        },
        // Botón estándar (medium): mismo padding que .cei-btn (12×24px, desde tokens).
        sizeMedium: {
          padding: `${spacingConstants.xsm} ${spacingConstants.md}`
        }
      },
      variants: [
        // Primario — fondo azul de marca
        {
          props: { variant: "cei-primary" },
          style: {
            backgroundColor: brandColors.primary.main,
            color: brandColors.text.white,
            boxShadow: shadows.button,
            "&:hover": {
              backgroundColor: brandColors.primary.dark,
              transform: "translateY(-2px)",
              boxShadow: shadows.buttonHover
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
            boxShadow: shadows.button,
            "&:hover": {
              backgroundColor: brandColors.primary.dark,
              transform: "translateY(-2px)",
              boxShadow: shadows.buttonHover
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
            boxShadow: shadows.button,
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
      },
      // Estado válido: `color="success"` pinta el borde de verde de forma
      // persistente (espejo de `.cei-input--success`; complementa a `error`).
      variants: [
        {
          props: { color: "success" },
          style: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: `var(--cei-success, ${brandColors.success.main})`
            }
          }
        }
      ]
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
    // Acciones de diálogo: padding generoso alineado a los 24px del contenido
    // (.cei-modal usa space-md), para que los botones no queden pegados al borde.
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: `${spacingConstants.sm} ${spacingConstants.md} ${spacingConstants.md}`
        }
      }
    },
    // Switch — espejo del .cei-switch del DS: compacto 40×22, pista de marca al
    // activar (rol, voltea en dark), pulgar 18px con sombra sm.
    MuiSwitch: {
      styleOverrides: {
        root: { width: 40, height: 22, padding: 0, display: "inline-flex" },
        switchBase: {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(18px)",
            "& + .MuiSwitch-track": {
              backgroundColor: `var(--cei-brand, ${brandColors.primary.main})`,
              opacity: 1
            }
          },
          "&.Mui-disabled + .MuiSwitch-track": { opacity: 0.4 }
        },
        thumb: {
          width: 18,
          height: 18,
          boxShadow: shadows.sm,
          backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`
        },
        track: {
          borderRadius: 11,
          backgroundColor: `var(--cei-line-strong, ${brandColors.border.medium})`,
          opacity: 1
        }
      }
    },
    // Card — espejo de .cei-card (fondo elevado + borde de línea + radio lg).
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: `var(--cei-bg-raised, ${brandColors.background.paper})`,
          border: `1px solid var(--cei-line, ${brandColors.border.light})`,
          borderRadius: borderRadius.lg
        }
      }
    },
    // Checkbox — espejo de .cei-check (línea en reposo; marca al activar, voltea).
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: `var(--cei-line-strong, ${brandColors.border.medium})`,
          "&.Mui-checked": { color: `var(--cei-brand, ${brandColors.primary.main})` }
        }
      }
    },
    // Select — el input hereda borde/radio de OutlinedInput; el ícono usa fg-muted.
    MuiSelect: {
      styleOverrides: {
        icon: { color: `var(--cei-fg-muted, ${brandColors.text.muted})` }
      }
    },
    // Skeleton — espejo de .cei-skeleton (fondo hundido, radio sm).
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: `var(--cei-bg-sunken, ${brandColors.background.subtle})`,
          borderRadius: borderRadius.sm
        }
      }
    },
    // Breadcrumbs — espejo de .cei-breadcrumb (texto tenue, separador de línea).
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          color: `var(--cei-fg-muted, ${brandColors.text.muted})`,
          fontSize: "0.875rem"
        },
        separator: { color: `var(--cei-line-strong, ${brandColors.border.medium})` }
      }
    },
    // Stepper — espejo de .cei-stepper/.cei-step. MUI dibuja el icono como SVG
    // relleno (no un círculo con borde como el CSS); se aproxima con los mismos
    // roles: inactivo = hundido/tenue, activo = marca, completado = éxito.
    MuiStepConnector: {
      styleOverrides: {
        line: { borderColor: `var(--cei-line-strong, ${brandColors.border.medium})` },
        root: {
          "&.Mui-active .MuiStepConnector-line, &.Mui-completed .MuiStepConnector-line": {
            borderColor: `var(--cei-brand, ${brandColors.primary.main})`
          }
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: `var(--cei-bg-sunken, ${brandColors.background.subtle})`,
          "& .MuiStepIcon-text": {
            fill: `var(--cei-fg-muted, ${brandColors.text.muted})`
          },
          "&.Mui-active": {
            color: `var(--cei-brand, ${brandColors.primary.main})`,
            "& .MuiStepIcon-text": { fill: brandColors.text.white }
          },
          "&.Mui-completed": { color: `var(--cei-success, ${brandColors.success.main})` },
          "&.Mui-error": { color: `var(--cei-error, ${brandColors.error.main})` }
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: `var(--cei-fg-muted, ${brandColors.text.muted})`,
          fontSize: "0.875rem",
          "&.Mui-active": {
            color: `var(--cei-brand, ${brandColors.primary.main})`,
            fontWeight: 700
          },
          "&.Mui-completed": { color: `var(--cei-fg, ${brandColors.text.body})` }
        }
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
          "&.Mui-selected": { color: `var(--cei-brand, ${brandColors.primary.main})`, fontWeight: 700 },
          "&.Mui-disabled": { opacity: 0.5 }
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
var theme = createTheme(themeOptions);
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
var gaiaCompatTheme = createTheme(gaiaCompatOptions);
export {
  theme_default as AppTheme,
  gaiaCompatTheme as GaiaCompatTheme,
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
};
