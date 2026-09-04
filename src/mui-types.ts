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

// ─────────────────────────────────────────────────────────────────────────────
// Sobre las anotaciones `@deprecated` de este archivo
//
// El editor SÍ las marca donde hay acceso a propiedad:
//
//     theme.palette.cta.main          → 'cta' is deprecated
//     theme.typography.h3Medium       → 'h3Medium' is deprecated
//
// y NO las marca en las formas de cadena, que son la mayoría de los usos:
//
//     <Typography variant="h3Medium">          → nada
//     <Typography color="cta">                 → nada
//     sx={{ color: "cta.main" }}               → nada
//     sx={{ typography: "h3Medium" }}          → nada
//
// El motivo es que ahí el valor es un literal dentro de una unión de cadenas
// —`OverridableStringUnion`—, no una referencia a un símbolo, y TypeScript no
// emite la sugerencia. Comprobado con `getSuggestionDiagnostics` de la API del
// compilador, no supuesto.
//
// Así que estas anotaciones documentan y guían a quien lee el tema, pero **no
// son una compuerta**. Para las formas de cadena, el sistema publica reglas de
// ESLint — ver README, «Compatibilidad con theme-gaia».
// ─────────────────────────────────────────────────────────────────────────────

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
  // Superficies oscuras (temas dark): brand / slate / deep.
  interface DarkSurfaces {
    brand: string;
    slate: string;
    deep: string;
  }

  // Color de marca de CEICOL. Solo `main` es obligatorio: MUI únicamente
  // calcula dark/contrastText para los colores ESTÁNDAR (primary, error…),
  // no para los custom. Tiparlos como PaletteColor prometía un `.dark` que
  // en runtime es undefined. Aquí se refleja la realidad.
  interface CeiPaletteColor {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
    bg?: string;
    glass?: string;
    button?: string;
  }

  interface Palette {
    accent: CeiPaletteColor;
    tech: CeiPaletteColor;
    contrast: CeiPaletteColor;
    surface: DarkSurfaces;

    // ─── COMPAT con theme-gaia · DEPRECADO, se retira en 1.0 ───
    /** @deprecated Compat con theme-gaia — usa `contrast`. mismos valores. Se retira en 1.0. */
    tertiary: CeiPaletteColor;
    /** @deprecated Compat con theme-gaia — usa `primary`. mismos valores. Se retira en 1.0. */
    cta: CeiPaletteColor;
    /** @deprecated Compat con theme-gaia — usa `primary`. green.button es primary.dark. Se retira en 1.0. */
    green: CeiPaletteColor;
    /** @deprecated Compat con theme-gaia — usa `contrast`. brown.light es --cei-fg-muted, que sí voltea. Se retira en 1.0. */
    brown: CeiPaletteColor;
    /** @deprecated Compat con theme-gaia — usa `primary`. mismos valores. Se retira en 1.0. */
    link: CeiPaletteColor;
  }
  interface PaletteOptions {
    accent?: SimplePaletteColorOptions;
    tech?: SimplePaletteColorOptions;
    contrast?: SimplePaletteColorOptions;
    surface?: DarkSurfaces;

    // ─── COMPAT con theme-gaia · DEPRECADO, se retira en 1.0 ───
    /** @deprecated Compat con theme-gaia — usa `contrast`. mismos valores. Se retira en 1.0. */
    tertiary?: SimplePaletteColorOptions;
    /** @deprecated Compat con theme-gaia — usa `primary`. mismos valores. Se retira en 1.0. */
    cta?: SimplePaletteColorOptions;
    /** @deprecated Compat con theme-gaia — usa `primary`. green.button es primary.dark. Se retira en 1.0. */
    green?: SimplePaletteColorOptions;
    /** @deprecated Compat con theme-gaia — usa `contrast`. brown.light es --cei-fg-muted, que sí voltea. Se retira en 1.0. */
    brown?: SimplePaletteColorOptions;
    /** @deprecated Compat con theme-gaia — usa `primary`. mismos valores. Se retira en 1.0. */
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

  // ─── COMPAT con theme-gaia · DEPRECADO, se retira en 1.0 ───
  interface TypographyVariants {
    /** @deprecated display 64/700 — usa `h1`. Se retira en 1.0. */
    h1xxlBold: React.CSSProperties;
    /** @deprecated display 52/700 — usa `h1`. Se retira en 1.0. */
    h1xlBold: React.CSSProperties;
    /** @deprecated display 40/700 — usa `h1`. Se retira en 1.0. */
    h1lgBold: React.CSSProperties;
    /** @deprecated display 36/700 — usa `h2`. Se retira en 1.0. */
    h1Bold: React.CSSProperties;
    /** @deprecated display 32/600 — usa `h2`. Se retira en 1.0. */
    h2xxlSemibold: React.CSSProperties;
    /** @deprecated display 32/500 — usa `h2`. Se retira en 1.0. */
    h2xxlMedium: React.CSSProperties;
    /** @deprecated display 28/500 — usa `h3`. Se retira en 1.0. */
    h2lgMedium: React.CSSProperties;
    /** @deprecated display 28/700 — usa `h3`. Se retira en 1.0. */
    h2Bold: React.CSSProperties;
    /** @deprecated display 28/600 — usa `h3`. Se retira en 1.0. */
    h3xxlSemibold: React.CSSProperties;
    /** @deprecated display 24/400 — usa `h3`. Se retira en 1.0. */
    h3xlRegular: React.CSSProperties;
    /** @deprecated display 24/600 — usa `h3`. Se retira en 1.0. */
    h3xlSemibold: React.CSSProperties;
    /** @deprecated display 24/500 — usa `h3`. Se retira en 1.0. */
    h3xlMedium: React.CSSProperties;
    /** @deprecated display 18/600 — usa `h4`. Se retira en 1.0. */
    h3lgSemibold: React.CSSProperties;
    /** @deprecated display 18/500 — usa `h4`. Se retira en 1.0. */
    h3Medium: React.CSSProperties;
    /** @deprecated body 24/400 — usa `body2`. Se retira en 1.0. */
    bodyxxlRegular: React.CSSProperties;
    /** @deprecated body 24/400 — usa `body2`. Se retira en 1.0. */
    bodyxxlRegularSpacing: React.CSSProperties;
    /** @deprecated body 24/600 — usa `body2`. Se retira en 1.0. */
    bodyxxlSemiboldSpacing: React.CSSProperties;
    /** @deprecated body 18/700 — usa `body2`. Se retira en 1.0. */
    bodyxlBoldSpacing: React.CSSProperties;
    /** @deprecated body 18/600 — usa `body2`. Se retira en 1.0. */
    bodyxlSemibold: React.CSSProperties;
    /** @deprecated body 18/500 — usa `body2`. Se retira en 1.0. */
    bodyxlMedium: React.CSSProperties;
    /** @deprecated body 18/500 — usa `body2`. Se retira en 1.0. */
    bodyxlMediumSpacing: React.CSSProperties;
    /** @deprecated body 18/400 — usa `body2`. Se retira en 1.0. */
    bodyxlRegular: React.CSSProperties;
    /** @deprecated body 16/500 — usa `body1`. Se retira en 1.0. */
    bodylgMedium: React.CSSProperties;
    /** @deprecated body 16/400 — usa `body1`. Se retira en 1.0. */
    bodylgRegular: React.CSSProperties;
    /** @deprecated body 14/400 — usa `caption`. Se retira en 1.0. */
    bodyRegular: React.CSSProperties;
    /** @deprecated body 14/400 — usa `caption`. Se retira en 1.0. */
    bodyRegularSpacing: React.CSSProperties;
    /** @deprecated body 14/500 — usa `caption`. Se retira en 1.0. */
    bodyMedium: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    /** @deprecated display 64/700 — usa `h1`. Se retira en 1.0. */
    h1xxlBold?: React.CSSProperties;
    /** @deprecated display 52/700 — usa `h1`. Se retira en 1.0. */
    h1xlBold?: React.CSSProperties;
    /** @deprecated display 40/700 — usa `h1`. Se retira en 1.0. */
    h1lgBold?: React.CSSProperties;
    /** @deprecated display 36/700 — usa `h2`. Se retira en 1.0. */
    h1Bold?: React.CSSProperties;
    /** @deprecated display 32/600 — usa `h2`. Se retira en 1.0. */
    h2xxlSemibold?: React.CSSProperties;
    /** @deprecated display 32/500 — usa `h2`. Se retira en 1.0. */
    h2xxlMedium?: React.CSSProperties;
    /** @deprecated display 28/500 — usa `h3`. Se retira en 1.0. */
    h2lgMedium?: React.CSSProperties;
    /** @deprecated display 28/700 — usa `h3`. Se retira en 1.0. */
    h2Bold?: React.CSSProperties;
    /** @deprecated display 28/600 — usa `h3`. Se retira en 1.0. */
    h3xxlSemibold?: React.CSSProperties;
    /** @deprecated display 24/400 — usa `h3`. Se retira en 1.0. */
    h3xlRegular?: React.CSSProperties;
    /** @deprecated display 24/600 — usa `h3`. Se retira en 1.0. */
    h3xlSemibold?: React.CSSProperties;
    /** @deprecated display 24/500 — usa `h3`. Se retira en 1.0. */
    h3xlMedium?: React.CSSProperties;
    /** @deprecated display 18/600 — usa `h4`. Se retira en 1.0. */
    h3lgSemibold?: React.CSSProperties;
    /** @deprecated display 18/500 — usa `h4`. Se retira en 1.0. */
    h3Medium?: React.CSSProperties;
    /** @deprecated body 24/400 — usa `body2`. Se retira en 1.0. */
    bodyxxlRegular?: React.CSSProperties;
    /** @deprecated body 24/400 — usa `body2`. Se retira en 1.0. */
    bodyxxlRegularSpacing?: React.CSSProperties;
    /** @deprecated body 24/600 — usa `body2`. Se retira en 1.0. */
    bodyxxlSemiboldSpacing?: React.CSSProperties;
    /** @deprecated body 18/700 — usa `body2`. Se retira en 1.0. */
    bodyxlBoldSpacing?: React.CSSProperties;
    /** @deprecated body 18/600 — usa `body2`. Se retira en 1.0. */
    bodyxlSemibold?: React.CSSProperties;
    /** @deprecated body 18/500 — usa `body2`. Se retira en 1.0. */
    bodyxlMedium?: React.CSSProperties;
    /** @deprecated body 18/500 — usa `body2`. Se retira en 1.0. */
    bodyxlMediumSpacing?: React.CSSProperties;
    /** @deprecated body 18/400 — usa `body2`. Se retira en 1.0. */
    bodyxlRegular?: React.CSSProperties;
    /** @deprecated body 16/500 — usa `body1`. Se retira en 1.0. */
    bodylgMedium?: React.CSSProperties;
    /** @deprecated body 16/400 — usa `body1`. Se retira en 1.0. */
    bodylgRegular?: React.CSSProperties;
    /** @deprecated body 14/400 — usa `caption`. Se retira en 1.0. */
    bodyRegular?: React.CSSProperties;
    /** @deprecated body 14/400 — usa `caption`. Se retira en 1.0. */
    bodyRegularSpacing?: React.CSSProperties;
    /** @deprecated body 14/500 — usa `caption`. Se retira en 1.0. */
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
    'cei-icon-glass': true;
    'cei-icon-outline': true;
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
