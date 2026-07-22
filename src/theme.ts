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
import { customShadowsArray, shadows } from './tokens/shadows';
import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles, animations } from './tokens/animations';

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

  typography,
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
