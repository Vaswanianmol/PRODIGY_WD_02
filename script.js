let timer;
let startTime;
let elapsedTime = 0;
let running = false;
let lapCounter = 1;

function displayTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('display').textContent = displayTime(elapsedTime);
        }, 10);
        running = true;
    }
}

function stop() {
    clearInterval(timer);
    running = false;
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    document.getElementById('display').textContent = displayTime(elapsedTime);
    document.getElementById('lapTimes').innerHTML = '';
    lapCounter = 1;
}

function lap() {
    if (running) {
        const lapTime = Date.now() - startTime;
        const lapList = document.getElementById('lapTimes');
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${displayTime(lapTime)}`;
        lapList.appendChild(lapItem);
    }
}

document.getElementById('startBtn').addEventListener('click', start);
document.getElementById('stopBtn').addEventListener('click', stop);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('lapBtn').addEventListener('click', lap);
