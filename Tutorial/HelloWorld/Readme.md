# Hello world

Ahora que ya tenemos el entorno preparado, vamos a desarrollar nuestra primera aplicación usando Express.

Crearemos sobre la raiz, un archivo "index.js". En el que introduciremos el siguiente código, que nos permitirá observar como funciona Express.

![Primer index con express](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/primer_index_express.PNG)

Guardamos los cambios y ejecutamos:

                                                  nodemon index.js
                                                    
Esto iniciará el servidor.

Para testear esta aplicación, abriremos en navegador y accederemos a localhost por el puerto en el que estamos escuchando. En este caso, localhost:3000.

![Hello World test](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/helloworld_test.PNG)

Esto nos da también la oportunidad de observar como funciona nodemon. Tras ver que nuestro primer "Hola Mundo" funciona, sin parar la ejecución de nodemon, prueba a hacer un cambio en el texto que mostramos y tras guardar los cambios, observa la consola.

Podrás ver que nodemon se encarga de comprobar si hemos hecho cambios y, de ser así, reiniciar el servidor para que podamos observar nuestros cambios con tan solo refrescar la página. Refréscala y observa tus cambios.

## Vamos a explicar el archivo index.js

La primera línea importa Express en nuestro archivo. Tenemos acceso a ellos mediante la variable en la que asignamos la importación. Usaremos esta variable para crear una aplicación y asginarla a la variable "app".

### app.get(route, callback)

Esta función establece qué hacer cuándo hay una llamada de tipo get a la ruta dada.

La función callback tiene 2 parámetros: request (req) y response (res).<br />
El objeto request representa la solicitud HTTP.<br />
El objeto response representa la respuesta HTTP que la aplicación de Express envía cuando recibe una HTTP request.

### res.send()

Esta función toma un objeto como entrada y lo envía al cliente solicitante. Es este caso estamos enviando el string "Hello World!"

### app.listen(port, [host], [backlog], [callback])

Esta función enlaza y escucha (binds and listens) en busca de una conexión en el host y puerto especificado.<br />
El puerto es el único parámetro obligatorio.

#### port

El número de puerto en el que el servidor aceptará las solicitudes (requests).

#### host

Nombre del dominio. Deberemos establecerle valor cuando subamos la aplicación a entornos de pre-producción y producción.

#### backlog

El número máximo de conexiones pendientes en cola. El valor por defecto es 511.

#### callback

Función asíncrona a la que se llama cuándo el servidor empieza a escuchar solicitudes.
