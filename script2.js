window.onload = function() {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000); 
  };
  
  function displayCurrentTime() {
    var currentTimeElement = document.getElementById("current-time");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    currentTimeElement.textContent ="Current Time: " + `${hours}:${minutes}:${seconds}`;
  }
  