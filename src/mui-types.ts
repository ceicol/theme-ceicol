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

  // Colores propios de CEICOL que no existen de fábrica en MUI
  interface Palette {
    accent: PaletteColor;
    contrast: PaletteColor;
  }
  interface PaletteOptions {
    accent?: SimplePaletteColorOptions;
    contrast?: SimplePaletteColorOptions;
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

// Variantes propias de botón (espejo de .btn--* de la landing)
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'cei-primary': true;
    'cei-secondary': true;
    'cei-ghost': true;
    'cei-destructive': true;
    'cei-large': true;
  }
  interface ButtonPropsColorOverrides {
    accent: true;
    contrast: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true;
    contrast: true;
  }
}
declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    accent: true;
    contrast: true;
  }
}

export {};
