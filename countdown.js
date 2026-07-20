// countdown.js — Exam countdown timer logic

const examTargetSelect = document.getElementById("examTargetSelect");
const countdownDays = document.getElementById("countdownDays");
const countdownHours = document.getElementById("countdownHours");
const countdownMinutes = document.getElementById("countdownMinutes");
const countdownSeconds = document.getElementById("countdownSeconds");
const customExamDateInput = document.getElementById("customExamDate");
const customExamBtn = document.getElementById("customExamBtn");
const countdownTitleText = document.getElementById("countdownTitleText");

const defaultTargets = {
    sem2_finals: new Date("2026-10-12T09:00:00").getTime(),
    sem1_finals: new Date("2027-01-25T09:00:00").getTime(),
    merdeka:     new Date("2026-08-31T00:00:00").getTime(),
    newyear:     new Date("2027-01-01T00:00:00").getTime()
};

let activeCountdownTimer = null;
let examCountdownTargetTime = defaultTargets.sem2_finals;

function runCountdown() {
    if (activeCountdownTimer) clearInterval(activeCountdownTimer);

    function updateTimer() {
        const now = Date.now();
        const difference = examCountdownTargetTime - now;

        if (difference <= 0) {
            countdownDays.textContent = "00";
            countdownHours.textContent = "00";
            countdownMinutes.textContent = "00";
            countdownSeconds.textContent = "00";
            clearInterval(activeCountdownTimer);
            return;
        }

        const days    = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownDays.textContent    = days.toString().padStart(2, '0');
        countdownHours.textContent   = hours.toString().padStart(2, '0');
        countdownMinutes.textContent = minutes.toString().padStart(2, '0');
        countdownSeconds.textContent = seconds.toString().padStart(2, '0');
    }

    updateTimer();
    activeCountdownTimer = setInterval(updateTimer, 1000);
}

if (examTargetSelect) {
    examTargetSelect.addEventListener("change", (e) => {
        const selected = e.target.value;
        if (selected in defaultTargets) {
            examCountdownTargetTime = defaultTargets[selected];
            countdownTitleText.textContent = examTargetSelect.options[examTargetSelect.selectedIndex].text;
            runCountdown();
        } else if (selected === 'custom') {
            countdownTitleText.textContent = "Custom Exam Target Date";
        }
    });
}

if (customExamBtn && customExamDateInput) {
    customExamBtn.addEventListener("click", () => {
        const dateVal = customExamDateInput.value;
        if (!dateVal) {
            alert("Please choose a valid date and time.");
            return;
        }
        examCountdownTargetTime = new Date(dateVal).getTime();
        countdownTitleText.textContent = "Custom Countdown Goal";
        if (examTargetSelect) examTargetSelect.value = 'custom';
        runCountdown();
    });
}
