<!DOCTYPE html>
<html lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/shiduly.css">
    <link rel="icon" type="image/png" href="img/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Mukta+Mahee|Poiret+One" rel="stylesheet">
    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script type='text/javascript' src='js/shiduly.js'></script> 
    <title>Shiduly</title>
  </head>

  <?php
    //determines if the db was opened successfully
    $dbOk = false;

    @ $db= new mysqli('localhost', 'root', 'MhHcU^5Tmkf4gIFPif', 'shiduly');

    if ($db->connect_error) {
      echo '<div class="messages">Could not connect to the database. Error: ';
      echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
    } else {
      $dbOk = true; 
    }
    if(isset($_POST['curr_user'])){
      $curr_user = $_POST['curr_user'];
    }
    else{
      $curr_user = 0;
    }
  ?>  

  <body>
    <div id="topbar"> 
      <img id="topbarimg" src="img/ShidulyLogo.png"/> 
      <h1 id="title">hiduly</h1>
      <div id="settingsMenu"> 
        <button onclick="settingsDropdown()" id="settingsButton">&#9881;</button>
        <div id="settingsDropdown" class="settingsContent">
          <?php
            if($dbOk) {
              $query = 'select * from teamMembers order by memberid';
              $result = $db->query($query);
              $numRecords = $result->num_rows;
              for ($i=0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo '<a id="select-member-';
                echo htmlspecialchars($record['memberid']);
                echo '" class="user_selector" onclick="changeUser(';
                echo htmlspecialchars($record['memberid']);
                echo ')">';
                echo htmlspecialchars($record['firstName']) . " " . htmlspecialchars($record['lastName']);
                echo '</a>';
              }
              $result->free();
            }
          ?>
        </div>
      </div> 
    </div>

    <div id="columns">
      
        <div class="bar" id="allChores">
          <h1 class="barhead" id="allChores"><img class="hicon" id="achoresimg" src="img/achores.svg"/> All Chores</h1>
          <?php
            if ($dbOk) {
              $query = 'select * from allTasks order by jobid';
              $result = $db->query($query);
              $numRecords = $result->num_rows;
              echo '<ul id="allChoresList">';
              for ($i=0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo '<li><button id="job-';
                echo htmlspecialchars($record['jobid']);
                echo '" class="barbutton">';
                echo htmlspecialchars($record['jobdesc']);
                echo ', Priority: ';
                echo htmlspecialchars($record['priority']);
                $minutes = $record['time'];
                $hours = 0;
                if($minutes > 60){
                  $minutes -= 60;
                  $hours += 1;
                }
                $minutes_string = sprintf("%02d", $minutes);
                $hours_string = sprintf("%02d", $hours);
                echo ', Time: ' . $hours_string . ':' . $minutes_string;
                echo '</button></li>';
              }
              echo '<li><button id="add-task" class="barbutton" onclick="addTask()">+ Add more chores</button></li>';
              echo '</ul>';
              $result->free();
            }
          ?>
        </div>
        <div class="bar" id="myUpcomingChores">
          <h1 class="barhead" id="upcomingChores"><img class="hicon" id="mchoresimg" src="img/mchores.svg"/> My Upcoming Chores</h1>
          <?php
            if ($dbOk) {
              $query = 'select * from allTasks order by assignedMember, jobid';
              $result = $db->query($query);
              $numRecords = $result->num_rows;
              $oldmember = 0;
              echo '<ul id="myChoresList">';
              for ($i=0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                if($curr_user == $record['assignedMember']){
                  echo '<li><button id="myjob-';
                  echo htmlspecialchars($record['jobid']);
                  echo '" class="barbutton">';
                  echo htmlspecialchars($record['jobdesc']);
                  echo ', Priority: ';
                  echo htmlspecialchars($record['priority']);
                  $minutes = $record['time'];
                  $hours = 0;
                  if($minutes > 60){
                    $minutes -= 60;
                    $hours += 1;
                  }
                  $minutes_string = sprintf("%02d", $minutes);
                  $hours_string = sprintf("%02d", $hours);
                  echo ', Time: ' . $hours_string . ':' . $minutes_string;
                  echo '</button></li>';
                }
              }
              echo '</ul>';
              $result->free();
            }
          ?>
        </div>
        <div class="bar" id="teamMembers">
          <h1 class="barhead" id="teamMembers"><img class="hicon" id="teamimg" src="img/team.svg"/> Team Members</h1>
          <?php
            if ($dbOk) {
              $query = 'select * from teamMembers order by memberid';
              $result = $db->query($query);
              $numRecords = $result->num_rows;
              echo '<ul id="teamMembersList">';
              for ($i=0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo '<li><button id="member-';
                echo htmlspecialchars($record['memberid']);
                echo '" class="barbutton">';
                echo htmlspecialchars($record['firstName']) . " " . htmlspecialchars($record['lastName']);
                echo '</button></li>';
              }
              echo '<li><button id="add-member" class="barbutton" onclick="addMember()">+ Add team members</button></li>';
              echo '</ul>';
              $result->free();
              
              // Finally, let's close the database
              $db->close();
            }
          ?>
        </div>
    </div>
  </body>
  
</html>