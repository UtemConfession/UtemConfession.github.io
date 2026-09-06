// library.js - Handles Past Year Exam search logic, Library tab helpers & Exam Season Countdown

function searchExamSubject(query) {
    const term = (query || "").trim();
    if (!term) {
        if (typeof showToast === "function") {
            showToast("Please enter a subject title or course code to search.", "warning");
        }
        return;
    }

    const encodedTerm = encodeURIComponent(term);
    const searchUrl = `https://library2.utem.edu.my/exampaper/index.php?option=com_docman&view=list&Itemid=101&layout=table&filter%5Bsearch%5D=${encodedTerm}`;
    window.open(searchUrl, "_blank");
}

// --- DYNAMIC EXAM SEASON COUNTDOWN & GOOD LUCK PILL ---
function initExamSeasonPill() {
    const pill = document.getElementById("examSeasonPill");
    const icon = document.getElementById("examPillIcon");
    const text = document.getElementById("examPillText");
    const badge = document.getElementById("examPillBadge");
    if (!pill || !text) return;

    // Official UTeM Academic Calendar Examination Seasons
    const examSeasons = [
        {
            id: "sem1_final",
            name: "Sem 1 Final Exams",
            nameMs: "Final Sem 1",
            revisionStart: "2027-01-09T00:00:00",
            startDate: "2027-01-18T00:00:00",
            endDate: "2027-01-31T23:59:59"
        },
        {
            id: "sem2_final",
            name: "Sem 2 Final Exams",
            nameMs: "Final Sem 2",
            revisionStart: "2027-07-03T00:00:00",
            startDate: "2027-07-12T00:00:00",
            endDate: "2027-07-25T23:59:59"
        }
    ];

    const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const monthsMs = ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sept", "Okt", "Nov", "Dis"];

    function updateExamPill() {
        const now = new Date();
        const isMs = (typeof currentLang !== 'undefined' && currentLang === 'ms') || document.documentElement.lang === 'ms';
        const months = isMs ? monthsMs : monthsEn;

        let activeSeason = null;
        let upcomingSeason = null;

        for (const s of examSeasons) {
            const start = new Date(s.startDate);
            const end = new Date(s.endDate);
            if (now >= start && now <= end) {
                activeSeason = s;
                break;
            } else if (now < start && !upcomingSeason) {
                upcomingSeason = s;
            }
        }

        // --- CASE 1: EXAM SEASON IS ACTIVE (Countdown has ended) ---
        // Requirement: Switch to "Good luck for your exams! All the best!"
        if (activeSeason) {
            pill.classList.remove("glow-exam");
            pill.classList.add("glow-exam-active");

            if (icon) icon.textContent = "\u2728";
            text.textContent = isMs 
                ? "Semoga Berjaya dlm Peperiksaan! All the best! \u{1F393}" 
                : "Good Luck for Your Exams! All the best! \u{1F393}";

            if (badge) {
                badge.textContent = isMs ? "Semoga Berjaya" : "Good Luck";
                badge.style.background = "rgba(16, 185, 129, 0.15)";
                badge.style.color = "#10b981";
            }
            return;
        }

        // --- CASE 2: COUNTDOWN TO NEXT EXAM SEASON ---
        if (upcomingSeason) {
            pill.classList.remove("glow-exam-active");
            pill.classList.add("glow-exam");

            const startDate = new Date(upcomingSeason.startDate);
            const revisionDate = new Date(upcomingSeason.revisionStart);
            const diffMs = startDate - now;
            const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
            const seasonName = isMs ? upcomingSeason.nameMs : upcomingSeason.name;
            const dateStr = `${startDate.getDate()} ${months[startDate.getMonth()]} ${startDate.getFullYear()}`;

            // Revision week state
            if (now >= revisionDate) {
                if (icon) icon.textContent = "\u{1F4D6}";
                const dayWord = isMs ? "hari" : (diffDays === 1 ? "day" : "days");
                text.textContent = isMs
                    ? `Minggu Ulangkaji: ${seasonName} bermula dlm ${diffDays} ${dayWord} (${dateStr})`
                    : `Revision Week: ${seasonName} start in ${diffDays} ${dayWord} (${dateStr})`;
                if (badge) {
                    badge.textContent = isMs ? "Ulangkaji" : "Revision";
                    badge.style.background = "rgba(234, 179, 8, 0.15)";
                    badge.style.color = "#eab308";
                }
            } else if (diffDays > 1) {
                // Multi-day countdown
                if (icon) icon.textContent = "\u23F3";
                const dayWord = isMs ? "hari" : "days";
                text.textContent = isMs
                    ? `${seasonName} bermula dlm ${diffDays} ${dayWord} (${dateStr})`
                    : `${seasonName} start in ${diffDays} ${dayWord} (${dateStr})`;
                if (badge) {
                    badge.textContent = isMs ? "Peperiksaan" : "Finals";
                    badge.style.background = "rgba(168, 85, 247, 0.15)";
                    badge.style.color = "#c084fc";
                }
            } else {
                // Exam eve: Hours and minutes countdown
                const hoursLeft = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60)));
                const minsLeft = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
                if (icon) icon.textContent = "\u26A1";
                text.textContent = isMs
                    ? `${seasonName} bermula esok dlm ${hoursLeft}j ${minsLeft}m!`
                    : `${seasonName} start tomorrow in ${hoursLeft}h ${minsLeft}m!`;
                if (badge) {
                    badge.textContent = isMs ? "Esok!" : "Tomorrow!";
                    badge.style.background = "rgba(168, 85, 247, 0.25)";
                    badge.style.color = "#c084fc";
                }
            }
        }
    }

    // Interactive: Click pill to smooth scroll and focus past exams subject search
    if (!pill.dataset.listenerAttached) {
        pill.dataset.listenerAttached = "true";
        pill.addEventListener("click", () => {
            const searchBox = document.getElementById("examSubjectInput");
            if (searchBox) {
                searchBox.scrollIntoView({ behavior: "smooth", block: "center" });
                searchBox.focus();
                searchBox.style.boxShadow = "0 0 0 3px rgba(212, 175, 55, 0.45)";
                setTimeout(() => {
                    searchBox.style.boxShadow = "";
                }, 1500);
            }
        });
    }

    updateExamPill();
    setInterval(updateExamPill, 60000);
}


// --- DYNAMIC LIBRARY OPENING HOURS & EXAM SEASON 24H SMART PILL ---
function initLibraryHoursPill() {
    const pill = document.getElementById("libraryHoursPill");
    const icon = document.getElementById("libraryPillIcon");
    const text = document.getElementById("libraryPillText");
    const badge = document.getElementById("libraryPillBadge");
    if (!pill || !text) return;

    // Exam Seasons (24h Study Area open continuous at Main Entrance)
    const examSeasons = [
        { start: "2027-01-09", end: "2027-01-31" },
        { start: "2027-07-03", end: "2027-07-25" }
    ];

    // Semester Breaks (Mon-Fri 8:00 AM - 5:00 PM, Weekends Closed)
    const semesterBreaks = [
        { start: "2026-08-31", end: "2026-09-27" },
        { start: "2026-11-07", end: "2026-11-15" },
        { start: "2027-02-01", end: "2027-03-21" },
        { start: "2027-05-08", end: "2027-05-16" },
        { start: "2027-07-26", end: "2027-09-26" }
    ];

    // Public Holidays
    const holidays = {
        "2026-08-31": { en: "National Day", ms: "Hari Kebangsaan" },
        "2026-09-16": { en: "Malaysia Day", ms: "Hari Malaysia" },
        "2026-09-24": { en: "Maulidur Rasul", ms: "Maulidur Rasul" },
        "2026-11-08": { en: "Deepavali", ms: "Hari Deepavali" },
        "2026-12-25": { en: "Christmas Day", ms: "Hari Krismas" },
        "2027-01-01": { en: "New Year's Day", ms: "Tahun Baru 2027" },
        "2027-02-06": { en: "Chinese New Year", ms: "Tahun Baru Cina" },
        "2027-02-07": { en: "Chinese New Year", ms: "Tahun Baru Cina" },
        "2027-03-09": { en: "Hari Raya Aidilfitri", ms: "Hari Raya Aidilfitri" },
        "2027-03-10": { en: "Hari Raya Aidilfitri", ms: "Hari Raya Aidilfitri" },
        "2027-05-01": { en: "Labour Day", ms: "Hari Pekerja" },
        "2027-05-20": { en: "Wesak Day", ms: "Hari Wesak" }
    };

    function updateLibraryPill() {
        const now = new Date();
        const isMs = (typeof currentLang !== 'undefined' && currentLang === 'ms') || document.documentElement.lang === 'ms';

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const dayOfMonth = String(now.getDate()).padStart(2, '0');
        const dateKey = `${year}-${month}-${dayOfMonth}`;

        const day = now.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
        const timeMinutes = now.getHours() * 60 + now.getMinutes();

        const isExamSeason = examSeasons.some(es => dateKey >= es.start && dateKey <= es.end);
        const isBreak = semesterBreaks.some(sb => dateKey >= sb.start && dateKey <= sb.end);
        const holiday = holidays[dateKey];

        function applyPill(glowClass, iconChar, textStr, badgeText, badgeBg, badgeColor) {
            pill.classList.remove("glow-library-open", "glow-library-closed", "glow-library-24h");
            pill.classList.add(glowClass);
            if (icon) icon.textContent = iconChar;
            text.textContent = textStr;
            if (badge) {
                badge.textContent = badgeText;
                badge.style.background = badgeBg;
                badge.style.color = badgeColor;
            }
        }

        // --- CASE 1: EXAM SEASON (Continuous 24-Hour Access) ---
        if (isExamSeason) {
            applyPill(
                "glow-library-24h",
                "\u2728",
                isMs 
                    ? "Dibuka 24 Jam \u00B7 Ruang Ulangkaji"
                    : "Open 24 Hours \u00B7 Study Area",
                isMs ? "Musim Peperiksaan" : "Exam Season",
                "rgba(168, 85, 247, 0.18)",
                "#c084fc"
            );
            return;
        }

        // --- CASE 2: PUBLIC HOLIDAY ---
        if (holiday) {
            const hName = isMs ? holiday.ms : holiday.en;
            applyPill(
                "glow-library-closed",
                "\u{1F512}",
                isMs
                    ? `Ditutup Hari Ini \u00B7 ${hName}`
                    : `Closed Today \u00B7 ${hName}`,
                isMs ? "Cuti Am" : "Holiday",
                "rgba(239, 68, 68, 0.15)",
                "#ef4444"
            );
            return;
        }

        // --- CASE 3: SEMESTER BREAK (Mon-Fri 8am-5pm, Weekends Closed) ---
        if (isBreak) {
            const breakBadge = isMs ? "Cuti Sem" : "Semester Break";
            const breakBadgeBg = "rgba(148, 163, 184, 0.15)";
            const breakBadgeColor = "#94a3b8";

            if (day === 0 || day === 6) {
                // Weekend during break
                applyPill(
                    "glow-library-closed",
                    "\u{1F512}",
                    isMs
                        ? "Ditutup Hari Ini \u00B7 Dibuka Isnin 8:00 PG"
                        : "Closed Today \u00B7 Reopens Mon 8:00 AM",
                    breakBadge,
                    breakBadgeBg,
                    breakBadgeColor
                );
            } else if (day === 5) {
                // Friday during break
                if (timeMinutes < 480) { // Before 8:00 AM
                    applyPill(
                        "glow-library-closed",
                        "\u23F3",
                        isMs
                            ? "Ditutup \u00B7 Dibuka Hari Ini 8:00 PG"
                            : "Closed \u00B7 Opens Today at 8:00 AM",
                        breakBadge,
                        breakBadgeBg,
                        breakBadgeColor
                    );
                } else if (timeMinutes < 735) { // 8:00 AM - 12:15 PM
                    applyPill(
                        "glow-library-open",
                        "\u{1F4D6}",
                        isMs
                            ? "Dibuka Hari Ini \u00B7 8:00 PG \u2013 12:15 PTG"
                            : "Open Today \u00B7 8:00 AM \u2013 12:15 PM",
                        breakBadge,
                        "rgba(16, 185, 129, 0.15)",
                        "#10b981"
                    );
                } else if (timeMinutes < 885) { // 12:15 PM - 2:45 PM
                    applyPill(
                        "glow-library-closed",
                        "\u23F3",
                        isMs
                            ? "Rehat Solat Jumaat \u00B7 Dibuka 2:45 PTG"
                            : "Friday Prayer Break \u00B7 Reopens 2:45 PM",
                        isMs ? "Solat Jumaat" : "Prayer Break",
                        "rgba(234, 179, 8, 0.15)",
                        "#eab308"
                    );
                } else if (timeMinutes < 1020) { // 2:45 PM - 5:00 PM
                    applyPill(
                        "glow-library-open",
                        "\u{1F4D6}",
                        isMs
                            ? "Dibuka Hari Ini \u00B7 2:45 PTG \u2013 5:00 PTG"
                            : "Open Today \u00B7 2:45 PM \u2013 5:00 PM",
                        breakBadge,
                        "rgba(16, 185, 129, 0.15)",
                        "#10b981"
                    );
                } else { // After 5:00 PM
                    applyPill(
                        "glow-library-closed",
                        "\u{1F512}",
                        isMs
                            ? "Ditutup \u00B7 Dibuka Isnin 8:00 PG"
                            : "Closed \u00B7 Reopens Mon 8:00 AM",
                        breakBadge,
                        breakBadgeBg,
                        breakBadgeColor
                    );
                }
            } else {
                // Mon - Thu during break
                if (timeMinutes < 480) {
                    applyPill(
                        "glow-library-closed",
                        "\u23F3",
                        isMs
                            ? "Ditutup \u00B7 Dibuka Hari Ini 8:00 PG"
                            : "Closed \u00B7 Opens Today at 8:00 AM",
                        breakBadge,
                        breakBadgeBg,
                        breakBadgeColor
                    );
                } else if (timeMinutes < 1020) {
                    applyPill(
                        "glow-library-open",
                        "\u{1F4D6}",
                        isMs
                            ? "Dibuka Hari Ini \u00B7 8:00 PG \u2013 5:00 PTG"
                            : "Open Today \u00B7 8:00 AM \u2013 5:00 PM",
                        breakBadge,
                        "rgba(16, 185, 129, 0.15)",
                        "#10b981"
                    );
                } else {
                    applyPill(
                        "glow-library-closed",
                        "\u{1F512}",
                        isMs
                            ? "Ditutup \u00B7 Dibuka Esok 8:00 PG"
                            : "Closed \u00B7 Reopens Tomorrow 8:00 AM",
                        breakBadge,
                        breakBadgeBg,
                        breakBadgeColor
                    );
                }
            }
            return;
        }

        // --- CASE 4: REGULAR ACADEMIC SEMESTER (Mon-Thu 8am-10pm, Fri 8am-12:15pm & 2:45pm-10pm, Weekends Closed) ---
        if (day === 0 || day === 6) {
            applyPill(
                "glow-library-closed",
                "\u{1F512}",
                isMs
                    ? "Ditutup Hari Ini \u00B7 Dibuka Isnin 8:00 PG"
                    : "Closed Today \u00B7 Reopens Mon 8:00 AM",
                isMs ? "Hujung Minggu" : "Weekend",
                "rgba(148, 163, 184, 0.15)",
                "#94a3b8"
            );
        } else if (day === 5) {
            // Friday regular semester
            if (timeMinutes < 480) {
                applyPill(
                    "glow-library-closed",
                    "\u23F3",
                    isMs ? "Ditutup \u00B7 Dibuka Hari Ini 8:00 PG" : "Closed \u00B7 Opens Today at 8:00 AM",
                    isMs ? "Ditutup" : "Closed",
                    "rgba(148, 163, 184, 0.15)",
                    "#94a3b8"
                );
            } else if (timeMinutes < 735) {
                applyPill(
                    "glow-library-open",
                    "\u{1F4D6}",
                    isMs
                        ? "Dibuka Hari Ini \u00B7 8:00 PG \u2013 12:15 PTG"
                        : "Open Today \u00B7 8:00 AM \u2013 12:15 PM",
                    isMs ? "Dibuka" : "Open",
                    "rgba(16, 185, 129, 0.15)",
                    "#10b981"
                );
            } else if (timeMinutes < 885) {
                applyPill(
                    "glow-library-closed",
                    "\u23F3",
                    isMs ? "Rehat Solat Jumaat \u00B7 Dibuka 2:45 PTG" : "Friday Prayer Break \u00B7 Reopens 2:45 PM",
                    isMs ? "Solat Jumaat" : "Prayer Break",
                    "rgba(234, 179, 8, 0.15)",
                    "#eab308"
                );
            } else if (timeMinutes < 1320) {
                applyPill(
                    "glow-library-open",
                    "\u{1F4D6}",
                    isMs ? "Dibuka Hari Ini \u00B7 2:45 PTG \u2013 10:00 MLM" : "Open Today \u00B7 2:45 PM \u2013 10:00 PM",
                    isMs ? "Dibuka" : "Open",
                    "rgba(16, 185, 129, 0.15)",
                    "#10b981"
                );
            } else {
                applyPill(
                    "glow-library-closed",
                    "\u{1F512}",
                    isMs ? "Ditutup \u00B7 Dibuka Isnin 8:00 PG" : "Closed \u00B7 Reopens Mon 8:00 AM",
                    isMs ? "Ditutup" : "Closed",
                    "rgba(148, 163, 184, 0.15)",
                    "#94a3b8"
                );
            }
        } else {
            // Mon - Thu regular semester
            if (timeMinutes < 480) {
                applyPill(
                    "glow-library-closed",
                    "\u23F3",
                    isMs ? "Ditutup \u00B7 Dibuka Hari Ini 8:00 PG" : "Closed \u00B7 Opens Today at 8:00 AM",
                    isMs ? "Ditutup" : "Closed",
                    "rgba(148, 163, 184, 0.15)",
                    "#94a3b8"
                );
            } else if (timeMinutes < 1320) {
                applyPill(
                    "glow-library-open",
                    "\u{1F4D6}",
                    isMs ? "Dibuka Hari Ini \u00B7 8:00 PG \u2013 10:00 MLM" : "Open Today \u00B7 8:00 AM \u2013 10:00 PM",
                    isMs ? "Dibuka" : "Open",
                    "rgba(16, 185, 129, 0.15)",
                    "#10b981"
                );
            } else {
                applyPill(
                    "glow-library-closed",
                    "\u{1F512}",
                    isMs ? "Ditutup Malam Ini \u00B7 Dibuka 8:00 PG" : "Closed Tonight \u00B7 Reopens 8:00 AM",
                    isMs ? "Ditutup" : "Closed",
                    "rgba(148, 163, 184, 0.15)",
                    "#94a3b8"
                );
            }
        }
    }

    // Interactive: Click pill to smooth scroll and focus library opening hours
    if (!pill.dataset.listenerAttached) {
        pill.dataset.listenerAttached = "true";
        pill.addEventListener("click", () => {
            const hoursHeader = document.getElementById("labelLibHours");
            if (hoursHeader) {
                const card = hoursHeader.closest("div");
                if (card) {
                    card.scrollIntoView({ behavior: "smooth", block: "center" });
                    card.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.45)";
                    card.style.transition = "box-shadow 0.3s ease";
                    setTimeout(() => {
                        card.style.boxShadow = "";
                    }, 1500);
                }
            }
        });
    }

    updateLibraryPill();
    setInterval(updateLibraryPill, 60000);
}

function initLibraryAndExams() {
    const btnSearchExams = document.getElementById("btnSearchExams");
    const examSubjectInput = document.getElementById("examSubjectInput");

    if (btnSearchExams && examSubjectInput) {
        btnSearchExams.addEventListener("click", () => {
            searchExamSubject(examSubjectInput.value);
        });

        examSubjectInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                searchExamSubject(examSubjectInput.value);
            }
        });
    }

    initExamSeasonPill();
    initLibraryHoursPill();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLibraryAndExams);
} else {
    initLibraryAndExams();
}
