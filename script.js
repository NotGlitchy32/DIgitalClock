console.log('this is working')

function updateClock() {
     let currentTime = new Date();
     let time = currentTime.toLocaleTimeString();
     document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
updateClock()
