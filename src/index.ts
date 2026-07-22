import './mui-types';

// Tema listo para <ThemeProvider theme={AppTheme}>
export { default as AppTheme } from './theme';

// Tokens crudos y helpers, por si se necesitan fuera del theme
export { brandColors } from './tokens/colors';
export { borderRadius, spacingConstants } from './tokens/layout';
export { animations, transitionStyles } from './tokens/animations';
export { glassEffect, shadows } from './tokens/shadows';
export { typography, fontFamilies } from './tokens/typography';
export { fluid } from './utils/fluidTypography';

// Capa de compatibilidad con theme-gaia (deprecada) — ver src/compat.ts
export { gaiaCompatTypography } from './compat';
