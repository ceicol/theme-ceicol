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

- [ ] Migrar productos GAIA de v0.8.0 → v0.23.0 con la guía **Gobernanza › Actualizar**: `Gaia_Fichas`, `geo-visor`, `Gaia_DMS`, `Gaia_StoryMap`.

## Mejoras opcionales (del audit, no bloqueantes)

- [ ] WCAG: blanco sobre `success`/`accent` queda por debajo de AA para texto normal — revisar si respaldan texto de tamaño cuerpo.
- [ ] `gen-tailwind.mjs`: derivar `COLOR_GROUPS` de los tokens en vez de una allowlist hardcodeada (hoy un color de marca nuevo no aparece en el preset y ningún check falla).
