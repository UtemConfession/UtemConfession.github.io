// calendar.js — Academic calendar timeline rendering logic with date range support

const calendarSearch = document.getElementById("calendarSearch");
const calendarFilterButtons = document.querySelectorAll(".cal-filter-btn");
const calendarTimeline = document.getElementById("calendarTimeline");

const academicEvents = [
    // --- SEMESTER 1 (2026/2027) ---
    { 
        startDate: "2026-10-12", 
        endDate: "2026-11-27", 
        title: "Semester 1 — Lecture Phase 1", 
        category: "academic",
        duration: "7 Weeks",
        desc: "Main undergraduate lecture & lab sessions"
    },
    { 
        startDate: "2026-11-28", 
        endDate: "2026-12-06", 
        title: "Mid-Semester 1 Break", 
        category: "break",
        duration: "9 Days",
        desc: "Mid-term recess for students"
    },
    { 
        startDate: "2026-12-07", 
        endDate: "2027-01-15", 
        title: "Semester 1 — Lecture Phase 2", 
        category: "academic",
        duration: "6 Weeks",
        desc: "Final teaching weeks & project submission"
    },
    { 
        startDate: "2027-01-16", 
        endDate: "2027-01-24", 
        title: "Study & Revision Week", 
        category: "break",
        duration: "9 Days",
        desc: "Preparation period for final exams"
    },
    { 
        startDate: "2027-01-25", 
        endDate: "2027-02-07", 
        title: "Semester 1 Final Examinations", 
        category: "exam",
        duration: "2 Weeks",
        desc: "End-of-semester examination period"
    },
    { 
        startDate: "2027-02-08", 
        endDate: "2027-03-15", 
        title: "Semester Break (Inter-Semester Holiday)", 
        category: "break",
        duration: "5 Weeks",
        desc: "End of Semester 1 vacation"
    },

    // --- SEMESTER 2 (2026/2027) ---
    { 
        startDate: "2027-03-16", 
        endDate: "2027-05-09", 
        title: "Semester 2 — Lecture Phase 1", 
        category: "academic",
        duration: "8 Weeks",
        desc: "Semester 2 undergraduate lecture sessions"
    },
    { 
        startDate: "2027-05-10", 
        endDate: "2027-05-18", 
        title: "Mid-Semester 2 Break", 
        category: "break",
        duration: "9 Days",
        desc: "Mid-term recess"
    },
    { 
        startDate: "2027-05-19", 
        endDate: "2027-07-04", 
        title: "Semester 2 — Lecture Phase 2", 
        category: "academic",
        duration: "7 Weeks",
        desc: "Lecture phase continuation & final assignments"
    },
    { 
        startDate: "2027-07-05", 
        endDate: "2027-07-12", 
        title: "Study & Revision Week", 
        category: "break",
        duration: "8 Days",
        desc: "Revision week before finals"
    },
    { 
        startDate: "2027-07-13", 
        endDate: "2027-07-25", 
        title: "Semester 2 Final Examinations", 
        category: "exam",
        duration: "2 Weeks",
        desc: "Semester 2 final exams"
    },

    // --- PUBLIC HOLIDAYS & SPECIAL DATES ---
    { startDate: "2026-08-31", endDate: "2026-08-31", title: "National Day (Hari Kebangsaan)", category: "holiday", duration: "1 Day" },
    { startDate: "2026-09-16", endDate: "2026-09-16", title: "Malaysia Day Holiday", category: "holiday", duration: "1 Day" },
    { startDate: "2026-09-24", endDate: "2026-09-24", title: "Prophet Muhammad's Birthday (Maulidur Rasul)", category: "holiday", duration: "1 Day" },
    { startDate: "2026-11-08", endDate: "2026-11-08", title: "Deepavali Festival Holiday", category: "holiday", duration: "1 Day" },
    { startDate: "2026-12-25", endDate: "2026-12-25", title: "Christmas Day Holiday", category: "holiday", duration: "1 Day" },
    { startDate: "2027-01-01", endDate: "2027-01-01", title: "New Year's Day 2027", category: "holiday", duration: "1 Day" },
    { startDate: "2027-02-17", endDate: "2027-02-18", title: "Chinese New Year (CNY Holiday)", category: "holiday", duration: "2 Days" },
    { startDate: "2027-03-20", endDate: "2027-03-21", title: "Hari Raya Aidilfitri Holiday", category: "holiday", duration: "2 Days" },
    { startDate: "2027-05-01", endDate: "2027-05-01", title: "Labour Day Holiday", category: "holiday", duration: "1 Day" },
    { startDate: "2027-05-21", endDate: "2027-05-21", title: "Wesak Day Holiday", category: "holiday", duration: "1 Day" }
];

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
    if (!calendarTimeline) return;
    calendarTimeline.innerHTML = '';

    const sorted = [...academicEvents].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    const query = searchQuery.toLowerCase().trim();
    let eventsFound = 0;

    sorted.forEach(ev => {
        if (filterCategory !== 'all' && ev.category !== filterCategory) return;
        if (query && !ev.title.toLowerCase().includes(query) && !ev.startDate.includes(query) && !ev.endDate.includes(query)) return;

        eventsFound++;
        const start = formatDateParts(ev.startDate);
        const end = formatDateParts(ev.endDate);
        const isRange = ev.startDate !== ev.endDate;

        const categoryLabels = {
            academic: "Academic Lecture",
            break: "Semester Break",
            exam: "Final Examination",
            holiday: "Public Holiday"
        };

        const item = document.createElement("div");
        item.className = `calendar-event-card cat-${ev.category}`;
        item.innerHTML = `
            <div class="cal-date-range-box">
                <div class="cal-start-date">
                    <span class="cal-day">${start.day}</span>
                    <span class="cal-month">${start.month} ${start.year}</span>
                </div>
                ${isRange ? `
                    <div class="cal-arrow">➔</div>
                    <div class="cal-end-date">
                        <span class="cal-day">${end.day}</span>
                        <span class="cal-month">${end.month} ${end.year}</span>
                    </div>
                ` : ''}
            </div>
            
            <div class="cal-event-body">
                <div class="cal-event-header">
                    <h4 class="cal-event-title">${ev.title}</h4>
                    <span class="cal-duration-pill">⏳ ${ev.duration}</span>
                </div>
                ${ev.desc ? `<p class="cal-event-desc">${ev.desc}</p>` : ''}
                <span class="calendar-event-category cat-${ev.category}">${categoryLabels[ev.category] || ev.category}</span>
            </div>
        `;
        calendarTimeline.appendChild(item);
    });

    if (eventsFound === 0) {
        calendarTimeline.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 40px 0;">No matching academic events found.</p>`;
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

// Initial render
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => renderCalendarEvents());
} else {
    renderCalendarEvents();
}
