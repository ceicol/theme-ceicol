// ============================================================
//  CEICOL — Tokens de color (valores crudos / Capa 1)
// ------------------------------------------------------------
//  Fuente de verdad: src/styles/styles.css de la landing.
//  Los nombres son SEMÁNTICOS (primary, accent, success…),
//  no literales de marca. Un color se cambia aquí una sola vez
//  y se propaga a todo lo que lo consuma.
// ============================================================

export const brandColors = {
  // ─── Marca ───
  primary: {
    main: '#007298', // Azul CEICOL
    light: '#0391b2',
    dark: '#005a7a',
    bg: '#e1f0f8', // fondo de acento azul claro
  },
  // ─── Acción / datos ───
  accent: {
    main: '#0d9488', // Turquesa
    light: '#2dd4bf',
    bg: '#f0fdfa',
  },
  // ─── Acento tech (cian/sky) — secciones oscuras y visualizaciones ───
  //  Acentos brillantes de alto contraste sobre fondos oscuros/tech.
  //  Distintos del turquesa de marca; pensados para dataviz, glows y
  //  detalles en modo oscuro. Disponibles para todos los productos.
  tech: {
    main: '#0ea5e9', // sky-500
    light: '#22d3ee', // cyan-400 (el más brillante)
    dark: '#0284c7', // sky-600
    bg: '#ecfeff', // cyan-50
  },

  // ─── Colores funcionales (estado del sistema) ───
  success: {
    main: '#10b981', // Verde — éxito
    light: '#34d399',
    bg: '#ecfdf5',
  },
  warning: {
    main: '#d97706', // Ámbar — advertencia
    light: '#f59e0b',
    bg: '#fffbeb',
  },
  error: {
    main: '#dc2626', // Rojo — error / destructivo (definido en esta fase)
    light: '#ef4444',
    bg: '#fef2f2',
  },
  info: {
    main: '#2563eb', // Azul informativo (distinto del azul de marca)
    light: '#3b82f6',
    bg: '#eff6ff',
  },

  // ─── Fondo de énfasis (secciones oscuras, footer) ───
  contrast: {
    main: '#0f172a',
    light: '#1e293b',
  },

  // ─── Compat theme-gaia (deprecado) ───
  // Gaia usaba `cta` como su acento dorado. Se traduce al AZUL de marca
  // de CEICOL (decisión de marca: máxima cohesión en azul, como la landing).
  cta: {
    main: '#007298',
    light: '#0391b2',
  },
  // Gaia expone `link` como token crudo. En CEICOL el link es el azul de marca.
  link: {
    main: '#007298',
  },

  // ─── Texto ───
  text: {
    heading: '#0f172a', // títulos / máximo énfasis
    body: '#334155', // cuerpo de lectura
    muted: '#64748b', // secundario / metainformación
    mutedLight: '#94a3b8', // secundario claro (sobre fondos oscuros)
    white: '#ffffff', // sobre fondos oscuros
    // Compat theme-gaia (deprecado): Gaia usa text.dark / text.light.
    dark: '#0f172a', // → equivale a heading (texto muy oscuro)
    light: '#ffffff', // → equivale a white (texto claro sobre fondos oscuros)
  },

  // ─── Superficies ───
  background: {
    default: '#f8fafc', // fondo estándar de página
    subtle: '#f1f5f9', // secciones alternadas
    paper: '#ffffff', // tarjetas, formularios
    // Compat theme-gaia (deprecado): Gaia usa background.main / background.light.
    main: '#f8fafc', // → equivale a default
    light: '#ffffff', // → equivale a paper
  },

  // ─── Bordes ───
  border: {
    light: '#e2e8f0',
    medium: '#cbd5e1',
  },
};
