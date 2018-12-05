<?php
  @ $db = new mysqli('localhost', 'root', 'MhHcU^5Tmkf4gIFPif', 'shiduly');
  if ($db->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } 
  $sql = "INSERT INTO teamMembers (`firstName`, `lastName`) VALUES ('" . $_POST['firstName'] . "', '" . $_POST['lastName'] . "')";
  if($db->query($sql) === TRUE){
    header('Location: index.php');
  }
  else{
    echo $db->error;
  }
  $db->close();
?>