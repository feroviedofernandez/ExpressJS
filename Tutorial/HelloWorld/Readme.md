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

Función asíncrona a la que se llama cuándo el servidor empieza a escuchar solicitudes.<br />
Se llama tras la inicialización de la aplicación. Podría decirse que se añade como un listener del evento listen.<br />

La mejor forma de ver cual es el funcionamiento de esta función es "viéndolo en acción". Y lo haremos con el siguiente ejemplo:

![Callback app.listen](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/callback_appListen.PNG)

Hemos modificado la sección del *app.listener()* para asignarla a la variable "server", a la vez que hacemos la llamada a la función callback en la que podemos ver que hacemos uso de "server" en las mismas líneas de su asignación. ¿Funcionará? ¿Tendremos acceso a "server" o recibiremos un error por tratar de acceder a propiedades de un objeto nulo?

También se nos plantea otra duda, vamos a mostrar texto por consola en función de la ejecución del código. ¿En qué orden aparecerán estos textos?

Veremos que estas dos cuestiones están relacionadas asi que salgamos de dudas. Vamos a ejecutar la aplicación y veremos qué es lo que obtenemos:

![Ejecución callback app.listen](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/ejecucion_callback_appListen.PNG)

Y ahora respondamos a las dos dudas planteadas:<br />
1. Sí, funciona. El método *app.listen()* devuelve un objeto a la variable "server" pero todavía no se ha llamado a la función callback ya que como hemos comentado, se llama tras la inicialización de la aplicación. Es por ello que la variable "server" se encuentra accesible dentro de "callback", es creada antes de que la función sea llamada.

2. Sabiendo el punto anterior, entendemos por qué los logs se han presentado de esa manera y con ellos, confirmamos que la función "callback" de *app.listen()*, es llamada tras la inicialización de la aplicación.
