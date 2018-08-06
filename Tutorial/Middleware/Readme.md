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

![Ejemplo middleware](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/ejemplo_middleware.PNG)

A continuación, tenemos un ejemplo de una aplicación Express simple, “Hello World”, para la que definirá dos funciones de middleware:

