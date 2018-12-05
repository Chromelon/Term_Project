function settingsDropdown() {
    document.getElementById("settingsDropdown").classList.toggle("show");
}

function addTask() {
  var task_add = document.createElement("div");
  task_add.style.position = "absolute";
  task_add.style.width = "33%";
  task_add.style.height = "90%";
  task_add.style.top = "90px";
  task_add.id = "task_adder";
  task_add.style.background = "#aeaeae";
  task_add_html = "<p>Input the details about the chore</p>";
  task_add_html += "<form class=\"addinput\" action=\"submit_task.php\" method=\"post\">";
  task_add_html += "Job Description:</br>";
  task_add_html += "<input class=\"addinput\" type=\"text\" name=\"jobdesc\"> </br>";
  task_add_html += "Priority:</br>";
  task_add_html += "<input class=\"addinput\" type=\"radio\" name=\"priority\" value=\"1\">1</input>";
  task_add_html += "<input class=\"addinput\" type=\"radio\" name=\"priority\" value=\"2\">2</input>";
  task_add_html += "<input class=\"addinput\" type=\"radio\" name=\"priority\" value=\"3\">3</input>";
  task_add_html += "<input class=\"addinput\" type=\"radio\" name=\"priority\" value=\"4\">4</input>";
  task_add_html += "<input class=\"addinput\" type=\"radio\" name=\"priority\" value=\"5\">5</input> </br>";
  task_add_html += "Time (in minutes):</br>";
  task_add_html += "<input class=\"addinput\" type=\"text\" name=\"time\"> </br>";
  task_add_html += "<input class=\"addinput\" type=\"submit\" value=\"Add Task\"> </br>";
  task_add_html += "</form>";
  task_add.innerHTML = task_add_html;
  document.getElementById("columns").appendChild(task_add);
  window.onclick = function(event) {
    if (!event.target.matches('#task_adder') && !event.target.matches('#add-task') && !event.target.matches('#add-my-task') && !event.target.matches('.addbutton') && !event.target.matches('.addinput')) {
      document.getElementById("task_adder").remove();
    }
  } 
}

function addMember() {
  var member_add = document.createElement("div");
  member_add.style.position = "absolute";
  member_add.style.width = "33%";
  member_add.style.height = "90%";
  member_add.style.top = "90px";
  member_add.id = "member_adder";
  member_add.style.background = "#aeaeae";
  member_add_html = "<p>Input team members name</p>";
  member_add_html += "<form class=\"addinput\" action=\"submit_member.php\" method=\"post\">";
  member_add_html += "First Name:</br>";
  member_add_html += "<input class=\"addinput\" type=\"text\" name=\"firstName\"></br>";
  member_add_html += "Last Name:</br>";
  member_add_html += "<input class=\"addinput\" type=\"text\" name=\"lastName\"></br>";
  member_add_html += "<input class=\"addinput\" type=\"submit\" value=\"Add Member\"></br>";
  member_add.innerHTML = member_add_html;
  document.getElementById("columns").appendChild(member_add);
  window.onclick = function(event) {
    if (!event.target.matches('#member_adder') && !event.target.matches('#add-member') && !event.target.matches('.addbutton') && !event.target.matches('.addinput')) {
      document.getElementById("member_adder").remove();
    }
  }
}

function changeUser(memberid){
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "index.php");
  var hiddenField=document.createElement("input");
  hiddenField.setAttribute("type", "hidden");
  hiddenField.setAttribute("name", 'curr_user');
  hiddenField.setAttribute("value", memberid);
  form.appendChild(hiddenField);
  document.body.appendChild(form);
  form.submit();
}

function claimTask(jobid, memberid){
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "grab_task.php");
  var hiddenField_1=document.createElement("input");
  hiddenField_1.setAttribute("type", "hidden");
  hiddenField_1.setAttribute("name", 'assignedMember');
  hiddenField_1.setAttribute("value", memberid);
  form.appendChild(hiddenField_1);
  var hiddenField_2=document.createElement("input");
  hiddenField_2.setAttribute("type", "hidden");
  hiddenField_2.setAttribute("name", 'jobid');
  hiddenField_2.setAttribute("value", jobid);
  form.appendChild(hiddenField_2);
  var hiddenField_3=document.createElement("input");
  hiddenField_3.setAttribute("type", "hidden");
  hiddenField_3.setAttribute("name", "curr_user");
  hiddenField_3.setAttribute('value', memberid);
  form.appendChild(hiddenField_3);
  document.body.appendChild(form);
  form.submit();
}

function deleteTask(jobid, curr_user){
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "complete_task.php");
  var hiddenField_1=document.createElement("input");
  hiddenField_1.setAttribute("type", "hidden");
  hiddenField_1.setAttribute("name", 'jobid');
  hiddenField_1.setAttribute("value", jobid);
  form.appendChild(hiddenField_1)
  var hiddenField_2=document.createElement("input");
  hiddenField_2.setAttribute("type", "hidden");
  hiddenField_2.setAttribute("name", "curr_user");
  hiddenField_2.setAttribute('value', curr_user);
  form.appendChild(hiddenField_2);
  document.body.appendChild(form);
  form.submit();
}

function deleteMember(memberid, curr_user){
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "delete_member.php");
  var hiddenField_1=document.createElement("input");
  hiddenField_1.setAttribute("type", "hidden");
  hiddenField_1.setAttribute("name", 'memberid');
  hiddenField_1.setAttribute("value", memberid);
  form.appendChild(hiddenField_1);
  var hiddenField_2=document.createElement("input");
  hiddenField_2.setAttribute("type", "hidden");
  hiddenField_2.setAttribute("name", "curr_user");
  hiddenField_2.setAttribute('value', curr_user);
  form.appendChild(hiddenField_2);
  document.body.appendChild(form);
  form.submit();
}

function taskPanel(jobid, curr_user){
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "index.php");
  var hiddenField_1=document.createElement("input");
  hiddenField_1.setAttribute("type", "hidden");
  hiddenField_1.setAttribute("name", "show_task");
  hiddenField_1.setAttribute("value", true);
  form.appendChild(hiddenField_1)
  var hiddenField_2=document.createElement("input");
  hiddenField_2.setAttribute("type", "hidden");
  hiddenField_2.setAttribute("name", "selectedjobid");
  hiddenField_2.setAttribute('value', jobid);
  form.appendChild(hiddenField_2);
  var hiddenField_3=document.createElement("input");
  hiddenField_3.setAttribute("type", "hidden");
  hiddenField_3.setAttribute("name", "curr_user");
  hiddenField_3.setAttribute('value', curr_user);
  form.appendChild(hiddenField_3);
  document.body.appendChild(form);
  form.submit();
}

function myTaskPanel(jobid, curr_user){
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "index.php");
  var hiddenField_1=document.createElement("input");
  hiddenField_1.setAttribute("type", "hidden");
  hiddenField_1.setAttribute("name", "show_my_task");
  hiddenField_1.setAttribute("value", true);
  form.appendChild(hiddenField_1)
  var hiddenField_2=document.createElement("input");
  hiddenField_2.setAttribute("type", "hidden");
  hiddenField_2.setAttribute("name", "selectedjobid");
  hiddenField_2.setAttribute('value', jobid);
  form.appendChild(hiddenField_2);
  var hiddenField_3=document.createElement("input");
  hiddenField_3.setAttribute("type", "hidden");
  hiddenField_3.setAttribute("name", "curr_user");
  hiddenField_3.setAttribute('value', curr_user);
  form.appendChild(hiddenField_3);
  document.body.appendChild(form);
  form.submit();
}

function memberPanel(memberid, curr_user){
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "index.php");
  var hiddenField_1=document.createElement("input");
  hiddenField_1.setAttribute("type", "hidden");
  hiddenField_1.setAttribute("name", "show_members");
  hiddenField_1.setAttribute("value", true);
  form.appendChild(hiddenField_1)
  var hiddenField_2=document.createElement("input");
  hiddenField_2.setAttribute("type", "hidden");
  hiddenField_2.setAttribute("name", "selectedmemberid");
  hiddenField_2.setAttribute('value', memberid);
  form.appendChild(hiddenField_2);
  var hiddenField_3=document.createElement("input");
  hiddenField_3.setAttribute("type", "hidden");
  hiddenField_3.setAttribute("name", "curr_user");
  hiddenField_3.setAttribute('value', curr_user);
  form.appendChild(hiddenField_3);
  document.body.appendChild(form);
  form.submit();
}

window.onclick = function(event) {
  if (!event.target.matches('#settingsButton')) {
    var dropdowns = document.getElementsByClassName("settingsContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}