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

# 2. Deja el comando de instalación del README apuntando a la versión nueva
sed -i.bak -E "s|(theme-ceicol\.git#)v[0-9]+\.[0-9]+\.[0-9]+|\1$TAG|g" README.md
rm -f README.md.bak

# 3. Commit del bump + README en main
git add package.json README.md
git commit -m "chore: release $TAG"
git push origin main

# 4. Compila y publica el tag con el dist incluido
npm run build
# 4.1 Contrato de tokens sobre el dist recién compilado (aborta si se rompió algo).
npm run check:tokens
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
