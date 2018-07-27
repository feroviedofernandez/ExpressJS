# Tutoriales de los módulos que provee ExpressJS

Necesitaremos tener instalado NodeJS - https://nodejs.org/es/download/

Para crear un proyecto lo haremos mediante npm:

  Siempre que creemos un proyecto usando npm, tendremos que proporcionar un archivo **package.json**, que tendrá todos los detalles de nuestro proyecto. npm facilita la creación de este fichero:


###D:\Proyectos\ExpressJS\Tutorial\HelloWorld>npm init
###This utility will walk you through creating a package.json file.
###It only covers the most common items, and tries to guess sensible defaults.

###See `npm help json` for definitive documentation on these fields
###and exactly what they do.

###Use `npm install <pkg>` afterwards to install a package and
###save it as a dependency in the package.json file.

###Press ^C at any time to quit.
###package name: (helloworld)
###version: (1.0.0)
###description:
###entry point: (index.js)
###test command:
###git repository:
###keywords:
###author: feroviedofernandez
###license: (ISC)
###About to write to D:\Proyectos\ExpressJS\Tutorial\HelloWorld\package.json:

###{
###  "name": "helloworld",
###  "version": "1.0.0",
###  "description": "",
###  "main": "index.js",
###  "scripts": {
###    "test": "echo \"Error: no test specified\" && exit 1"
###  },
###  "author": "feroviedofernandez",
###  "license": "ISC"
###}


###Is this ok? (yes) yes

###D:\Proyectos\ExpressJS\Tutorial\HelloWorld>

  Sobre la carpeta que albergará el proyecto (asegurate de que su nombre no contiene espacios en blanco), ejecutamos en el terminal "npm init". Esto creará el package.json tras preguntarnos por alguna información como el nombre del proyecto o el autor. Puedes rellenar el autor y dejar por defecto el resto de campos.
  
  Una vez tenemos establecido nuestro package.json, instalaremos Express
