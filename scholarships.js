// scholarships.js — Scholarship & Financial Aid Tracker filtering & search logic

function filterScholarships() {
    const scholarshipSearch = document.getElementById("scholarshipSearch");
    const scholarshipCards = document.querySelectorAll(".scholarship-card");
    const noScholarshipFoundMsg = document.getElementById("noScholarshipFoundMsg");
    const activeBtn = document.querySelector(".sch-filter-btn.active");

    if (!scholarshipCards || scholarshipCards.length === 0) return;

    const selectedCategory = activeBtn ? activeBtn.getAttribute("data-category") : "all";
    const searchQuery = scholarshipSearch ? scholarshipSearch.value.toLowerCase().trim() : "";

    let visibleCount = 0;

    scholarshipCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        const cardText = card.innerText.toLowerCase();

        const matchesCategory = selectedCategory === "all" || cardCategory === selectedCategory;
        const matchesSearch = !searchQuery || cardText.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (noScholarshipFoundMsg) {
        noScholarshipFoundMsg.style.display = visibleCount === 0 ? "block" : "none";
    }
}

function initScholarships() {
    const scholarshipSearch = document.getElementById("scholarshipSearch");
    const scholarshipFilterBtns = document.querySelectorAll(".sch-filter-btn");

    scholarshipFilterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            scholarshipFilterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterScholarships();
        });
    });

    if (scholarshipSearch) {
        scholarshipSearch.addEventListener("input", filterScholarships);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScholarships);
} else {
    initScholarships();
}
