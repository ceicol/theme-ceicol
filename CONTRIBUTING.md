# Contribuir a theme-ceicol

`theme-ceicol` es el sistema de diseño de CEICOL. Es la **única fuente de verdad**
de color, tipografía, espaciado, radios, sombras, temas y componentes para todos
los productos (web y React/MUI). Cambiar algo aquí impacta a todos los consumidores,
así que se trabaja con disciplina.

## Principios

- **Una sola fuente de verdad.** Los valores viven en `src/tokens/*.ts`. MUI los importa, `tokens.css` se genera de ahí y Tailwind los consume desde el mismo export. No dupliques valores.
- **Nombrar por rol, no por apariencia.** Los tokens crudos se nombran por lo que son (`--cei-primary`); los roles semánticos por su función (`--cei-bg`, `--cei-fg`). Nunca un rol con nombre de apariencia (`--text-dark`).
- **Sin drift.** Documentación y validaciones se derivan de los tokens; no se mantienen a mano.
- **Paridad entre tecnologías.** Todo componente vive en las capas que documentamos: CSS (`.cei-*`), MUI (`styleOverrides`/`variants`) y Tailwind. Crear (o cambiar) uno en una capa **obliga** a hacer su espejo en las demás, con el mismo aspecto. Si la doc muestra un `.cei-*` que en MUI no se ve igual, la doc miente.

## Flujo de trabajo

1. Crea una rama desde `main`.
2. Haz el cambio siguiendo el "Definition of Done" (abajo).
3. Actualiza `CHANGELOG.md` bajo `## [Unreleased]`.
4. Abre un PR (usa la plantilla). Requiere revisión de un CODEOWNER.
5. Al mergear, se publica con el proceso de release.

## Definition of Done

Un token o componente está "terminado" solo si:

- [ ] El valor vive en `src/tokens/*.ts` (o el rol en `semantic.css`), no hardcodeado.
- [ ] **Paridad de stacks (obligatoria).** Si hay clase `.cei-*` (CSS), existe su equivalente en el **tema MUI** (`styleOverrides`/`variants`) y en **Tailwind** cuando aplique, con el mismo aspecto. Un componente solo en CSS (sin espejo MUI) **no** está terminado.
- [ ] Es **theme-aware** cuando corresponde (usa roles con fallback al token crudo).
- [ ] Tipos MUI actualizados (`mui-types.ts`) si agrega una clave de paleta/variante.
- [ ] Documentado en `README.md` (y en el sitio de docs cuando exista).
- [ ] Entrada en `CHANGELOG.md` bajo `[Unreleased]`.
- [ ] La build pasa (`npm run build`) sin errores de tipos.

## Solicitar un token o componente nuevo (intake)

Antes de agregar algo, abre un issue describiendo: el caso de uso, en cuántos productos aplica, y por qué no basta con lo existente. El sistema **crece con intención**: no se agregan tokens para un solo uso puntual (eso se resuelve a nivel de componente del producto).

## Commits — Conventional Commits

Usa el formato `tipo: descripción`:

- `feat:` — nueva capacidad (token, componente, variante). → **minor**
- `fix:` — corrección que no cambia la API. → **patch**
- `docs:` / `chore:` / `refactor:` / `test:` — sin cambio de API. → **patch**
- Un cambio con `BREAKING CHANGE:` en el cuerpo → **major**.

## Versionado (SemVer)

- **patch** (`0.0.x`): correcciones y ajustes internos; sin cambios de API ni de valores visibles significativos.
- **minor** (`0.x.0`): cosas nuevas retrocompatibles (tokens/roles/componentes nuevos, valores que no rompen).
- **major** (`x.0.0`): cambios que rompen a los consumidores — renombrar/quitar un token, cambiar el significado de un rol, cambiar la escala canónica.

Regla práctica: si un consumidor tiene que **cambiar su código** al actualizar, es **major**.

## Política de deprecación

- Nada se elimina sin avisar. Lo que se va a quitar se marca como **deprecado** (comentario `@deprecated` en el código + nota en el CHANGELOG y en el README).
- El vocabulario de compatibilidad con `theme-gaia` (`gaia-*`, claves `cta`/`green`/`brown`/`link`, variantes `h1xxlBold`…) está **deprecado**: existe solo para migrar productos y se removerá en un `major` futuro, una vez todos los productos estén en la API principal de CEICOL.
- Un elemento deprecado vive al menos **un ciclo minor** antes de removerse en un major, con guía de migración.

## Publicar una versión

Solo mantenedores (ver CODEOWNERS). Con el árbol limpio:

```bash
git checkout main && git pull
npm run release           # patch
npm run release -- minor  # o major
```

**Se ejecuta en `main`, después de mergear el PR.** El paso 3 del script hace `git push origin main`, así que lanzarlo desde una rama de trabajo empuja a `main` un commit de versión que no corresponde.

El script hace todo lo demás solo: sube la versión, **mueve el encabezado `[Unreleased]` del CHANGELOG a la versión nueva**, actualiza el comando de instalación del README, compila, corre los tres `check:*` sobre el `dist` recién generado, publica el tag `vX.Y.Z` con el `dist` y verifica que llegó a GitHub.

**No muevas el `[Unreleased]` a mano.** El paso 1.5 lo hace y es idempotente: si ya lo moviste, el encabezado sigue ahí y el script insertará una sección de versión vacía encima.

**Los enlaces de comparación del pie del CHANGELOG hay que arreglarlos a mano.** El paso 1.5 intenta hacerlo con `git describe --tags`, y **eso nunca puede funcionar en este repositorio**: el paso 4 crea el tag sobre el commit `build:` y el paso 5 hace `git reset --mixed HEAD~1`, así que el tag queda **un commit por delante** de `main`. `git describe` solo ve tags alcanzables *desde* HEAD, y este está adelante.

```
v0.34.0 → 59569e9  "build: v0.34.0"     ← el tag
main    → 7f15e44  "chore: release v0.34.0"  = padre del tag
```

Se nota en el propio archivo: el enlace `[Unreleased]` apunta a `v0.27.0...HEAD` con la versión en 0.34.0, siete releases desincronizado. El arreglo es una línea en `scripts/release.sh` —`git tag --sort=-v:refname | head -1` en vez de `git describe`— y va en su propio `fix:`, no de refilón en un PR de documentación.
