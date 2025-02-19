function startCountdown(duration) {
    let timer = setInterval(() => {
        console.log(duration);
        if (duration-- === 0) clearInterval(timer);
    }, 1000);
}
startCountdown(10);
