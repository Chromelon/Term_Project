<form id="complete" action="index.php" method="post">
<?php
  @ $db = new mysqli('localhost', 'root', 'MhHcU^5Tmkf4gIFPif', 'shiduly');
  if ($db->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } 
  $sql = "UPDATE allTasks SET `assignedMember` = " . $_POST['assignedMember'] . "  WHERE `jobid` = " . $_POST['jobid'];

  if($db->query($sql) === TRUE){
    echo '<input type="hidden"  name="curr_user" value="' . $_POST['curr_user'] . '">';
  }
  else{
    echo $db->error;
  }
  $db->close();
?>
</form>
<script type="text/javascript">
    document.getElementById('complete').submit();
</script>