// Stopwatch Web Application

let startTime, endTime, running = false;

function startStopwatch() {
    if (!running) {
        startTime = new Date();
        running = true;
        updateDisplay();
    }
}

function stopStopwatch() {
    if (running) {
        endTime = new Date();
        running = false;
        clearInterval(interval);
    }
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    document.getElementById('display').textContent = '00:00:00';
}

function updateDisplay() {
    if (running) {
        interval = setInterval(() => {
            const currentTime = new Date();
            const elapsed = new Date(currentTime - startTime);
            const minutes = String(elapsed.getUTCMinutes()).padStart(2, '0');
            const seconds = String(elapsed.getUTCSeconds()).padStart(2, '0');
            const milliseconds = String(elapsed.getUTCMilliseconds()).padStart(3, '0').slice(0, 2);
            document.getElementById('display').textContent = `${minutes}:${seconds}:${milliseconds}`;
        }, 10);
    }
}

// Attach the event listeners to start, stop, and reset buttons
document.getElementById('startBtn').addEventListener('click', startStopwatch);
document.getElementById('stopBtn').addEventListener('click', stopStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);