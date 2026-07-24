import { ThemeOptions } from '@mui/material/styles';

declare const borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    round: string;
    pill: string;
};
declare const spacingConstants: {
    xxs: string;
    xtight: string;
    xs: string;
    xsm: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    min: string;
    base: string;
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
    smooth: string;
    bounce: string;
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
    glowTech: string;
};

declare const fontFamilies: {
    display: string;
    body: string;
    mono: string;
};
declare const fontSizes: {
    hero: string;
    h1: string;
    h2: string;
    h3: string;
    body: string;
    bodyLg: string;
    small: string;
    xs: string;
    xxs: string;
    xxxs: string;
};
declare const typography: ThemeOptions['typography'];

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
    tech: {
        main: string;
        light: string;
        dark: string;
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
    surface: {
        brand: string;
        slate: string;
        deep: string;
    };
    cta: {
        main: string;
        light: string;
    };
    link: {
        main: string;
    };
    text: {
        heading: string;
        body: string;
        muted: string;
        mutedLight: string;
        white: string;
        dark: string;
        light: string;
    };
    background: {
        default: string;
        subtle: string;
        paper: string;
        main: string;
        light: string;
    };
    border: {
        light: string;
        medium: string;
    };
};

export { shadows as a, borderRadius as b, animations as c, brandColors as d, typography as e, fontFamilies as f, glassEffect as g, fontSizes as h, spacingConstants as s, transitionStyles as t };
