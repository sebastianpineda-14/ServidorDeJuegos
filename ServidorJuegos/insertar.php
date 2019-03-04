<?php
    include("conexion.php");
    $con = mysqli_connect($host, $user, $pw, $db);
    echo "Conexion exitosa a la base de datos";
    if($_POST['JUEGO'] == "CARROS"){
        mysqli_query($con, "INSERT INTO carros(Jugador, Puntaje) VALUES ('".$_POST['NOMBRE']."', '".$_POST['PUNTAJE']."')");
    }
    if($_POST['JUEGO'] == "PACMAN"){
        mysqli_query($con, "INSERT INTO pacman(Jugador, Puntaje) VALUES ('".$_POST['NOMBRE']."', '".$_POST['PUNTAJE']."')");
    }
    if($_POST['JUEGO'] == "BUSCAMINAS"){
        mysqli_query($con, "INSERT INTO buscaminas(Jugador, Puntaje) VALUES ('".$_POST['NOMBRE']."', '".$_POST['PUNTAJE']."')");
    }
    if($_POST['JUEGO'] == "SNAKE"){
        mysqli_query($con, "INSERT INTO culebrita(Jugador, Puntaje) VALUES ('".$_POST['NOMBRE']."', '".$_POST['PUNTAJE']."')");
    }
    echo "Datos insertados exitosamente";
    mysqli_close($con);
    echo "<script languaje='javascript' type='text/javascript'>window.close();</script>";
?>