// archive.js — Confessions Archive Client Engine (Manual Local Dataset, Search, Filter & Modal)

// DOM Element Selectors
const archiveSearch = document.getElementById("archiveSearch");
const archiveContainer = document.getElementById("archiveContainer");
const archiveCatPills = document.getElementById("archiveCatPills");

// Pagination & Query State
let currentVisibleLimit = 12; // Initial cards shown
const pageIncrement = 12;     // Increment on Load More
let currentCategory = "all";

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
            background: rgba(15, 23, 42, 0.78); backdrop-filter: blur(8px);
            display: none; justify-content: center; align-items: center;
            z-index: 9999; padding: 20px; box-sizing: border-box;
        `;
        modal.innerHTML = `
            <div class="archive-modal-content" style="
                background: var(--bg-surface, #1e293b); color: var(--text-primary, #f8fafc);
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.12));
                border-radius: 16px; width: 100%; max-width: 620px; max-height: 85vh;
                overflow-y: auto; padding: 24px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
                position: relative; animation: modalFadeIn 0.2s ease-out;
            ">
                <button id="closeArchiveModalBtn" style="
                    position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.1);
                    border: none; color: #f8fafc; font-size: 1.2rem; width: 32px; height: 32px;
                    border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;
                    transition: background 0.2s;
                " aria-label="Close modal">&times;</button>
                <div id="archiveModalBody"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Bind close events
        modal.querySelector("#closeArchiveModalBtn").addEventListener("click", closeArchiveModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeArchiveModal();
        });

        // Close on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeArchiveModal();
        });
    }
}

/**
 * Helper to count number of replies in reply string
 */
function getReplyCount(reply) {
    if (!reply) return 0;
    const matches = reply.match(/↳/g);
    return (matches && matches.length > 0) ? matches.length : 1;
}

/**
 * Detects topic keywords in confession content, reply, or tags and returns the most relevant student guide
 */
function getRelatedGuide(item) {
    if (!item) return null;
    const text = `${item.content || ""} ${item.tags || ""} ${item.reply || ""}`.toLowerCase();
    
    if (text.includes("sticker") || text.includes("spku") || text.includes("parking") || text.includes("pelekat") || text.includes("saman motor") || text.includes("saman kereta")) {
        return {
            title: "Student Vehicle Sticker (SPKU) & Parking Rules",
            url: "guide-vehicle-sticker-parking.html",
            icon: "🚗"
        };
    }
    if (text.includes("hostel") || text.includes("kolej kediaman") || text.includes("merit") || text.includes("asrama") || text.includes("satelit") || text.includes("al-jazari") || text.includes("ibnu battuta")) {
        return {
            title: "Hostel & Kolej Kediaman Merit System Guide",
            url: "guide-hostel-kolej-kediaman-merit.html",
            icon: "🏢"
        };
    }
    if (text.includes("gpa") || text.includes("cgpa") || text.includes("pointer") || text.includes("anugerah dekan") || text.includes("ulang gred") || text.includes("kedudukan bersyarat") || text.includes("probation")) {
        return {
            title: "UTeM GPA/CGPA Calculator & Grading Guide",
            url: "guide-gpa-calculator.html",
            icon: "🎓"
        };
    }
    if (text.includes("ptptn") || text.includes("waiver") || text.includes("pinjaman") || text.includes("first class") || text.includes("biasiswa")) {
        return {
            title: "PTPTN Loan & First Class Exemption Guide",
            url: "guide-ptptn-loan.html",
            icon: "💰"
        };
    }
    if (text.includes("past year") || text.includes("exam paper") || text.includes("kertas exam") || text.includes("final exam") || text.includes("peperiksaan") || text.includes("study week")) {
        return {
            title: "Past Year Exam Papers & Revision Strategies",
            url: "guide-past-year-exams.html",
            icon: "📝"
        };
    }
    if (text.includes("add drop") || text.includes("course registration") || text.includes("daftar subjek") || text.includes("smpweb") || text.includes("prasyarat") || text.includes("tambah gugur")) {
        return {
            title: "Course Registration & Add/Drop SMPWeb Guide",
            url: "guide-course-registration-add-drop.html",
            icon: "📋"
        };
    }
    if (text.includes("fyp") || text.includes("final year project") || text.includes("projek sarjana muda") || text.includes("psm") || text.includes("supervisor")) {
        return {
            title: "Final Year Project (FYP) Complete Survival Guide",
            url: "guide-final-year-project-fyp.html",
            icon: "🔬"
        };
    }
    if (/\b(internship|latihan industri)\b/i.test(text) || (/\b(intern|interns)\b/i.test(text) && !text.includes("internal")) || (/\bli\b/i.test(text) && (text.includes("praktikal") || text.includes("training") || text.includes("tempat") || text.includes("sem") || text.includes("company") || text.includes("kompeni") || text.includes("resume") || text.includes("allowance") || text.includes("elaun")))) {
        return {
            title: "Internship & Industrial Training (LI) Guide",
            url: "guide-internship-industrial-training.html",
            icon: "💼"
        };
    }
    if (text.includes("sewa") || text.includes("rumah sewa") || text.includes("off-campus") || text.includes("taman tasik utama")) {
        return {
            title: "Off-Campus House Rental & Roommate Guide",
            url: "guide-off-campus-rental.html",
            icon: "🏠"
        };
    }
    if (text.includes("wifi") || text.includes("eduroam") || text.includes("vpn") || text.includes("internet utem")) {
        return {
            title: "UTeM Wi-Fi, Eduroam & IT Services Guide",
            url: "guide-it-software-eduroam.html",
            icon: "📶"
        };
    }
    if (text.includes("makan") || text.includes("budget") || text.includes("jimat") || text.includes("duit poket")) {
        return {
            title: "Student Budgeting, Food & Cost of Living Guide",
            url: "guide-budget-living-food.html",
            icon: "🍛"
        };
    }
    if (text.includes("tempat study") || text.includes("study cafe") || text.includes("plh") || text.includes("laman hikmah")) {
        return {
            title: "Top Study Places & Late Night Cafes in Melaka",
            url: "guide-top-10-study-places.html",
            icon: "☕"
        };
    }
    if (text.includes("bas") || text.includes("bus") || text.includes("transit") || text.includes("jadual bas")) {
        return {
            title: "Campus Bus Transit & Melaka Public Transport Guide",
            url: "guide-campus-bus-transit.html",
            icon: "🚌"
        };
    }
    if (text.includes("freshman") || text.includes("junior") || text.includes("mhs") || text.includes("orientasi") || text.includes("first year") || text.includes("intake")) {
        return {
            title: "UTeM Freshman Survival Guide & Campus Life",
            url: "guide-freshman-survival.html",
            icon: "🎒"
        };
    }
    return null;
}

/**
 * Opens Read More Modal displaying full confession content & metadata
 */
function openArchiveModal(item) {
    ensureArchiveModalExists();
    const modal = document.getElementById("archiveDetailModal");
    const body = document.getElementById("archiveModalBody");
    if (!modal || !body) return;

    const categoryBadgeColor = getCategoryColor(item.category);
    const replyCount = getReplyCount(item.reply);
    const relatedGuide = getRelatedGuide(item);

    let replyHtml = "";
    if (item.reply) {
        replyHtml = `
            <div style="margin-top: 18px; padding: 14px 16px; background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--accent-gold, #d4af37); border-radius: 0 10px 10px 0;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-gold, #d4af37); margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                    <span>💬 ${replyCount > 1 ? `${replyCount} Replies` : "Reply"}</span>
                </div>
                <div style="font-size: 0.92rem; line-height: 1.6; color: var(--text-primary, #f8fafc); white-space: pre-wrap;">${escapeHtml(item.reply)}</div>
            </div>
        `;
    }

    let guideHtml = "";
    if (relatedGuide) {
        guideHtml = `
            <div style="margin-top: 14px; padding: 10px 14px; background: rgba(212, 175, 55, 0.08); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
                <div style="font-size: 0.82rem; color: var(--text-secondary, #cbd5e1); display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 1rem;">${relatedGuide.icon}</span>
                    <strong style="color: var(--accent-gold, #d4af37);">Related Student Guide:</strong>
                    <span>${escapeHtml(relatedGuide.title)}</span>
                </div>
                <a href="${escapeHtml(relatedGuide.url)}" style="font-size: 0.8rem; font-weight: 700; color: #000000; background: linear-gradient(135deg, #d4af37 0%, #ffeb3b 100%); text-decoration: none; padding: 4px 12px; border-radius: 12px; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 2px 8px rgba(212, 175, 55, 0.25);" target="_blank">
                    Read Guide ➔
                </a>
            </div>
        `;
    }

    body.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:14px; flex-wrap:wrap;">
            <span style="background:${categoryBadgeColor.bg}; color:${categoryBadgeColor.text}; font-weight:700; font-size:0.8rem; padding:4px 12px; border-radius:12px; border: 1px solid ${categoryBadgeColor.border};">
                ${escapeHtml(item.category || "General")}
            </span>
            ${item.reply ? `<span style="background: rgba(255,255,255,0.08); color: var(--text-secondary, #cbd5e1); font-weight:600; font-size:0.75rem; padding:3px 10px; border-radius:12px; border: 1px solid rgba(255,255,255,0.12);">💬 ${replyCount} ${replyCount > 1 ? "Replies" : "Reply"}</span>` : ""}
        </div>
        <div style="font-size: 0.95rem; line-height: 1.65; color: var(--text-secondary, #cbd5e1); white-space: pre-wrap; margin-bottom: 14px; border-left: 3px solid var(--accent-gold, #d4af37); padding-left: 14px;">${escapeHtml(item.content)}</div>
        ${replyHtml}
        ${guideHtml}
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color, rgba(255,255,255,0.1)); padding-top:14px; margin-top:16px; font-size:0.85rem; flex-wrap:wrap; gap:10px;">
            <button id="btnOpenStoryCardFromModal" type="button" style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.28) 100%); border: 1px solid rgba(212, 175, 55, 0.45); color: var(--accent-gold, #d4af37); font-weight: 700; font-size: 0.82rem; border-radius: 20px; padding: 7px 15px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 10px rgba(212, 175, 55, 0.2); transition: all 0.2s;">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                📸 Share as Story Card
            </button>
            ${item.telegramLink ? `
                <a href="${escapeHtml(item.telegramLink)}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-gold, #d4af37); text-decoration:none; font-weight:700; display:inline-flex; align-items:center; gap:6px;">✈️ View Original Post</a>
            ` : ""}
        </div>
    `;

    const btnStoryCard = body.querySelector("#btnOpenStoryCardFromModal");
    if (btnStoryCard) {
        btnStoryCard.addEventListener("click", () => {
            openSocialCardGenerator(item);
        });
    }

    const modalContentEl = modal.querySelector(".archive-modal-content");
    if (modalContentEl) {
        modalContentEl.setAttribute("data-cat", (item.category || "general").toLowerCase());
    }

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
 * Returns distinct badge styling per category
 */
function getCategoryColor(category) {
    const cat = (category || "").toLowerCase();
    switch (cat) {
        case "rant":
            return { bg: "rgba(168, 85, 247, 0.15)", text: "#c084fc", border: "rgba(168, 85, 247, 0.3)" };
        case "funny":
        case "humor":
            return { bg: "rgba(34, 197, 94, 0.15)", text: "#4ade80", border: "rgba(34, 197, 94, 0.3)" };
        case "advise":
        case "advice":
            return { bg: "rgba(14, 165, 233, 0.15)", text: "#38bdf8", border: "rgba(14, 165, 233, 0.3)" };
        case "discussion":
        case "question":
            return { bg: "rgba(99, 102, 241, 0.15)", text: "#818cf8", border: "rgba(99, 102, 241, 0.35)" };
        case "romance":
        case "love":
            return { bg: "rgba(236, 72, 153, 0.15)", text: "#f472b6", border: "rgba(236, 72, 153, 0.3)" };
        case "random":
            return { bg: "rgba(168, 162, 158, 0.15)", text: "#d6d3d1", border: "rgba(168, 162, 158, 0.3)" };
        case "horror":
            return { bg: "rgba(249, 115, 22, 0.15)", text: "#fb923c", border: "rgba(249, 115, 22, 0.3)" };
        case "academic":
            return { bg: "rgba(59, 130, 246, 0.15)", text: "#60a5fa", border: "rgba(59, 130, 246, 0.3)" };
        case "campus":
            return { bg: "rgba(16, 185, 129, 0.15)", text: "#34d399", border: "rgba(16, 185, 129, 0.3)" };
        default:
            return { bg: "rgba(212, 175, 55, 0.15)", text: "#d4af37", border: "rgba(212, 175, 55, 0.3)" };
    }
}

/**
 * Filter, sort and render confessions from manual dataset
 */
function renderArchiveConfessions() {
    if (!archiveContainer) return;
    archiveContainer.innerHTML = "";
    archiveContainer.style.display = "flex";
    archiveContainer.style.flexDirection = "column";
    archiveContainer.style.gap = "14px";

    const rawList = (typeof archiveData !== "undefined" && Array.isArray(archiveData)) ? archiveData : [];

    const searchQuery = archiveSearch ? archiveSearch.value.trim().toLowerCase() : "";

    // 1. Filter by category and search keyword
    let filtered = rawList.filter(item => {
        // Category filter
        if (currentCategory !== "all") {
            const itemCat = (item.category || "").toLowerCase();
            const targetCat = currentCategory.toLowerCase();
            if (itemCat !== targetCat) {
                const isAdviseAlias = (targetCat === "advise" || targetCat === "advice") && (itemCat === "advise" || itemCat === "advice");
                const isRomanceAlias = (targetCat === "romance" || targetCat === "love") && (itemCat === "romance" || itemCat === "love");
                const isFunnyAlias = (targetCat === "funny" || targetCat === "humor") && (itemCat === "funny" || itemCat === "humor");
                const isDiscussionAlias = (targetCat === "discussion" || targetCat === "question") && (itemCat === "discussion" || itemCat === "question");
                if (!isAdviseAlias && !isRomanceAlias && !isFunnyAlias && !isDiscussionAlias) return false;
            }
        }

        // Search query
        if (searchQuery) {
            const matchContent = (item.content || "").toLowerCase().includes(searchQuery);
            const matchReply = (item.reply || "").toLowerCase().includes(searchQuery);
            const matchTags = (item.tags || "").toLowerCase().includes(searchQuery);
            const matchCategory = (item.category || "").toLowerCase().includes(searchQuery);
            if (!matchContent && !matchReply && !matchTags && !matchCategory) return false;
        }

        return true;
    });

    // 2. Sort results (latest first)
    filtered.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    // 3. Render empty state if no results
    if (filtered.length === 0) {
        archiveContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 50px 20px; background: var(--bg-secondary); border-radius: 12px; border: 1px dashed var(--border-color);">
                <div style="font-size: 2.2rem; margin-bottom: 10px;">🔍</div>
                <p style="margin: 0; font-size: 0.95rem; font-weight: 600;">No archived confessions found matching your criteria.</p>
                <p style="margin: 6px 0 0 0; font-size: 0.82rem; color: var(--text-secondary);">Try clearing your search terms or selecting a different category filter.</p>
            </div>
        `;
        return;
    }

    // 4. Paginate items
    const visibleItems = filtered.slice(0, currentVisibleLimit);

    visibleItems.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "archive-card";
        const catKey = (item.category || "general").toLowerCase();
        card.setAttribute("data-cat", catKey);

        const isLongText = (item.content || "").length > 140;
        const displayText = isLongText ? item.content.substring(0, 137).trim() + "..." : item.content;
        const categoryBadgeColor = getCategoryColor(item.category);
        const replyCount = getReplyCount(item.reply);

        let replyBadgeHtml = item.reply ? `
            <span style="font-size: 0.72rem; font-weight: 600; padding: 2px 7px; border-radius: 8px; background: rgba(255, 255, 255, 0.06); color: var(--text-secondary, #cbd5e1); border: 1px solid rgba(255, 255, 255, 0.1); display: inline-flex; align-items: center; gap: 4px;">
                💬 ${replyCount > 1 ? `${replyCount} Replies` : "Has Reply"}
            </span>
        ` : "";

        let cardHeaderHtml = `
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; gap: 8px; flex-wrap: wrap;">
                <span style="font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 8px; background: ${categoryBadgeColor.bg}; color: ${categoryBadgeColor.text}; border: 1px solid ${categoryBadgeColor.border};">
                    ${escapeHtml(item.category || "General")}
                </span>
                <div style="display: flex; align-items: center; gap: 6px;">
                    ${replyBadgeHtml}
                    <button class="btn-card-story-quick" title="Create Social Story Card" style="background: rgba(212, 175, 55, 0.08); border: 1px solid rgba(212, 175, 55, 0.25); color: var(--accent-gold, #d4af37); border-radius: 8px; padding: 2px 7px; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" onclick="event.stopPropagation(); openSocialCardGenerator(archiveData.find(x => x.archiveId === '${item.archiveId}') || null);">
                        📸 Card
                    </button>
                </div>
            </div>
        `;

        let readMoreBtnHtml = (isLongText || item.reply) ? `
            <button class="read-more-btn" style="
                background: none; border: none; color: var(--accent-gold, #d4af37); font-size: 0.82rem; font-weight: 700;
                cursor: pointer; padding: 8px 0 0 0; text-align: left; display: inline-flex; align-items: center; gap: 4px;
            ">${item.reply ? (replyCount > 1 ? "View Confession & Replies ➔" : "View Confession & Reply ➔") : "Read More ➔"}</button>
        ` : "";

        const cardRelatedGuide = getRelatedGuide(item);
        let cardGuideHtml = cardRelatedGuide ? `
            <div style="margin-top: 8px;">
                <a href="${escapeHtml(cardRelatedGuide.url)}" class="archive-card-guide-link" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.73rem; font-weight: 600; color: var(--accent-gold, #d4af37); background: rgba(212, 175, 55, 0.08); border: 1px solid rgba(212, 175, 55, 0.22); padding: 3px 8px; border-radius: 6px; text-decoration: none; transition: all 0.2s;" onclick="event.stopPropagation();">
                    <span>${cardRelatedGuide.icon}</span> <span>${escapeHtml(cardRelatedGuide.title)}</span> ➔
                </a>
            </div>
        ` : "";

        card.innerHTML = `
            <div>
                ${cardHeaderHtml}
                <p class="archive-card-content" style="margin: 0; font-size: 0.88rem; color: var(--text-secondary, #cbd5e1); line-height: 1.55; white-space: pre-wrap;">${escapeHtml(displayText)}</p>
                ${cardGuideHtml}
                ${readMoreBtnHtml}
            </div>
        `;

        // Card click opens modal
        card.addEventListener("click", () => openArchiveModal(item));

        archiveContainer.appendChild(card);
    });

    // 5. Render "Load More" button if there are more items
    if (filtered.length > currentVisibleLimit) {
        const loadMoreContainer = document.createElement("div");
        loadMoreContainer.style.cssText = "grid-column: 1 / -1; text-align: center; margin-top: 20px; margin-bottom: 10px;";
        loadMoreContainer.innerHTML = `
            <button id="archiveLoadMoreBtn" class="btn btn-secondary" style="
                background: var(--bg-card-hover); color: var(--accent-gold); border: 1px solid var(--border-color);
                padding: 10px 24px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; cursor: pointer;
                display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s;
            ">📥 Load More Confessions (${filtered.length - currentVisibleLimit} remaining)</button>
        `;
        archiveContainer.appendChild(loadMoreContainer);

        const loadMoreBtn = loadMoreContainer.querySelector("#archiveLoadMoreBtn");
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener("click", () => {
                currentVisibleLimit += pageIncrement;
                renderArchiveConfessions();
            });
        }
    }
}

// Category Pill Event Listeners
if (archiveCatPills) {
    const pills = archiveCatPills.querySelectorAll(".archive-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => {
                p.classList.remove("active");
                p.style.background = "rgba(255, 255, 255, 0.05)";
                p.style.color = "var(--text-secondary, #cbd5e1)";
                p.style.boxShadow = "none";
            });
            pill.classList.add("active");
            pill.style.background = "linear-gradient(135deg, #d4af37 0%, #ffeb3b 100%)";
            pill.style.color = "#000000";
            pill.style.boxShadow = "0 4px 12px rgba(212, 175, 55, 0.3)";

            currentCategory = pill.getAttribute("data-cat") || "all";
            currentVisibleLimit = 12;
            renderArchiveConfessions();
        });
    });
}



// Search Input Listener
if (archiveSearch) {
    archiveSearch.addEventListener("input", () => {
        currentVisibleLimit = 12;
        renderArchiveConfessions();
    });
}



// Initial render
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        ensureArchiveModalExists();
        renderArchiveConfessions();
    });
} else {
    ensureArchiveModalExists();
    renderArchiveConfessions();
}

/**
 * ==========================================================================
 * CONFESSION SOCIAL SHARE CARD GENERATOR (HTML5 Canvas Engine)
 * ==========================================================================
 */
let currentCardBlob = null;
let currentCardFilename = "UCPM-Confession.png";

function ensureSocialCardModalExists() {
    let modal = document.getElementById("socialCardModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "socialCardModal";
        modal.className = "archive-modal-overlay";
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(8, 13, 26, 0.88); backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            display: none; justify-content: center; align-items: center;
            z-index: 10000; padding: 16px; box-sizing: border-box;
        `;
        modal.innerHTML = `
            <div class="archive-modal-content" style="
                background: var(--bg-surface, #131d33); color: var(--text-primary, #f8fafc);
                border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 18px;
                width: 100%; max-width: 440px; max-height: 92vh; overflow-y: auto;
                padding: 22px; box-shadow: 0 25px 60px rgba(0,0,0,0.7);
                position: relative; text-align: center;
            ">
                <button id="closeSocialCardModalBtn" style="
                    position: absolute; top: 14px; right: 14px; background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.15); color: #cbd5e1;
                    width: 32px; height: 32px; border-radius: 50%; display: flex;
                    align-items: center; justify-content: center; font-size: 16px;
                    cursor: pointer; transition: all 0.2s;
                " aria-label="Close Share Card">&times;</button>

                <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 1.3rem;">📸</span>
                    <h3 style="margin: 0; font-size: 1.15rem; font-weight: 800; color: var(--accent-gold, #d4af37);">
                        Story & Social Card
                    </h3>
                </div>
                <p style="margin: 0 0 16px 0; font-size: 0.78rem; color: var(--text-secondary, #94a3b8);">
                    Optimized for Instagram Stories, WhatsApp Status &amp; Telegram
                </p>

                <!-- Live Rendered Preview -->
                <div id="socialCardPreviewWrapper" style="margin-bottom: 18px; display: flex; justify-content: center;">
                    <img id="socialCardPreviewImg" alt="Confession Story Card" style="
                        width: 100%; max-width: 280px; aspect-ratio: 4/5; object-fit: contain;
                        border-radius: 12px; box-shadow: 0 12px 30px rgba(0,0,0,0.6);
                        border: 1px solid rgba(212, 175, 55, 0.3); background: #080d1a;
                    ">
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button id="btnSocialCardNativeShare" style="
                        width: 100%; padding: 11px 16px; border-radius: 12px; border: none;
                        background: linear-gradient(135deg, #d4af37 0%, #ffeb3b 100%);
                        color: #0b0f19; font-weight: 800; font-size: 0.88rem; cursor: pointer;
                        display: inline-flex; align-items: center; justify-content: center; gap: 8px;
                        box-shadow: 0 4px 16px rgba(212, 175, 55, 0.35); transition: transform 0.15s;
                    ">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                        Share to Instagram / WhatsApp
                    </button>

                    <div style="display: flex; gap: 8px;">
                        <button id="btnSocialCardDownload" style="
                            flex: 1; padding: 10px 14px; border-radius: 10px;
                            background: rgba(255, 255, 255, 0.07); border: 1px solid rgba(255, 255, 255, 0.15);
                            color: var(--text-primary, #f8fafc); font-weight: 700; font-size: 0.82rem;
                            cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
                            transition: background 0.2s;
                        ">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                            Download PNG
                        </button>
                        <button id="btnSocialCardCopy" style="
                            flex: 1; padding: 10px 14px; border-radius: 10px;
                            background: rgba(255, 255, 255, 0.07); border: 1px solid rgba(255, 255, 255, 0.15);
                            color: var(--text-primary, #f8fafc); font-weight: 700; font-size: 0.82rem;
                            cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
                            transition: background 0.2s;
                        ">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                            Copy Image
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeSocialCardModal();
        });

        const closeBtn = modal.querySelector("#closeSocialCardModalBtn");
        if (closeBtn) closeBtn.addEventListener("click", closeSocialCardModal);

        // Bind download
        const btnDownload = modal.querySelector("#btnSocialCardDownload");
        if (btnDownload) {
            btnDownload.addEventListener("click", () => {
                if (!currentCardBlob) return;
                const url = URL.createObjectURL(currentCardBlob);
                const a = document.createElement("a");
                a.href = url;
                a.download = currentCardFilename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                setTimeout(() => URL.revokeObjectURL(url), 1000);
                if (typeof showToast === "function") {
                    showToast("📥 Card saved! Ready to post to your Story.", "success", 3500);
                }
            });
        }

        // Bind native share
        const btnShare = modal.querySelector("#btnSocialCardNativeShare");
        if (btnShare) {
            btnShare.addEventListener("click", async () => {
                if (!currentCardBlob) return;
                const file = new File([currentCardBlob], currentCardFilename, { type: "image/png" });
                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    try {
                        await navigator.share({
                            files: [file],
                            title: "UTeM Confession Story Card",
                            text: "Check out this confession on UTeM Confessions Pro Max: https://utemconfession.github.io"
                        });
                    } catch (err) {
                        if (err.name !== "AbortError" && typeof showToast === "function") {
                            showToast("Share sheet cancelled.", "info", 2500);
                        }
                    }
                } else {
                    const btnDl = modal.querySelector("#btnSocialCardDownload");
                    if (btnDl) btnDl.click();
                }
            });
        }

        // Bind copy image
        const btnCopy = modal.querySelector("#btnSocialCardCopy");
        if (btnCopy) {
            btnCopy.addEventListener("click", async () => {
                if (!currentCardBlob) return;
                try {
                    if (navigator.clipboard && window.ClipboardItem) {
                        await navigator.clipboard.write([
                            new ClipboardItem({ "image/png": currentCardBlob })
                        ]);
                        if (typeof showToast === "function") {
                            showToast("📋 Image copied! Press Ctrl+V to paste anywhere.", "success", 3000);
                        }
                    } else {
                        throw new Error("ClipboardItem not supported");
                    }
                } catch (e) {
                    if (typeof showToast === "function") {
                        showToast("Direct copy not supported. Click Download PNG to save!", "warning", 3500);
                    }
                }
            });
        }
    }
}

function closeSocialCardModal() {
    const modal = document.getElementById("socialCardModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

function drawRoundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof radius === "number") {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
}

function renderWrappedCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const paragraphs = (text || "").split("\n");
    let currentY = y;
    let linesCount = 0;

    for (let p = 0; p < paragraphs.length; p++) {
        const words = paragraphs[p].split(/\s+/);
        let currentLine = "";

        for (let w = 0; w < words.length; w++) {
            const word = words[w];
            if (!word) continue;
            const testLine = currentLine ? currentLine + " " + word : word;
            const metrics = ctx.measureText(testLine);

            if (metrics.width > maxWidth && currentLine) {
                linesCount++;
                if (maxLines && linesCount >= maxLines) {
                    ctx.fillText(currentLine + "...", x, currentY);
                    return currentY + lineHeight;
                }
                ctx.fillText(currentLine, x, currentY);
                currentLine = word;
                currentY += lineHeight;
            } else {
                currentLine = testLine;
            }
        }

        if (currentLine) {
            linesCount++;
            if (maxLines && linesCount >= maxLines && p < paragraphs.length - 1) {
                ctx.fillText(currentLine + "...", x, currentY);
                return currentY + lineHeight;
            }
            ctx.fillText(currentLine, x, currentY);
            currentY += lineHeight;
        }

        currentY += lineHeight * 0.25;
    }
    return currentY;
}

function drawSocialCard(item) {
    const width = 1080;
    const height = 1350;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // 1. Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, "#080d1a");
    bgGrad.addColorStop(0.45, "#0e1830");
    bgGrad.addColorStop(1, "#050811");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Ambient Glows
    const goldGlow = ctx.createRadialGradient(900, 150, 10, 900, 150, 500);
    goldGlow.addColorStop(0, "rgba(212, 175, 55, 0.16)");
    goldGlow.addColorStop(1, "rgba(212, 175, 55, 0)");
    ctx.fillStyle = goldGlow;
    ctx.fillRect(0, 0, width, height);

    const blueGlow = ctx.createRadialGradient(180, 1150, 10, 180, 1150, 450);
    blueGlow.addColorStop(0, "rgba(56, 189, 248, 0.12)");
    blueGlow.addColorStop(1, "rgba(56, 189, 248, 0)");
    ctx.fillStyle = blueGlow;
    ctx.fillRect(0, 0, width, height);

    // 3. Card Frame (Border)
    ctx.save();
    ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
    ctx.lineWidth = 3;
    drawRoundRect(ctx, 45, 45, width - 90, height - 90, 28, false, true);

    // Corner decorative notches
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 5;
    // Top-Left
    ctx.beginPath();
    ctx.moveTo(45, 105); ctx.lineTo(45, 75); ctx.quadraticCurveTo(45, 45, 75, 45); ctx.lineTo(105, 45);
    ctx.stroke();
    // Top-Right
    ctx.beginPath();
    ctx.moveTo(width - 105, 45); ctx.lineTo(width - 75, 45); ctx.quadraticCurveTo(width - 45, 45, width - 45, 75); ctx.lineTo(width - 45, 105);
    ctx.stroke();
    // Bottom-Left
    ctx.beginPath();
    ctx.moveTo(45, height - 105); ctx.lineTo(45, height - 75); ctx.quadraticCurveTo(45, height - 45, 75, height - 45); ctx.lineTo(105, height - 45);
    ctx.stroke();
    // Bottom-Right
    ctx.beginPath();
    ctx.moveTo(width - 105, height - 45); ctx.lineTo(width - 75, height - 45); ctx.quadraticCurveTo(width - 45, height - 45, width - 45, height - 75); ctx.lineTo(width - 45, height - 105);
    ctx.stroke();
    ctx.restore();

    // 4. Header: Logo & Branding
    ctx.save();
    ctx.beginPath();
    ctx.arc(120, 130, 36, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(212, 175, 55, 0.15)";
    ctx.fill();
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.font = "bold 20px Outfit, sans-serif";
    ctx.fillStyle = "#d4af37";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("UCPM", 120, 130);
    ctx.restore();

    // Title & Subtitle
    ctx.save();
    ctx.font = "bold 30px Outfit, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "left";
    ctx.fillText("UTeM CONFESSIONS PRO MAX", 180, 122);

    ctx.font = "500 18px Outfit, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Student Voices • Universiti Teknikal Malaysia Melaka", 180, 150);
    ctx.restore();

    // Category Badge (Top Right)
    const categoryName = (item.category || "General").toUpperCase();
    const catColor = getCategoryColor(item.category);
    ctx.save();
    ctx.font = "bold 18px Outfit, sans-serif";
    const catTextWidth = ctx.measureText(categoryName).width;
    const catBadgeW = catTextWidth + 32;
    const catBadgeH = 36;
    const catBadgeX = width - 90 - catBadgeW;
    const catBadgeY = 112;

    ctx.fillStyle = catColor.bg || "rgba(212, 175, 55, 0.2)";
    ctx.strokeStyle = catColor.border || "rgba(212, 175, 55, 0.4)";
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, catBadgeX, catBadgeY, catBadgeW, catBadgeH, 18, true, true);

    ctx.fillStyle = catColor.text || "#d4af37";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(categoryName, catBadgeX + catBadgeW / 2, catBadgeY + catBadgeH / 2);
    ctx.restore();

    // Header separator line
    ctx.save();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(90, 195);
    ctx.lineTo(width - 90, 195);
    ctx.stroke();
    ctx.restore();

    // 5. Decorative Watermark Quote
    ctx.save();
    ctx.font = 'bold 120px Georgia, serif';
    ctx.fillStyle = "rgba(212, 175, 55, 0.15)";
    ctx.fillText('“', 85, 300);
    ctx.restore();

    // 6. Main Confession Text
    const contentText = (item.content || "").trim();
    const textLen = contentText.length;
    let fontSize = 34;
    let lineHeight = 52;
    let maxLines = 13;

    if (textLen < 120) {
        fontSize = 44;
        lineHeight = 64;
        maxLines = 8;
    } else if (textLen < 250) {
        fontSize = 36;
        lineHeight = 54;
        maxLines = 11;
    } else if (textLen < 500) {
        fontSize = 30;
        lineHeight = 46;
        maxLines = 13;
    } else {
        fontSize = 25;
        lineHeight = 39;
        maxLines = 15;
    }

    ctx.save();
    ctx.font = `600 ${fontSize}px Outfit, -apple-system, sans-serif`;
    ctx.fillStyle = "#f8fafc";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";

    const contentStartY = 280;
    const contentEndX = width - 100;
    const contentMaxW = contentEndX - 90;
    const nextY = renderWrappedCanvasText(ctx, contentText, 95, contentStartY, contentMaxW, lineHeight, maxLines);
    ctx.restore();

    // 7. Optional Reply Snippet
    if (item.reply && nextY < 920) {
        const replyText = item.reply.replace(/^↳\s*/, "").trim();
        const replyBoxY = Math.max(nextY + 30, 720);
        const replyBoxH = Math.min(height - replyBoxY - 170, 200);

        if (replyBoxH > 80) {
            ctx.save();
            ctx.fillStyle = "rgba(212, 175, 55, 0.07)";
            ctx.strokeStyle = "rgba(212, 175, 55, 0.25)";
            ctx.lineWidth = 1;
            drawRoundRect(ctx, 90, replyBoxY, width - 180, replyBoxH, 14, true, true);

            // Left gold indicator bar
            ctx.fillStyle = "#d4af37";
            drawRoundRect(ctx, 90, replyBoxY, 5, replyBoxH, { tl: 14, bl: 14, tr: 0, br: 0 }, true, false);

            // Reply Header
            ctx.font = "bold 18px Outfit, sans-serif";
            ctx.fillStyle = "#d4af37";
            ctx.fillText("💬 Top Student Reply", 115, replyBoxY + 18);

            // Reply Body
            ctx.font = "italic 21px Outfit, sans-serif";
            ctx.fillStyle = "#cbd5e1";
            renderWrappedCanvasText(ctx, replyText, 115, replyBoxY + 50, width - 230, 32, 3);
            ctx.restore();
        }
    }

    // 8. Footer Section
    const footerY = height - 120;
    ctx.save();
    ctx.strokeStyle = "rgba(212, 175, 55, 0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(90, footerY);
    ctx.lineTo(width - 90, footerY);
    ctx.stroke();

    ctx.font = "bold 19px Outfit, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "left";
    ctx.fillText(`${item.archiveId || "ARC"} • 🛡️ Anonymous Campus Story`, 90, footerY + 38);

    ctx.font = "bold 21px Outfit, sans-serif";
    ctx.fillStyle = "#d4af37";
    ctx.textAlign = "right";
    ctx.fillText("utemconfession.github.io", width - 90, footerY + 38);
    ctx.restore();

    return canvas;
}

function openSocialCardGenerator(item) {
    if (!item) return;
    ensureSocialCardModalExists();
    const modal = document.getElementById("socialCardModal");
    const previewImg = document.getElementById("socialCardPreviewImg");

    currentCardFilename = `UCPM-${item.archiveId || "Confession"}.png`;

    try {
        const canvas = drawSocialCard(item);
        canvas.toBlob((blob) => {
            currentCardBlob = blob;
            if (previewImg) {
                previewImg.src = canvas.toDataURL("image/png");
            }
        }, "image/png");
    } catch (e) {
        console.error("Card generation failed", e);
    }

    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}
window.openSocialCardGenerator = openSocialCardGenerator;
