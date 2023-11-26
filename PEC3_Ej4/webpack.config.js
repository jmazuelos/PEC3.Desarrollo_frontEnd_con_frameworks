const path = require('path'); //importa el módulo 'path' de Node.js necesario para configurar el directorio de salida de la compilación y el directorio de salida del servidor de desarrollo

module.exports = {
  mode: 'development',  //Establece el modo de construcción de Webpack a "development". Era necesario porque lanzaba error al ejecutar 'npm run serve'
  entry: './src/app.ts',  //Especifica el punto de entrada de la aplicación
  devtool: 'inline-source-map',  //Configura la generación de source maps para facilitar la depuración en el navegador. En este caso, se ha establecido "inlineSourceMap" a true en tsconfig.json
  watch: true,  //Webpack seguirá observando cambios en los archivos y reconstruirá automáticamente la aplicación cuando haya cambios.
  devServer: {  //Configura el servidor de desarrollo de Webpack. En este caso, el directorio de salida del servidor de desarrollo es 'public' con el host 'localhost' y el puerto 8080. Realmente no es necesario, pero da más capacidad de configuración
    static: {
      directory: path.resolve(__dirname, 'public'), 
    },  
    host: "localhost",
    port: 8080,
  },
  module: {  //Configura las reglas para procesar los archivos fuente. En este caso, utiliza ts-loader para compilar archivos TypeScript (.ts y .tsx) y excluye la carpeta 'node_modules'.
    rules: [
      {
        test: /\.tsx?$/,  //Verifica que los archivos a compilar terminen en .ts o .tsx
        use: 'ts-loader',  //Configura la herramienta que compilará los archivos
        exclude: /node_modules/  //Excluye la carpeta a la hora de compilar
      }
    ]
  },
  resolve: { //Configura las extensiones de archivo que Webpack debe considerar al resolver módulos. En este caso, TypeScript y JavaScript. Importantísimo para que los modulos funcionen
    extensions: ['.tsx', '.ts', '.js']  
  },
  output: {  //Configura la salida de Webpack. Especifica la carpeta de salida (public), el nombre del archivo de salida después de la compilación (bundle.js) y la ruta completa utilizando path.resolve.
    publicPath: 'public',  //Recompilará y entregará el archivo específico (public) al guardar cambios en los archivos sin necesidad de ejecutar 'npm run build' y/o 'npm run serve' 
    filename: 'bundle.js',  //Configura el nombre del archivo de salida tras la compilación
    path: path.resolve(__dirname, 'public') //Establece el directorio de salida de la compilación
  }
};
