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
    if (gpaRowsContainer && gpaRowsContainer.children.length === 0) {
        gpaRowsContainer.innerHTML = '';
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        calculateGpa();
    }

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

    // Floating Back to Top Button
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "flex";
            } else {
                backToTopBtn.style.display = "none";
            }
        });
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // UTeM Live Campus Weather Fetcher (Open-Meteo API for Durian Tunggal / Ayer Keroh)
    async function fetchCampusWeather() {
        const weatherText = document.getElementById("weatherText");
        if (!weatherText) return;

        try {
            const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=2.3138&longitude=102.3188&current_weather=true");
            if (res.ok) {
                const data = await res.json();
                if (data && data.current_weather) {
                    const temp = Math.round(data.current_weather.temperature);
                    const code = data.current_weather.weathercode;
                    let desc = "Clear";
                    let icon = "☀️";

                    if (code >= 1 && code <= 3) { desc = "Partly Cloudy"; icon = "⛅"; }
                    else if (code >= 45 && code <= 48) { desc = "Foggy"; icon = "🌫️"; }
                    else if (code >= 51 && code <= 67) { desc = "Light Rain"; icon = "🌧️"; }
                    else if (code >= 80 && code <= 99) { desc = "Thunderstorm / Heavy Rain"; icon = "⛈️"; }

                    weatherText.textContent = `UTeM Campus: ${temp}°C ${desc} ${icon}`;
                }
            }
        } catch (err) {
            console.warn("Weather API fetch fallback:", err);
        }
    }
    fetchCampusWeather();

    // Register PWA Service Worker for offline availability
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
});
