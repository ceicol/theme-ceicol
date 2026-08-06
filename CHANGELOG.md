# Changelog

Todos los cambios notables de `theme-ceicol` se documentan aquí.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado sigue [SemVer](https://semver.org/lang/es/).
Ver la política de versionado y deprecación en [CONTRIBUTING.md](./CONTRIBUTING.md).

## [Unreleased]

### Added
- **Token `fontSize.h4`** (`--cei-font-size-h4`, `text-h4` en Tailwind, `fontSize.h4` en DTCG) = `clamp(1rem, …, 1.125rem)` (16→18px). Ahora `h4` es un paso de escala de primera clase, documentado en el espécimen en vivo de la doc, no solo una variante MUI.

### Fixed
- **Paridad de `.cei-h4`.** La utilidad CSS `.cei-h4` apuntaba a `--cei-font-size-h3` (20–24px), desalineada con la variante MUI `h4` (16–18px tras acotarla). Ahora usa `--cei-font-size-h4`, quedando ambas superficies (CSS/Tailwind y React/MUI) en el mismo tamaño.

## [0.27.0]

### Fixed
- **`glassEffect` voltea en dark.** El objeto `glassEffect` hardcodeaba `rgba(255,255,255,…)` (fondo y borde), por lo que los overlays de vidrio se quedaban claros en tema oscuro. Ahora usa el rol semántico **`--cei-bg-glass`** (deriva de `--cei-bg-raised`) para el fondo y **`--cei-line`** para el borde, con fallback. Afecta a la variante de botón `cei-icon-glass` y a cualquier consumidor que use el token.

## [0.26.0]

### Changed
- **Tipografía `h4`** acotada a **máx `1.125rem`** (18px), fluido 16→18px, para títulos compactos (cabeceras de panel/collapse). Antes 20–24px. Los consumidores que usan `variant="h4"` heredan el nuevo tamaño (sin hardcodear).

## [0.25.0]

### Fixed
- **AppTheme renderiza en MUI 9.** El palette usaba strings `var(--cei-*)` en `text`/`background`/`divider`, que rompían `alpha()`/`decomposeColor()` de MUI 9 (`Unsupported var(...) color`) en cualquier componente que derive tonos (p. ej. Button). Ahora el palette usa **hex reales** vía `cssVariables` + `colorSchemes` (claro/oscuro), y el tema oscuro de MUI se activa con el **mismo `data-theme`** que la capa CSS (`colorSchemeSelector: '[data-theme="%s"]'`).

### Changed
- El esquema oscuro de MUI ahora deriva correctamente `palette.action.*` y `text.disabled` (antes `mode` quedaba en `light`).

## [0.24.0]

### Added
- **Variantes de icon-button `cei-icon-glass` / `cei-icon-outline`** (API CEICOL): reemplazo moderno de `gaia-icon-glass`/`gaia-icon-outline`. Mismo aspecto, pero el color usa el rol `--cei-brand` (voltea con el tema).

### Changed
- Peer `@mui/material` acotado a `>=9` (la API de Alert por severidad requiere MUI 9; antes `>=5`, donde los tints se degradaban).

## [0.23.0]

### Fixed
- **Sombra de marca unificada**: el tinte pasa al primary real (`rgba(0,114,152)`). Antes las sombras `lg`/`premium` y varias de botón usaban un azul fantasma (`#307095`) que no era ningún token.
- **Contraste en tema oscuro**: `.cei-badge`, `.cei-avatar` y `.cei-link` usan `var(--cei-brand)` (voltea) en vez de `--cei-primary-dark` fijo, que quedaba con bajo contraste en oscuro.

### Changed
- **Tipos de paleta**: los colores de marca custom (`accent`, `tech`, `contrast`, `tertiary`, `cta`, `green`, `brown`, `link`) usan un tipo propio `CeiPaletteColor` donde solo `main` es obligatorio. Antes se tipaban como `PaletteColor`, prometiendo un `.dark`/`.contrastText` que en runtime es `undefined`.

### Added
- **Accesibilidad**: `:focus-visible` de marca en icon-button, tab, paginación y acordeón; guarda `prefers-reduced-motion` que desactiva los desplazamientos de hover.
- **Metadata del paquete**: `repository` y `sideEffects` (`["**/*.css"]`) para tree-shaking y trazabilidad.

## [0.22.0]

### Added
- **`tokens.json` (formato W3C Design Tokens / DTCG)** como export `./tokens.json`: artefacto estándar para herramientas y agentes de IA, generado desde los mismos tokens.
- **Preset de Tailwind** generado (`export ./tailwind`): `presets: [require('theme-ceicol/tailwind')]`, colores de marca concretos + roles como `var(--cei-*)`.
- Roles semánticos como **fuente TS** (`src/tokens/semantic.ts`); `semantic.css` ahora se **genera** (antes CSS a mano) — estructura single-source.
- **Gobernanza**: `CHANGELOG`, `CONTRIBUTING`, PR template, `CODEOWNERS`.
- **Quality gates (CI)**: `typecheck`, Stylelint anti-hex, contrato de tokens, **parity check MUI** y **sanity del theme** (`check:theme` — falla si la tipografía tiene `NaN`). `release.sh` no publica si fallan.

### Changed
- Dependencias de desarrollo a últimas estables: **React 19**, **MUI 9** (peer amplio: `react >=18`, `@mui/material >=5`).
- Alert (MUI): estilos por-severidad con la API `variants` (MUI 9 removió los slots `standardSuccess/…`).

### Fixed
- **Escala de títulos MUI (`h1`–`h4`)**: se elimina `responsiveFontSizes()`, que hacía `parseFloat()` sobre los títulos fluidos (`clamp()`) y los convertía en `NaNrem` en `AppTheme` y `GaiaCompatTheme`. El `fluid()` de `typography.ts` ya es responsivo por sí mismo.

## [0.21.0]

### Added
- Tema oscuro completo también para los primitivos CSS `.cei-*`: superficies, texto y bordes ruteados a los roles semánticos con fallback al token crudo.
- Tints de `.cei-badge` y `.cei-alert` adaptables al tema (`color-mix` sobre la superficie activa).

### Changed
- La paleta MUI (`background`, `text`, `divider`) y los overrides de componentes referencian los roles (`var(--cei-*)`) con fallback: el tema oscuro de MUI usa la misma fuente de verdad que el CSS, sin paleta dark duplicada.

## [0.14.0 – 0.20.0]

### Added
- **Capa semántica** (`semantic.css`): roles de superficie, texto, borde, marca y elevación, con mapa claro y bloque `[data-theme="dark"]`.
- **Tema oscuro** conmutable por atributo `data-theme` (una sola fuente de verdad para CSS, Tailwind y MUI).
- **Vidrio adaptable**: roles `--cei-bg-glass-soft|glass|strong` y primitivo `.cei-glass`.
- Paleta **tech** (cian/sky) y familia **surface** (superficies oscuras de marca) como tokens.
- Escala **micro** de tipografía (`xs`/`xxs`/`xxxs`) y de espaciado (`xxs`/`xtight`/`xsm`), y `radius-xs`.
- Token de sombra `glowTech`.
- Export `./semantic.css`.

## [0.13.0]

### Added
- Overrides MUI de componentes: Alert, Chip, Dialog, Tabs, Table, Avatar, Accordion, Pagination.

## [0.9.0 – 0.12.0]

### Added
- Librería de componentes CSS `.cei-*` (botón, link, tipografía, card, badge, alert, formularios, feedback, navegación, colapsables, tabla).

### Changed
- Escala canónica de espaciado y radios unificada a los valores de CEICOL (landing).

## [0.1.0 – 0.8.0]

### Added
- Fundación: tema MUI (`AppTheme`, `GaiaCompatTheme`), tokens de marca, tipografía y espaciado.
- Variantes de botón `cei-*` y vocabulario de compatibilidad con `theme-gaia`.
- Salida de tokens en tres formatos desde una única fuente: tema MUI, `tokens.css` (custom properties) y export JS para Tailwind.
- Distribución vía tags de Git inmutables + script de release.

---

> Historial consolidado: las versiones previas a `0.13.0` se agrupan por hitos.
> A partir de aquí, cada versión se documenta individualmente bajo `[Unreleased]`.

[Unreleased]: https://github.com/ceicol/theme-ceicol/compare/v0.27.0...HEAD
[0.27.0]: https://github.com/ceicol/theme-ceicol/compare/v0.26.0...v0.27.0
[0.26.0]: https://github.com/ceicol/theme-ceicol/compare/v0.25.0...v0.26.0
[0.25.0]: https://github.com/ceicol/theme-ceicol/compare/v0.24.0...v0.25.0
[0.24.0]: https://github.com/ceicol/theme-ceicol/compare/v0.23.0...v0.24.0
[0.23.0]: https://github.com/ceicol/theme-ceicol/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/ceicol/theme-ceicol/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/ceicol/theme-ceicol/releases/tag/v0.21.0
