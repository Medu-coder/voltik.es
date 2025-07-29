#!/bin/bash
# deploy.sh: Compila el proyecto y despliega la carpeta dist en la rama gh-pages

set -e  # hace que el script se detenga si ocurre algún error

# 1. Instalar dependencias y generar la build
npm install
npm run build  # incluye el paso postbuild que copia index.html a 404.html

# 2. Cambiar/crear la rama gh-pages
git checkout -B gh-pages

# 3. Eliminar todos los archivos excepto .git, CNAME y dist
find . -maxdepth 1 -not -name 'dist' -not -name 'CNAME' -not -name '.git' -not -name '.' -print0 | xargs -0 rm -rf

# 4. Copiar el contenido de dist a la raíz y eliminar dist
cp -R dist/* .
rm -rf dist

# 5. Commit y push forzado a gh-pages
git add .
git commit -m "Deploy nueva versión estática"
git push --force origin gh-pages

# 6. Volver a la rama main
git checkout main

echo "Despliegue completado. Revisa tu página en unos minutos."