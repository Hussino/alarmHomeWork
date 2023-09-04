var interval;
var secondsRemaining;
var timerDisplay = document.getElementById('timer');
var pauseBtn = document.getElementById('pauseBtn');
var resumeBtn = document.getElementById('resumeBtn');

document.getElementById('alarmBtn').addEventListener('click', function() {
    var seconds = parseInt(prompt('Enter the number of seconds for the alarm:'));
    if (!isNaN(seconds)) {
    setAlarm(seconds);
    } else {
    alert('Invalid input. Please enter a number.');
    }
});

function setAlarm(seconds) {
    secondsRemaining = seconds;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;

    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    var minutes = Math.floor(secondsRemaining / 60);
    var remainingSeconds = secondsRemaining % 60;

    timerDisplay.textContent = formatTime(minutes) + ':' + formatTime(remainingSeconds);

    if (secondsRemaining === 0) {
    clearInterval(interval);
    alert('Time is up!');
    pauseBtn.disabled = true;
    }

    secondsRemaining--;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

pauseBtn.addEventListener('click', function() {
    clearInterval(interval);
    resumeBtn.disabled = false;
    pauseBtn.disabled = true;
});

resumeBtn.addEventListener('click', function() {
    interval = setInterval(updateTimer, 1000);
    resumeBtn.disabled = true;
    pauseBtn.disabled = false;
});