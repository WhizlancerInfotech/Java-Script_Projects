function showTime() {
    let time = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = time;
}
setInterval(showTime, 1000);
