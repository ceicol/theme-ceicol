#!/usr/bin/env bash
set -euo pipefail

# Publica una versión nueva de theme-ceicol.
# Uso:  npm run release            (patch por defecto)
#       npm run release -- minor
#       npm run release -- major

BUMP="${1:-patch}"

# 0. Exige un árbol de trabajo limpio ANTES de empezar.
#    Así el paso 6 (reset) nunca puede descartar trabajo sin commitear.
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "ERROR: hay cambios sin commitear. Haz commit de tu trabajo antes de publicar:"
  echo "       git add -A && git commit -m \"...\""
  exit 1
fi

# 0.5 Gates de calidad: no se publica una versión que no pase tipos y lint.
echo "▶ Validando tipos y CSS…"
npm run typecheck
npm run lint:css

# 1. Sube la versión en package.json (sin crear tag automático)
npm version "$BUMP" --no-git-tag-version
VERSION="$(npm pkg get version | tr -d '"')"
TAG="v$VERSION"

# 1.5 Mueve el encabezado [Unreleased] del CHANGELOG a la versión nueva y
#     refresca los enlaces de comparación al pie, para que el CHANGELOG nunca
#     quede desincronizado de los tags (Keep a Changelog). Idempotente: si no
#     hay sección [Unreleased], no hace nada.
if grep -q '^## \[Unreleased\]' CHANGELOG.md; then
  # El tag de la versión anterior. NO se usa `git describe --tags`: el paso 4
  # crea el tag sobre el commit `build:` y el paso 5 hace `git reset HEAD~1`,
  # así que TODO tag queda un commit por DELANTE de `main`. `git describe` solo
  # ve tags alcanzables *desde* HEAD, de modo que aquí devolvía vacío siempre y
  # este bloque no llegaba a ejecutarse nunca — en silencio, porque el `|| echo
  # ''` se comía el error. Ocho releases con el enlace `[Unreleased]` clavado en
  # `v0.27.0` mientras la versión iba por 0.34.1.
  #
  # En este punto el tag nuevo todavía no existe (se crea en el paso 4), así que
  # el más alto por versión ES el anterior.
  PREV_TAG="$(git tag --list 'v*' --sort=-v:refname | head -1)"
  if [ -z "$PREV_TAG" ]; then
    echo "  ⚠ Sin tags previos: no se actualizan los enlaces de comparación del"
    echo "    CHANGELOG. Normal solo en la PRIMERA publicación del paquete."
  fi
  perl -0pi -e "s/^## \[Unreleased\]\n/## [Unreleased]\n\n## [$VERSION]\n/m" CHANGELOG.md
  if [ -n "$PREV_TAG" ]; then
    perl -pi -e "s#^\[Unreleased\]:.*#[Unreleased]: https://github.com/ceicol/theme-ceicol/compare/$TAG...HEAD\n[$VERSION]: https://github.com/ceicol/theme-ceicol/compare/$PREV_TAG...$TAG#" CHANGELOG.md
  fi
  echo "✓ CHANGELOG: [Unreleased] → [$VERSION]"
fi

# 2. Deja el comando de instalación del README apuntando a la versión nueva
sed -i.bak -E "s|(theme-ceicol\.git#)v[0-9]+\.[0-9]+\.[0-9]+|\1$TAG|g" README.md
rm -f README.md.bak

# 3. Commit del bump + README en main.
#    Incluye package-lock.json: `npm version` (paso 1) también sube la versión ahí,
#    y si no se commitea queda un desync package.json ↔ lock en main.
git add package.json package-lock.json README.md CHANGELOG.md
git commit -m "chore: release $TAG"
git push origin main

# 4. Compila y publica el tag con el dist incluido
npm run build
# 4.1 Gates sobre el dist recién compilado (aborta si se rompió algo).
npm run check:tokens
npm run check:mui-parity
npm run check:theme
git add -f dist
git commit -m "build: $TAG"
git tag "$TAG"
git push origin "$TAG"

# 5. Quita SOLO el commit de dist de main, conservando el árbol de trabajo.
#    --mixed (no --hard) NO borra archivos: deshace el commit y desindexa,
#    dejando main == "chore: release" (ya empujado) y sin dist rastreado.
git reset --mixed HEAD~1

# 6. VERIFICA que el tag realmente llegó a GitHub (el push por SSH puede
#    fallar en silencio). Si no está, aborta con instrucción clara.
if git ls-remote --tags origin "refs/tags/$TAG" | grep -q "$TAG"; then
  echo "✓ Publicado $TAG y confirmado en GitHub — instalar con #$TAG"
else
  echo "✗ ERROR: $TAG se creó localmente pero NO está en GitHub."
  echo "  Empújalo a mano (con la llave SSH cargada):"
  echo "      ssh-add ~/.ssh/id_ed25519"
  echo "      git push origin main && git push origin $TAG"
  exit 1
fi
