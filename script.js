// script.js — Application entry point & initialization
// Depends on: utils.js, translation.js, confessions.js, gpa.js,
//             countdown.js, bus.js, lookup.js, calendar.js,
//             health.js, library.js

// --- DARK MODE: Permanently locked ---
document.body.classList.remove("light-theme");
localStorage.setItem("theme", "dark");


// --- TAB NAVIGATION SYSTEM ---
const navItems      = document.querySelectorAll(".nav-item");
const mobileNavBtns = document.querySelectorAll(".mobile-nav-btn");
const tabContents   = document.querySelectorAll(".tab-content");

function switchTab(tabId) {
    navItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("data-tab") === tabId);
    });
    mobileNavBtns.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });
    tabContents.forEach(panel => {
        panel.classList.toggle("active", panel.id === tabId);
    });
}

navItems.forEach(item => {
    item.addEventListener("click", () => switchTab(item.getAttribute("data-tab")));
});

mobileNavBtns.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
});


// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Apply saved language
    setLanguage(currentLang);

    // Bind language toggle buttons
    const desktopToggle = document.getElementById("desktopLangToggle");
    const mobileToggle  = document.getElementById("mobileLangToggle");
    if (desktopToggle) desktopToggle.addEventListener("click", toggleLanguage);
    if (mobileToggle)  mobileToggle.addEventListener("click", toggleLanguage);

    // Seed default GPA rows (with clean empty subject titles)
    if (gpaRowsContainer) {
        gpaRowsContainer.innerHTML = '';
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        calculateGpa();
    }

    // Start exam countdown
    runCountdown();

    // Load initial bus schedules
    updateBusScheduleDisplay();

    // Load initial calendar
    renderCalendarEvents('all', '');

    // Melaka public bus route lookup
    const melakaDestSelect = document.getElementById("melakaDestSelect");
    const lookupResultBox  = document.getElementById("lookupResultBox");

    if (melakaDestSelect && lookupResultBox) {
        melakaDestSelect.addEventListener("change", (e) => {
            const val = e.target.value;
            if (val && lookupDetails[val]) {
                lookupResultBox.innerHTML = lookupDetails[val][currentLang];
                lookupResultBox.style.display = 'block';
            } else {
                lookupResultBox.style.display = 'none';
            }
        });
    }
});
