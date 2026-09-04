import React, { CSSProperties } from 'react';
import { b as borderRadius, s as spacingConstants, t as transitionStyles, a as shadows, f as fontFamilies } from './colors-DRpPT05T.mjs';
export { c as animations, d as brandColors, e as fontSizes, g as glassEffect, h as typography } from './colors-DRpPT05T.mjs';
import * as _mui_material_styles from '@mui/material/styles';

declare module '@mui/material/styles' {
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
    interface TypeText {
        light?: string;
    }
    interface DarkSurfaces {
        brand: string;
        slate: string;
        deep: string;
    }
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
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1xxlBold: true;
        h1xlBold: true;
        h1lgBold: true;
        h1Bold: true;
        h2xxlSemibold: true;
        h2xxlMedium: true;
        h2lgMedium: true;
        h2Bold: true;
        h3xxlSemibold: true;
        h3xlRegular: true;
        h3xlSemibold: true;
        h3xlMedium: true;
        h3lgSemibold: true;
        h3Medium: true;
        bodyxxlRegular: true;
        bodyxxlRegularSpacing: true;
        bodyxxlSemiboldSpacing: true;
        bodyxlBoldSpacing: true;
        bodyxlSemibold: true;
        bodyxlMedium: true;
        bodyxlMediumSpacing: true;
        bodyxlRegular: true;
        bodylgMedium: true;
        bodylgRegular: true;
        bodyRegular: true;
        bodyRegularSpacing: true;
        bodyMedium: true;
    }
    interface TypographyPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
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
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/Fab' {
    interface FabPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/ButtonGroup' {
    interface ButtonGroupPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/ToggleButton' {
    interface ToggleButtonPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/Badge' {
    interface BadgePropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/Icon' {
    interface IconPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/LinearProgress' {
    interface LinearProgressPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/Radio' {
    interface RadioPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}
declare module '@mui/material/Switch' {
    interface SwitchPropsColorOverrides {
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
        tech: true;
    }
}

declare const theme: _mui_material_styles.Theme;

declare const gaiaCompatTheme: _mui_material_styles.Theme;

/**
 * Genera un string CSS clamp() para tipografía fluida entre móvil y desktop.
 *
 * @param maxPx    Tamaño en desktop (viewport ~1440px).
 * @param minPx    (Opcional) Tamaño en móvil (viewport ~375px). Por defecto 70% del max.
 * @param minFloor Tamaño mínimo absoluto en px (nunca por debajo). Por defecto 16.
 */
declare const fluid: (maxPx: number, minPx?: number, minFloor?: number) => string;

declare const gaiaCompatTypography: {
    h1xxlBold: CSSProperties;
    h1xlBold: CSSProperties;
    h1lgBold: CSSProperties;
    h1Bold: CSSProperties;
    h2xxlSemibold: CSSProperties;
    h2xxlMedium: CSSProperties;
    h2lgMedium: CSSProperties;
    h2Bold: CSSProperties;
    h3xxlSemibold: CSSProperties;
    h3xlRegular: CSSProperties;
    h3xlSemibold: CSSProperties;
    h3xlMedium: CSSProperties;
    h3lgSemibold: CSSProperties;
    h3Medium: CSSProperties;
    bodyxxlRegular: CSSProperties;
    bodyxxlRegularSpacing: CSSProperties;
    bodyxxlSemiboldSpacing: CSSProperties;
    bodyxlBoldSpacing: CSSProperties;
    bodyxlSemibold: CSSProperties;
    bodyxlMedium: CSSProperties;
    bodyxlMediumSpacing: CSSProperties;
    bodyxlRegular: CSSProperties;
    bodylgMedium: CSSProperties;
    bodylgRegular: CSSProperties;
    bodyRegular: CSSProperties;
    bodyRegularSpacing: CSSProperties;
    bodyMedium: CSSProperties;
};

export { theme as AppTheme, gaiaCompatTheme as GaiaCompatTheme, borderRadius, fluid, fontFamilies, gaiaCompatTypography, shadows, spacingConstants, transitionStyles };
