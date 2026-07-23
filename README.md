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
npm install git+https://github.com/ceicol/theme-ceicol.git#v0.12.0
```

Para actualizar, cambia el tag por la versión deseada (ver el badge de arriba o la pestaña Tags del repositorio):

```bash
npm install git+https://github.com/ceicol/theme-ceicol.git#v0.12.0
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
| **`success`** | Verde — éxito | `.main` `.light` `.bg` |
| **`warning`** | Ámbar — advertencia | `.main` `.light` `.bg` |
| **`error`** | Rojo — error / destructivo | `.main` `.light` `.bg` |
| **`info`** | Azul informativo | `.main` `.light` `.bg` |
| **`contrast`** | Fondo de énfasis (footer, secciones oscuras) | `.main` `.light` |

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

**Espaciado (`spacingConstants`):** `xs` 8px · `sm` 16px · `md` 24px · `lg` 40px · `xl` 80px · `xxl` 140px

**Bordes (`borderRadius`):** `sm` 6px · `md` 12px · `lg` 18px · `xl` 24px · `xxl` 54px · `round` 50%

```tsx
<Box sx={{ p: spacingConstants.md, borderRadius: borderRadius.lg }} />
```

También accesibles desde el tema: `theme.customSpacing`, `theme.customShape`.

### 4. Efectos y sombras

```ts
import { shadows, glassEffect } from 'theme-ceicol';
```

**Sombras (`shadows`):** `sm` · `md` · `lg` · `premium` · `glow`

**Glassmorphism (`glassEffect`):** objeto helper con fondo semitransparente, blur y borde.

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

Variables disponibles: colores (`--cei-primary`, `--cei-accent`, `--cei-success`, `--cei-warning`, `--cei-error`, `--cei-info`, `--cei-contrast`, `--cei-text-*`, `--cei-background-*`, `--cei-border-*`), espaciado (`--cei-space-*`), radios (`--cei-radius-*`), sombras (`--cei-shadow-*`), transiciones (`--cei-transition-*`) y fuentes (`--cei-font-*`). No olvides cargar las fuentes vía Google Fonts (ver arriba).

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
<!-- requiere tokens.css primero -->
<link rel="stylesheet" href="theme-ceicol/tokens.css" />
<link rel="stylesheet" href="theme-ceicol/components.css" />
```

O en un `.css`/`.astro`:

```css
@import 'theme-ceicol/tokens.css';
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

<span class="cei-badge">Nuevo</span>
<span class="cei-badge cei-badge--success">Activo</span>

<div class="cei-alert cei-alert--error">Algo salió mal.</div>
```

Badge: `--accent`, `--success`, `--warning`, `--error`, `--neutral`. Alert: `--success`, `--warning`, `--error`, `--info`.

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
