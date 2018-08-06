# Middleware

Las funciones de middleware son funciones que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente 
función de middleware en el ciclo de solicitud/respuestas de la aplicación.<br />
La siguiente función de middleware se denota normalmente con una variable denominada next.

Las funciones de middleware pueden realizar las siguientes tareas:

- Ejecutar cualquier código.
- Realizar cambios en la solicitud y los objetos de respuesta.
- Finalizar el ciclo de solicitud/respuestas.
- Invocar el siguiente middleware en la pila.

Si la función de middleware actual no finaliza el ciclo de solicitud/respuestas, debe invocar next() para pasar el control a la siguiente 
función de middleware. De lo contrario, la solicitud quedará colgada.

El siguiente ejemplo muestra los elementos de una llamada a función de middleware:

![Ejemplo middleware](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/ejemplo_middleware.PNG)

A continuación, tenemos un ejemplo de una aplicación Express simple, “Hello World”, para la que definirá dos funciones de middleware:

![Hello world middleware](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/helloworld_middleware.PNG)

### Desarrollo
Este es un ejemplo simple de una función de middleware denominada “myLogger”. Esta función simplemente imprime “LOGGED” cuando una solicitud de la aplicación pasa por ella. La función de middleware se asigna a una variable denominada myLogger.

![myLogger middleware](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/mylogger_middleware.PNG)

*Observa la llamada anterior a next(). La llamada a esta función invoca la siguiente función de middleware en la aplicación. La función next() no forma parte de la API de Express o Node.js, pero es el tercer argumento que se pasa a la función de middleware. La función next() puede tener cualquier nombre, pero por convención siempre se denomina “next”. Para evitar confusiones, utiliza siempre esta convención.*

Para cargar la función de middleware, llama a app.use(), especificando la función de middleware. Por ejemplo, el siguiente código carga la función de middleware myLogger antes de la ruta a la vía de acceso raíz (/).

![myLogger middleware 2](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/mylogger_middleware_2.PNG)

Cada vez que la aplicación recibe una solicitud, imprime el mensaje “LOGGED” en el terminal.

El orden de carga del middleware es importante: las funciones de middleware que se cargan primero también se ejecutan primero.

Si myLogger se carga después de la ruta a la vía de acceso raíz, la solicitud nunca la alcanza y la aplicación no imprime “LOGGED”, ya que el manejador de rutas de la vía de acceso raíz determina el ciclo de solicitud/respuestas.

La función de middleware myLogger simplemente imprime un mensaje y, a continuación, pasa la solicitud a la siguiente función de middleware de la pila llamando a la función next().

El siguiente ejemplo añade una propiedad denominada requestTime al objeto de solicitud. Llamaremos a esta función de middleware “requestTime”.

![requestTime middleware](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/requestTime_middleware.PNG)

La aplicación ahora utiliza la función de middleware requestTime. Asimismo, la función de devolución de llamada de la ruta de vía de acceso raíz utiliza la propiedad que la función de middleware añade a req (el objeto de solicitud).

![requestTime middleware](https://github.com/feroviedofernandez/ExpressJS/blob/develop/Tutorial/Resources/Images/requestTime_middleware_2.PNG)

Cuando realiza una solicitud a la raíz de la aplicación, la aplicación ahora muestra la indicación de fecha y hora de la solicitud en el navegador.

Como tiene acceso al objeto de solicitud, el objeto de respuesta, la siguiente función de middleware de la pila y toda la API de Node.js, las posibilidades con las funciones de middleware son ilimitadas.
