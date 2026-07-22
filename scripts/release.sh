#!/usr/bin/env bash
set -euo pipefail

# Publica una versión nueva de theme-ceicol.
# Uso:  npm run release            (patch por defecto)
#       npm run release -- minor
#       npm run release -- major

BUMP="${1:-patch}"

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

# 4. Compila y publica el tag con el dist incluido, dejando main limpio
npm run build
git add -f dist
git commit -m "build: $TAG"
git tag "$TAG"
git push origin "$TAG"
git reset --hard HEAD~1

echo "Publicado $TAG — instalar con #$TAG"
