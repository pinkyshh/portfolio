function openPill(cityName) {
    var i;
    var x = document.getElementsByClassName("process");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
  }