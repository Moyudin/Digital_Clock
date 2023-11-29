function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    let ampm;
    if (hours <= 12){
        ampm = "AM";
    } else {
        ampm = "PM";
    }

    hours = hours % 12;

    if (hours < 10) {
        hours = '0' + hours;
    }
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    
    if (seconds < 10) {
        seconds = '0' + seconds;
    } 

    var time = hours +`:`+ minutes +`:`+ seconds +" "+ ampm;
    document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000); // Update clock every second

