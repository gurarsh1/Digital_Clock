function updateClock() {
    const now = new Date();

    
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("hh").textContent = hh;
    document.getElementById("mm").textContent = mm;
    document.getElementById("ss").textContent = ss;

    
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    document.getElementById("day").textContent = days[now.getDay()];
    document.getElementById("full-date").textContent =
        `${months[now.getMonth()]} ${now.getDate()}`;

    
    const minDeg = (now.getMinutes() / 60) * 360;
    const secDeg = (now.getSeconds() / 60) * 360;

    document.getElementById("min-progress").style.transform = `rotate(${minDeg}deg)`;
    document.getElementById("sec-progress").style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
