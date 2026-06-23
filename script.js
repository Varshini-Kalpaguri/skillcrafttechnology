let seconds = 0;
let timer;
let running = false;

function updateDisplay() {
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');

    document.getElementById("display").textContent =
        `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    let lap = document.createElement("li");
    lap.textContent = document.getElementById("display").textContent;
    document.getElementById("laps").appendChild(lap);
}