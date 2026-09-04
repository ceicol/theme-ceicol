# Pendientes del sistema de diseño

Checklist de decisiones y tareas diferidas. Marcar a medida que se cierren.

## Decisiones abiertas (paquete)

- [ ] **Licencia.** El repo es público sin `license` → por defecto "todos los derechos reservados". Decidir entre:
  - `UNLICENSED` + `"private": true` — propietario, solo CEICOL; coherente con el modelo actual (git+https, no npm público).
  - `MIT` / `Apache-2.0` — permite reutilización externa; requiere archivo `LICENSE` con el copyright de CEICOL.
  - Al decidir: añadir el campo a `package.json` (+ archivo `LICENSE` si aplica) e incluirlo en el próximo release.

## Release pendiente

- [ ] **v0.24.0** — ya en `[Unreleased]` del CHANGELOG: peer `@mui/material` acotado a `>=9`. Sumar la licencia cuando se decida y cortar (`npm run release -- minor`).

## Documentación

- [ ] **Dominio real** en `Desing-system/astro.config.mjs` (`site`) — hoy placeholder `design.ceicol.com`. Fijarlo al desplegar (afecta las URLs de `/llms.txt` y `/llms-full.txt`).
- [ ] **Desplegar la doc** (GitHub Pages / Netlify / Vercel). Deja `/llms.txt` y `/llms-full.txt` en vivo para el equipo y los agentes.
- [ ] Subir las refs de instalación a `#v0.24.0` cuando salga.

## Adopción (G5)

- [x] Migrar productos GAIA con la guía **Gobernanza › Actualizar**: `Gaia_Fichas`, `geo-visor`, `Gaia_DMS`, `Gaia_StoryMap`. Los cuatro están en **0.34.0** y con MUI 9.
- [x] **Vocabulario de color de la capa compat en cero en los cuatro** (2026-09-03). Claves de paleta, variantes de botón y lecturas por JS: cerrado. Queda solo la tipografía.

## Camino a 1.0 — retirar la capa de compatibilidad

El estado, medido el 2026-09-03 con el patrón que busca el literal entrecomillado
en cualquier posición (no solo en el atributo, que dejaba fuera un 22 %):

```
                gaia-*   paleta   por JS   tipografía   total
Gaia DMS             0        0        0          133     133
Fichas               0        0        0           62      62
StoryMap             0        0        0           39      39
Geo-visor            0        0        0            0       0
```

En orden, y los tres primeros **no dependen de ningún producto**:

- [x] **`@deprecated` en los tipos**, con su equivalente. Hecho: 64 anotaciones.
      Solo avisan en acceso a propiedad; las formas de cadena las cubren las
      reglas de ESLint que documenta el README.
- [ ] **Publicar los escalones que faltan de la rampa.** La razón entre
      escalones es 1.25, 1.23, **1.63**, 0.89: hay un hueco entre `h3` (26–30) y
      `h4` (16–18), y la media geométrica cae en 20–23 px. Además `h4` mide lo
      mismo que `body2` (18). Propuesta: `h4` pasa a `fluid(24,20)`, entra `h5`
      con el 16–18 de hoy y entra `h6` en 16. **Cuesta 39 usos de `h4`** que
      crecen un escalón —24 en geo-visor, 15 en TerraInfo—.
- [ ] **Decidir `subtitle1` y `subtitle2`.** Hoy están declaradas por MUI y sin
      definir por CEICOL, así que devuelven los valores de Material **en la
      familia de cuerpo**: son encabezados fuera de marca. Lo mismo con `h5` y
      `h6`. Son 38 usos, 33 de ellos en TerraInfo. O se publican o se desactivan
      con `subtitle1: false` para que TypeScript las rechace; el estado actual es
      el peor de los tres.
- [ ] **Migrar los 234 usos de tipografía** en DMS, Fichas y StoryMap. Con la
      rampa propuesta, 130 caen en un escalón del mismo tamaño exacto y 147
      dentro de ±2 px; los 31 restantes son los titulares de 64 y 52 px, que
      crecen, y los de cuerpo a 24 px, que bajan a `body2`.
- [ ] **Retirar la capa compat**: 27 tipografías + 5 claves de paleta + 7
      variantes de botón. Los tres botones de mapa **sin equivalente**, ya
      documentado en el README.

Un elemento deprecado vive al menos un ciclo minor antes de retirarse (ver
CONTRIBUTING › Política de deprecación), así que el `1.0` no sale antes de que
este minor esté publicado y consumido.

## Mejoras opcionales (del audit, no bloqueantes)

- [ ] WCAG: blanco sobre `success`/`accent` queda por debajo de AA para texto normal — revisar si respaldan texto de tamaño cuerpo.
- [ ] `gen-tailwind.mjs`: derivar `COLOR_GROUPS` de los tokens en vez de una allowlist hardcodeada (hoy un color de marca nuevo no aparece en el preset y ningún check falla).
