# Tutoriales de los módulos que provee ExpressJS

Necesitaremos tener instalado NodeJS y npm - https://nodejs.org/es/download/

Puedes comprobar que ha sido instalado correctamente ejecutando los comandos *node --version* y *npm --version*

![node npm version](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/node_npm_version.PNG)

### Creación de un proyecto
Para crear un proyecto lo haremos mediante npm (usaré como ejemplo la creación del proyecto "HelloWorld"):

  Siempre que creemos un proyecto usando npm, tendremos que proporcionar un archivo **package.json**, que tendrá todos los detalles de nuestro proyecto. npm facilita la creación de este fichero:

  Sobre la carpeta que albergará el proyecto (asegurate de que su nombre no contiene espacios en blanco), ejecutamos en el terminal *npm init*. Esto creará el package.json tras preguntarnos por alguna información que se verá a continuación:
  
  ![npm init](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/npm-init.PNG)
  
  Una vez tenemos establecido nuestro package.json, instalaremos Express. Para instalarlo y añadirlo a nuestro package.json usaremos el siguiente comando: 
  
                                              npm install --save express
  
  Podemos sustituir **--save** por **-S**, realizan la misma función: Asegurar que Express es añadido como una dependencia en nuestro package.json. Esto supone una ventaja ya que la próxima vez que nencesitemos instalar todas las dependencias de nuestro proyecto, bastará con ejecutar el comando *npm install*. Encontrará las dependencias en este archivo y las instalará.
  
  ![Install Express](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/npm-install-save-express.PNG)
  
  Veremos que en nuestro caso aparecen dos WARN. No te preocupes por esto, no ocasionará ningún problema ya que son campos meramente informativos.
  
  Podemos evitar estos WARN de dos formas:
  
  - Rellenando estos campos.
  
    El campo "description" dependerá de cada uno de nosotros.
      
    El campo "git repository" se rellenará con el link a tu repositorio.
        
  - Añadiendo a nuestro package.json la siguiente key: **"private": true**
  
    Esto hará que el npm deje de imprimir warnings respecto a problemas del package.json.
  
  Retomando el hilo de lo que nos ocupa, ya tenemos Express instalado. Podemos confirmar que tenemos todos los módulos instalados acudiendo, dentro de nuestro proyecto, a la carpeta "node_modules".
  
  Esto es todo lo que necesitamos para empezar a desarollar usando el framework de Express. 
  
  Para hacer el desarrollo bastante más rápido, instalaremos desde el npm una herramienta llamada "nodemon".
  
                                              npm install -g nodemon
  
  Esta herramienta actualiza nuestro servidor cada vez que hacemos un cambio en nuestros archivos. De esta forma, nos evitaremos hacer esto manualmente cada vez que hagamos un cambio.
  
  ### Instalación de paquetes usando npm
  
  Hay dos maneras de instalar un paquete usando npm:
  
  - **Globalmente**. Este método se usa generalmente para instalar herramientas de desarrollo (cómo nodemon) o paquetes basados en la CLI.
  
                                            npm install -g package-name
  
  - **Localmente**. Este método se usa para instalar frameworks y librerías. Un paquete instalado localmente solo podrá ser usado dentro del directorio en el que ha sido instalado.
  
                                            npm install package-name
