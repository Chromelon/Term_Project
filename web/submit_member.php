<?php
  @ $db = new mysqli('localhost', 'root', 'MhHcU^5Tmkf4gIFPif', 'shiduly');
  if ($db->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } 
  $sql = "INSERT INTO teamMembers (`firstName`, `lastName`) VALUES ('" . $_POST['firstName'] . "', '" . $_POST['lastName'] . "')";
?>
<form id="complete" action="index.php" method="post">
<?php 
  if($db->query($sql) === TRUE){
    echo '<input type="hidden"  name="curr_user" value="0">';
  }
  else{
    echo $db->error;
  }
  $db->close();
?>
</form>
<script type = "text/javascript">
  document.getElementById('complete').submit(); 
</script>