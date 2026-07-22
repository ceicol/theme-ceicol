# theme-ceicol

Sistema de diseño de CEICOL para productos **React + Material UI**. Provee el tema (`AppTheme`), los tokens de marca (color, tipografía, espaciado, sombras, movimiento) y variantes de componentes listas para usar.

Es un paquete nuevo e independiente. Comparte con `theme-gaia` el **patrón de estructura** (mismo mecanismo de tema, tokens y distribución), pero no comparte valores ni depende de ese repositorio.

## Requisitos

- React >= 17
- @mui/material >= 5
- @emotion/react, @emotion/styled

## Instalación

Se distribuye por Git desde la versión compilada (rama `build`):

```bash
npm install git+https://github.com/ceicol/theme-ceicol.git#build --force
npm install @mui/material @emotion/react @emotion/styled
```

### Tipografías (requerido)

Las fuentes se cargan vía Google Fonts. Incluir en el `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

## Uso

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppTheme } from 'theme-ceicol';

export default function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <TuApp />
    </ThemeProvider>
  );
}
```

## Tokens

### Color (nombres semánticos)

| Token | Rol | Valor |
|---|---|---|
| `primary` | Azul de marca | `#007298` (`.light .dark .bg`) |
| `secondary` / `accent` | Turquesa — acción y datos | `#0d9488` (`.light .bg`) |
| `success` | Verde — éxito | `#10b981` |
| `warning` | Ámbar — advertencia | `#d97706` |
| `error` | Rojo — error / destructivo | `#dc2626` |
| `info` | Azul informativo | `#2563eb` |
| `contrast` | Fondo de énfasis (footer, secciones oscuras) | `#0f172a` |

Uso: `<Button color="primary">`, `sx={{ bgcolor: 'accent.bg', color: 'accent.main' }}`.

### Tipografía

Tres familias con rol exclusivo: **Big Shoulders Display** (títulos `h1`–`h4`), **Inter** (cuerpo e interfaz), **JetBrains Mono** (valores técnicos). Se usan con las variantes estándar de MUI:

```tsx
<Typography variant="h1">Título de pantalla</Typography>
<Typography variant="body1">Texto de cuerpo</Typography>
<Typography variant="overline">Etiqueta de categoría</Typography>
```

### Espaciado, radios, sombras, movimiento

```ts
import { spacingConstants, borderRadius, shadows, transitionStyles } from 'theme-ceicol';

// spacingConstants: xs 8 · sm 16 · md 24 · lg 40 · xl 80 · xxl 140 (px)
// borderRadius:     sm 6 · md 12 · lg 18 · xl 24 · xxl 54 · round
// shadows:          sm · md · lg · premium · glow
// transitionStyles: fast 150ms · normal 250ms · slow 300ms
```

También accesibles desde el tema: `theme.customSpacing`, `theme.customShape`, `theme.effectShadows`, `theme.customTransitions`, `theme.fontFamilies`.

### Variantes de botón

```tsx
<Button variant="cei-primary">Acción principal</Button>
<Button variant="cei-secondary">Acción secundaria</Button>
<Button variant="cei-ghost">Cancelar</Button>
<Button variant="cei-destructive">Eliminar</Button>
<Button variant="cei-large">CTA de hero</Button>
```

## Alcance

Esta versión (0.1.0) cubre el alcance real de la fase actual: color, tipografía, espaciado, sombras, movimiento y variantes de botón. Componentes y patrones adicionales (modal, tabs, dashboard, GIS, modo oscuro, multi-marca) se agregan cuando un producto real los necesite — ver el Design System v2.1.
