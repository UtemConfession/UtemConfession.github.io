// bus.js — Campus shuttle bus schedule display logic (Supports Special Semester & Regular Semester)

const busRoutePills     = document.querySelectorAll(".bus-route-pill");
const busRouteTableBody  = document.getElementById("busRouteTableBody");
const nextBusRouteTitle  = document.getElementById("nextBusRouteTitle");
const nextBusStatusTag   = document.getElementById("nextBusStatusTag");
const nextBusTimeVal     = document.getElementById("nextBusTimeVal");
const nextBusCountdownVal = document.getElementById("nextBusCountdownVal");

const busRoutesData = {
    // --- SPECIAL SEMESTER TIMETABLES (21 JULAI 2026) ---
    kt: {
        name: "KT Shuttle (Ayer Keroh)",
        type: "special",
        schedules: [
            {
                direction: "Satria > Lestari > AJ > KT",
                monThu: ["07:30 - 08:00", "13:30 - 14:00"],
                friday: ["07:30 - 08:00"]
            },
            {
                direction: "KT > Satria > Lestari > AJ",
                monThu: ["13:00 - 13:30", "17:00 - 17:30"],
                friday: ["13:00"]
            }
        ]
    },
    ki: {
        name: "KI Shuttle (Kampus Induk / FTMK)",
        type: "special",
        schedules: [
            {
                direction: "Satria > Lestari > AJ > KI",
                monThu: ["07:30 - 08:00", "13:30 - 14:00"],
                friday: ["07:30 - 08:00", "14:30"]
            },
            {
                direction: "KI > Satria > Lestari > AJ",
                monThu: ["13:00 - 13:30", "16:00 - 16:30", "17:30 - 18:00"],
                friday: ["13:00", "17:00"]
            }
        ]
    },
    ep: {
        name: "Emerald Park (EP) Shuttle",
        type: "special",
        schedules: [
            {
                direction: "EP > KT > KI",
                monThu: ["08:00", "13:00"],
                friday: ["08:00", "14:30"]
            },
            {
                direction: "KI > KT > EP",
                monThu: ["14:00", "17:30"],
                friday: ["12:30", "17:30"]
            }
        ]
    },

    // --- REGULAR SEMESTER TIMETABLES (FULL WEEKEND & WEEKDAY RUNS) ---
    ftmk_regular: {
        name: "KI (FTMK) ⇄ KT (Ayer Keroh)",
        type: "regular",
        weekdays: ["07:30","08:00","08:30","09:00","09:30","10:00","11:00","12:00","13:00","14:00","15:00","16:00","16:30","17:00","17:30","18:30","20:00"],
        weekends: ["09:00","11:00","13:00","15:00","17:00","19:00","21:00"]
    },
    satria_regular: {
        name: "Kolej Satria ⇄ Fakulti",
        type: "regular",
        weekdays: ["07:15","07:30","07:45","08:00","08:15","08:30","08:45","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","21:00","22:00"],
        weekends: ["08:00","08:30","09:00","09:30","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"]
    },
    lestari_regular: {
        name: "Kolej Lestari ⇄ Fakulti",
        type: "regular",
        weekdays: ["07:20","07:40","08:00","08:20","08:40","09:00","09:20","09:40","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:20","17:40","18:00","18:30","19:00","19:30","20:00","21:00"],
        weekends: ["08:30","09:15","10:00","10:45","11:30","12:15","13:00","13:45","14:30","15:15","16:00","16:45","17:30","18:15","19:00","19:45","20:30"]
    }
};

let currentBusRoute = 'kt';

function updateBusScheduleDisplay() {
    const tableBody = document.getElementById("busRouteTableBody") || busRouteTableBody;
    const routeTitle = document.getElementById("nextBusRouteTitle") || nextBusRouteTitle;
    const statusTag = document.getElementById("nextBusStatusTag") || nextBusStatusTag;
    const timeVal = document.getElementById("nextBusTimeVal") || nextBusTimeVal;
    const countdownVal = document.getElementById("nextBusCountdownVal") || nextBusCountdownVal;

    if (!tableBody) return;

    const route = busRoutesData[currentBusRoute];
    if (!route) return;

    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
    const isFriday = dayOfWeek === 5;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isMonThu = dayOfWeek >= 1 && dayOfWeek <= 4;
    const currentFormattedTime = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    const isMs = typeof currentLang !== 'undefined' && currentLang === 'ms';

    tableBody.innerHTML = '';
    if (routeTitle) routeTitle.textContent = route.name;

    // --- CASE A: SPECIAL SEMESTER TIMETABLES ---
    if (route.type === "special") {
        let allTimesToday = [];

        route.schedules.forEach(sec => {
            const headerTr = document.createElement("tr");
            headerTr.style.background = "rgba(212, 175, 55, 0.12)";
            headerTr.innerHTML = `
                <td colspan="3" style="font-weight: 800; color: var(--accent-gold); font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; padding: 10px 14px;">
                    ${sec.direction}
                </td>
            `;
            tableBody.appendChild(headerTr);

            sec.monThu.forEach(timeRange => {
                const tr = document.createElement("tr");
                const startTime = timeRange.split(" - ")[0].trim();
                const isToday = isMonThu;
                const isUpcoming = isToday && startTime > currentFormattedTime;

                if (isToday) allTimesToday.push(startTime);

                const dayText = isMs ? "Isnin – Khamis" : "Mon – Thu";
                const statusText = isToday ? (isUpcoming ? (isMs ? "✦ Mengikut Jadual" : "✦ Scheduled") : (isMs ? "Sudah Berlepas" : "Departed")) : (isMs ? "Bukan Hari Ini" : "Not Today");

                tr.innerHTML = `
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${timeRange}</td>
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${dayText}</td>
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${statusText}</td>
                `;
                tableBody.appendChild(tr);
            });

            sec.friday.forEach(timeRange => {
                const tr = document.createElement("tr");
                const startTime = timeRange.split(" - ")[0].trim();
                const isToday = isFriday;
                const isUpcoming = isToday && startTime > currentFormattedTime;

                if (isToday) allTimesToday.push(startTime);

                const dayText = isMs ? "Jumaat" : "Friday";
                const statusText = isToday ? (isUpcoming ? (isMs ? "✦ Mengikut Jadual" : "✦ Scheduled") : (isMs ? "Sudah Berlepas" : "Departed")) : (isMs ? "Bukan Hari Ini" : "Not Today");

                tr.innerHTML = `
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${timeRange}</td>
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${dayText}</td>
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${statusText}</td>
                `;
                tableBody.appendChild(tr);
            });
        });

        if (isWeekend) {
            if (statusTag) {
                statusTag.className = "bus-status-tag inactive";
                statusTag.textContent = isMs ? "Hujung Minggu — Tiada Servis" : "Weekend — No Service";
            }
            if (timeVal) timeVal.textContent = "N/A";
            if (countdownVal) countdownVal.textContent = isMs ? "Bas shuttle beroperasi Isnin–Jumaat sahaja semasa Semester Khas." : "Shuttle buses operate Mon–Fri only during Special Semester.";
            return;
        }

        allTimesToday.sort();
        const upcomingTime = allTimesToday.find(t => t > currentFormattedTime);

        if (upcomingTime) {
            if (statusTag) {
                statusTag.className = "bus-status-tag active-now";
                statusTag.textContent = isFriday ? (isMs ? "Servis Aktif Jumaat" : "Friday Active Service") : (isMs ? "Servis Aktif Isnin–Khamis" : "Mon–Thu Active Service");
            }
            if (timeVal) timeVal.textContent = upcomingTime;

            const nextBusDate = new Date();
            const [hours, minutes] = upcomingTime.split(":").map(Number);
            nextBusDate.setHours(hours, minutes, 0, 0);

            const minutesDiff = Math.floor((nextBusDate.getTime() - now.getTime()) / (1000 * 60));
            if (countdownVal) {
                if (minutesDiff < 60) {
                    countdownVal.textContent = isMs ? `Tiba dalam ${minutesDiff} minit` : `Arriving in ${minutesDiff} minutes`;
                } else {
                    const hrs = Math.floor(minutesDiff / 60);
                    const mins = minutesDiff % 60;
                    countdownVal.textContent = isMs ? `Tiba dalam ${hrs}j ${mins}m` : `Arriving in ${hrs}h ${mins}m`;
                }
            }
        } else {
            if (statusTag) {
                statusTag.className = "bus-status-tag inactive";
                statusTag.textContent = isMs ? "Servis Tamat Untuk Hari Ini" : "Service Ended for Today";
            }
            if (timeVal) timeVal.textContent = "N/A";
            if (countdownVal) countdownVal.textContent = isMs ? "Semua bas berjadual hari ini sudah berlepas." : "All scheduled buses for today have departed.";
        }
    } 
    // --- CASE B: REGULAR SEMESTER TIMETABLES ---
    else {
        const scheduleTimes = isWeekend ? route.weekends : route.weekdays;
        const scheduleTypeLabel = isWeekend ? (isMs ? "Jadual Hujung Minggu" : "Weekend Schedule") : (isMs ? "Jadual Hari Bekerja" : "Weekday Schedule");
        let nextBusFound = false;
        let nextBusTime = "";

        scheduleTimes.forEach(time => {
            const tr = document.createElement("tr");
            const isUpcoming = time > currentFormattedTime;
            let rowClass = "";

            if (isUpcoming && !nextBusFound) {
                rowClass = "style='color: var(--accent-gold); font-weight: 700;'";
                nextBusTime = time;
                nextBusFound = true;
            }

            tr.innerHTML = `
                <td ${rowClass}>${time}</td>
                <td ${rowClass}>${scheduleTypeLabel}</td>
                <td ${rowClass}>${isUpcoming ? (nextBusTime === time ? (isMs ? "✦ Bas Seterusnya" : "✦ Next Bus") : (isMs ? "Mengikut Jadual" : "Scheduled")) : (isMs ? "Sudah Berlepas" : "Departed")}</td>
            `;
            tableBody.appendChild(tr);
        });

        if (!nextBusFound && scheduleTimes.length > 0) {
            nextBusTime = scheduleTimes[0];
        }

        if (statusTag) {
            statusTag.className = "bus-status-tag active-now";
            statusTag.textContent = isWeekend ? (isMs ? "Servis Aktif Hujung Minggu" : "Weekend Active Service") : (isMs ? "Servis Aktif Hari Bekerja" : "Weekday Active Service");
        }
        if (timeVal) timeVal.textContent = nextBusTime || "N/A";

        if (nextBusTime) {
            const nextBusDate = new Date();
            const [hours, minutes] = nextBusTime.split(":").map(Number);
            nextBusDate.setHours(hours, minutes, 0, 0);

            if (nextBusDate.getTime() < now.getTime()) {
                nextBusDate.setDate(nextBusDate.getDate() + 1);
            }

            const minutesDiff = Math.floor((nextBusDate.getTime() - now.getTime()) / (1000 * 60));
            if (countdownVal) {
                if (minutesDiff < 60) {
                    countdownVal.textContent = isMs ? `Tiba dalam ${minutesDiff} minit` : `Arriving in ${minutesDiff} minutes`;
                } else {
                    const hrs = Math.floor(minutesDiff / 60);
                    const mins = minutesDiff % 60;
                    countdownVal.textContent = isMs ? `Tiba dalam ${hrs}j ${mins}m` : `Arriving in ${hrs}h ${mins}m`;
                }
            }
        } else {
            if (countdownVal) countdownVal.textContent = isMs ? "Servis Tamat Untuk Hari Ini" : "Service Ended for Today";
        }
    }
}

// Standalone function for Bus M10A Live Countdown (runs independently of internal shuttle returns)
function updateM10ANextDeparture() {
    const m10aLiveBadge = document.getElementById("m10aLiveBadge");
    const now = new Date();
    const dayOfWeek = now.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6;
    const currentFormattedTime = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

    const isMs = typeof currentLang !== 'undefined' && currentLang === 'ms';

    if (m10aLiveBadge) {
        if (isWeekend) {
            m10aLiveBadge.style.background = "#e74e9f";
            m10aLiveBadge.textContent = isMs ? "🟢 Servis Jumaat-Ahad (Zoo Melaka ⇄ UTeM)" : "🟢 Friday-Sunday Service Active (Zoo Melaka ⇄ UTeM)";
        } else {
            m10aLiveBadge.style.background = "#3b82f6";
            m10aLiveBadge.textContent = isMs ? "🟡 Laluan Isnin-Khamis (Melaka Sentral ⇄ MITC)" : "🟡 Mon-Thu Route Active (Melaka Sentral ⇄ MITC)";
        }
    }

    const m10aUTeMTimes = ["07:30","09:30","11:30","13:30","15:30","17:30","19:30"];
    const m10aNextBusTimeVal = document.getElementById("m10aNextBusTimeVal");
    const m10aNextBusCountdownVal = document.getElementById("m10aNextBusCountdownVal");
    const m10aNextBusStatusTag = document.getElementById("m10aNextBusStatusTag");
    
    if (!m10aNextBusTimeVal || !m10aNextBusCountdownVal) return;

    if (!isWeekend) {
        if (m10aNextBusStatusTag) {
            m10aNextBusStatusTag.className = "bus-status-tag inactive";
            m10aNextBusStatusTag.style.background = "rgba(239, 68, 68, 0.1)";
            m10aNextBusStatusTag.style.color = "#ef4444";
            m10aNextBusStatusTag.textContent = isMs ? "Jumaat-Ahad Sahaja" : "Friday-Sunday Only";
        }
        m10aNextBusTimeVal.textContent = "N/A";
        m10aNextBusCountdownVal.textContent = isMs ? "Bas tamat di MITC (Isnin-Khamis). Tiada bas UTeM." : "Bus terminates at MITC (Mon-Thu). No UTeM service.";
        return;
    }

    const upcomingM10A = m10aUTeMTimes.find(t => t > currentFormattedTime);

    if (upcomingM10A) {
        if (m10aNextBusStatusTag) {
            m10aNextBusStatusTag.className = "bus-status-tag active-now";
            m10aNextBusStatusTag.style.background = "rgba(231, 78, 159, 0.15)";
            m10aNextBusStatusTag.style.color = "#e74e9f";
            m10aNextBusStatusTag.textContent = isMs ? "Beroperasi Hari Ini" : "Active Service Today";
        }
        m10aNextBusTimeVal.textContent = upcomingM10A;

        const nextBusDate = new Date();
        const [hours, minutes] = upcomingM10A.split(":").map(Number);
        nextBusDate.setHours(hours, minutes, 0, 0);

        const minutesDiff = Math.floor((nextBusDate.getTime() - now.getTime()) / (1000 * 60));
        if (minutesDiff < 60) {
            m10aNextBusCountdownVal.textContent = isMs ? `Berlepas dlm ${minutesDiff} minit` : `Departs in ${minutesDiff} mins`;
        } else {
            const hrs = Math.floor(minutesDiff / 60);
            const mins = minutesDiff % 60;
            m10aNextBusCountdownVal.textContent = isMs ? `Berlepas dlm ${hrs}j ${mins}m` : `Departs in ${hrs}h ${mins}m`;
        }
    } else {
        if (dayOfWeek === 6) { // Saturday, next bus is Sunday
            if (m10aNextBusStatusTag) {
                m10aNextBusStatusTag.className = "bus-status-tag inactive";
                m10aNextBusStatusTag.style.background = "rgba(239, 68, 68, 0.1)";
                m10aNextBusStatusTag.style.color = "#ef4444";
                m10aNextBusStatusTag.textContent = isMs ? "Tamat Operasi (Hari Ini)" : "Service Ended For Today";
            }
            m10aNextBusTimeVal.textContent = isMs ? "07:15 (Esok)" : "07:15 (Tomorrow)";
            const tomorrowBusDate = new Date();
            tomorrowBusDate.setDate(tomorrowBusDate.getDate() + 1);
            tomorrowBusDate.setHours(7, 15, 0, 0);
            const minutesDiff = Math.floor((tomorrowBusDate.getTime() - now.getTime()) / (1000 * 60));
            const hrs = Math.floor(minutesDiff / 60);
            const mins = minutesDiff % 60;
            m10aNextBusCountdownVal.textContent = isMs ? `Bas esok berlepas dlm ${hrs}j ${mins}m` : `Next bus tomorrow in ${hrs}h ${mins}m`;
        } else { // Sunday, next bus is next Saturday
            if (m10aNextBusStatusTag) {
                m10aNextBusStatusTag.className = "bus-status-tag inactive";
                m10aNextBusStatusTag.style.background = "rgba(239, 68, 68, 0.1)";
                m10aNextBusStatusTag.style.color = "#ef4444";
                m10aNextBusStatusTag.textContent = isMs ? "Tamat Operasi (Minggu Ini)" : "Service Ended For Weekend";
            }
            m10aNextBusTimeVal.textContent = "N/A";
            m10aNextBusCountdownVal.textContent = isMs ? "Operasi tamat. Servis seterusnya Sabtu depan." : "Weekend service ended. Next UTeM service on Saturday.";
        }
    }
}

document.querySelectorAll(".bus-route-pill").forEach(pill => {
    pill.addEventListener("click", () => {
        document.querySelectorAll(".bus-route-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        currentBusRoute = pill.getAttribute("data-route");
        updateBusScheduleDisplay();
    });
});

// Refresh bus countdowns every minute
function refreshAllBusSchedules() {
    updateBusScheduleDisplay();
    updateM10ANextDeparture();
}

refreshAllBusSchedules();
setInterval(refreshAllBusSchedules, 60000);

// --- SUB-TAB & SEMESTER TOGGLE EVENT LISTENERS ---
const busTabInternal = document.getElementById("busTabInternal");
const busTabPublic   = document.getElementById("busTabPublic");
const panelInternal  = document.getElementById("panelInternalShuttle");
const panelPublic    = document.getElementById("panelPublicBus");

if (busTabInternal && busTabPublic && panelInternal && panelPublic) {
    busTabInternal.addEventListener("click", () => {
        busTabInternal.classList.add("active");
        busTabPublic.classList.remove("active", "active-pink");
        panelInternal.style.display = "block";
        panelPublic.style.display   = "none";
    });

    busTabPublic.addEventListener("click", () => {
        busTabPublic.classList.add("active", "active-pink");
        busTabInternal.classList.remove("active");
        panelPublic.style.display   = "block";
        panelInternal.style.display = "none";
    });
}

const semToggleSpecial = document.getElementById("semToggleSpecial");
const semToggleRegular = document.getElementById("semToggleRegular");
const pillsSpecialSem  = document.getElementById("pillsSpecialSem");
const pillsRegularSem  = document.getElementById("pillsRegularSem");

if (semToggleSpecial && semToggleRegular && pillsSpecialSem && pillsRegularSem) {
    semToggleSpecial.addEventListener("click", () => {
        semToggleSpecial.classList.add("active");
        semToggleRegular.classList.remove("active");
        pillsSpecialSem.style.display = "flex";
        pillsRegularSem.style.display = "none";
        
        const firstPill = pillsSpecialSem.querySelector(".bus-route-pill");
        if (firstPill) firstPill.click();
    });

    semToggleRegular.addEventListener("click", () => {
        semToggleRegular.classList.add("active");
        semToggleSpecial.classList.remove("active");
        pillsRegularSem.style.display = "flex";
        pillsSpecialSem.style.display = "none";
        
        const firstPill = pillsRegularSem.querySelector(".bus-route-pill");
        if (firstPill) firstPill.click();
    });
}
