//Digital Clock Program



function updateClock(){
const now = new Date();
let hours = now.getHours();
const meridiam = hours >=12 ?"PM":"AM";
hours = hours %12 || 12;
hours = hours.toString().padStart(2,0)
const min = now.getMinutes().toString().padStart(2,0);
const sec = now.getSeconds().toString().padStart(2,0);
const timeString = `${hours}:${min}:${sec} ${meridiam}`;
document.getElementById("clock").textContent = timeString;

}

updateClock();

setInterval(updateClock, 1000);