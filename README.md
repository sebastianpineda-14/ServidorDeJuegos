# ServidorDeJuegos
Servidor de juegos en ambiente web, usando una conexion en mySQL con PHP
Creado por Sebastian Pineda y Diego Puin, Universidad Distrital. 

Para poder trabajar con nuestro proyecto tendra que descargar XAMMP que es una herramienta para manejar un servidor en mySQL y funciona con PHP, al descargar XAMMP este automaticamente descarga MySQL y phpMyAdmin que es donde se puede visualizar la base de datos, esto lo entendera facilmente en el siguiente tutorial https://www.youtube.com/watch?v=hlzaA_GSA8U.
Cuando descargue XAMMP se va a crear una carpeta en el disco C, ahi va a haber una carpeta llamada htdocs, en esta carpeta debe ir guardado el repositorio o sino no va a funcionar el servidor
Luego tendra que crear una base de datos llamada plataformajuegos, con las tablas: buscaminas, pacman, culebrita y carros, cada una de estas tablas va a tener las columnas: indice-> PK, auto incrementable, Jugador (varchar) y puntaje (integer)

-------------------------------------------------------------------------------------------------------------------------------------------
El repositorio contiene la carpeja Juegos, el index.html dos archivos PHP que es donde se ejecuta la conexion al Servidor
Basicamente lo que vamos a hacer es que en nuestro index.html va a ingresar a cada uno de los juegos, despues de finalizado el juego vamos a tomar la variable puntaje, y la vamos a enviar por medio de un POST a el archivo PHP para que esta la suba a la Base de Datos. 
