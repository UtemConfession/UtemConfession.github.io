// gpa.js — UTeM GPA & CGPA Calculator logic

const gpaRowsContainer = document.getElementById("gpaRows");
const addRowBtn = document.getElementById("addRowBtn");
const clearGpaBtn = document.getElementById("clearGpaBtn");
const currentSemGpaVal = document.getElementById("currentSemGpa");
const totalCreditsVal = document.getElementById("totalCreditsVal");
const calculatedCgpaVal = document.getElementById("calculatedCgpa");
const prevCgpaInput = document.getElementById("prevCgpa");
const prevCreditsInput = document.getElementById("prevCredits");

const gradePoints = {
    'A': 4.00, 'A-': 3.70,
    'B+': 3.30, 'B': 3.00, 'B-': 2.70,
    'C+': 2.30, 'C': 2.00, 'C-': 1.70,
    'D+': 1.30, 'D': 1.00,
    'F': 0.00
};

function addCalculatorRow(subjName = '', credit = 3, grade = 'A') {
    const rowId = 'row-' + Date.now() + Math.random().toString(36).substr(2, 5);
    const tr = document.createElement("tr");
    tr.id = rowId;
    tr.className = "gpa-subject-row";

    tr.innerHTML = `
        <td><input type="text" placeholder="Subject Name (e.g. OOP)" value="${subjName}" class="subj-name-input"></td>
        <td>
            <select class="subj-credit-select">
                <option value="1" ${credit == 1 ? 'selected' : ''}>1 Credit</option>
                <option value="2" ${credit == 2 ? 'selected' : ''}>2 Credits</option>
                <option value="3" ${credit == 3 ? 'selected' : ''}>3 Credits</option>
                <option value="4" ${credit == 4 ? 'selected' : ''}>4 Credits</option>
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

    rows.forEach(row => {
        const credit = parseFloat(row.querySelector(".subj-credit-select").value) || 0;
        const gradeLetter = row.querySelector(".subj-grade-select").value;
        const point = gradePoints[gradeLetter] !== undefined ? gradePoints[gradeLetter] : 0.00;

        totalCredits += credit;
        totalGradePoints += (credit * point);
    });

    let currentGPA = 0.00;
    if (totalCredits > 0) {
        currentGPA = totalGradePoints / totalCredits;
    }

    currentSemGpaVal.textContent = currentGPA.toFixed(2);
    totalCreditsVal.textContent = totalCredits;

    const prevCgpa = parseFloat(prevCgpaInput.value) || 0;
    const prevCredits = parseFloat(prevCreditsInput.value) || 0;

    const cumulativeCredits = prevCredits + totalCredits;
    const cumulativePoints = (prevCgpa * prevCredits) + totalGradePoints;

    let targetCGPA = 0.00;
    if (cumulativeCredits > 0) {
        targetCGPA = cumulativePoints / cumulativeCredits;
    }

    calculatedCgpaVal.textContent = targetCGPA.toFixed(2);
}

if (addRowBtn) {
    addRowBtn.addEventListener("click", () => addCalculatorRow());
}

if (clearGpaBtn) {
    clearGpaBtn.addEventListener("click", () => {
        gpaRowsContainer.innerHTML = '';
        prevCgpaInput.value = '';
        prevCreditsInput.value = '';
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 3, 'A');
        addCalculatorRow('', 4, 'B+');
        calculateGpa();
    });
}

if (prevCgpaInput) prevCgpaInput.addEventListener("input", calculateGpa);
if (prevCreditsInput) prevCreditsInput.addEventListener("input", calculateGpa);
