import {
  animations,
  borderRadius,
  brandColors,
  fontFamilies,
  fontSizes,
  glassEffect,
  shadows,
  spacingConstants,
  transitionStyles
} from "./chunk-4GBAYVUJ.mjs";

// src/tokens/semantic.ts
var semanticRoles = [
  {
    title: "Superficies",
    roles: {
      bg: { light: "var(--cei-background-default)", dark: "var(--cei-surface-deep)", comment: "fondo de p\xE1gina" },
      "bg-raised": { light: "var(--cei-background-paper)", dark: "var(--cei-surface-brand)", comment: "tarjetas, formularios" },
      "bg-sunken": { light: "var(--cei-background-subtle)", dark: "var(--cei-surface-slate)", comment: "secciones alternadas" },
      "bg-inverse": { light: "var(--cei-contrast)", comment: "banners: estable en ambos temas" },
      "bg-footer": { light: "var(--cei-contrast)", dark: "var(--cei-surface-deep)", comment: "footer" },
      "bg-glass-soft": { light: "color-mix(in srgb, var(--cei-bg-raised) 55%, transparent)", comment: "vidrio transl\xFAcido suave" },
      "bg-glass": { light: "color-mix(in srgb, var(--cei-bg-raised) 72%, transparent)", comment: "vidrio transl\xFAcido medio" },
      "bg-glass-strong": { light: "color-mix(in srgb, var(--cei-bg-raised) 85%, transparent)", comment: "vidrio transl\xFAcido fuerte" }
    }
  },
  {
    title: "Texto",
    roles: {
      fg: { light: "var(--cei-text-body)", dark: "var(--cei-text-white)", comment: "texto por defecto" },
      "fg-strong": { light: "var(--cei-text-heading)", dark: "var(--cei-text-white)", comment: "t\xEDtulos / m\xE1ximo \xE9nfasis" },
      "fg-muted": { light: "var(--cei-text-muted)", dark: "var(--cei-text-muted-light)", comment: "secundario / metadatos" },
      "fg-on-inverse": { light: "var(--cei-text-white)", dark: "var(--cei-text-white)", comment: "texto sobre superficie inversa" },
      "fg-on-brand": { light: "var(--cei-text-white)", dark: "var(--cei-text-white)", comment: "texto sobre color de marca" }
    }
  },
  {
    title: "Bordes",
    roles: {
      line: { light: "var(--cei-border-light)", dark: "color-mix(in srgb, var(--cei-text-white) 12%, transparent)" },
      "line-strong": { light: "var(--cei-border-medium)", dark: "color-mix(in srgb, var(--cei-text-white) 22%, transparent)" }
    }
  },
  {
    title: "Marca (interactivo)",
    roles: {
      brand: { light: "var(--cei-primary)", dark: "var(--cei-primary-light)" },
      "brand-hover": { light: "var(--cei-primary-dark)", dark: "var(--cei-primary)" }
    }
  },
  {
    title: "Elevaci\xF3n (sombras como rol \u2014 voltean por tema)",
    roles: {
      "elevation-1": { light: "var(--cei-shadow-sm)", dark: "0 1px 3px rgba(0, 0, 0, 0.4)" },
      "elevation-2": { light: "var(--cei-shadow-md)", dark: "0 4px 12px rgba(0, 0, 0, 0.45)" },
      "elevation-3": { light: "var(--cei-shadow-lg)", dark: "0 12px 30px rgba(0, 0, 0, 0.55)" }
    }
  }
];
export {
  animations,
  borderRadius,
  brandColors,
  fontFamilies,
  fontSizes,
  glassEffect,
  semanticRoles,
  shadows,
  spacingConstants,
  transitionStyles
};
