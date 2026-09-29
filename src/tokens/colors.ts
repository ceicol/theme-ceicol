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
    lighter: '#3cbfe0', // texto/borde de marca en dark — AAA sobre superficies oscuras
    dark: '#005a7a',
    bg: '#e1f0f8', // fondo de acento azul claro
  },
  // ─── Acción / datos ───
  accent: {
    main: '#0d9488', // Turquesa
    light: '#2dd4bf',
    dark: '#115e59', // teal-800 — texto del tono en claro (ver `--cei-fg-accent`)
    lighter: '#5eead4', // teal-300 — texto del tono en oscuro
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
  //  `main` es el tono de fondo, trazo e icono grande. Como TEXTO no llega:
  //  sobre su propio velo del 14 % da de 2,22 a 3,89:1 en claro. `dark` (el
  //  paso 800 de su familia) es el texto en claro y `lighter` (el 300) el
  //  texto en oscuro: sobre el velo, de 6,10 a 9,44:1. Se consumen por los
  //  roles `--cei-fg-<tono>`, que voltean solos.
  success: {
    main: '#10b981', // Verde — éxito
    light: '#34d399',
    dark: '#065f46', // emerald-800
    lighter: '#6ee7b7', // emerald-300
    bg: '#ecfdf5',
  },
  warning: {
    main: '#d97706', // Ámbar — advertencia
    light: '#f59e0b',
    dark: '#92400e', // amber-800 — el 700 se queda en 4,32:1 sobre el velo
    lighter: '#fcd34d', // amber-300
    bg: '#fffbeb',
  },
  error: {
    main: '#dc2626', // Rojo — error / destructivo (definido en esta fase)
    light: '#ef4444',
    dark: '#991b1b', // red-800
    lighter: '#fca5a5', // red-300
    bg: '#fef2f2',
  },
  info: {
    main: '#2563eb', // Azul informativo (distinto del azul de marca)
    light: '#3b82f6',
    dark: '#1e40af', // blue-800
    lighter: '#93c5fd', // blue-300
    bg: '#eff6ff',
  },

  // ─── Fondo de énfasis (secciones oscuras, footer) ───
  contrast: {
    main: '#0f172a',
    light: '#1e293b',
  },

  // ─── Superficies oscuras (temas dark de producto) ───
  //  Familia de superficies para UIs en modo oscuro. `brand` es el
  //  azul-petróleo de identidad de CEICOL (heroes/banners dark);
  //  `slate` es el neutro sobrio (mismo valor que contrast); `deep`
  //  es el negro azulado para el fondo más profundo y paneles de datos.
  surface: {
    brand: '#0a2530', // petróleo de marca — superficie dark principal
    slate: '#0f172a', // slate neutro (= contrast) — superficies sobrias
    deep: '#020617', // negro azulado — fondo profundo / paneles tech
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
