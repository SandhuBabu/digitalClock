function updateClock() {
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");
    let period = document.getElementById("period");

    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    let currentPeriod = "AM";

    if (currentHours > 12) {
        currentHours = currentHours - 12;
        currentPeriod = "PM"
    }

    if (currentHours < 10)
        currentHours = "0" + currentHours;

    if (currentMinutes < 10)
        currentMinutes = "0" + currentMinutes;

    if (currentSeconds < 10)
        currentSeconds = "0" + currentSeconds;

    hour.innerText = currentHours;
    minute.innerText = currentMinutes;
    second.innerText = currentSeconds;
    period.innerText = currentPeriod;

    setTimeout(updateClock, 1000)
}

