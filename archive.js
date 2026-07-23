// archive.js — Confessions Archive (Category Filtering + Square Raw Confessions)

const archiveSearch = document.getElementById("archiveSearch");
const archiveSortSelect = document.getElementById("archiveSortSelect");
const archiveContainer = document.getElementById("archiveContainer");
const archiveCountBadge = document.getElementById("archiveCountBadge");
const archiveCatPills = document.getElementById("archiveCatPills");

let selectedCategory = "all";

// Confessions Database (Categorized Raw Confessions)
const confessionArchiveData = [
    {
        uid: "c_001",
        category: "rant",
        content: "Library aircon broke down again during finals week. Unbearable heat!",
        date: "2026-07-21 21:15"
    },
    {
        uid: "c_002",
        category: "funny",
        content: "Accidentally called my lecturer 'Mom' in front of 200 students in the main hall.",
        date: "2026-07-21 19:40"
    },
    {
        uid: "c_003",
        category: "horror",
        content: "Saw a shadowy figure standing outside FKE block at 3 AM during late-night lab session.",
        date: "2026-07-21 02:10"
    },
    {
        uid: "c_004",
        category: "campus",
        content: "UTeM shuttle buses need real-time GPS tracking for all routes.",
        date: "2026-07-20 16:25"
    },
    {
        uid: "c_005",
        category: "love",
        content: "To the girl in blue hoodie at FPTT cafe: your smile made my day!",
        date: "2026-07-20 14:05"
    },
    {
        uid: "c_006",
        category: "academic",
        content: "Passed Data Structures after studying non-stop for 48 straight hours!",
        date: "2026-07-19 11:30"
    },
    {
        uid: "c_007",
        category: "lost",
        content: "Lost a silver stainless steel water bottle at Perpustakaan Laman Hikmah 2nd floor.",
        date: "2026-07-18 15:45"
    },
    {
        uid: "c_008",
        category: "rant",
        content: "Why do people talk so loudly in the quiet study zone? Respect others please!",
        date: "2026-07-17 20:10"
    }
];

function renderArchiveConfessions() {
    if (!archiveContainer) return;
    archiveContainer.innerHTML = "";

    let filtered = [...confessionArchiveData];

    // Filter by Category
    if (selectedCategory && selectedCategory !== "all") {
        filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by Search Query
    const query = archiveSearch ? archiveSearch.value.toLowerCase().trim() : "";
    if (query) {
        filtered = filtered.filter(item => 
            item.content.toLowerCase().includes(query)
        );
    }

    // Sort Order
    const sortOrder = archiveSortSelect ? archiveSortSelect.value : "latest";
    if (sortOrder === "latest") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "oldest") {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (archiveCountBadge) {
        archiveCountBadge.textContent = `${filtered.length} Confessions Found`;
    }

    if (filtered.length === 0) {
        archiveContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 40px 0;">No archived confessions found matching your criteria.</p>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "archive-card";

        // Display RAW confession text only (no dates, no timestamps, no emojis inside box)
        card.innerHTML = `<p class="archive-card-content">${item.content}</p>`;

        archiveContainer.appendChild(card);
    });
}

// Category Pill Event Listeners
if (archiveCatPills) {
    const pills = archiveCatPills.querySelectorAll(".archive-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            selectedCategory = pill.getAttribute("data-cat") || "all";
            renderArchiveConfessions();
        });
    });
}

// Search & Sort Event Listeners
if (archiveSearch) {
    archiveSearch.addEventListener("input", () => renderArchiveConfessions());
}

if (archiveSortSelect) {
    archiveSortSelect.addEventListener("change", () => renderArchiveConfessions());
}

// Initial render
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => renderArchiveConfessions());
} else {
    renderArchiveConfessions();
}
