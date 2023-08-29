var today = new Date();
var date = today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("dateDisplay").innerHTML = date;
document.getElementById("timeDisplay").innerHTML = time;


setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("timeDisplay").innerHTML = d.toLocaleTimeString();
} 
