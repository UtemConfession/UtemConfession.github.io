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
        name: "Kampus Teknologi (KT / FTMK) Shuttle",
        type: "special",
        schedules: [
            {
                direction: "Satria > Lestari > Al-Jazari > KT",
                monThu: ["07:30 - 08:00", "13:30 - 14:00"],
                friday: ["07:30 - 08:00"]
            },
            {
                direction: "KT > Satria > Lestari > Al-Jazari",
                monThu: ["13:00 - 13:30", "17:00 - 17:30"],
                friday: ["13:00"]
            }
        ]
    },
    ki: {
        name: "Hop On Campus (KI - Kampus Induk)",
        type: "special",
        schedules: [
            {
                direction: "Satria > Lestari > Al-Jazari > KI",
                monThu: ["07:30 - 08:00", "13:30 - 14:00"],
                friday: ["07:30 - 08:00", "14:30"]
            },
            {
                direction: "KI > Satria > Lestari > Al-Jazari",
                monThu: ["13:00 - 13:30", "16:00 - 16:30", "17:30 - 18:00"],
                friday: ["13:00", "17:00"]
            }
        ]
    },
    ep: {
        name: "Emerald Park Off-Campus (EP) Shuttle",
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
        name: "Main Campus ⇄ Technology Campus (FTMK)",
        type: "regular",
        weekdays: ["07:30","08:00","08:30","09:00","09:30","10:00","11:00","12:00","13:00","14:00","15:00","16:00","16:30","17:00","17:30","18:30","20:00"],
        weekends: ["09:00","11:00","13:00","15:00","17:00","19:00","21:00"]
    },
    satria_regular: {
        name: "Satria College ⇄ Main Campus",
        type: "regular",
        weekdays: ["07:15","07:30","07:45","08:00","08:15","08:30","08:45","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","21:00","22:00"],
        weekends: ["08:00","08:30","09:00","09:30","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"]
    },
    lestari_regular: {
        name: "Lestari College ⇄ Main Campus",
        type: "regular",
        weekdays: ["07:20","07:40","08:00","08:20","08:40","09:00","09:20","09:40","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:20","17:40","18:00","18:30","19:00","19:30","20:00","21:00"],
        weekends: ["08:30","09:15","10:00","10:45","11:30","12:15","13:00","13:45","14:30","15:15","16:00","16:45","17:30","18:15","19:00","19:45","20:30"]
    }
};

let currentBusRoute = 'kt';

function updateBusScheduleDisplay() {
    const route = busRoutesData[currentBusRoute];
    if (!route) return;

    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
    const isFriday = dayOfWeek === 5;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isMonThu = dayOfWeek >= 1 && dayOfWeek <= 4;
    const currentFormattedTime = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

    busRouteTableBody.innerHTML = '';
    nextBusRouteTitle.textContent = route.name;

    // --- CASE A: SPECIAL SEMESTER TIMETABLES ---
    if (route.type === "special") {
        let allTimesToday = [];

        route.schedules.forEach(sec => {
            const headerTr = document.createElement("tr");
            headerTr.style.background = "rgba(212, 175, 55, 0.12)";
            headerTr.innerHTML = `
                <td colspan="3" style="font-weight: 800; color: var(--accent-gold); font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; padding: 10px 14px;">
                    🔄 Route: ${sec.direction}
                </td>
            `;
            busRouteTableBody.appendChild(headerTr);

            sec.monThu.forEach(timeRange => {
                const tr = document.createElement("tr");
                const startTime = timeRange.split(" - ")[0].trim();
                const isToday = isMonThu;
                const isUpcoming = isToday && startTime > currentFormattedTime;

                if (isToday) allTimesToday.push(startTime);

                tr.innerHTML = `
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${timeRange}</td>
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>Isnin – Khamis</td>
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${isToday ? (isUpcoming ? "✦ Scheduled" : "Departed") : "Mon–Thu Only"}</td>
                `;
                busRouteTableBody.appendChild(tr);
            });

            sec.friday.forEach(timeRange => {
                const tr = document.createElement("tr");
                const startTime = timeRange.split(" - ")[0].trim();
                const isToday = isFriday;
                const isUpcoming = isToday && startTime > currentFormattedTime;

                if (isToday) allTimesToday.push(startTime);

                tr.innerHTML = `
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${timeRange}</td>
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>Jumaat</td>
                    <td ${isUpcoming ? "style='color: var(--accent-gold); font-weight: 700;'" : ""}>${isToday ? (isUpcoming ? "✦ Scheduled" : "Departed") : "Friday Only"}</td>
                `;
                busRouteTableBody.appendChild(tr);
            });
        });

        if (isWeekend) {
            nextBusStatusTag.className = "bus-status-tag inactive";
            nextBusStatusTag.textContent = "Weekend — No Service";
            nextBusTimeVal.textContent = "N/A";
            nextBusCountdownVal.textContent = "Shuttle buses operate Mon–Fri only during Special Semester.";
            return;
        }

        allTimesToday.sort();
        const upcomingTime = allTimesToday.find(t => t > currentFormattedTime);

        if (upcomingTime) {
            nextBusStatusTag.className = "bus-status-tag active-now";
            nextBusStatusTag.textContent = isFriday ? "Friday Active Service" : "Mon–Thu Active Service";
            nextBusTimeVal.textContent = upcomingTime;

            const nextBusDate = new Date();
            const [hours, minutes] = upcomingTime.split(":").map(Number);
            nextBusDate.setHours(hours, minutes, 0, 0);

            const minutesDiff = Math.floor((nextBusDate.getTime() - now.getTime()) / (1000 * 60));
            if (minutesDiff < 60) {
                nextBusCountdownVal.textContent = `Arriving in ${minutesDiff} minutes`;
            } else {
                const hrs = Math.floor(minutesDiff / 60);
                const mins = minutesDiff % 60;
                nextBusCountdownVal.textContent = `Arriving in ${hrs}h ${mins}m`;
            }
        } else {
            nextBusStatusTag.className = "bus-status-tag inactive";
            nextBusStatusTag.textContent = "Service Ended for Today";
            nextBusTimeVal.textContent = "N/A";
            nextBusCountdownVal.textContent = "All scheduled buses for today have departed.";
        }
    } 
    // --- CASE B: REGULAR SEMESTER TIMETABLES ---
    else {
        const scheduleTimes = isWeekend ? route.weekends : route.weekdays;
        const scheduleTypeLabel = isWeekend ? "Weekend Schedule" : "Weekday Schedule";
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
                <td ${rowClass}>${isUpcoming ? (nextBusTime === time ? "✦ Next Bus" : "Scheduled") : "Departed"}</td>
            `;
            busRouteTableBody.appendChild(tr);
        });

        if (!nextBusFound && scheduleTimes.length > 0) {
            nextBusTime = scheduleTimes[0];
        }

        nextBusStatusTag.className = "bus-status-tag active-now";
        nextBusStatusTag.textContent = isWeekend ? "Weekend Active Service" : "Weekday Active Service";
        nextBusTimeVal.textContent = nextBusTime || "N/A";

        if (nextBusTime) {
            const nextBusDate = new Date();
            const [hours, minutes] = nextBusTime.split(":").map(Number);
            nextBusDate.setHours(hours, minutes, 0, 0);

            if (nextBusDate.getTime() < now.getTime()) {
                nextBusDate.setDate(nextBusDate.getDate() + 1);
            }

            const minutesDiff = Math.floor((nextBusDate.getTime() - now.getTime()) / (1000 * 60));
            if (minutesDiff < 60) {
                nextBusCountdownVal.textContent = `Arriving in ${minutesDiff} minutes`;
            } else {
                const hrs = Math.floor(minutesDiff / 60);
                const mins = minutesDiff % 60;
                nextBusCountdownVal.textContent = `Arriving in ${hrs}h ${mins}m`;
            }
        } else {
            nextBusCountdownVal.textContent = "Service Ended for Today";
        }
    }

    // Update Bus M10A live route status badge
    const m10aLiveBadge = document.getElementById("m10aLiveBadge");
    if (m10aLiveBadge) {
        if (isWeekend) {
            m10aLiveBadge.style.background = "#e74e9f";
            m10aLiveBadge.textContent = "🟢 Weekend Service Active (Zoo Melaka ⇄ UTeM)";
        } else {
            m10aLiveBadge.style.background = "#3b82f6";
            m10aLiveBadge.textContent = "🟡 Weekday Route Active (Melaka Sentral ⇄ MITC)";
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

// Refresh bus countdown every minute
setInterval(updateBusScheduleDisplay, 60000);
