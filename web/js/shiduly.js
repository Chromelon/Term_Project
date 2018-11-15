function settingsDropdown() {
    document.getElementById("settingsDropdown").classList.toggle("show");
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