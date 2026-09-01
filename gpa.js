// gpa.js — UTeM Forgiving & Smart GPA / CGPA Calculator (with LocalStorage Auto-Save)

const gpaRowsContainer = document.getElementById("gpaRows");
const addRowBtn = document.getElementById("addRowBtn");
const clearGpaBtn = document.getElementById("clearGpaBtn");
const currentSemGpaVal = document.getElementById("currentSemGpa");
const totalCreditsVal = document.getElementById("totalCreditsVal");
const calculatedCgpaVal = document.getElementById("calculatedCgpa");
const prevCgpaInput = document.getElementById("prevCgpa");
const prevCreditsInput = document.getElementById("prevCredits");
const gpaEstimationNote = document.getElementById("gpaEstimationNote");

const gradePoints = {
    'A': 4.00, 'A-': 3.70,
    'B+': 3.30, 'B': 3.00, 'B-': 2.70,
    'C+': 2.30, 'C': 2.00, 'C-': 1.70,
    'D+': 1.30, 'D': 1.00,
    'F': 0.00
};

const DEFAULT_SUBJECT_CREDIT = 3; // Standard 3-credit course in Malaysian universities
const GPA_STORAGE_KEY = "ucpm_gpa_state";

function saveGpaState() {
    try {
        const rows = document.querySelectorAll(".gpa-subject-row");
        const rowsData = [];
        rows.forEach(row => {
            const name = row.querySelector(".subj-name-input") ? row.querySelector(".subj-name-input").value : "";
            const credit = row.querySelector(".subj-credit-select") ? row.querySelector(".subj-credit-select").value : "3";
            const grade = row.querySelector(".subj-grade-select") ? row.querySelector(".subj-grade-select").value : "A";
            rowsData.push({ name, credit, grade });
        });

        const state = {
            prevCgpa: prevCgpaInput ? prevCgpaInput.value : "",
            prevCredits: prevCreditsInput ? prevCreditsInput.value : "",
            rows: rowsData
        };

        localStorage.setItem(GPA_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.warn("GPA autosave warning:", e);
    }
}

function restoreGpaState() {
    try {
        const saved = localStorage.getItem(GPA_STORAGE_KEY);
        if (!saved) return false;

        const data = JSON.parse(saved);
        if (!data || !Array.isArray(data.rows) || data.rows.length === 0) return false;

        if (gpaRowsContainer) gpaRowsContainer.innerHTML = "";
        if (prevCgpaInput && data.prevCgpa !== undefined) prevCgpaInput.value = data.prevCgpa;
        if (prevCreditsInput && data.prevCredits !== undefined) prevCreditsInput.value = data.prevCredits;

        data.rows.forEach(r => {
            addCalculatorRow(r.name || "", parseInt(r.credit, 10) || 3, r.grade || "A", false);
        });

        calculateGpa();
        return true;
    } catch (e) {
        console.warn("GPA restore warning:", e);
        return false;
    }
}

function addCalculatorRow(subjName = '', credit = 3, grade = 'A', shouldSave = true) {
    if (!gpaRowsContainer) return;
    const rowId = 'row-' + Date.now() + Math.random().toString(36).substr(2, 5);
    const tr = document.createElement("tr");
    tr.id = rowId;
    tr.className = "gpa-subject-row";

    tr.innerHTML = `
        <td><input type="text" placeholder="Subject Title (Optional)" value="${subjName}" class="subj-name-input"></td>
        <td>
            <select class="subj-credit-select">
                <option value="3" ${credit == 3 ? 'selected' : ''}>3 (Default)</option>
                <option value="1" ${credit == 1 ? 'selected' : ''}>1 (Lab / Co-curr)</option>
                <option value="2" ${credit == 2 ? 'selected' : ''}>2 (Short Course)</option>
                <option value="4" ${credit == 4 ? 'selected' : ''}>4 (Major / FYP)</option>
                <option value="5" ${credit == 5 ? 'selected' : ''}>5</option>
                <option value="6" ${credit == 6 ? 'selected' : ''}>6</option>
            </select>
        </td>
        <td>
            <select class="subj-grade-select">
                ${Object.keys(gradePoints).map(g => `<option value="${g}" ${g === grade ? 'selected' : ''}>${g} (${gradePoints[g].toFixed(2)})</option>`).join('')}
            </select>
        </td>
        <td>
            <button class="btn btn-danger btn-sm delete-row-btn" type="button" title="Remove Subject" onclick="removeCalculatorRow('${rowId}')">✕</button>
        </td>
    `;
    gpaRowsContainer.appendChild(tr);

    tr.querySelector(".subj-name-input").addEventListener("input", saveGpaState);
    tr.querySelector(".subj-credit-select").addEventListener("change", calculateGpa);
    tr.querySelector(".subj-grade-select").addEventListener("change", calculateGpa);
    
    if (shouldSave) {
        calculateGpa();
    }
}

window.removeCalculatorRow = function(rowId) {
    const row = document.getElementById(rowId);
    if (row) {
        row.remove();
        calculateGpa();
    }
};

function calculateGpa() {
    const rows = document.querySelectorAll(".gpa-subject-row");
    let totalCredits = 0;
    let totalGradePoints = 0;
    let autoCreditCount = 0;

    rows.forEach(row => {
        let credit = parseFloat(row.querySelector(".subj-credit-select").value);
        if (isNaN(credit) || credit <= 0) {
            credit = DEFAULT_SUBJECT_CREDIT;
            autoCreditCount++;
        }

        const gradeLetter = row.querySelector(".subj-grade-select").value;
        const point = gradePoints[gradeLetter] !== undefined ? gradePoints[gradeLetter] : 0.00;

        totalCredits += credit;
        totalGradePoints += (credit * point);
    });

    let currentGPA = 0.00;
    if (totalCredits > 0) {
        currentGPA = totalGradePoints / totalCredits;
    }

    if (currentSemGpaVal) currentSemGpaVal.textContent = currentGPA.toFixed(2);
    if (totalCreditsVal) totalCreditsVal.textContent = totalCredits;

    // Forgiving Prior CGPA Calculation
    let prevCgpa = parseFloat(prevCgpaInput ? prevCgpaInput.value : '');
    let prevCredits = parseFloat(prevCreditsInput ? prevCreditsInput.value : '');

    let noteText = "";

    // Forgiving Rule 1: If user entered prior CGPA but left prior credits blank -> auto-estimate prior credits as 15 (1 sem)
    if (!isNaN(prevCgpa) && prevCgpa > 0 && (isNaN(prevCredits) || prevCredits <= 0)) {
        prevCredits = 15;
        noteText = "💡 Prior credits estimated at 15 credits (1 semester average).";
    }

    let targetCGPA = currentGPA;

    if (!isNaN(prevCgpa) && prevCgpa > 0 && prevCredits > 0) {
        const cumulativeCredits = prevCredits + totalCredits;
        const cumulativePoints = (prevCgpa * prevCredits) + totalGradePoints;

        if (cumulativeCredits > 0) {
            targetCGPA = cumulativePoints / cumulativeCredits;
        }
    }

    if (calculatedCgpaVal) calculatedCgpaVal.textContent = targetCGPA.toFixed(2);

    // Dean's List Badge (Displayed strictly for 3.50 - 4.00)
    const deansListBadge = document.getElementById("deansListBadge");
    if (deansListBadge) {
        if (currentGPA >= 3.50 || targetCGPA >= 3.50) {
            deansListBadge.style.display = "flex";
        } else {
            deansListBadge.style.display = "none";
        }
    }

    // First Class Badge (Displayed strictly for 3.75 - 4.00)
    const firstClassBadge = document.getElementById("firstClassBadge");
    if (firstClassBadge) {
        if (currentGPA >= 3.75 || targetCGPA >= 3.75) {
            firstClassBadge.style.display = "flex";
        } else {
            firstClassBadge.style.display = "none";
        }
    }

    if (gpaEstimationNote) {
        if (noteText) {
            gpaEstimationNote.style.display = "block";
            gpaEstimationNote.textContent = noteText;
        } else if (autoCreditCount > 0) {
            gpaEstimationNote.style.display = "block";
            gpaEstimationNote.textContent = `✨ Auto-estimating ${autoCreditCount} course(s) using standard 3-credit load.`;
        } else {
            gpaEstimationNote.style.display = "none";
        }
    }

    // Trigger ad loading after calculation
    const gpaAdContainer = document.getElementById("gpaAdContainer");
    if (gpaAdContainer) {
        gpaAdContainer.style.display = "block";
        if (window.initAdsInContainer) {
            setTimeout(() => window.initAdsInContainer(gpaAdContainer), 50);
        }
    }

    // Auto-save state
    saveGpaState();
}

if (addRowBtn) {
    addRowBtn.addEventListener("click", () => addCalculatorRow());
}

if (clearGpaBtn) {
    clearGpaBtn.addEventListener("click", () => {
        try {
            localStorage.removeItem(GPA_STORAGE_KEY);
        } catch (e) {}
        if (gpaRowsContainer) gpaRowsContainer.innerHTML = '';
        if (prevCgpaInput) prevCgpaInput.value = '';
        if (prevCreditsInput) prevCreditsInput.value = '';
        // Add 1 single fresh subject row for clean entry
        addCalculatorRow('', 3, 'A');
        calculateGpa();
    });
}

if (prevCgpaInput) prevCgpaInput.addEventListener("input", calculateGpa);
if (prevCreditsInput) prevCreditsInput.addEventListener("input", calculateGpa);

// Course Lookup & Auto-Fill Handler
const btnAutoFillCourse = document.getElementById("btnAutoFillCourse");
const courseLookupSelect = document.getElementById("courseLookupSelect");

if (btnAutoFillCourse && courseLookupSelect) {
    btnAutoFillCourse.addEventListener("click", () => {
        const val = courseLookupSelect.value;
        if (!val) {
            if (typeof showToast === "function") {
                showToast("Please choose a course code from the dropdown.", "warning");
            }
            return;
        }

        const parts = val.split("|");
        if (parts.length >= 3) {
            const courseTitle = `${parts[0]} - ${parts[1]}`;
            const credits = parseInt(parts[2], 10) || 3;
            addCalculatorRow(courseTitle, credits, 'A');
            calculateGpa();
            if (typeof showToast === "function") {
                showToast(`➕ Added ${courseTitle} (${credits} Credits) to calculator!`, "success");
            }
        }
    });
}

function initGpaCalculator() {
    if (!gpaRowsContainer) return;
    const restored = restoreGpaState();
    if (!restored && gpaRowsContainer.children.length === 0) {
        addCalculatorRow('', 3, 'B');
        addCalculatorRow('', 3, 'B');
        addCalculatorRow('', 3, 'B');
        addCalculatorRow('', 3, 'B');
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGpaCalculator);
} else {
    initGpaCalculator();
}
