// gpa.js — UTeM Forgiving & Smart GPA / CGPA Calculator

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

function addCalculatorRow(subjName = '', credit = 3, grade = 'A') {
    if (!gpaRowsContainer) return;
    const rowId = 'row-' + Date.now() + Math.random().toString(36).substr(2, 5);
    const tr = document.createElement("tr");
    tr.id = rowId;
    tr.className = "gpa-subject-row";

    tr.innerHTML = `
        <td><input type="text" placeholder="Subject Title (Optional)" value="${subjName}" class="subj-name-input"></td>
        <td>
            <select class="subj-credit-select">
                <option value="3" ${credit == 3 ? 'selected' : ''}>3 Credits (Default)</option>
                <option value="1" ${credit == 1 ? 'selected' : ''}>1 Credit (Lab/Co-curriculum)</option>
                <option value="2" ${credit == 2 ? 'selected' : ''}>2 Credits (Short Course)</option>
                <option value="4" ${credit == 4 ? 'selected' : ''}>4 Credits (Major/FYP)</option>
                <option value="5" ${credit == 5 ? 'selected' : ''}>5 Credits</option>
                <option value="6" ${credit == 6 ? 'selected' : ''}>6 Credits</option>
            </select>
        </td>
        <td>
            <select class="subj-grade-select">
                ${Object.keys(gradePoints).map(g => `<option value="${g}" ${g === grade ? 'selected' : ''}>${g} (${gradePoints[g].toFixed(2)})</option>`).join('')}
            </select>
        </td>
        <td>
            <button class="btn btn-danger btn-sm delete-row-btn" type="button" onclick="removeCalculatorRow('${rowId}')">✕ Remove</button>
        </td>
    `;
    gpaRowsContainer.appendChild(tr);

    tr.querySelector(".subj-credit-select").addEventListener("change", calculateGpa);
    tr.querySelector(".subj-grade-select").addEventListener("change", calculateGpa);
    calculateGpa();
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
}

if (addRowBtn) {
    addRowBtn.addEventListener("click", () => addCalculatorRow());
}

if (clearGpaBtn) {
    clearGpaBtn.addEventListener("click", () => {
        if (gpaRowsContainer) gpaRowsContainer.innerHTML = '';
        if (prevCgpaInput) prevCgpaInput.value = '';
        if (prevCreditsInput) prevCreditsInput.value = '';
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 4, 'B+');
        addCalculatorRow('', 3, 'A-');
        calculateGpa();
    });
}

if (prevCgpaInput) prevCgpaInput.addEventListener("input", calculateGpa);
if (prevCreditsInput) prevCreditsInput.addEventListener("input", calculateGpa);

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        if (gpaRowsContainer && gpaRowsContainer.children.length === 0) {
            addCalculatorRow('', 3, 'A');
            addCalculatorRow('', 3, 'A');
            addCalculatorRow('', 4, 'B+');
            addCalculatorRow('', 3, 'A-');
        }
    });
} else {
    if (gpaRowsContainer && gpaRowsContainer.children.length === 0) {
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 4, 'B+');
        addCalculatorRow('', 3, 'A-');
    }
}
