// archive.js — Confessions Archive Client (Read-Only API Gateway, Pagination & Modal Engine)

// DOM Element Selectors
const archiveSearch = document.getElementById("archiveSearch");
const archiveSortSelect = document.getElementById("archiveSortSelect");
const archiveContainer = document.getElementById("archiveContainer");
const archiveCountBadge = document.getElementById("archiveCountBadge");
const archiveCatPills = document.getElementById("archiveCatPills");
const archiveEmotionSelect = document.getElementById("archiveEmotionSelect");
const archiveYearSelect = document.getElementById("archiveYearSelect");

// Pagination & Query State
let currentPage = 1;
const pageSize = 12; // 12 cards per page
let totalPages = 1;
let hasMorePages = false;
let isFetchingArchive = false;
let currentCategory = "all";
let currentEmotion = "all";
let currentYear = "all";

// Fallback Local Dataset (Categorized Raw Confessions)
const defaultArchiveData = [
    {
        archiveId: "ARC-20260721-001",
        category: "Rant",
        content: "Library aircon broke down again during finals week. Unbearable heat while studying at Perpustakaan Laman Hikmah! Please fix it fast!",
        title: "Library Aircon Breakdown",
        summary: "Library aircon broke down during finals week causing unbearable heat.",
        emotion: "Anger",
        tags: "library, aircon, FKE, UTeM",
        interestingScore: 88,
        date: "2026-07-21 21:15"
    },
    {
        archiveId: "ARC-20260721-002",
        category: "Funny",
        content: "Accidentally called my lecturer 'Mom' in front of 200 students in the main hall. Everyone burst into laughter including the prof!",
        title: "Lecturer Called Mom",
        summary: "Accidentally called lecturer 'Mom' in front of 200 students.",
        emotion: "Humor",
        tags: "lecturer, mom, hall, UTeMHumor",
        interestingScore: 95,
        date: "2026-07-21 19:40"
    },
    {
        archiveId: "ARC-20260721-003",
        category: "Horror",
        content: "Saw a shadowy figure standing outside FKE block at 3 AM during late-night lab session. My roommate and I panicked so hard, even the security guard was terrified!",
        title: "FKE Block 3 AM Shadow",
        summary: "Saw a shadowy figure standing outside FKE block late at night.",
        emotion: "Fear",
        tags: "ghost, midnight, roommate, security guard, FKE",
        interestingScore: 97,
        date: "2026-07-21 02:10"
    },
    {
        archiveId: "ARC-20260720-004",
        category: "Campus",
        content: "UTeM shuttle buses need real-time GPS tracking for all routes to prevent waiting 45 minutes in the sun.",
        title: "Real-Time Bus GPS Needed",
        summary: "UTeM shuttle buses need real-time GPS tracking for student convenience.",
        emotion: "Neutral",
        tags: "shuttle bus, transport, UTeM",
        interestingScore: 68,
        date: "2026-07-20 16:25"
    },
    {
        archiveId: "ARC-20260720-005",
        category: "Love",
        content: "To the girl in blue hoodie at FPTT cafe: your smile made my day! Hope we can grab boba together sometime.",
        title: "Blue Hoodie at FPTT Cafe",
        summary: "Compliment to girl in blue hoodie at FPTT cafe.",
        emotion: "Joy",
        tags: "campus crush, FPTT, boba",
        interestingScore: 91,
        date: "2026-07-20 14:05"
    },
    {
        archiveId: "ARC-20260719-006",
        category: "Academic",
        content: "Passed Data Structures after studying non-stop for 48 straight hours! So heartwarming, grateful and blessed for my friends who helped me study.",
        title: "Passed Data Structures!",
        summary: "Passed Data Structures after 48 hours of non-stop studying.",
        emotion: "Gratitude",
        tags: "FTMK, exams, study group",
        interestingScore: 91,
        date: "2026-07-19 11:30"
    }
];

// Active Client Memory dataset
let loadedArchiveItems = [];

/**
 * Ensures Read More Modal overlay container exists in DOM
 */
function ensureArchiveModalExists() {
    let modal = document.getElementById("archiveDetailModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "archiveDetailModal";
        modal.className = "archive-modal-overlay";
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(8px);
            display: none; justify-content: center; align-items: center;
            z-index: 9999; padding: 20px; box-sizing: border-box;
        `;
        modal.innerHTML = `
            <div class="archive-modal-content" style="
                background: var(--bg-surface, #1e293b); color: var(--text-primary, #f8fafc);
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
                border-radius: 16px; width: 100%; max-width: 600px; max-height: 85vh;
                overflow-y: auto; padding: 24px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                position: relative; animation: modalFadeIn 0.25s ease-out;
            ">
                <button id="closeArchiveModalBtn" style="
                    position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.1);
                    border: none; color: #f8fafc; font-size: 1.2rem; width: 32px; height: 32px;
                    border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;
                ">&times;</button>
                <div id="archiveModalBody"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Bind close events
        modal.querySelector("#closeArchiveModalBtn").addEventListener("click", closeArchiveModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeArchiveModal();
        });
    }
}

/**
 * Opens Read More Modal displaying full confession content & metadata
 */
function openArchiveModal(item) {
    ensureArchiveModalExists();
    const modal = document.getElementById("archiveDetailModal");
    const body = document.getElementById("archiveModalBody");
    if (!modal || !body) return;

    const tagsHtml = item.tags ? item.tags.split(",").map(t => `<span style="display:inline-block; background:rgba(255,255,255,0.08); padding:3px 8px; border-radius:6px; font-size:0.75rem; margin-right:4px; margin-top:4px;">#${t.trim().replace(/^#/, '')}</span>`).join("") : "";

    body.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:12px; flex-wrap:wrap;">
            <span style="background:rgba(59,130,246,0.2); color:#60a5fa; font-weight:600; font-size:0.8rem; padding:4px 10px; border-radius:12px;">
                ${escapeHtml(item.category) || "General"}
            </span>
            ${item.emotion && item.emotion !== "Neutral" ? `<span style="background:rgba(236,72,153,0.2); color:#f472b6; font-size:0.8rem; padding:4px 10px; border-radius:12px;">${escapeHtml(item.emotion)}</span>` : ""}
            <span style="font-size:0.8rem; color:var(--text-muted, #94a3b8);">${escapeHtml(item.date) || ""}</span>
        </div>
        ${item.title ? `<h3 style="margin: 0 0 12px 0; font-size: 1.25rem; color: #f8fafc; font-weight: 700;">${escapeHtml(item.title)}</h3>` : ""}
        <div style="font-size: 0.95rem; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; margin-bottom: 16px; border-left: 3px solid #3b82f6; padding-left: 12px;">${escapeHtml(item.content)}</div>
        ${tagsHtml ? `<div style="margin-bottom: 16px;">${tagsHtml}</div>` : ""}
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.1); padding-top:12px; font-size:0.8rem; color:#94a3b8;">
            <span>⭐ Rating: ${escapeHtml(item.interestingScore) || 50}/100</span>
            ${item.telegramLink ? `<a href="${escapeHtml(item.telegramLink)}" target="_blank" rel="noopener noreferrer" style="color:#38bdf8; text-decoration:none; display:inline-flex; align-items:center; gap:4px;">✈️ Open in Telegram</a>` : ""}
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeArchiveModal() {
    const modal = document.getElementById("archiveDetailModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

/**
 * Fetches archived confessions from Google Apps Script Read-Only API Gateway
 */
async function fetchArchiveFromApi(appendMode = false) {
    if (typeof APPS_SCRIPT_WEBHOOK === "undefined" || !APPS_SCRIPT_WEBHOOK) {
        if (!appendMode) loadedArchiveItems = [...defaultArchiveData];
        renderArchiveConfessions();
        return;
    }

    try {
        isFetchingArchive = true;
        if (!appendMode) {
            currentPage = 1;
            loadedArchiveItems = [];
        }

        const searchQuery = archiveSearch ? archiveSearch.value.trim() : "";
        const sortOrder = archiveSortSelect ? archiveSortSelect.value : "latest";

        const params = new URLSearchParams({
            action: "getArchive",
            page: currentPage,
            limit: pageSize,
            category: currentCategory,
            emotion: currentEmotion,
            year: currentYear,
            search: searchQuery,
            sort: sortOrder
        });

        const response = await fetch(`${APPS_SCRIPT_WEBHOOK}?${params.toString()}`, { method: "GET" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const result = await response.json();

        if (result && result.status === "success" && Array.isArray(result.data)) {
            const mappedData = result.data.map(item => ({
                archiveId: item.archiveId || `ARC-${Math.random()}`,
                category: item.category || "General",
                content: item.content || "",
                title: item.title || "",
                summary: item.summary || "",
                emotion: item.emotion || "Neutral",
                tags: item.tags || "",
                interestingScore: item.interestingScore || 50,
                telegramLink: item.telegramLink || "",
                date: item.date || ""
            }));

            if (appendMode) {
                loadedArchiveItems = [...loadedArchiveItems, ...mappedData];
            } else {
                loadedArchiveItems = mappedData;
            }

            if (result.pagination) {
                totalPages = result.pagination.totalPages || 1;
                hasMorePages = result.pagination.hasMore || false;
            }
        }
    } catch (err) {
        console.warn("Live API fetch failed, using offline fallback:", err);
        if (!appendMode && loadedArchiveItems.length === 0) {
            loadedArchiveItems = [...defaultArchiveData];
        }
    } finally {
        isFetchingArchive = false;
        renderArchiveConfessions();
    }
}

/**
 * Renders filtered archive cards with "Read More" snippet button & "Load More" pagination
 */
function renderArchiveConfessions() {
    if (!archiveContainer) return;
    archiveContainer.innerHTML = "";

    let filtered = [...loadedArchiveItems];

    if (archiveCountBadge) {
        archiveCountBadge.textContent = `${filtered.length} Confessions Loaded`;
    }

    if (filtered.length === 0) {
        archiveContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 40px 0;">No archived confessions found matching your criteria.</p>`;
        return;
    }

    filtered.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "archive-card";
        card.style.cssText = `
            background: var(--bg-surface, #1e293b); border: 1px solid var(--border-color, rgba(255,255,255,0.08));
            border-radius: 12px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: transform 0.2s, box-shadow 0.2s;
        `;

        const isLongText = item.content.length > 140;
        const displayText = isLongText ? item.content.substring(0, 137).trim() + "..." : item.content;

        let cardHeaderHtml = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; gap: 8px;">
            <div style="font-size: 0.8rem; color: #94a3b8; font-weight: 600;">${escapeHtml(formatArchiveDate(item.timestamp))}</div>
            ${item.emotion && item.emotion !== "Neutral" ? `<span class="archive-badge-emotion" style="font-size: 0.75rem; padding: 2px 8px; border-radius: 12px; background: rgba(236, 72, 153, 0.15); color: #f472b6;">${escapeHtml(item.emotion)}</span>` : ""}
        </div>`;

        let readMoreBtnHtml = isLongText ? `
            <button class="read-more-btn" data-index="${index}" style="
                background: none; border: none; color: #38bdf8; font-size: 0.85rem; font-weight: 600;
                cursor: pointer; padding: 4px 0; margin-top: 8px; text-align: left; display: inline-flex; align-items: center; gap: 4px;
            ">Read More ➔</button>
        ` : "";

        let telegramHtml = item.telegramLink ? `
            <div style="margin-top: 10px; text-align: right;">
                <a href="${item.telegramLink}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: #38bdf8; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                    ✈️ View on Telegram
                </a>
            </div>
        ` : "";

        card.innerHTML = `
            <div>
                ${cardHeaderHtml}
                ${item.title ? `<h4 style="margin: 4px 0 8px 0; font-size: 0.95rem; color: #f8fafc; font-weight: 600;">${escapeHtml(item.title)}</h4>` : ""}
                <p class="archive-card-content" style="margin: 0; font-size: 0.9rem; color: #cbd5e1; line-height: 1.5;">${escapeHtml(displayText)}</p>
                ${readMoreBtnHtml}
            </div>
            ${telegramHtml}
        `;

        // Bind Read More button click
        if (isLongText) {
            const btn = card.querySelector(".read-more-btn");
            if (btn) {
                btn.addEventListener("click", () => openArchiveModal(item));
            }
        }

        archiveContainer.appendChild(card);
    });

    // Render "Load More" Pagination Button if more pages exist
    if (hasMorePages) {
        const loadMoreContainer = document.createElement("div");
        loadMoreContainer.style.cssText = "grid-column: 1 / -1; text-align: center; margin-top: 24px;";
        loadMoreContainer.innerHTML = `
            <button id="archiveLoadMoreBtn" style="
                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff;
                border: none; padding: 10px 24px; border-radius: 20px; font-weight: 600; font-size: 0.9rem;
                cursor: pointer; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3); transition: transform 0.2s, opacity 0.2s;
            ">📥 Load More Confessions</button>
        `;
        archiveContainer.appendChild(loadMoreContainer);

        const loadMoreBtn = loadMoreContainer.querySelector("#archiveLoadMoreBtn");
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener("click", () => {
                if (!isFetchingArchive && hasMorePages) {
                    currentPage++;
                    fetchArchiveFromApi(true);
                }
            });
        }
    }
}

// Category Pill Event Listeners
if (archiveCatPills) {
    const pills = archiveCatPills.querySelectorAll(".archive-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentCategory = pill.getAttribute("data-cat") || "all";
            fetchArchiveFromApi(false);
        });
    });
}

// Emotion & Year Selector Listeners
if (archiveEmotionSelect) {
    archiveEmotionSelect.addEventListener("change", () => {
        currentEmotion = archiveEmotionSelect.value || "all";
        fetchArchiveFromApi(false);
    });
}

if (archiveYearSelect) {
    archiveYearSelect.addEventListener("change", () => {
        currentYear = archiveYearSelect.value || "all";
        fetchArchiveFromApi(false);
    });
}

// Search & Sort Event Listeners
if (archiveSearch) {
    archiveSearch.addEventListener("input", () => fetchArchiveFromApi(false));
}

if (archiveSortSelect) {
    archiveSortSelect.addEventListener("change", () => fetchArchiveFromApi(false));
}

// Initial render & API fetch
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        ensureArchiveModalExists();
        fetchArchiveFromApi(false);
    });
} else {
    ensureArchiveModalExists();
    fetchArchiveFromApi(false);
}
