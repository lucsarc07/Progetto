<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <?php
    // Recupera i dati dal form
    $name = $_GET['name'];
    $email = $_GET['email'];
    $message = $_GET['message'];
    
    // Mostra il saluto
    echo "<h1>Buongiorno $nome $emai $message</h1>";
    ?>
    
    <p><a href="index.html">Torna al form</a></p>
</body>
</html>