# Changelog

Todos los cambios notables de `theme-ceicol` se documentan aquí.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado sigue [SemVer](https://semver.org/lang/es/).
Ver la política de versionado y deprecación en [CONTRIBUTING.md](./CONTRIBUTING.md).

## [Unreleased]

### Added
- **`tokens.json` (formato W3C Design Tokens / DTCG)** como export `./tokens.json`: artefacto estándar para herramientas y agentes de IA, generado desde los mismos tokens.
- **Preset de Tailwind** generado (`export ./tailwind`): `presets: [require('theme-ceicol/tailwind')]`, colores de marca concretos + roles como `var(--cei-*)`.
- Roles semánticos como **fuente TS** (`src/tokens/semantic.ts`); `semantic.css` ahora se **genera** (antes CSS a mano) — estructura single-source.
- **Gobernanza**: `CHANGELOG`, `CONTRIBUTING`, PR template, `CODEOWNERS`.
- **Quality gates (CI)**: `typecheck`, Stylelint anti-hex, contrato de tokens y **parity check MUI** (falla si un color de marca no está cableado en la paleta/augment). `release.sh` no publica si fallan.

### Changed
- Dependencias de desarrollo a últimas estables: **React 19**, **MUI 9** (peer amplio: `react >=18`, `@mui/material >=5`).
- Alert (MUI): estilos por-severidad con la API `variants` (MUI 9 removió los slots `standardSuccess/…`).

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

[Unreleased]: https://github.com/ceicol/theme-ceicol/compare/v0.21.0...HEAD
[0.21.0]: https://github.com/ceicol/theme-ceicol/releases/tag/v0.21.0
