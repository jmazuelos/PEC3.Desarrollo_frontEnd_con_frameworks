Login UOC: jmazuelos
Nombre y apellidos: José Mazuelos Arregui
Descripción: 
  - Repositorio: https://github.com/jmazuelos/PEC3.Desarrollo_frontEnd_con_frameworks.git
  
  1. Se ejecuta el comando 'tsc --init', agregando el archivo tsconfig.json en el proyecto para configurar cómo se compila el código TypeScript. 
  2. Se ejecuta el comando 'npm init', agregando el archivo package.json para configurar el proyecto y sus dependencias (o herramientas). 
  3. Se ejecuta el comando 'npm install webpack webpack-cli ts-loader typescript webpack-dev-server -D'.
    - webpack: herramienta principal para empaquetar y transpilar archivos (JavaScript, TypeScript, CSS...).
    - webpack-cli: herramienta que permite ejecutar comandos webpack dede la línea de comandos.
    - ts-loader: herramienta que permite a webpack transpilar código de TypeScript a JavaScript
    - typescript: instala typescript localmente en el proyecto para que webpack funcione correctamente.
    - webpack-dev-server: 
    - Comando '-D': guarda todas las dependencias o herramientas en 'devDependencies' (dependencias de desarrollo). 

  4. Se crea el archivo webpack.config.js dentro del proyecto para configurar cómo webpack debe transpilar y empaquetar los archivos.
  5. Configuramos el script 'build' con valor 'webpack' en package.json para que cuando se ejecuta el comando 'npm run build', se ejecute el archivo configurado en webpack.config.js. También configuramos el script 'serve' con valor 'webpack-dev-server' para ejecutar el proyecto en un servidor de desarrollo local.
