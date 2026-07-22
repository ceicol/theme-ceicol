import { ThemeOptions } from '@mui/material/styles';
import * as _mui_material from '@mui/material';

declare const borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    round: string;
};
declare const spacingConstants: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};

declare const animations: {
    duration: {
        fast: number;
        normal: number;
        slow: number;
    };
    easing: {
        out: string;
    };
};
declare const transitionStyles: {
    fast: string;
    normal: string;
    slow: string;
};

declare const glassEffect: {
    background: string;
    backdropFilter: string;
    border: string;
};
declare const shadows: {
    sm: string;
    md: string;
    lg: string;
    premium: string;
    glow: string;
};

declare const fontFamilies: {
    display: string;
    body: string;
    mono: string;
};
declare const typography: ThemeOptions['typography'];

declare module '@mui/material/styles' {
    interface SimplePaletteColorOptions {
        bg?: string;
    }
    interface PaletteColor {
        bg?: string;
    }
    interface Palette {
        accent: PaletteColor;
        contrast: PaletteColor;
    }
    interface PaletteOptions {
        accent?: SimplePaletteColorOptions;
        contrast?: SimplePaletteColorOptions;
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
}
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

declare let theme: _mui_material.Theme;

declare const brandColors: {
    primary: {
        main: string;
        light: string;
        dark: string;
        bg: string;
    };
    accent: {
        main: string;
        light: string;
        bg: string;
    };
    success: {
        main: string;
        light: string;
        bg: string;
    };
    warning: {
        main: string;
        light: string;
        bg: string;
    };
    error: {
        main: string;
        light: string;
        bg: string;
    };
    info: {
        main: string;
        light: string;
        bg: string;
    };
    contrast: {
        main: string;
        light: string;
    };
    text: {
        heading: string;
        body: string;
        muted: string;
        white: string;
    };
    background: {
        default: string;
        subtle: string;
        paper: string;
    };
    border: {
        light: string;
        medium: string;
    };
};

/**
 * Genera un string CSS clamp() para tipografía fluida entre móvil y desktop.
 *
 * @param maxPx    Tamaño en desktop (viewport ~1440px).
 * @param minPx    (Opcional) Tamaño en móvil (viewport ~375px). Por defecto 70% del max.
 * @param minFloor Tamaño mínimo absoluto en px (nunca por debajo). Por defecto 16.
 */
declare const fluid: (maxPx: number, minPx?: number, minFloor?: number) => string;

export { theme as AppTheme, animations, borderRadius, brandColors, fluid, fontFamilies, glassEffect, shadows, spacingConstants, transitionStyles, typography };
