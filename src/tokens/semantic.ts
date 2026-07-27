// ============================================================
//  CEICOL — Roles semánticos (Capa 2) · FUENTE de semantic.css
// ------------------------------------------------------------
//  Los componentes consumen estos ROLES, no los primitivos.
//  Un tema es una reasignación de roles a primitivos.
//  De aquí se GENERA dist/semantic.css (no editar el CSS a mano).
//
//  Cada rol tiene un valor `light` (obligatorio) y opcional `dark`
//  (si existe, se redefine bajo [data-theme='dark']). Los valores
//  son expresiones CSS: referencias a tokens crudos (var(--cei-*)),
//  color-mix, o valores directos.
// ============================================================

export interface SemanticRole {
  light: string;
  dark?: string;
  comment?: string;
}

export interface SemanticGroup {
  title: string;
  roles: Record<string, SemanticRole>;
}

// El nombre del rol NO lleva el prefijo --cei- (el generador lo añade).
export const semanticRoles: SemanticGroup[] = [
  {
    title: 'Superficies',
    roles: {
      bg: { light: 'var(--cei-background-default)', dark: 'var(--cei-surface-deep)', comment: 'fondo de página' },
      'bg-raised': { light: 'var(--cei-background-paper)', dark: 'var(--cei-surface-brand)', comment: 'tarjetas, formularios' },
      'bg-sunken': { light: 'var(--cei-background-subtle)', dark: 'var(--cei-surface-slate)', comment: 'secciones alternadas' },
      'bg-inverse': { light: 'var(--cei-contrast)', comment: 'banners: estable en ambos temas' },
      'bg-footer': { light: 'var(--cei-contrast)', dark: 'var(--cei-surface-deep)', comment: 'footer' },
      'bg-glass-soft': { light: 'color-mix(in srgb, var(--cei-bg-raised) 55%, transparent)', comment: 'vidrio translúcido suave' },
      'bg-glass': { light: 'color-mix(in srgb, var(--cei-bg-raised) 72%, transparent)', comment: 'vidrio translúcido medio' },
      'bg-glass-strong': { light: 'color-mix(in srgb, var(--cei-bg-raised) 85%, transparent)', comment: 'vidrio translúcido fuerte' },
    },
  },
  {
    title: 'Texto',
    roles: {
      fg: { light: 'var(--cei-text-body)', dark: 'var(--cei-text-white)', comment: 'texto por defecto' },
      'fg-strong': { light: 'var(--cei-text-heading)', dark: 'var(--cei-text-white)', comment: 'títulos / máximo énfasis' },
      'fg-muted': { light: 'var(--cei-text-muted)', dark: 'var(--cei-text-muted-light)', comment: 'secundario / metadatos' },
      'fg-on-inverse': { light: 'var(--cei-text-white)', dark: 'var(--cei-text-white)', comment: 'texto sobre superficie inversa' },
      'fg-on-brand': { light: 'var(--cei-text-white)', dark: 'var(--cei-text-white)', comment: 'texto sobre color de marca' },
    },
  },
  {
    title: 'Bordes',
    roles: {
      line: { light: 'var(--cei-border-light)', dark: 'color-mix(in srgb, var(--cei-text-white) 12%, transparent)' },
      'line-strong': { light: 'var(--cei-border-medium)', dark: 'color-mix(in srgb, var(--cei-text-white) 22%, transparent)' },
    },
  },
  {
    title: 'Marca (interactivo)',
    roles: {
      brand: { light: 'var(--cei-primary)', dark: 'var(--cei-primary-light)' },
      'brand-hover': { light: 'var(--cei-primary-dark)', dark: 'var(--cei-primary)' },
    },
  },
  {
    title: 'Elevación (sombras como rol — voltean por tema)',
    roles: {
      'elevation-1': { light: 'var(--cei-shadow-sm)', dark: '0 1px 3px rgba(0, 0, 0, 0.4)' },
      'elevation-2': { light: 'var(--cei-shadow-md)', dark: '0 4px 12px rgba(0, 0, 0, 0.45)' },
      'elevation-3': { light: 'var(--cei-shadow-lg)', dark: '0 12px 30px rgba(0, 0, 0, 0.55)' },
    },
  },
];
