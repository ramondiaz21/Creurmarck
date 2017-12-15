<?php
  
  $destination= "ventas@creurmack.mx";
  $nombre= $_POST["nombre"];
  $mail= $_POST["mail"];
  $phone= $_POST["phone"];
  $contenido= "Nombre: " . $nombre . "\nCorreo " . $mail . "\nTeléfono " . $phone;

  mail($destination,"Contacto",$contenido);
  header("Location:thanks.html");

?>