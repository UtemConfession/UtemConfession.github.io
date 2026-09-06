// calendar.js — Academic calendar timeline rendering logic with date range support

const calendarSearch = document.getElementById("calendarSearch");
const calendarFilterButtons = document.querySelectorAll(".cal-filter-btn");
const calendarTimeline = document.getElementById("calendarTimeline");

const academicEvents = [
    // --- SEMESTER 1 (2026/2027) ---
    { 
        startDate: "2026-09-28", 
        endDate: "2026-11-06", 
        title: "Semester 1 — Lecture Phase 1", 
        category: "academic",
        duration: "6 Weeks",
        desc: "Main undergraduate lecture & lab sessions (Part 1)"
    },
    { 
        startDate: "2026-11-07", 
        endDate: "2026-11-15", 
        title: "Mid-Semester 1 Break", 
        category: "break",
        duration: "9 Days",
        desc: "Mid-term recess for students"
    },
    { 
        startDate: "2026-11-16", 
        endDate: "2027-01-08", 
        title: "Semester 1 — Lecture Phase 2", 
        category: "academic",
        duration: "8 Weeks",
        desc: "Final teaching weeks & project submission"
    },
    { 
        startDate: "2027-01-09", 
        endDate: "2027-01-17", 
        title: "Study & Revision Week", 
        category: "break",
        duration: "9 Days",
        desc: "Preparation period for final examinations"
    },
    { 
        startDate: "2027-01-18", 
        endDate: "2027-01-31", 
        title: "Semester 1 Final Examinations", 
        category: "exam",
        duration: "2 Weeks",
        desc: "End-of-semester examination period"
    },
    { 
        startDate: "2027-02-01", 
        endDate: "2027-03-21", 
        title: "Semester Break (Inter-Semester Holiday)", 
        category: "break",
        duration: "7 Weeks",
        desc: "End of Semester 1 vacation & inter-semester break"
    },

    // --- SEMESTER 2 (2026/2027) ---
    { 
        startDate: "2027-03-22", 
        endDate: "2027-05-07", 
        title: "Semester 2 — Lecture Phase 1", 
        category: "academic",
        duration: "7 Weeks",
        desc: "Semester 2 undergraduate lecture sessions (Part 1)"
    },
    { 
        startDate: "2027-05-08", 
        endDate: "2027-05-16", 
        title: "Mid-Semester 2 Break", 
        category: "break",
        duration: "9 Days",
        desc: "Mid-term recess"
    },
    { 
        startDate: "2027-05-17", 
        endDate: "2027-07-02", 
        title: "Semester 2 — Lecture Phase 2", 
        category: "academic",
        duration: "7 Weeks",
        desc: "Lecture phase continuation & final assignments"
    },
    { 
        startDate: "2027-07-03", 
        endDate: "2027-07-11", 
        title: "Study & Revision Week", 
        category: "break",
        duration: "9 Days",
        desc: "Revision week before finals"
    },
    { 
        startDate: "2027-07-12", 
        endDate: "2027-07-25", 
        title: "Semester 2 Final Examinations", 
        category: "exam",
        duration: "2 Weeks",
        desc: "Semester 2 final examinations"
    },
    { 
        startDate: "2027-07-26", 
        endDate: "2027-09-26", 
        title: "Long Vacation / Inter-Session Break", 
        category: "break",
        duration: "9 Weeks",
        desc: "End of Session 2026/2027 long vacation"
    },

    // --- PUBLIC HOLIDAYS & SPECIAL DATES ---
    { startDate: "2026-08-31", endDate: "2026-08-31", title: "National Day (Hari Kebangsaan)", category: "holiday", duration: "1 Day" },
    { startDate: "2026-09-16", endDate: "2026-09-16", title: "Malaysia Day Holiday", category: "holiday", duration: "1 Day" },
    { startDate: "2026-09-24", endDate: "2026-09-24", title: "Prophet Muhammad's Birthday (Maulidur Rasul)", category: "holiday", duration: "1 Day" },
    { startDate: "2026-11-08", endDate: "2026-11-08", title: "Deepavali Festival Holiday", category: "holiday", duration: "1 Day" },
    { startDate: "2026-12-25", endDate: "2026-12-25", title: "Christmas Day Holiday", category: "holiday", duration: "1 Day" },
    { startDate: "2027-01-01", endDate: "2027-01-01", title: "New Year's Day 2027", category: "holiday", duration: "1 Day" },
    { startDate: "2027-02-06", endDate: "2027-02-07", title: "Chinese New Year (CNY Holiday)", category: "holiday", duration: "2 Days" },
    { startDate: "2027-03-09", endDate: "2027-03-10", title: "Hari Raya Aidilfitri Holiday", category: "holiday", duration: "2 Days" },
    { startDate: "2027-05-01", endDate: "2027-05-01", title: "Labour Day Holiday", category: "holiday", duration: "1 Day" },
    { startDate: "2027-05-20", endDate: "2027-05-20", title: "Wesak Day Holiday", category: "holiday", duration: "1 Day" }
];

const eventTitlesMs = {
    "Semester 1 — Lecture Phase 1": "Semester 1 — Fasa Kuliah 1",
    "Mid-Semester 1 Break": "Cuti Pertengahan Semester 1",
    "Semester 1 — Lecture Phase 2": "Semester 1 — Fasa Kuliah 2",
    "Study & Revision Week": "Minggu Ulang Kaji & Persediaan",
    "Semester 1 Final Examinations": "Peperiksaan Akhir Semester 1",
    "Semester Break (Inter-Semester Holiday)": "Cuti Antara Semester",
    "Semester 2 — Lecture Phase 1": "Semester 2 — Fasa Kuliah 1",
    "Mid-Semester 2 Break": "Cuti Pertengahan Semester 2",
    "Semester 2 — Lecture Phase 2": "Semester 2 — Fasa Kuliah 2",
    "Study & Revision Week (Sem 2)": "Minggu Ulang Kaji & Persediaan",
    "Semester 2 Final Examinations": "Peperiksaan Akhir Semester 2",
    "Special Semester (Short Sem) Lectures": "Kuliah Semester Khas",
    "Special Semester Examinations": "Peperiksaan Semester Khas",
    "Long Vacation / Inter-Session Break": "Cuti Panjang Sesi",
    "National Day (Hari Kebangsaan)": "Hari Kebangsaan",
    "Malaysia Day Holiday": "Hari Malaysia",
    "Prophet Muhammad's Birthday (Maulidur Rasul)": "Maulidur Rasul",
    "Deepavali Festival Holiday": "Hari Deepavali",
    "Christmas Day Holiday": "Hari Krismas",
    "New Year's Day 2027": "Tahun Baru 2027",
    "Chinese New Year (CNY Holiday)": "Tahun Baru Cina",
    "Hari Raya Aidilfitri Holiday": "Hari Raya Aidilfitri",
    "Labour Day Holiday": "Hari Pekerja",
    "Wesak Day Holiday": "Hari Wesak"
};

function getEventTitle(ev, isMs) {
    if (!ev) return "";
    return (isMs && eventTitlesMs[ev.title]) ? eventTitlesMs[ev.title] : ev.title;
}
const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function formatDateParts(dateString) {
    const parts = dateString.split("-");
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parts[2];
    const month = monthNames[monthIndex];
    return { day, month, year };
}

function renderCalendarEvents(filterCategory = 'all', searchQuery = '') {
    const timeline = document.getElementById("calendarTimeline");
    if (!timeline) return;
    timeline.innerHTML = '';

    const isMs = (typeof currentLang !== 'undefined' && currentLang === 'ms') || document.documentElement.lang === 'ms';

    // Update filter buttons & labels if present
    const syncLabel = document.getElementById("syncCalendarLabel");
    if (syncLabel) syncLabel.textContent = isMs ? "Segerak ke Kalendar (.ics)" : "Sync to Calendar (.ics)";
    const calSearchInput = document.getElementById("calendarSearch");
    if (calSearchInput) calSearchInput.placeholder = isMs ? "Cari acara kalendar..." : "Search calendar events...";

    const filterLabels = isMs ? { all: "Semua", academic: "Kuliah", exam: "Peperiksaan", break: "Cuti", holiday: "Cuti Am" }
                              : { all: "All", academic: "Lectures", exam: "Exams", break: "Breaks", holiday: "Holidays" };
    document.querySelectorAll(".cal-filter-btn").forEach(btn => {
        const cat = btn.getAttribute("data-category");
        if (cat && filterLabels[cat]) btn.textContent = filterLabels[cat];
    });

    const sorted = [...academicEvents].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    const query = searchQuery.toLowerCase().trim();
    let eventsFound = 0;

    sorted.forEach(ev => {
        const titleText = getEventTitle(ev, isMs);
        if (filterCategory !== 'all' && ev.category !== filterCategory) return;
        if (query && !ev.title.toLowerCase().includes(query) && !titleText.toLowerCase().includes(query) && !ev.startDate.includes(query) && !ev.endDate.includes(query)) return;

        eventsFound++;
        const start = formatDateParts(ev.startDate);
        const end = formatDateParts(ev.endDate);
        const isRange = ev.startDate !== ev.endDate;

        const categoryLabels = isMs ? {
            academic: "Kuliah Akademik",
            break: "Cuti Semester",
            exam: "Peperiksaan Akhir",
            holiday: "Cuti Am"
        } : {
            academic: "Academic Lecture",
            break: "Semester Break",
            exam: "Final Examination",
            holiday: "Public Holiday"
        };

        const categoryColors = {
            academic: "#3b82f6",
            break: "#10b981",
            exam: "#ef4444",
            holiday: "#eab308"
        };
        const categoryColor = categoryColors[ev.category] || "#3b82f6";

        const item = document.createElement("div");
        item.className = `calendar-event-card cat-${ev.category}`;
        item.setAttribute("data-start-date", ev.startDate);
        
        item.innerHTML = `
            <div class="cal-card-content">
                <div class="cal-card-top-row">
                    <div class="cal-date-badge">
                        ${isRange ? `
                            <span class="cal-date-text"><strong>${start.day} ${start.month}</strong> <span class="cal-arrow">➔</span> <strong>${end.day} ${end.month}</strong></span>
                            <span class="cal-year">${start.year}</span>
                        ` : `
                            <span class="cal-date-text"><strong>${start.day} ${start.month}</strong></span>
                            <span class="cal-year">${start.year}</span>
                        `}
                    </div>
                    <div class="cal-badges-right">
                        <span class="calendar-event-category cat-${ev.category}">${categoryLabels[ev.category] || ev.category}</span>
                        <span class="cal-duration-pill">⏳ ${ev.duration}</span>
                    </div>
                </div>
                <h3 class="cal-event-title">${titleText}</h3>
                ${ev.desc ? `<p class="cal-event-desc">${ev.desc}</p>` : ''}
            </div>
        `;
        timeline.appendChild(item);
    });

    if (eventsFound === 0) {
        timeline.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 40px 0;">No matching academic events found.</p>`;
    }
}

calendarFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        calendarFilterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderCalendarEvents(btn.getAttribute("data-category"), calendarSearch ? calendarSearch.value : '');
    });
});

if (calendarSearch) {
    calendarSearch.addEventListener("input", () => {
        const activeBtn = document.querySelector(".cal-filter-btn.active");
        const category = activeBtn ? activeBtn.getAttribute("data-category") : 'all';
        renderCalendarEvents(category, calendarSearch.value);
    });
}

// --- 1-CLICK CALENDAR SYNC (.ICS GENERATOR) ---
function exportCalendarICS() {
    const icsLines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//UTeM Confessions Pro Max//Academic Calendar//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:UTeM Academic Calendar 2026/2027",
        "X-WR-TIMEZONE:Asia/Kuala_Lumpur"
    ];

    const formatDateForICS = (dateStr) => dateStr.replace(/-/g, "");

    const addDays = (dateStr, days) => {
        const d = new Date(dateStr);
        d.setDate(d.getDate() + days);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        return `${yyyy}${mm}${dd}`;
    };

    academicEvents.forEach((ev, idx) => {
        const uid = `utem-cal-${idx}-${formatDateForICS(ev.startDate)}@ucpm`;
        const dtStart = formatDateForICS(ev.startDate);
        const dtEnd = addDays(ev.endDate, 1);
        const summary = (ev.title || "").replace(/,/g, "\\,");
        const description = (ev.desc || ev.title || "").replace(/,/g, "\\,");

        icsLines.push(
            "BEGIN:VEVENT",
            `UID:${uid}`,
            `DTSTAMP:${formatDateForICS(ev.startDate)}T000000Z`,
            `DTSTART;VALUE=DATE:${dtStart}`,
            `DTEND;VALUE=DATE:${dtEnd}`,
            `SUMMARY:${summary}`,
            `DESCRIPTION:${description}`,
            "LOCATION:Universiti Teknikal Malaysia Melaka (UTeM)",
            "STATUS:CONFIRMED",
            "END:VEVENT"
        );
    });

    icsLines.push("END:VCALENDAR");

    const blob = new Blob([icsLines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "UTeM_Academic_Calendar_2026_2027.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    if (typeof showToast === "function") {
        showToast("Calendar downloaded! Open to import into Google or Apple Calendar.", "success", 4000);
    }
}

const syncCalendarBtn = document.getElementById("syncCalendarBtn");
if (syncCalendarBtn) {
    syncCalendarBtn.addEventListener("click", exportCalendarICS);
}

// Dynamic Academic Milestone Countdown Pill
function renderMilestonePill() {
    const pill = document.getElementById("calendarMilestonePill");
    const icon = document.getElementById("milestoneIcon");
    const text = document.getElementById("milestoneText");
    const badge = document.getElementById("milestoneBadge");
    if (!pill || !text) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isMs = (typeof currentLang !== 'undefined' && currentLang === 'ms') || document.documentElement.lang === 'ms';
    const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const monthsMs = ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sept", "Okt", "Nov", "Dis"];
    const months = isMs ? monthsMs : monthsEn;

    function formatShortDate(dateStr) {
        const d = new Date(dateStr);
        return `${d.getDate()} ${months[d.getMonth()]}`;
    }

    const majorMilestones = academicEvents.filter(ev => ev.category === "academic" || ev.category === "break" || ev.category === "exam");

    let currentEvent = null;
    let nextEvent = null;

    for (const ev of majorMilestones) {
        const start = new Date(ev.startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(ev.endDate);
        end.setHours(23, 59, 59, 999);

        if (today >= start && today <= end) {
            currentEvent = ev;
        } else if (today < start && !nextEvent) {
            nextEvent = ev;
        }
    }

    let currentBadgeEn = "Semester Break";
    let currentBadgeMs = "Cuti Sem";
    let currentIcon = "\u{1F334}"; // 🌴

    if (currentEvent) {
        if (currentEvent.category === "academic") {
            currentBadgeEn = "Lectures";
            currentBadgeMs = "Kuliah";
            currentIcon = "\u{1F4DA}"; // 📚
        } else if (currentEvent.category === "exam") {
            currentBadgeEn = "Exams";
            currentBadgeMs = "Peperiksaan";
            currentIcon = "\u{1F4DD}"; // 📝
        } else if (currentEvent.category === "break") {
            if (/mid-semester|pertengahan/i.test(currentEvent.title)) {
                currentBadgeEn = "Mid-Term Break";
                currentBadgeMs = "Cuti Pertengahan";
                currentIcon = "\u{1F3D6}\u{FE0F}"; // 🏖️
            } else if (/study|ulang kaji/i.test(currentEvent.title)) {
                currentBadgeEn = "Study Week";
                currentBadgeMs = "Minggu Ulang Kaji";
                currentIcon = "\u{1F4D6}"; // 📖
            } else {
                currentBadgeEn = "Semester Break";
                currentBadgeMs = "Cuti Sem";
                currentIcon = "\u{1F334}"; // 🌴
            }
        }
    } else {
        currentBadgeEn = "Semester Break";
        currentBadgeMs = "Cuti Sem";
        currentIcon = "\u{1F334}"; // 🌴
    }

    if (icon) icon.textContent = currentIcon;

    if (nextEvent) {
        const nextStart = new Date(nextEvent.startDate);
        nextStart.setHours(0, 0, 0, 0);
        const daysLeft = Math.ceil((nextStart - today) / (1000 * 60 * 60 * 24));
        const dayWord = isMs ? "hari" : (daysLeft === 1 ? "day" : "days");
        const formattedDate = formatShortDate(nextEvent.startDate);

        if (!currentEvent || currentEvent.category === "break") {
            if (nextEvent.category === "academic") {
                text.textContent = isMs
                    ? (daysLeft <= 0 ? `Kuliah bermula hari ini (${formattedDate})` : `Kuliah bermula dlm ${daysLeft} ${dayWord} (${formattedDate})`)
                    : (daysLeft <= 0 ? `Lectures begin today (${formattedDate})` : `Lectures begin in ${daysLeft} ${dayWord} (${formattedDate})`);
            } else if (nextEvent.category === "exam") {
                text.textContent = isMs
                    ? (daysLeft <= 0 ? `Peperiksaan bermula hari ini (${formattedDate})` : `Peperiksaan bermula dlm ${daysLeft} ${dayWord} (${formattedDate})`)
                    : (daysLeft <= 0 ? `Exams begin today (${formattedDate})` : `Exams begin in ${daysLeft} ${dayWord} (${formattedDate})`);
            } else {
                const nextTitle = getEventTitle(nextEvent, isMs);
                text.textContent = isMs
                    ? (daysLeft <= 0 ? `${nextTitle} bermula hari ini (${formattedDate})` : `${nextTitle} dlm ${daysLeft} ${dayWord} (${formattedDate})`)
                    : (daysLeft <= 0 ? `${nextTitle} begins today (${formattedDate})` : `${nextTitle} in ${daysLeft} ${dayWord} (${formattedDate})`);
            }
        } else if (currentEvent.category === "academic") {
            const nextTitle = getEventTitle(nextEvent, isMs);
            text.textContent = isMs
                ? (daysLeft <= 0 ? `${nextTitle} bermula hari ini (${formattedDate})` : `${nextTitle} dlm ${daysLeft} ${dayWord} (${formattedDate})`)
                : (daysLeft <= 0 ? `${nextTitle} begins today (${formattedDate})` : `${nextTitle} in ${daysLeft} ${dayWord} (${formattedDate})`);
        } else if (currentEvent.category === "exam") {
            text.textContent = isMs
                ? (daysLeft <= 0 ? `Cuti Sem bermula hari ini (${formattedDate})` : `Cuti Sem bermula dlm ${daysLeft} ${dayWord} (${formattedDate})`)
                : (daysLeft <= 0 ? `Semester Break begins today (${formattedDate})` : `Semester Break begins in ${daysLeft} ${dayWord} (${formattedDate})`);
        }
    } else if (currentEvent) {
        const end = new Date(currentEvent.endDate);
        end.setHours(23, 59, 59, 999);
        const daysLeft = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
        const dayWord = isMs ? "hari" : (daysLeft === 1 ? "day" : "days");
        const curTitle = getEventTitle(currentEvent, isMs);
        text.textContent = isMs
            ? `${curTitle} tamat dlm ${daysLeft} ${dayWord}`
            : `${curTitle} ends in ${daysLeft} ${dayWord}`;
    }

    const targetEvent = nextEvent || currentEvent;
    if (targetEvent) {
        pill.setAttribute("data-target-event", targetEvent.startDate);
        pill.style.cursor = "pointer";
        pill.title = isMs ? "Klik untuk lihat acara dalam kalendar" : "Click to view event in calendar";
    }

    if (badge) {
        badge.textContent = isMs ? currentBadgeMs : currentBadgeEn;
    }

    if (!pill.dataset.listenerAttached) {
        pill.dataset.listenerAttached = "true";
        pill.addEventListener("click", () => {
            const targetDate = pill.getAttribute("data-target-event");
            if (!targetDate) return;

            // Reset category filter if it was active
            const activeFilter = document.querySelector(".cal-filter-btn.active");
            if (activeFilter && activeFilter.getAttribute("data-category") !== "all") {
                const allBtn = document.querySelector(".cal-filter-btn[data-category='all']");
                if (allBtn) allBtn.click();
            }

            // Clear search if it filtered out the event
            const searchInput = document.getElementById("calendarSearch");
            if (searchInput && searchInput.value.trim() !== "") {
                searchInput.value = "";
                renderCalendarEvents("all", "");
            }

            const targetCard = document.querySelector(`.calendar-event-card[data-start-date="${targetDate}"]`);
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
                targetCard.classList.remove("cal-event-highlight");
                void targetCard.offsetWidth;
                targetCard.classList.add("cal-event-highlight");
            }
        });
    }
}

// Initial render
function initCalendar() {
    renderCalendarEvents();
    renderMilestonePill();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCalendar);
} else {
    initCalendar();
}


window.renderMilestonePill = renderMilestonePill;
