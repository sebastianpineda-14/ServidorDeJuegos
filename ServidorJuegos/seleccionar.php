<?php
    include("conexion.php");
    $con = mysqli_connect($host, $user, $pw, $db);
    echo "Conexion exitosa a la base de datos";

    $result = mysqli_query($con, "SELECT * FROM carros ORDEY BY Puntaje DESC;");
    $resultados = mysql_fetch_row (resource $result) : array
    while(mysql_fetch_row ($result)){
      echo $result;
    }
    mysqli_close($con);
?>