// ============================================================
//  CEICOL — Ampliaciones de tipos para MUI
// ------------------------------------------------------------
//  Registra colores, variables y variantes propias de CEICOL,
//  más el vocabulario COMPAT de theme-gaia (deprecado).
// ============================================================

import '@mui/material/styles';
import '@mui/material/Button';
import React from 'react';

import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';
import { shadows } from './tokens/shadows';
import { fontFamilies } from './tokens/typography';

declare module '@mui/material/styles' {
  // Propiedades extra en cada color:
  //  · bg     — fondo tenue de acento (API de CEICOL)
  //  · glass  — compat theme-gaia: fondo translúcido
  //  · button — compat theme-gaia (green.button)
  interface SimplePaletteColorOptions {
    bg?: string;
    glass?: string;
    button?: string;
  }
  interface PaletteColor {
    bg?: string;
    glass?: string;
    button?: string;
  }

  // Token de texto claro (compat theme-gaia): texto sobre fondos oscuros.
  interface TypeText {
    light?: string;
  }

  // Colores propios de CEICOL (accent, contrast) + compat de Gaia.
  interface Palette {
    accent: PaletteColor;
    tech: PaletteColor;
    contrast: PaletteColor;
    tertiary: PaletteColor;
    cta: PaletteColor;
    green: PaletteColor;
    brown: PaletteColor;
    link: PaletteColor;
  }
  interface PaletteOptions {
    accent?: SimplePaletteColorOptions;
    tech?: SimplePaletteColorOptions;
    contrast?: SimplePaletteColorOptions;
    tertiary?: SimplePaletteColorOptions;
    cta?: SimplePaletteColorOptions;
    green?: SimplePaletteColorOptions;
    brown?: SimplePaletteColorOptions;
    link?: SimplePaletteColorOptions;
  }

  // Variables globales del sistema, accesibles desde theme.*
  interface Theme {
    customShape: typeof borderRadius;
    customSpacing: typeof spacingConstants;
    customTransitions: typeof transitionStyles;
    effectShadows: typeof shadows;
    fontFamilies: typeof fontFamilies;
  }
  interface ThemeOptions {
    customShape?: typeof borderRadius;
    customSpacing?: typeof spacingConstants;
    customTransitions?: typeof transitionStyles;
    effectShadows?: typeof shadows;
    fontFamilies?: typeof fontFamilies;
  }

  // Variantes tipográficas COMPAT con theme-gaia (deprecadas).
  interface TypographyVariants {
    h1xxlBold: React.CSSProperties; h1xlBold: React.CSSProperties;
    h1lgBold: React.CSSProperties; h1Bold: React.CSSProperties;
    h2xxlSemibold: React.CSSProperties; h2xxlMedium: React.CSSProperties;
    h2lgMedium: React.CSSProperties; h2Bold: React.CSSProperties;
    h3xxlSemibold: React.CSSProperties; h3xlRegular: React.CSSProperties;
    h3xlSemibold: React.CSSProperties; h3xlMedium: React.CSSProperties;
    h3lgSemibold: React.CSSProperties; h3Medium: React.CSSProperties;
    bodyxxlRegular: React.CSSProperties; bodyxxlRegularSpacing: React.CSSProperties;
    bodyxxlSemiboldSpacing: React.CSSProperties; bodyxlBoldSpacing: React.CSSProperties;
    bodyxlSemibold: React.CSSProperties; bodyxlMedium: React.CSSProperties;
    bodyxlMediumSpacing: React.CSSProperties; bodyxlRegular: React.CSSProperties;
    bodylgMedium: React.CSSProperties; bodylgRegular: React.CSSProperties;
    bodyRegular: React.CSSProperties; bodyRegularSpacing: React.CSSProperties;
    bodyMedium: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h1xxlBold?: React.CSSProperties; h1xlBold?: React.CSSProperties;
    h1lgBold?: React.CSSProperties; h1Bold?: React.CSSProperties;
    h2xxlSemibold?: React.CSSProperties; h2xxlMedium?: React.CSSProperties;
    h2lgMedium?: React.CSSProperties; h2Bold?: React.CSSProperties;
    h3xxlSemibold?: React.CSSProperties; h3xlRegular?: React.CSSProperties;
    h3xlSemibold?: React.CSSProperties; h3xlMedium?: React.CSSProperties;
    h3lgSemibold?: React.CSSProperties; h3Medium?: React.CSSProperties;
    bodyxxlRegular?: React.CSSProperties; bodyxxlRegularSpacing?: React.CSSProperties;
    bodyxxlSemiboldSpacing?: React.CSSProperties; bodyxlBoldSpacing?: React.CSSProperties;
    bodyxlSemibold?: React.CSSProperties; bodyxlMedium?: React.CSSProperties;
    bodyxlMediumSpacing?: React.CSSProperties; bodyxlRegular?: React.CSSProperties;
    bodylgMedium?: React.CSSProperties; bodylgRegular?: React.CSSProperties;
    bodyRegular?: React.CSSProperties; bodyRegularSpacing?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
  }
}

// Variantes tipográficas COMPAT en el componente Typography
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1xxlBold: true; h1xlBold: true; h1lgBold: true; h1Bold: true;
    h2xxlSemibold: true; h2xxlMedium: true; h2lgMedium: true; h2Bold: true;
    h3xxlSemibold: true; h3xlRegular: true; h3xlSemibold: true; h3xlMedium: true;
    h3lgSemibold: true; h3Medium: true;
    bodyxxlRegular: true; bodyxxlRegularSpacing: true; bodyxxlSemiboldSpacing: true;
    bodyxlBoldSpacing: true; bodyxlSemibold: true; bodyxlMedium: true;
    bodyxlMediumSpacing: true; bodyxlRegular: true;
    bodylgMedium: true; bodylgRegular: true;
    bodyRegular: true; bodyRegularSpacing: true; bodyMedium: true;
  }
  interface TypographyPropsColorOverrides {
    accent: true; contrast: true;
    tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}

// Variantes de botón: propias de CEICOL (cei-*) + compat genéricas de Gaia.
// Se EXCLUYEN los botones de mapa de Gaia Amazonas.
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'cei-primary': true;
    'cei-secondary': true;
    'cei-ghost': true;
    'cei-destructive': true;
    'cei-large': true;
    'gaia-cta-contained': true;
    'gaia-cta-outlined': true;
    'gaia-icon-glass': true;
    'gaia-icon-outline': true;
    'gaia-amazonia': true;
    'gaia-panamazonia': true;
    'gaia-macroterritorio': true;
  }
  interface ButtonPropsColorOverrides {
    accent: true; contrast: true;
    tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}

// Overrides de color para el resto de componentes que aceptan `color`.
declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/Icon' {
  interface IconPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}
declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides {
    accent: true; contrast: true; tertiary: true; cta: true; green: true; brown: true; link: true; tech: true;
  }
}

export {};
