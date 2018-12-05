<?php
  @ $db = new mysqli('localhost', 'root', 'MhHcU^5Tmkf4gIFPif', 'shiduly');
  if ($db->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } 
  $sql = "UPDATE allTasks SET `assignedMember` = " . $_POST['assignedMember'] . "WHERE `jobid` = " . $_POST['jobid'];
  if($db->query($sql) === TRUE){
    header('Location: index.php');
  }
  else{
    echo $db->error;
  }
  $db->close();
?>