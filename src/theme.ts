// ============================================================
//  CEICOL — Tema MUI (createTheme)
// ------------------------------------------------------------
//  Combina la paleta semántica, la tipografía, el espaciado,
//  las sombras y el movimiento de CEICOL en un único objeto
//  `AppTheme` consumible por cualquier producto React + MUI.
//
//  Patrón de estructura calcado de theme-gaia, poblado con
//  los valores de marca de CEICOL. Sin alias de compatibilidad
//  con Gaia (paquete independiente y nuevo).
// ============================================================

import './mui-types';
import {
  createTheme,
  ThemeOptions,
  responsiveFontSizes,
  Shadows,
} from '@mui/material/styles';
import { brandColors } from './tokens/colors';
import { typography, fontFamilies } from './tokens/typography';
import { customShadowsArray, shadows, glassEffect } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles, animations } from './tokens/animations';
import { gaiaCompatTypography } from './compat';

const easeOut = animations.easing.out;
const durNormal = animations.duration.normal;
const durFast = animations.duration.fast;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: brandColors.primary.main,
      light: brandColors.primary.light,
      dark: brandColors.primary.dark,
      bg: brandColors.primary.bg,
      contrastText: brandColors.text.white,
    },
    // En MUI, "secondary" = el color de acción/datos de CEICOL (turquesa).
    secondary: {
      main: brandColors.accent.main,
      light: brandColors.accent.light,
      bg: brandColors.accent.bg,
      contrastText: brandColors.text.white,
    },
    // Alias semántico explícito para quien prefiera nombrarlo "accent".
    accent: {
      main: brandColors.accent.main,
      light: brandColors.accent.light,
      bg: brandColors.accent.bg,
      contrastText: brandColors.text.white,
    },
    success: {
      main: brandColors.success.main,
      light: brandColors.success.light,
      bg: brandColors.success.bg,
      contrastText: brandColors.text.white,
    },
    warning: {
      main: brandColors.warning.main,
      light: brandColors.warning.light,
      bg: brandColors.warning.bg,
      contrastText: brandColors.text.heading,
    },
    error: {
      main: brandColors.error.main,
      light: brandColors.error.light,
      bg: brandColors.error.bg,
      contrastText: brandColors.text.white,
    },
    info: {
      main: brandColors.info.main,
      light: brandColors.info.light,
      bg: brandColors.info.bg,
      contrastText: brandColors.text.white,
    },
    contrast: {
      main: brandColors.contrast.main,
      light: brandColors.contrast.light,
      contrastText: brandColors.text.white,
    },

    // ─── Claves COMPAT con theme-gaia (deprecadas) ───
    // Mismos nombres que usa Gaia, con valores de CEICOL, para
    // que un producto Gaia adopte la marca cambiando solo el import.
    tertiary: {
      main: brandColors.contrast.main,
      light: brandColors.contrast.light,
      contrastText: brandColors.text.white,
    },
    cta: {
      // El CTA de CEICOL es el azul de marca (no el dorado de Gaia).
      main: brandColors.primary.main,
      light: brandColors.primary.light,
      contrastText: brandColors.text.white,
    },
    green: {
      main: brandColors.success.main,
      light: brandColors.success.light,
      bg: brandColors.success.bg,
      contrastText: brandColors.text.white,
    },
    brown: {
      main: brandColors.text.heading,
      light: brandColors.text.muted,
      contrastText: brandColors.text.white,
    },
    link: {
      main: brandColors.primary.main,
      light: brandColors.primary.light,
      contrastText: brandColors.text.white,
    },

    text: {
      primary: brandColors.text.body,
      secondary: brandColors.text.muted,
    },
    background: {
      default: brandColors.background.default,
      paper: brandColors.background.paper,
    },
    divider: brandColors.border.light,
  },

  // API principal (variantes h1–h4, body1…) + variantes COMPAT de Gaia
  typography: { ...typography, ...gaiaCompatTypography },
  shape: { borderRadius: 12 },
  shadows: Array(25)
    .fill('none')
    .map((_, i) => customShadowsArray[i] || 'none') as Shadows,

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
        'h1, h2, h3, h4': { fontFamily: fontFamilies.display },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          transition: `all ${durFast}ms ${easeOut}`,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          borderRadius: borderRadius.md,
          padding: '0.75rem 1.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: spacingConstants.xs,
          lineHeight: 1,
        },
      },
      variants: [
        // Primario — fondo azul de marca
        {
          props: { variant: 'cei-primary' },
          style: {
            backgroundColor: brandColors.primary.main,
            color: brandColors.text.white,
            boxShadow: '0 4px 14px rgba(48, 112, 149, 0.2)',
            '&:hover': {
              backgroundColor: brandColors.primary.dark,
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(48, 112, 149, 0.3)',
            },
            '&:active': { transform: 'translateY(0) scale(0.98)' },
          },
        },
        // Secundario — fondo claro con borde
        {
          props: { variant: 'cei-secondary' },
          style: {
            backgroundColor: brandColors.background.paper,
            color: brandColors.text.heading,
            border: `1px solid ${brandColors.border.light}`,
            boxShadow: shadows.sm,
            '&:hover': {
              backgroundColor: brandColors.background.subtle,
              borderColor: brandColors.border.medium,
              transform: 'translateY(-2px)',
            },
            '&:active': { transform: 'translateY(0) scale(0.98)' },
          },
        },
        // Fantasma (ghost) — solo texto, para acciones terciarias / cancelar
        {
          props: { variant: 'cei-ghost' },
          style: {
            backgroundColor: 'transparent',
            color: brandColors.text.heading,
            border: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: brandColors.background.subtle,
            },
            '&:active': { transform: 'scale(0.98)' },
          },
        },
        // Destructivo — fondo rojo, solo acciones irreversibles
        {
          props: { variant: 'cei-destructive' },
          style: {
            backgroundColor: brandColors.error.main,
            color: brandColors.text.white,
            '&:hover': {
              backgroundColor: brandColors.error.main,
              filter: 'brightness(0.93)',
              transform: 'translateY(-2px)',
            },
            '&:active': { transform: 'translateY(0) scale(0.98)' },
          },
        },
        // Grande — para CTAs de hero / sección
        {
          props: { variant: 'cei-large' },
          style: {
            backgroundColor: brandColors.primary.main,
            color: brandColors.text.white,
            padding: '1rem 2rem',
            fontSize: '1rem',
            borderRadius: borderRadius.lg,
            boxShadow: '0 4px 14px rgba(48, 112, 149, 0.2)',
            '&:hover': {
              backgroundColor: brandColors.primary.dark,
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(48, 112, 149, 0.3)',
            },
            '&:active': { transform: 'translateY(0) scale(0.98)' },
          },
        },

        // ─── Variantes COMPAT con theme-gaia (deprecadas) ───
        // Reexponen los nombres genéricos de botón de Gaia con el
        // aspecto de CEICOL. NO se incluyen los botones de mapa de
        // Gaia Amazonas (amazonia/panamazonia/macroterritorio).
        {
          props: { variant: 'gaia-cta-contained' },
          style: {
            backgroundColor: brandColors.primary.main,
            color: brandColors.text.white,
            borderRadius: borderRadius.md,
            boxShadow: '0 4px 14px rgba(48, 112, 149, 0.2)',
            '&:hover': {
              backgroundColor: brandColors.primary.dark,
              transform: 'translateY(-2px)',
            },
            '&:active': { transform: 'translateY(0) scale(0.98)' },
          },
        },
        {
          props: { variant: 'gaia-cta-outlined' },
          style: {
            backgroundColor: brandColors.background.paper,
            color: brandColors.text.heading,
            border: `1px solid ${brandColors.border.light}`,
            borderRadius: borderRadius.md,
            boxShadow: shadows.sm,
            '&:hover': {
              backgroundColor: brandColors.background.subtle,
              borderColor: brandColors.border.medium,
            },
            '&:active': { transform: 'scale(0.98)' },
          },
        },
        {
          props: { variant: 'gaia-icon-glass' },
          style: {
            minWidth: '40px',
            width: '40px',
            height: '40px',
            padding: '8px',
            borderRadius: borderRadius.round,
            backgroundColor: brandColors.background.paper,
            color: brandColors.primary.main,
            border: '1px solid transparent',
            '&:hover': { boxShadow: shadows.sm },
            '&:active, &.Mui-active': {
              ...glassEffect,
              color: brandColors.primary.main,
              borderColor: brandColors.primary.main,
            },
          },
        },
        {
          props: { variant: 'gaia-icon-outline' },
          style: {
            minWidth: '40px',
            width: '40px',
            height: '40px',
            padding: '8px',
            borderRadius: borderRadius.round,
            backgroundColor: brandColors.background.paper,
            color: brandColors.primary.main,
            border: `1px solid ${brandColors.primary.main}`,
            '&:hover': { boxShadow: shadows.sm, borderColor: 'transparent' },
            '&:active, &.Mui-active': {
              backgroundColor: brandColors.primary.main,
              color: brandColors.text.white,
              border: 'none',
            },
          },
        },
      ],
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: brandColors.primary.main,
          textDecorationColor: brandColors.primary.light,
          transition: `color ${durFast}ms ${easeOut}`,
          '&:hover': { color: brandColors.primary.dark },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: brandColors.contrast.main,
          color: brandColors.text.white,
          fontSize: '0.75rem',
          borderRadius: borderRadius.sm,
        },
        arrow: { color: brandColors.contrast.main },
      },
    },

    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: borderRadius.lg },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          transition: `border-color ${durNormal}ms ${easeOut}`,
        },
      },
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;
