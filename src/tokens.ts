// ============================================================
//  CEICOL — Tokens puros (sin dependencia de MUI)
// ------------------------------------------------------------
//  Punto de entrada para consumidores que NO usan MUI:
//   · CSS puro / Astro  → theme-ceicol/tokens.css (custom properties)
//   · Tailwind          → import { brandColors } from 'theme-ceicol/tokens'
//   · JS/TS genérico    → los objetos de token directamente
//
//  Es la MISMA fuente de verdad que alimenta el tema MUI, así
//  que los valores nunca divergen entre stacks.
// ============================================================

export { brandColors } from './tokens/colors';
export { borderRadius, spacingConstants } from './tokens/layout';
export { shadows, glassEffect } from './tokens/shadows';
export { animations, transitionStyles } from './tokens/animations';
export { fontFamilies, fontSizes } from './tokens/typography';
export { semanticRoles } from './tokens/semantic';
export type { SemanticRole, SemanticGroup } from './tokens/semantic';
