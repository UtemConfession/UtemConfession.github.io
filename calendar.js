// calendar.js — Academic calendar timeline rendering logic

const calendarSearch = document.getElementById("calendarSearch");
const calendarFilterButtons = document.querySelectorAll(".cal-filter-btn");
const calendarTimeline = document.getElementById("calendarTimeline");

const academicEvents = [
    { date: "2026-08-31", title: "National Day (Hari Kebangsaan)", category: "holiday" },
    { date: "2026-09-16", title: "Malaysia Day Holiday", category: "holiday" },
    { date: "2026-09-24", title: "Prophet Muhammad's Birthday", category: "holiday" },
    { date: "2026-10-12", title: "Semester 1 Lecture Phase Starts", category: "academic" },
    { date: "2026-11-08", title: "Deepavali Festival Holiday", category: "holiday" },
    { date: "2026-11-28", title: "Mid-Semester Break Starts", category: "break" },
    { date: "2026-12-06", title: "Mid-Semester Break Ends", category: "break" },
    { date: "2026-12-07", title: "Semester 1 Lecture Phase 2 Resume", category: "academic" },
    { date: "2026-12-25", title: "Christmas Day", category: "holiday" },
    { date: "2027-01-01", title: "New Year's Day 2027", category: "holiday" },
    { date: "2027-01-16", title: "Study Week Starts", category: "break" },
    { date: "2027-01-24", title: "Study Week Ends", category: "break" },
    { date: "2027-01-25", title: "Semester 1 Final Examinations Start", category: "exam" },
    { date: "2027-02-07", title: "Semester 1 Final Examinations End", category: "exam" },
    { date: "2027-02-08", title: "Semester Break Holiday Starts", category: "break" },
    { date: "2027-02-17", title: "Chinese New Year (CNY Holiday)", category: "holiday" },
    { date: "2027-03-15", title: "Semester Break Holiday Ends", category: "break" },
    { date: "2027-03-16", title: "Semester 2 Lecture Starts", category: "academic" },
    { date: "2027-03-20", title: "Hari Raya Aidilfitri Holiday", category: "holiday" },
    { date: "2027-05-01", title: "Mid-Semester 2 Break", category: "break" },
    { date: "2027-05-21", title: "Wesak Day Holiday", category: "holiday" },
    { date: "2027-07-13", title: "Semester 2 Final Examinations Start", category: "exam" },
    { date: "2027-07-25", title: "Semester 2 Final Examinations End", category: "exam" }
];

const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function renderCalendarEvents(filterCategory = 'all', searchQuery = '') {
    calendarTimeline.innerHTML = '';

    const sorted = [...academicEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
    const query = searchQuery.toLowerCase().trim();
    let eventsFound = 0;

    sorted.forEach(ev => {
        const evDate = new Date(ev.date);

        if (filterCategory !== 'all' && ev.category !== filterCategory) return;
        if (query && !ev.title.toLowerCase().includes(query) && !ev.date.includes(query)) return;

        eventsFound++;
        const day   = evDate.getDate();
        const month = monthNames[evDate.getMonth()];
        const year  = evDate.getFullYear();

        const item = document.createElement("div");
        item.className = "calendar-event";
        item.innerHTML = `
            <div class="calendar-event-date-box">
                <div class="calendar-event-day">${day}</div>
                <div class="calendar-event-month">${month} ${year}</div>
            </div>
            <div class="calendar-event-info">
                <div class="calendar-event-title">${ev.title}</div>
                <span class="calendar-event-category cat-${ev.category}">${ev.category}</span>
            </div>
        `;
        calendarTimeline.appendChild(item);
    });

    if (eventsFound === 0) {
        calendarTimeline.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 40px 0;">No calendar events found.</p>`;
    }
}

calendarFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        calendarFilterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderCalendarEvents(btn.getAttribute("data-category"), calendarSearch.value);
    });
});

if (calendarSearch) {
    calendarSearch.addEventListener("input", () => {
        const activeBtn = document.querySelector(".cal-filter-btn.active");
        const category = activeBtn ? activeBtn.getAttribute("data-category") : 'all';
        renderCalendarEvents(category, calendarSearch.value);
    });
}
