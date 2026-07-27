# CEICOL UI Theme System

[![versión](https://img.shields.io/github/v/tag/ceicol/theme-ceicol?label=versión&sort=semver)](https://github.com/ceicol/theme-ceicol/tags)

Sistema de diseño centralizado para el ecosistema de aplicaciones de CEICOL. Construido sobre **Material UI v5+**, este paquete provee una integración "Plug & Play" con los tokens de marca, tipografía, escala de espaciado, paleta de color semántica y variantes de componentes de CEICOL.

## Requisitos

- React >= 17
- @mui/material >= 5
- @emotion/react
- @emotion/styled

## Instalación y actualización

Se distribuye a través de Git usando **tags de versión inmutables**: cada tag entrega siempre el mismo código compilado.

```bash
npm install git+https://github.com/ceicol/theme-ceicol.git#v0.19.0
```

Para actualizar, cambia el tag por la versión deseada (ver el badge de arriba o la pestaña Tags del repositorio):

```bash
npm install git+https://github.com/ceicol/theme-ceicol.git#v0.19.0
```

### Dependencias peer (obligatorio)

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Tipografías (requerido)

El sistema **no instala fuentes por NPM**; se cargan vía Google Fonts para garantizar consistencia entre proyectos. Incluir en el `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

Sin este paso, el tema no se verá correctamente.

## Quick Start

Envuelve la aplicación con `ThemeProvider` y `CssBaseline`:

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppTheme } from 'theme-ceicol';

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <CssBaseline />
    <TuAplicacion />
  </ThemeProvider>
);
```

## Manual de tokens

### 1. Paleta de colores

Los colores son accesibles vía `color="..."` en componentes o `palette.nombre` en `sx`.

| Nombre semántico | Rol | Propiedades |
| --- | --- | --- |
| **`primary`** | Azul de marca | `.main` `.light` `.dark` `.bg` |
| **`secondary`** / **`accent`** | Turquesa — acción y datos | `.main` `.light` `.bg` |
| **`tech`** | Cian/sky — dataviz, glows y detalles en modo oscuro | `.main` `.light` `.dark` `.bg` |
| **`success`** | Verde — éxito | `.main` `.light` `.bg` |
| **`warning`** | Ámbar — advertencia | `.main` `.light` `.bg` |
| **`error`** | Rojo — error / destructivo | `.main` `.light` `.bg` |
| **`info`** | Azul informativo | `.main` `.light` `.bg` |
| **`contrast`** | Fondo de énfasis (footer, secciones oscuras) | `.main` `.light` |
| **`surface`** | Superficies para temas oscuros de producto | `.brand` (#0a2530) `.slate` (#0f172a) `.deep` (#020617) |

```tsx
<Button color="primary">Continuar</Button>
<Box sx={{ bgcolor: 'accent.bg', color: 'accent.main' }}>Contenido</Box>
```

### 2. Tipografía

Tres familias, cada una con rol exclusivo: **Big Shoulders Display** (títulos), **Inter** (cuerpo e interfaz), **JetBrains Mono** (valores técnicos). Se usan con las variantes estándar de MUI.

| Variante | Familia | Uso |
| --- | --- | --- |
| `h1` | Big Shoulders | Título de pantalla / hero |
| `h2` | Big Shoulders | Título de sección |
| `h3` | Big Shoulders | Subtítulo |
| `h4` | Big Shoulders | Nombre de componente |
| `body1` | Inter | Texto de cuerpo (16px) |
| `body2` | Inter | Lectura destacada (18px) |
| `overline` | Inter | Etiqueta de categoría (uppercase) |
| `caption` | Inter | Texto de apoyo (labels, fechas) |

```tsx
<Typography variant="h1">Territorio, datos y decisiones</Typography>
<Typography variant="body1">Texto de cuerpo.</Typography>
<Typography variant="overline">Servicios</Typography>
```

### 3. Layout (espaciado y bordes)

```ts
import { spacingConstants, borderRadius } from 'theme-ceicol';
```

**Espaciado (`spacingConstants`):** `xxs` 4px · `xtight` 6px · `xs` 8px · `xsm` 12px · `sm` 16px · `md` 24px · `lg` 40px · `xl` 80px · `xxl` 140px

**Bordes (`borderRadius`):** `xs` 4px · `sm` 6px · `md` 12px · `lg` 18px · `xl` 24px · `xxl` 54px · `round` 50% · `pill` 9999px

```tsx
<Box sx={{ p: spacingConstants.md, borderRadius: borderRadius.lg }} />
```

También accesibles desde el tema: `theme.customSpacing`, `theme.customShape`.

### 4. Efectos y sombras

```ts
import { shadows, glassEffect } from 'theme-ceicol';
```

**Sombras (`shadows`):** `sm` · `md` · `lg` · `premium` · `glow` (halo turquesa) · `glowTech` (glow cian brillante)

**Glassmorphism:** para superficies translúcidas que se **adaptan al tema** usa los roles `--cei-bg-glass*` o el primitivo `.cei-glass` (ver la sección [Temas](#temas-claro--oscuro-capa-semántica)). El helper JS `glassEffect` (estático) se mantiene para casos legacy.

```tsx
<Box sx={{ ...glassEffect, boxShadow: shadows.premium }} />
```

### 5. Animaciones

Movimiento rápido y directo, acorde a la personalidad de la marca.

```ts
import { transitionStyles } from 'theme-ceicol';
```

- **`transitionStyles.fast`** — 150ms. Hovers y microinteracciones.
- **`transitionStyles.normal`** — 250ms. Cambios de estado.
- **`transitionStyles.slow`** — 300ms. Reveals y transiciones mayores.

```tsx
<Box sx={{ transition: transitionStyles.fast, '&:hover': { transform: 'translateY(-2px)' } }} />
```

### 6. Variantes de botón

| Variante | Uso |
| --- | --- |
| **`cei-primary`** | Acción principal (azul de marca) |
| **`cei-secondary`** | Acción secundaria (fondo claro con borde) |
| **`cei-ghost`** | Acción terciaria / cancelar (solo texto) |
| **`cei-destructive`** | Acciones irreversibles (rojo) |
| **`cei-large`** | CTA de hero o de sección |

```tsx
<Button variant="cei-primary">Enviar consulta</Button>
<Button variant="cei-ghost">Cancelar</Button>
<Button variant="cei-large">Comenzar ahora</Button>
```

### 7. Compatibilidad con theme-gaia

Para facilitar la migración de productos que consumen `theme-gaia`, el tema también reexpone el vocabulario genérico de Gaia con los valores de CEICOL, de modo que baste **cambiar el import**:

- Claves de paleta: `tertiary`, `cta`, `green`, `brown`, `link`.
- Variantes de botón: `gaia-cta-contained`, `gaia-cta-outlined`, `gaia-icon-glass`, `gaia-icon-outline`.
- Botones de mapa de región: `gaia-amazonia`, `gaia-panamazonia`, `gaia-macroterritorio` (círculo con gradiente + etiqueta flotante), recoloreados a la gama CEICOL con tres tonos distinguibles (turquesa / azul / ámbar).
- Variantes tipográficas: `h1xxlBold`, `bodyxlRegular`, y el resto de la escala de Gaia.

Estas claves están marcadas como deprecadas; los proyectos nuevos deben usar la API principal de CEICOL.

## Temas: claro / oscuro (capa semántica)

Sobre los tokens crudos (`--cei-*`), el sistema expone una **capa semántica de roles** (`theme-ceicol/semantic.css`). Los componentes consumen *roles* (el fondo de página, el texto de cuerpo, un borde…) en vez de colores concretos, y **un tema no es más que una reasignación de esos roles**. Cambiar de tema no toca ningún componente.

```css
@import 'theme-ceicol/tokens.css';    /* 1. tokens crudos (valores de marca) */
@import 'theme-ceicol/semantic.css';  /* 2. roles: mapa claro + bloque [data-theme="dark"] */
```

Activar el tema oscuro con un atributo en `<html>`:

```js
document.documentElement.setAttribute('data-theme', 'dark'); // o 'light'
```

Para evitar el parpadeo (FOUC), fija el atributo con un script inline en el `<head>` antes de pintar, leyendo `localStorage` y/o `prefers-color-scheme`.

**Roles disponibles** (úsalos en los componentes en lugar de los tokens crudos):

| Rol | Uso | ¿Voltea? |
| --- | --- | --- |
| `--cei-bg` | Fondo de página | sí |
| `--cei-bg-raised` | Tarjetas, superficies elevadas | sí |
| `--cei-bg-sunken` | Secciones alternadas | sí |
| `--cei-bg-inverse` | Banners / secciones oscuras | no (estable) |
| `--cei-bg-footer` | Footer | sí |
| `--cei-fg` | Texto de cuerpo | sí |
| `--cei-fg-strong` | Títulos / máximo énfasis | sí |
| `--cei-fg-muted` | Texto secundario | sí |
| `--cei-fg-on-inverse` · `--cei-fg-on-brand` | Texto sobre superficie oscura / sobre marca | estable |
| `--cei-line` · `--cei-line-strong` | Bordes | sí |
| `--cei-brand` · `--cei-brand-hover` | Color de marca interactivo | sí |
| `--cei-elevation-1` · `-2` · `-3` | Sombras por nivel | sí |

**Vidrio (superficies translúcidas) adaptable:** `--cei-bg-glass-soft` (55%) · `--cei-bg-glass` (72%) · `--cei-bg-glass-strong` (85%). Se tiñen del color de superficie del tema activo; también disponible como primitivo `.cei-glass`.

```css
.panel { background: var(--cei-bg-raised); color: var(--cei-fg); border: 1px solid var(--cei-line); }
.flotante { background: var(--cei-bg-glass); backdrop-filter: blur(12px); }
```

> Los tonos de **marca, acento y estado** (`--cei-primary`, `--cei-accent`, `--cei-success`…) se mantienen estables entre temas; solo voltean superficies, texto, bordes y elevación.

### En MUI (React)

El tema oscuro de MUI usa **la misma fuente de verdad**: la paleta de `AppTheme` referencia los roles (`background`, `text`, `divider` apuntan a `var(--cei-bg)`, `var(--cei-fg)`, `var(--cei-line)`…), con fallback al valor claro. No hay una paleta dark duplicada en JS. Para habilitarlo:

```tsx
import 'theme-ceicol/semantic.css'; // 1. carga los roles (claro + oscuro)
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppTheme } from 'theme-ceicol';

<ThemeProvider theme={AppTheme}>
  <CssBaseline /> {/* aplica background/text desde los roles */}
  <App />
</ThemeProvider>
```

```js
// 2. alternar tema (mismo atributo que el resto del sistema)
document.documentElement.setAttribute('data-theme', 'dark'); // o 'light'
```

Los componentes MUI que usan `background.*`, `text.*` y `divider` voltean solos al cambiar `data-theme`, porque leen las variables CSS vivas. Si **no** cargas `semantic.css`, el tema funciona igual en claro (usa los fallbacks). Nota: los overrides de componentes con color de superficie fijo pueden requerir referenciar roles para un dark 100% pulido.

## Uso sin MUI (CSS puro / Astro / Tailwind)

Los mismos tokens (misma fuente de verdad que el tema MUI) están disponibles fuera de React.

### CSS puro / Astro

Importa la hoja de custom properties y usa las variables `--cei-*`:

```css
@import 'theme-ceicol/tokens.css';

.boton {
  background: var(--cei-primary);
  color: var(--cei-text-white);
  padding: var(--cei-space-sm) var(--cei-space-md);
  border-radius: var(--cei-radius-md);
  font-family: var(--cei-font-body);
  transition: var(--cei-transition-fast);
}
.titulo { font-family: var(--cei-font-display); color: var(--cei-text-heading); }
```

Variables disponibles: colores (`--cei-primary`, `--cei-accent`, `--cei-tech`, `--cei-success`, `--cei-warning`, `--cei-error`, `--cei-info`, `--cei-contrast`, `--cei-text-*`, `--cei-background-*`, `--cei-border-*`), superficies dark (`--cei-surface-brand`, `--cei-surface-slate`, `--cei-surface-deep`), tamaños de fuente (`--cei-font-size-hero`, `-h1`…`-h3`, `-body`, `-body-lg`, `-small`, `-xs`, `-xxs`, `-xxxs`), espaciado (`--cei-space-xxs` 4 · `-xtight` 6 · `-xs` 8 · `-xsm` 12 · `-sm` 16 · `-md` 24 · `-lg` 40 · `-xl` 80 · `-xxl` 140), radios (`--cei-radius-xs` 4 · `-sm` 6 · `-md` 12 · `-lg` 18 · `-xl` 24 · `-xxl` 54 · `-round` · `-pill`), sombras (`--cei-shadow-*`, incluye `--cei-shadow-glow` y `--cei-shadow-glow-tech`), transiciones (`--cei-transition-*`) y fuentes (`--cei-font-*`). No olvides cargar las fuentes vía Google Fonts (ver arriba).

> Para soporte de **tema oscuro**, importa además `theme-ceicol/semantic.css` y consume los **roles** (`--cei-bg`, `--cei-fg`, `--cei-line`, `--cei-bg-glass*`…) en lugar de los tokens crudos. Ver la sección [Temas](#temas-claro--oscuro-capa-semántica).

### Tailwind

Importa los tokens como objeto JS en `tailwind.config`:

```js
import { brandColors, spacingConstants, borderRadius } from 'theme-ceicol/tokens';

export default {
  theme: {
    extend: {
      colors: {
        primary: brandColors.primary.main,
        accent: brandColors.accent.main,
        // …o mapea las variables CSS: primary: 'var(--cei-primary)'
      },
      borderRadius: { md: borderRadius.md },
      spacing: { md: spacingConstants.md },
    },
  },
};
```

## Componentes CSS (`.cei-*`)

Primitivos de componentes para proyectos CSS puro / Astro, alimentados por los tokens. Los productos React+MUI usan las variantes/estilos equivalentes del tema; estas clases son el espejo para no-MUI.

```html
<!-- requiere tokens.css primero; semantic.css habilita temas claro/oscuro -->
<link rel="stylesheet" href="theme-ceicol/tokens.css" />
<link rel="stylesheet" href="theme-ceicol/semantic.css" />
<link rel="stylesheet" href="theme-ceicol/components.css" />
```

O en un `.css`/`.astro`:

```css
@import 'theme-ceicol/tokens.css';
@import 'theme-ceicol/semantic.css';
@import 'theme-ceicol/components.css';
```

### Botón y link

```html
<button class="cei-btn cei-btn--primary">Enviar</button>
<button class="cei-btn cei-btn--secondary">Cancelar</button>
<button class="cei-btn cei-btn--ghost">Terciario</button>
<button class="cei-btn cei-btn--destructive">Eliminar</button>
<button class="cei-btn cei-btn--primary cei-btn--large">CTA grande</button>
<button class="cei-icon-btn" aria-label="Buscar"><svg>…</svg></button>
<a class="cei-link" href="#">Ver más</a>
```

Variantes: `--primary`, `--secondary`, `--ghost`, `--destructive`; tamaños: `--large`, `--sm`.

### Tipografía

```html
<h1 class="cei-h1">Título de pantalla</h1>
<h2 class="cei-h2">Título de sección</h2>
<p class="cei-body">Texto de cuerpo.</p>
<span class="cei-overline">Categoría</span>
```

Utilidades: `cei-h1`…`cei-h4`, `cei-body`, `cei-body-lg`, `cei-small`, `cei-overline`.

### Superficies, badges y alertas

```html
<div class="cei-card cei-card--hover">Contenido</div>

<!-- Superficie translúcida adaptable (claro/oscuro) -->
<div class="cei-glass">Panel flotante</div>

<span class="cei-badge">Nuevo</span>
<span class="cei-badge cei-badge--success">Activo</span>

<div class="cei-alert cei-alert--error">Algo salió mal.</div>
```

Badge: `--accent`, `--success`, `--warning`, `--error`, `--neutral`. Alert: `--success`, `--warning`, `--error`, `--info`. `cei-card` y `cei-glass` se adaptan al tema si `semantic.css` está cargado.

### Formularios

```html
<label class="cei-field">
  <span class="cei-field__label">Correo</span>
  <input class="cei-input" type="email" placeholder="name@ceicol.com" />
  <span class="cei-field__help">No lo compartimos.</span>
</label>

<textarea class="cei-textarea"></textarea>
<select class="cei-select"><option>Opción</option></select>

<label class="cei-check"><input type="checkbox" /> Acepto</label>
<label class="cei-check"><input type="radio" name="g" /> Opción A</label>

<label class="cei-switch">
  <input type="checkbox" />
  <span class="cei-switch__track"></span>
</label>
```

Estado de error en input: `cei-input cei-input--error` + `cei-field__error`.

### Estados

```html
<div class="cei-skeleton cei-skeleton--text"></div>
<div class="cei-avatar">MR</div>
<div class="cei-empty">
  <div class="cei-empty__icon">◎</div>
  <div class="cei-empty__title">Sin resultados</div>
  <p class="cei-empty__text">Ajusta los filtros e intenta de nuevo.</p>
</div>
```

Avatar: `--sm`, `--lg`. Skeleton: `--text`, `--circle`.

### Feedback, navegación, colapsables y tabla

```html
<!-- Modal (apertura/cierre por JS del consumidor) -->
<div class="cei-modal__overlay">
  <div class="cei-modal">
    <h3 class="cei-modal__title">Confirmar</h3>
    <div class="cei-modal__body">¿Continuar?</div>
    <div class="cei-modal__actions">
      <button class="cei-btn cei-btn--ghost">Cancelar</button>
      <button class="cei-btn cei-btn--primary">Aceptar</button>
    </div>
  </div>
</div>

<div class="cei-toast-container">
  <div class="cei-toast cei-toast--success">Guardado</div>
</div>

<div class="cei-tabs">
  <button class="cei-tab cei-tab--active">Uno</button>
  <button class="cei-tab">Dos</button>
</div>

<nav class="cei-breadcrumb">
  <a href="#">Inicio</a><span class="cei-breadcrumb__sep">/</span>
  <span class="cei-breadcrumb__current">Actual</span>
</nav>

<div class="cei-pagination">
  <button class="cei-page cei-page--active">1</button>
  <button class="cei-page">2</button>
</div>

<div class="cei-accordion">
  <button class="cei-accordion__header">Pregunta</button>
  <div class="cei-accordion__panel">Respuesta.</div>
</div>

<div class="cei-stepper">
  <span class="cei-step cei-step--done"><span class="cei-step__num">1</span></span>
  <span class="cei-step__line"></span>
  <span class="cei-step cei-step--active"><span class="cei-step__num">2</span></span>
</div>

<table class="cei-table">
  <thead><tr><th>Nombre</th><th>Estado</th></tr></thead>
  <tbody><tr><td>Item</td><td>Activo</td></tr></tbody>
</table>
```

Toast: `--success`, `--warning`, `--error`, `--info`. Tabs/paginación: estado activo con `--active`. Stepper: `--active`, `--done`.

## Publicar una versión

```bash
npm run release            # patch
npm run release -- minor   # o major
```

El script sube la versión en `package.json`, actualiza el comando de instalación de este README, compila y publica un tag `vX.Y.Z` con el `dist` incluido, dejando `main` sin artefactos de build.

## Solución de problemas

**Los cambios no se reflejan tras actualizar:** verifica que el tag en el comando de instalación apunte a la versión deseada y limpia la caché de dependencias Git del proyecto consumidor (borra `node_modules` y el lockfile, reinstala).

**El tema se ve sin las fuentes correctas:** confirma que el bloque de Google Fonts está en el `<head>`.
