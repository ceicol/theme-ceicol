# Contribuir a theme-ceicol

`theme-ceicol` es el sistema de diseño de CEICOL. Es la **única fuente de verdad**
de color, tipografía, espaciado, radios, sombras, temas y componentes para todos
los productos (web y React/MUI). Cambiar algo aquí impacta a todos los consumidores,
así que se trabaja con disciplina.

## Principios

- **Una sola fuente de verdad.** Los valores viven en `src/tokens/*.ts`. MUI los importa, `tokens.css` se genera de ahí y Tailwind los consume desde el mismo export. No dupliques valores.
- **Nombrar por rol, no por apariencia.** Los tokens crudos se nombran por lo que son (`--cei-primary`); los roles semánticos por su función (`--cei-bg`, `--cei-fg`). Nunca un rol con nombre de apariencia (`--text-dark`).
- **Sin drift.** Documentación y validaciones se derivan de los tokens; no se mantienen a mano.

## Flujo de trabajo

1. Crea una rama desde `main`.
2. Haz el cambio siguiendo el "Definition of Done" (abajo).
3. Actualiza `CHANGELOG.md` bajo `## [Unreleased]`.
4. Abre un PR (usa la plantilla). Requiere revisión de un CODEOWNER.
5. Al mergear, se publica con el proceso de release.

## Definition of Done

Un token o componente está "terminado" solo si:

- [ ] El valor vive en `src/tokens/*.ts` (o el rol en `semantic.css`), no hardcodeado.
- [ ] Funciona en **ambos stacks**: tema MUI y CSS (`--cei-*` / `.cei-*`).
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
npm run release            # patch
npm run release -- minor   # o major
```

El script sube la versión, actualiza el comando de instalación del README, compila, publica el tag `vX.Y.Z` con el `dist` y verifica que subió a GitHub. Antes de publicar, asegúrate de haber movido los cambios de `[Unreleased]` a la nueva versión en el `CHANGELOG.md`.
