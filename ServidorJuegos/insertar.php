<?php
    include("conexion.php");
    $con = mysqli_connect($host, $user, $pw, $db);
    echo "Conexion exitosa a la base de datos";
    mysqli_query($con, "INSERT INTO buscaminas(Jugador, Puntaje) VALUES (htmlspecialchars($_POST['nombre']), 300)");
    echo "Datos insertados exitosamente";
    mysqli_close($con);
?>