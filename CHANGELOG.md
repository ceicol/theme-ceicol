# Changelog

Todos los cambios notables de `theme-ceicol` se documentan aquí.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado sigue [SemVer](https://semver.org/lang/es/).
Ver la política de versionado y deprecación en [CONTRIBUTING.md](./CONTRIBUTING.md).

## [Unreleased]

## [0.35.0]

### Added
- **`MuiDialogTitle`, espejo de `.cei-modal__title`.** Un `<DialogTitle>` en React caía en el `h6` por defecto de MUI —Inter 500 a 20 px—: un encabezado en la tipografía de cuerpo y fuera de la escala. Ahora usa display, peso 700 y `fontSizes.h3` (20–24 px), el mismo escalón que ya consumen `.cei-modal__title` y `.cei-empty__title`. La clase CSS existía desde el principio y el espejo en MUI faltaba, que es exactamente lo que el Definition of Done llama un componente sin terminar.

### Deprecated
- **`h5`, `h6`, `subtitle1` y `subtitle2` se desactivarán en `1.0`.** La escala de CEICOL son **cuatro niveles de encabezado**, como declara la propia fuente de `tokens/typography.ts`. Esos cuatro slots los declara MUI, CEICOL no los define, y hoy devuelven los valores de Material Design **en la tipografía de cuerpo**. En `1.0` pasarán a `false` en el augment de tipos, de modo que TypeScript los rechace. Uso actual conocido: 5 en productos Gaia y 33 en un producto que aún no consume el tema. Migración: `h5`/`h6` → `h4`; `subtitle1` → `body1` (hoy es casi idéntico: Inter 400 a 16 px, solo cambia el interlineado); `subtitle2` → `caption`. Si un producto repite el mismo estilo muchas veces, eso es un componente suyo, no un estilo del sistema.

### Fixed
- **`release.sh` vuelve a actualizar los enlaces de comparación del CHANGELOG.** El paso 1.5 tomaba el tag anterior con `git describe --tags`, y eso **nunca pudo funcionar aquí**: el paso 4 crea el tag sobre el commit `build:` y el paso 5 hace `git reset --mixed HEAD~1`, así que todo tag queda un commit **por delante** de `main`, y `git describe` solo ve tags alcanzables *desde* HEAD. Devolvía vacío en cada publicación y el bloque se saltaba **en silencio**, porque el `|| echo ''` se comía el error. Ocho releases con el enlace `[Unreleased]` clavado en `v0.27.0` mientras la versión iba por 0.34.1. Ahora usa `git tag --list 'v*' --sort=-v:refname | head -1` —en ese punto el tag nuevo aún no existe, así que el más alto es el anterior— y avisa si no hay ninguno, que solo es normal en la primera publicación del paquete.
- **Los 13 enlaces de versión que se perdieron mientras tanto**, reconstruidos desde los tags reales: de `0.28.0` a `0.34.1`, más `0.13.0`. El pie pasa de 8 enlaces a 21.

## [0.34.1]

### Deprecated
- **La capa de compatibilidad con `theme-gaia` queda marcada en el código**, no solo en prosa. 64 anotaciones `@deprecated` con su equivalente de CEICOL: las 5 claves de paleta en `Palette`/`PaletteOptions` y las 27 variantes tipográficas en `TypographyVariants`/`TypographyVariantsOptions`. La política de deprecación ya lo exigía y el README ya afirmaba que estaban marcadas; ahora es cierto.
- **Los tres botones de mapa de región no tendrán equivalente.** `gaia-amazonia`, `gaia-panamazonia` y `gaia-macroterritorio` se retirarán en `1.0` **sin sustituto en el sistema**: un distintivo de territorio es del dominio de un visor geográfico, no de la marca, y sus únicos usos estaban en un solo producto. El README documenta cómo reconstruirlo en el producto — sus degradados eran los pares `accent`/`primary`/`warning` del sistema escritos a mano, así que no hace falta ningún literal.

### Documentation
- **`CONTRIBUTING` › Publicar una versión, corregido.** Tres cosas que la guía no decía o decía al revés: (1) `npm run release` se ejecuta **en `main` y después del merge**, porque su paso 3 hace `git push origin main`; (2) **no hay que mover el `[Unreleased]` a mano** —el paso 1.5 lo hace y es idempotente, así que moverlo antes deja una sección de versión vacía—; y (3) el arreglo automático de los enlaces de comparación del pie **no puede funcionar en este repositorio**: usa `git describe --tags`, pero el paso 4 crea el tag sobre el commit `build:` y el paso 5 retrocede `main`, dejando el tag **un commit por delante**. `git describe` solo ve tags alcanzables desde HEAD. Por eso el enlace `[Unreleased]` sigue en `v0.27.0...HEAD` con la versión en 0.34.0, siete releases. El arreglo del script queda anotado para su propio `fix:`.
- **Guía de migración de la capa compat en el README**: tabla de canje de claves de paleta (alias literales, el píxel no se mueve), de variantes de botón (componente por otro, se compara en pantalla) y de la escala tipográfica (`variant` da el escalón, `sx` el peso).
- **Se documenta qué avisa y qué no.** El `@deprecated` de los tipos solo lo marca el editor donde hay **acceso a propiedad** —`theme.palette.cta.main`, `theme.typography.h3Medium`—; en las formas de cadena —`variant="h3Medium"`, `color="cta"`, `sx={{ typography: "…" }}`— TypeScript no emite nada, porque el valor es un literal dentro de una unión y no una referencia a un símbolo. Comprobado con `getSuggestionDiagnostics` de la API del compilador. El README publica las reglas de `no-restricted-syntax` que sí las cazan, y explica por qué buscan el literal en cualquier posición: en un producto real un 22 % de los usos no están en el atributo.

## [0.34.0]

### Added
- **Sistema de movimiento.** Tokens: `duration.instant` (90ms) y easings `standard`/`in` (además del `out` de marca) → `--cei-duration-*` / `--cei-ease-*`, y utilidades Tailwind `duration-*` / `ease-*` (paridad CSS↔MUI↔Tailwind). Microinteracción de **press** (`scale`) en icon buttons (CSS + MUI). Personalidad "sutil y precisa".

### Changed
- **Accesibilidad de movimiento global.** `MuiCssBaseline` ahora incluye el reset de `prefers-reduced-motion: reduce` para todo el árbol (una sola vez), además de los guards existentes en la capa CSS.

## [0.33.4]

### Added
- Primitivo **`--cei-primary-lighter`** (`#3cbfe0`) — azul de marca brillante para superficies oscuras.

### Fixed
- **Accesibilidad: contraste del texto de marca en dark.** El texto/borde/ícono con `--cei-brand` en tema oscuro derivaba de `--cei-primary-light` (`#0391b2`), que sobre las superficies oscuras daba ~4:1 (**fallaba WCAG AA**). Ahora el rol `brand` en dark usa `--cei-primary-lighter` (`#3cbfe0`), con **AAA (≥7:1)** sobre `surface-brand/slate/deep`. Los rellenos activos que llevan texto blanco (toggle de icon-button, ítem de paginación seleccionado) pasan a `--cei-primary` fijo para conservar el blanco legible (AA) en ambos temas.

## [0.33.3]

### Added
- **Más estados de componente** (paridad CSS + MUI): `disabled` en `.cei-tab` y `.cei-page` (+ `Mui-disabled` en `MuiTab`); **paso con error** `.cei-step--error` (+ `Mui-error` en `MuiStepIcon`); y **anillo de foco visible** en `.cei-link` (faltaba — accesibilidad de teclado).

## [0.33.2]

### Added
- **Estado válido en campos** (complementa a `error`): `.cei-input--success` + `.cei-field__success` en CSS, y `color="success"` con borde verde persistente en `MuiOutlinedInput` (React). Guía de uso en la doc: reservarlo para confirmación que aporta (validación asíncrona, reglas complejas, formularios largos), no para todo campo.

## [0.33.1]

### Added
- **Estados de componente en la capa CSS** (paridad con el tema MUI): `disabled` en `.cei-icon-btn`, `.cei-input`, `.cei-select`, `.cei-textarea`, `.cei-check` y `.cei-switch`; y toggle activo por `[aria-pressed="true"]` en `.cei-icon-btn--outline`/`--glass`. Permite documentar los estados estáticos sin drift (hover/foco siguen siendo vivos en la doc, no se falsifican).

## [0.33.0]

### Added
- **`MuiSwitch` estilizado como el `.cei-switch` del DS**: compacto (40×22), pista `--cei-line-strong` que pasa a `--cei-brand` al activar (voltea en dark), pulgar de 18px con `shadow-sm`. Antes los switches en React eran los de MUI por defecto (voluminosos, fuera de la escala del DS).
- **Espejos MUI de componentes que solo existían en CSS**: `MuiCard`, `MuiCheckbox`, `MuiSelect`, `MuiSkeleton`, `MuiBreadcrumbs` y `MuiStepper` (`StepIcon`/`StepLabel`/`StepConnector`) — reflejan sus clases `.cei-*` para que React/MUI y CSS se vean igual (antes la doc mostraba estilos CSS sin equivalente en MUI). Se formaliza el principio de **paridad CSS ↔ MUI ↔ Tailwind** en `CONTRIBUTING.md`.

### Changed
- **`MuiDialogActions` con padding proporcional** (`16/24/24`, alineado a los 24px del contenido, como `.cei-modal`) para que los botones de acción no queden pegados al borde. Antes usaban el padding por defecto de MUI (8px → botones al filo).

## [0.32.0]

### Added
- Tokens de sombra **`button`** y **`buttonHover`** (CTA de marca) en `shadows` → `--cei-shadow-button` / `--cei-shadow-button-hover`.

### Changed
- **Los botones MUI ahora consumen los tokens de radio y padding del DS.** `MuiButton` heredaba `shape.borderRadius: 4px` (esquinas casi rectas), desalineado con `.cei-btn` (`--cei-radius-md` = 12px). Ahora `root` fija `borderRadius: borderRadius.md` y `sizeMedium` el padding `12×24px` (`spacingConstants.xsm/md`), igualando el botón React/MUI con el de CSS/Tailwind.
- **Sombra de botón tokenizada.** `cei-primary`, `cei-large` (theme) y `.cei-btn--primary` (CSS) usaban un `rgba` hardcodeado; ahora usan `shadows.button` / `shadows.buttonHover`.

## [0.31.0]

### Added
- **Estado presionado (`aria-pressed`) en los botones de ícono.** Las variantes `cei-icon-outline` / `cei-icon-glass` (en `MuiButton` y `MuiIconButton`, más los clones compat `gaia-icon-*`) ahora responden a `aria-pressed="true"` con el mismo aspecto activo que `:active`/`.Mui-active` (relleno de marca + icono blanco / vidrio). Un toggle solo necesita `aria-pressed={activo}` — ya no hace falta hardcodear el fondo activo.

### Fixed
- **Icono invisible al activar en dark.** El patrón previo de los consumidores (`backgroundColor: activo ? "primary.light"`) colisionaba en tema oscuro con el color del icono (`--cei-brand` = `--cei-primary-light` = mismo `#0391b2`). Con el estado `aria-pressed` del DS, el activo usa relleno de marca + icono blanco, con contraste en claro y oscuro.

## [0.30.0]

### Added
- **Variantes CSS `.cei-icon-btn--outline` / `.cei-icon-btn--glass`** en `components.css`, espejo de las variantes MUI `cei-icon-outline`/`cei-icon-glass`. Armoniza el botón de ícono entre stacks: la capa CSS (Astro/HTML) ahora tiene las mismas dos variantes que React/MUI, con roles que voltean en dark.

## [0.29.0]

### Added
- **Estilo de `MuiIconButton`.** Antes el theme no estilizaba `IconButton` (los `cei-icon-*` eran solo variantes de `MuiButton`), así que los `<IconButton>` quedaban MUI plano. Ahora: `root` con un **default global** sutil (color de marca + fondo en hover, transición) que respeta el `color` prop, y **variantes opt-in por `className`** `cei-icon-outline`/`cei-icon-glass` (MUI 9 no expone prop `variant` en IconButton), con el mismo aspecto que sus equivalentes de botón.

## [0.28.0]

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

[Unreleased]: https://github.com/ceicol/theme-ceicol/compare/v0.35.0...HEAD
[0.35.0]: https://github.com/ceicol/theme-ceicol/compare/v0.34.1...v0.35.0
[0.34.1]: https://github.com/ceicol/theme-ceicol/compare/v0.34.0...v0.34.1
[0.34.0]: https://github.com/ceicol/theme-ceicol/compare/v0.33.4...v0.34.0
[0.33.4]: https://github.com/ceicol/theme-ceicol/compare/v0.33.3...v0.33.4
[0.33.3]: https://github.com/ceicol/theme-ceicol/compare/v0.33.2...v0.33.3
[0.33.2]: https://github.com/ceicol/theme-ceicol/compare/v0.33.1...v0.33.2
[0.33.1]: https://github.com/ceicol/theme-ceicol/compare/v0.33.0...v0.33.1
[0.33.0]: https://github.com/ceicol/theme-ceicol/compare/v0.32.0...v0.33.0
[0.32.0]: https://github.com/ceicol/theme-ceicol/compare/v0.31.0...v0.32.0
[0.31.0]: https://github.com/ceicol/theme-ceicol/compare/v0.30.0...v0.31.0
[0.30.0]: https://github.com/ceicol/theme-ceicol/compare/v0.29.0...v0.30.0
[0.29.0]: https://github.com/ceicol/theme-ceicol/compare/v0.28.0...v0.29.0
[0.28.0]: https://github.com/ceicol/theme-ceicol/compare/v0.27.0...v0.28.0
[0.27.0]: https://github.com/ceicol/theme-ceicol/compare/v0.26.0...v0.27.0
[0.26.0]: https://github.com/ceicol/theme-ceicol/compare/v0.25.0...v0.26.0
[0.25.0]: https://github.com/ceicol/theme-ceicol/compare/v0.24.0...v0.25.0
[0.24.0]: https://github.com/ceicol/theme-ceicol/compare/v0.23.0...v0.24.0
[0.23.0]: https://github.com/ceicol/theme-ceicol/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/ceicol/theme-ceicol/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/ceicol/theme-ceicol/compare/v0.13.0...v0.21.0
[0.13.0]: https://github.com/ceicol/theme-ceicol/releases/tag/v0.13.0
