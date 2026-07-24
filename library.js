// library.js — Handles Past Year Exam search logic & Library tab helpers

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

document.addEventListener("DOMContentLoaded", () => {
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
});
