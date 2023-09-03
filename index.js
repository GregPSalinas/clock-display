var today = new Date();
var date = today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear();
var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

document.getElementById("dateDisplay").innerHTML = date;
document.getElementById("timeDisplay").innerHTML = time;

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("timeDisplay").innerHTML = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
