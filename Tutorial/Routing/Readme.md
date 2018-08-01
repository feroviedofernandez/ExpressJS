# Routing

Los frameworks web proporcionan recursos como páginas HTML, scripts, imágenes, etc. Todo ello en diferentes rutas.

La siguiente función se usa para definir rutas en una aplicación de Express:

### app.method(path, handler)
Esta función puede usarse para cualquiera de los verbos HTTP (get, set, put, delete). Existe un método alternativo que se ejecuta independientemente del tipo de solicitud.

#### path
Es la ruta en la que se escuchará la solicitud.

#### handler
Es una función de callback que se ejecuta cuando hay un tipo de solicitud coincidente en la ruta que estamos escuchando.

Por ejemplo:

![Index routing](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/index_routing.PNG)

Si ejecutamos la aplicación e introducimos **localhost:3000/Hello**, el servidor recibe una solicitud de tipo get en la ruta "/Hello" por lo que nuestra aplicación de Express, ejecutará la función callback asociada a esta ruta y enviará "Hello World!" como respuesta:

![Resultado index routing](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/resultado_index_routing.PNG)

También podemos tener diferentes métodos para la misma ruta:

![Diferentes métodos en la misma ruta](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/index_diferentes_metodos_ruta.PNG)

Para testear esta solicitud, abre tu terminal y y usa cURL para ejecutar una solicitud de tipo POST:

                                    curl -X POST "http://localhost:3000/Hello"
                                    
*cURL es un proyecto de software consistente en una biblioteca (libcurl) y un intérprete de comandos orientado a la transferencia de datos usando varios protocolos*

Tras ejecutar el comando de cURL:

![Ejecución solicitud post mediante cURL](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/ejecucion_post_curl.PNG)

Veremos que la función callback que se ha ejecutado ha sido la que estaba esperando una solicitud de tipo POST y no GET u otro tipo.

Express proporciona un método especial, **all**, que se encarga de todos los tipos de métodos HTTP sobre una ruta dada usando la misma función que conocemos. Para usar este método, prueba lo siguiente:

![Método all](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/metodo_all.PNG)

Prueba diferentes tipos de solicitudes sobre esta ruta y observa los resultados para ver como funciona este método especial.<br />
Este método es usado generalmente para definir el middleware, que explicaré en su sección.

### Routers
Definir rutas de la forma que hemos comentado arriba es tedioso y complicado de mantener. Para separar las rutas de nuestro archivo **index.js** usaremos **Express.Router**.<br />
Crearemos un archivo llamado **things.js** y escribiremos lo siguiente en él:

![Archivo things.js](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/things.PNG)

Ahora, para usar este router en nuestro **index.js**, escribiremos lo siguiente antes de la llamada a la función **app.listen()**:

![Archivo things.js](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/index_router.PNG)

La llamada de la función **app.use()** a "/things", adjunta el router que hemos creado en el archivo **things.js** a esta ruta. Ahora cualquier solicitud que reciba nuestra aplicación en /things" será manejada por nuestro router.<br />
La ruta "/" de things.js es realmente una subruta de "/things". Visitemos **localhost:3000/things/** para ver que pasa:

![Archivo things.js](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/index_router_testeo.PNG)

Los enrutadores son muy útiles para evitar preocupaciones y mantener juntas las partes relevantes de nuestro código. También nos ayudan a desarrollar un código mantenible.<br />
Deberás definir tus rutas relativas a una entidad en un solo archivo e incluirlo donde necesites de la forma que hemos aprendido.

