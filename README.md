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
npm install git+https://github.com/ceicol/theme-ceicol.git#v0.10.0
```

Para actualizar, cambia el tag por la versión deseada (ver el badge de arriba o la pestaña Tags del repositorio):

```bash
npm install git+https://github.com/ceicol/theme-ceicol.git#v0.10.0
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

## Publicar una versión

```bash
npm run release            # patch
npm run release -- minor   # o major
```

El script sube la versión en `package.json`, actualiza el comando de instalación de este README, compila y publica un tag `vX.Y.Z` con el `dist` incluido, dejando `main` sin artefactos de build.

## Solución de problemas

**Los cambios no se reflejan tras actualizar:** verifica que el tag en el comando de instalación apunte a la versión deseada y limpia la caché de dependencias Git del proyecto consumidor (borra `node_modules` y el lockfile, reinstala).

**El tema se ve sin las fuentes correctas:** confirma que el bloque de Google Fonts está en el `<head>`.
