import React, { CSSProperties } from 'react';
import { b as borderRadius, s as spacingConstants, t as transitionStyles, a as shadows, f as fontFamilies } from './tokens-CasNJ4I5.js';
export { c as animations, d as brandColors, g as glassEffect, e as typography } from './tokens-CasNJ4I5.js';
import * as _mui_material from '@mui/material';
import '@mui/material/styles';

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
    interface Palette {
        accent: PaletteColor;
        contrast: PaletteColor;
        tertiary: PaletteColor;
        cta: PaletteColor;
        green: PaletteColor;
        brown: PaletteColor;
        link: PaletteColor;
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
        h1xxlBold: React.CSSProperties;
        h1xlBold: React.CSSProperties;
        h1lgBold: React.CSSProperties;
        h1Bold: React.CSSProperties;
        h2xxlSemibold: React.CSSProperties;
        h2xxlMedium: React.CSSProperties;
        h2lgMedium: React.CSSProperties;
        h2Bold: React.CSSProperties;
        h3xxlSemibold: React.CSSProperties;
        h3xlRegular: React.CSSProperties;
        h3xlSemibold: React.CSSProperties;
        h3xlMedium: React.CSSProperties;
        h3lgSemibold: React.CSSProperties;
        h3Medium: React.CSSProperties;
        bodyxxlRegular: React.CSSProperties;
        bodyxxlRegularSpacing: React.CSSProperties;
        bodyxxlSemiboldSpacing: React.CSSProperties;
        bodyxlBoldSpacing: React.CSSProperties;
        bodyxlSemibold: React.CSSProperties;
        bodyxlMedium: React.CSSProperties;
        bodyxlMediumSpacing: React.CSSProperties;
        bodyxlRegular: React.CSSProperties;
        bodylgMedium: React.CSSProperties;
        bodylgRegular: React.CSSProperties;
        bodyRegular: React.CSSProperties;
        bodyRegularSpacing: React.CSSProperties;
        bodyMedium: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        h1xxlBold?: React.CSSProperties;
        h1xlBold?: React.CSSProperties;
        h1lgBold?: React.CSSProperties;
        h1Bold?: React.CSSProperties;
        h2xxlSemibold?: React.CSSProperties;
        h2xxlMedium?: React.CSSProperties;
        h2lgMedium?: React.CSSProperties;
        h2Bold?: React.CSSProperties;
        h3xxlSemibold?: React.CSSProperties;
        h3xlRegular?: React.CSSProperties;
        h3xlSemibold?: React.CSSProperties;
        h3xlMedium?: React.CSSProperties;
        h3lgSemibold?: React.CSSProperties;
        h3Medium?: React.CSSProperties;
        bodyxxlRegular?: React.CSSProperties;
        bodyxxlRegularSpacing?: React.CSSProperties;
        bodyxxlSemiboldSpacing?: React.CSSProperties;
        bodyxlBoldSpacing?: React.CSSProperties;
        bodyxlSemibold?: React.CSSProperties;
        bodyxlMedium?: React.CSSProperties;
        bodyxlMediumSpacing?: React.CSSProperties;
        bodyxlRegular?: React.CSSProperties;
        bodylgMedium?: React.CSSProperties;
        bodylgRegular?: React.CSSProperties;
        bodyRegular?: React.CSSProperties;
        bodyRegularSpacing?: React.CSSProperties;
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
    }
}
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
        accent: true;
        contrast: true;
        tertiary: true;
        cta: true;
        green: true;
        brown: true;
        link: true;
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
    }
}

declare let theme: _mui_material.Theme;

declare let gaiaCompatTheme: _mui_material.Theme;

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
