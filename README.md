# theme-ceicol

Sistema de diseño de CEICOL para productos **React + Material UI**. Provee el tema (`AppTheme`), los tokens de marca (color, tipografía, espaciado, sombras, movimiento) y variantes de componentes listas para usar.

Es un paquete nuevo e independiente. Comparte con `theme-gaia` el **patrón de estructura** (mismo mecanismo de tema, tokens y distribución), pero no comparte valores ni depende de ese repositorio.

## Requisitos

- React >= 17
- @mui/material >= 5
- @emotion/react, @emotion/styled

## Instalación

Se distribuye por Git usando **tags de versión inmutables**. Cada tag (`v0.1.0`) queda congelado: la misma versión siempre trae exactamente el mismo código, sin `--force` y sin sorpresas.

```bash
npm install git+https://github.com/ceicol/theme-ceicol.git#v0.1.0
npm install @mui/material @emotion/react @emotion/styled
```

Para actualizar, cambia el tag en el comando (`#v0.1.1`) o en el `package.json` del proyecto consumidor. Fijar la versión es deliberado: un design system debe cambiar cuando tú decides, no solo.

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

## Migración desde theme-gaia (capa de compatibilidad)

Un producto que hoy consume `theme-gaia` puede adoptar la marca CEICOL **cambiando solo el import**, sin editar componentes:

```diff
- import { AppTheme } from 'theme-gaia';
+ import { AppTheme } from 'theme-ceicol';
```

Para que esto funcione, `theme-ceicol` reexpone el vocabulario público genérico de Gaia con valores de CEICOL (ver `src/compat.ts`):

- Claves de paleta: `tertiary`, `cta`, `green`, `brown`, `link` (además de las propias `primary`, `secondary`/`accent`, etc.).
- Variantes de botón: `gaia-cta-contained`, `gaia-cta-outlined`, `gaia-icon-glass`, `gaia-icon-outline`.
- Las 26 variantes tipográficas (`h1xxlBold`, `bodyxlRegular`, …) mapeadas a las fuentes de CEICOL.

Todo esto está **marcado como deprecado** y se retirará en una versión mayor cuando ya no queden productos migrando. Los proyectos **nuevos** deben usar la API limpia de CEICOL (nombres semánticos, variantes `h1`–`h4` y `cei-*`), no el vocabulario de Gaia.

No se incluyen los botones de mapa específicos de la Fundación Gaia Amazonas (`gaia-amazonia`, `gaia-panamazonia`, `gaia-macroterritorio`): son contenido de marca de Gaia, no estilo transversal. Un producto que se re-marque a CEICOL los reemplaza.

## Publicar una versión nueva

El código fuente vive en `main` (el `dist/` está en `.gitignore`, nunca se commitea a `main`). Cada release compila y crea un **tag** que sí incluye el `dist/`, sin ensuciar el historial de `main`.

```bash
# 1. Subir la versión (sin crear tag automático)
npm version patch --no-git-tag-version   # o minor / major
git commit -am "chore: v0.1.1"
git push origin main

# 2. Compilar y publicar el tag con el dist incluido
npm run release
```

El script `release` compila, commitea el `dist/` en un commit temporal, crea y empuja el tag `vX.Y.Z`, y luego revierte ese commit de `main` para dejarlo limpio. El tag queda inmutable con el build listo para instalar.

## Alcance

Esta versión (0.1.0) cubre el alcance real de la fase actual: color, tipografía, espaciado, sombras, movimiento, variantes de botón y la capa de compatibilidad con Gaia. Componentes y patrones adicionales (modal, tabs, dashboard, GIS, modo oscuro, multi-marca) se agregan cuando un producto real los necesite — ver el Design System v2.1.
