<?php
  @ $db = new mysqli('localhost', 'root', 'MhHcU^5Tmkf4gIFPif', 'shiduly');
  if ($db->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } 
  $sql = "INSERT INTO allTasks (`jobdesc`, `priority`, `time`) VALUES ('" . $_POST['jobdesc'] . "', '" . $_POST['priority'] . "', '" . $_POST['time'] . "')";
  if($db->query($sql) === TRUE){
    header('Location: index.php');
  }
  else{
    echo $db->error;
  }
  $db->close();
?>