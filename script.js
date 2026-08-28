// script.js — Application entry point & initialization
// Depends on: utils.js, translation.js, confessions.js

// --- DARK MODE: Permanently locked ---
document.body.classList.remove("light-theme");
localStorage.setItem("theme", "dark");


// --- LEGACY TAB ROUTER MAPPING ---
const tabToPageMap = {
    "calendar-tab": "calendar.html",
    "bus-tab": "bus.html",
    "library-tab": "library.html",
    "health-tab": "health.html",
    "gpa-tab": "gpa.html",
    "scholarships-tab": "scholarships.html",
    "exams-tab": "exams.html",
    "links-tab": "wifi.html",
    "support-tab": "support.html",
    "activities-tab": "activities.html",
    "marketplace-tab": "marketplace.html",
    "updates-tab": "updates.html"
};

// Check and handle hash redirect on load and hash change
function handleHashRedirect() {
    if (window.location.hash) {
        const hashId = window.location.hash.replace('#', '');
        if (tabToPageMap[hashId]) {
            window.location.href = tabToPageMap[hashId];
            return true;
        }
    }
    return false;
}

// Run hash redirect check immediately
handleHashRedirect();
window.addEventListener("hashchange", handleHashRedirect);


// --- TAB NAVIGATION SYSTEM ---
const navItems = document.querySelectorAll(".nav-item");
const mobileNavBtns = document.querySelectorAll(".mobile-nav-btn[data-tab]");
const drawerItemBtns = document.querySelectorAll(".drawer-item-btn[data-tab]");
const tabContents = document.querySelectorAll(".tab-content");

function switchTab(tabId) {
    if (!tabId) return;

    // If tab corresponds to a standalone page, redirect immediately
    if (tabToPageMap[tabId]) {
        window.location.href = tabToPageMap[tabId];
        return;
    }

    navItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("data-tab") === tabId);
    });
    mobileNavBtns.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });
    drawerItemBtns.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });
    tabContents.forEach(panel => {
        const isActive = panel.id === tabId;
        panel.classList.toggle("active", isActive);

        // Lazy-load ads if the panel becomes active
        if (isActive && window.initAdsInContainer) {
            setTimeout(() => {
                window.initAdsInContainer(panel);
            }, 50);
        }
    });
    closeMobileDrawer();
    window.scrollTo({ top: 0, behavior: 'instant' });
}

navItems.forEach(item => {
    item.addEventListener("click", () => switchTab(item.getAttribute("data-tab")));
});

mobileNavBtns.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
});

drawerItemBtns.forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
});

// --- MOBILE "MORE" DRAWER CONTROLLER ---
const openDrawerBtn = document.getElementById("openMobileDrawerBtn");
const closeDrawerBtn = document.getElementById("closeMobileDrawerBtn");
const drawerOverlay = document.getElementById("mobileMoreDrawer");

function openMobileDrawer() {
    if (drawerOverlay) drawerOverlay.classList.add("active");
}

function closeMobileDrawer() {
    if (drawerOverlay) drawerOverlay.classList.remove("active");
}

if (openDrawerBtn) openDrawerBtn.addEventListener("click", openMobileDrawer);
if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeMobileDrawer);
if (drawerOverlay) {
    drawerOverlay.addEventListener("click", (e) => {
        if (e.target === drawerOverlay) closeMobileDrawer();
    });
}


// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Apply saved language
    setLanguage(currentLang);
    if (typeof syncStructuredTableLabels === 'function') syncStructuredTableLabels();

    // Bind language toggle buttons
    const desktopToggle = document.getElementById("desktopLangToggle");
    const mobileToggle = document.getElementById("mobileLangToggle");
    const drawerToggle = document.getElementById("drawerLangToggle");
    const handleToggle = () => {
        toggleLanguage();
        if (typeof syncStructuredTableLabels === 'function') syncStructuredTableLabels();
    };
    if (desktopToggle) desktopToggle.addEventListener("click", handleToggle);
    if (mobileToggle) mobileToggle.addEventListener("click", handleToggle);
    if (drawerToggle) drawerToggle.addEventListener("click", handleToggle);

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
