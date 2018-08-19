Hasta ahora sabemos cómo definir rutas pero esas rutas son estáticas o fijas.

Para usar rutas dinámicas deberemos proporcionar diferentes tipos de rutas. El uso de rutas dinámicas nos permite pasar parámetros y 
procesos basados en ellos.

Este es un ejemplo de ruta dinámica:

![Index ruta dinámica](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/index_rutaDinamica.PNG)

Al testearlo obtendremos la siguiente respuesta:

![Testeo ruta dinámica](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/index_rutaDinamicaTesteo.PNG)

Puedes cambiar "76" en la URL por cualquier otra cosa y el cambio se verá reflejado en la respuesta. Aquí tenemos un ejemplo más complejo:

![index ruta dinámica 2](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/index_rutaDinamica2.PNG)

Al testearlo obtendremos la siguiente respuesta:

![Testeo ruta dinámica 2](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/index_rutaDinamica2Testeo.PNG)

Puedes usar el objeto *req.params* para acceder a todos los parámetros que se pasan por la URL

También puedes usar las **regex** para restringir las coincidencias de parámetros en la URL. Asumamos por ejemplo que necesitamos que el **id** sea un dígito de longitud igual a 5. Podemos usar la siguiente definición de ruta:

![index ruta dinámica regex](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/index_rutaDinamicaRegex.PNG)

Comprueba que este código solo acepta las solicitudes que tengan un id de 5 digitos de longitud. Puedes usar expresiones regulares más complejas para coincidir o validar URLs.<br />
Si ninguna de tus rutas coinciden con la solicitud, obtendrás el mensaje **"Cannot GET <your-request-route>"** como respuesta.

Este mensaje puede ser reemplazado por una página de error 404 usando esta simple ruta:

![index ruta dinámica 404](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/index_rutaDinamica404.PNG)

**IMPORTANTE**: La ruta que soporta las URLs inválidas debe ir al final de todas las rutas definidas ya que Express comprueba las rutas de principio a fin.

Vamos a comprobar estos últimos cambios:

Para una URL correcta:

![Testeo ruta dinámica 404](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/index_rutaDinamica404Testeo.PNG)

Para una URL incorrecta:

![Testeo ruta dinámica 404](https://github.com/feroviedofernandez/ExpressJS/tree/develop/Tutorial/Resources/Images/index_rutaDinamica404Testeo.PNG)

