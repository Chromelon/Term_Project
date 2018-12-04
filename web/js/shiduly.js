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
  task_add_html = "<p>Input the details about the chore</p>"
  task_add_html += "<form action=\"/add_task.php\">"
  task_add_html += "Job Description:</br>"
  task_add_html += "<input type=\"text\" name=\"jobdesc\"\>"
  task_add
  task_add_html += "</form>"
  task_add.innerHTML = task_add_html;
  document.getElementById("columns").appendChild(task_add);
  window.onclick = function(event) {
    if (!event.target.matches('#task_adder') && !event.target.matches('#add-task') && !event.target.matches('#add-my-task') && !event.target.matches('.addbutton')) {
      document.getElementById("task_adder").remove();
    }
  } 
}

function suggestTrade() {
  var suggest_trade = document.createElement("div");
  var members = document.getElementById("teamMembersList").getElementsByTagName("li");
  suggest_trade.style.position = "absolute";
  suggest_trade.style.width = "33%";
  suggest_trade.style.height = "90%";
  suggest_trade.style.top = "90px";
  suggest_trade.id = "trade_suggester";
  suggest_trade.style.background = "#aeaeae";
  suggest_trade_html = "<p>Select who you want to trade with</p>"
  suggest_trade_html += "<ul>";
  for(i = 0; i < members.length-1; i++){
    suggest_trade_html += "<li>";
    suggest_trade_html += members[i].innerHTML
    suggest_trade_html += "</li>";
  }
  suggest_trade_html += "</ul>"
  suggest_trade.innerHTML = suggest_trade_html;
  document.getElementById("columns").appendChild(suggest_trade);
  window.onclick = function(event) {
    if (!event.target.matches('#trade_suggester') && !event.target.matches('#add-trade') && !event.target.matches('.addbutton') && !event.target.matches('.barbutton')) {
      document.getElementById("trade_suggester").remove();
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
  member_add.innerHTML = member_add_html;
  document.getElementById("columns").appendChild(member_add);
  window.onclick = function(event) {
    if (!event.target.matches('#member_adder') && !event.target.matches('#add-member') && !event.target.matches('.addbutton')) {
      document.getElementById("member_adder").remove();
    }
  }
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