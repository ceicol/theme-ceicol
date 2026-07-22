// ============================================================
//  CEICOL — Ampliaciones de tipos para MUI
// ------------------------------------------------------------
//  Registra los colores, variables y variantes propias de
//  CEICOL en el sistema de tipos de MUI, para que
//  theme.palette.accent, theme.customSpacing y
//  <Button variant="cei-primary"> tengan autocompletado y
//  chequeo de tipos.
// ============================================================

import '@mui/material/styles';
import '@mui/material/Button';
import React from 'react';

import { borderRadius, spacingConstants } from './tokens/layout';
import { transitionStyles } from './tokens/animations';
import { shadows } from './tokens/shadows';
import { fontFamilies } from './tokens/typography';

declare module '@mui/material/styles' {
  // Propiedad extra en cada color: fondo tenue de acento
  interface SimplePaletteColorOptions {
    bg?: string;
  }
  interface PaletteColor {
    bg?: string;
  }

  // Colores propios de CEICOL que no existen de fábrica en MUI.
  // Las claves tertiary/cta/green/brown/link son COMPAT con
  // theme-gaia (deprecadas) — ver src/compat.ts.
  interface Palette {
    accent: PaletteColor;
    contrast: PaletteColor;
    /** @deprecated compat theme-gaia */ tertiary: PaletteColor;
    /** @deprecated compat theme-gaia */ cta: PaletteColor;
    /** @deprecated compat theme-gaia */ green: PaletteColor;
    /** @deprecated compat theme-gaia */ brown: PaletteColor;
    /** @deprecated compat theme-gaia */ link: PaletteColor;
  }
  interface PaletteOptions {
    accent?: SimplePaletteColorOptions;
    contrast?: SimplePaletteColorOptions;
    tertiary?: SimplePaletteColorOptions;
    cta?: SimplePaletteColorOptions;
    green?: SimplePaletteColorOptions;
    brown?: SimplePaletteColorOptions;
    link?: SimplePaletteColorOptions;
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
    tertiary: true; cta: true; green: true; brown: true; link: true;
  }
}

// Variantes de botón: propias de CEICOL (cei-*) + compat genéricas de Gaia.
// Se EXCLUYEN a propósito los botones de mapa de Gaia Amazonas.
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
  }
  interface ButtonPropsColorOverrides {
    accent: true; contrast: true;
    tertiary: true; cta: true; green: true; brown: true; link: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true; contrast: true;
    tertiary: true; cta: true; green: true; brown: true; link: true;
  }
}
declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    accent: true; contrast: true;
    tertiary: true; cta: true; green: true; brown: true; link: true;
  }
}

export {};
