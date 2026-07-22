// archive.js — Confessions Archive & 20 Interactive Emoji Reactions System

const archiveSearch = document.getElementById("archiveSearch");
const archiveCategoryBtns = document.querySelectorAll(".archive-cat-btn");
const archiveSortSelect = document.getElementById("archiveSortSelect");
const archiveContainer = document.getElementById("archiveContainer");
const archiveCountBadge = document.getElementById("archiveCountBadge");

// List of 20 Emoji Reactions with Labels
const EMOJI_REACTIONS_LIST = [
    { key: "love", emoji: "❤️", label: "Love" },
    { key: "funny", emoji: "😂", label: "Funny" },
    { key: "rant", emoji: "🤬", label: "Angry" },
    { key: "scary", emoji: "👻", label: "Scary" },
    { key: "useful", emoji: "💡", label: "Useful" },
    { key: "fire", emoji: "🔥", label: "Fire" },
    { key: "sob", emoji: "😭", label: "Sad" },
    { key: "skull", emoji: "💀", label: "Dead" },
    { key: "clown", emoji: "🤡", label: "Clown" },
    { key: "thumbsup", emoji: "👍", label: "Agree" },
    { key: "poop", emoji: "💩", label: "Garbage" },
    { key: "mindblown", emoji: "🤯", label: "Blown" },
    { key: "redflag", emoji: "🚩", label: "Red Flag" },
    { key: "tea", emoji: "☕", label: "Spill Tea" },
    { key: "slay", emoji: "💅", label: "Slay" },
    { key: "pray", emoji: "🙏", label: "Pray" },
    { key: "sleep", emoji: "😴", label: "Boring" },
    { key: "party", emoji: "🥳", label: "Party" },
    { key: "smart", emoji: "🧠", label: "Big Brain" },
    { key: "shh", emoji: "🤐", label: "Secret" }
];

// Sample Confessions Database without ID tags
const confessionArchiveData = [
    {
        uid: "c_001",
        category: "rant",
        title: "Broke Down Aircon at Main Library",
        content: "Library aircon broke down again during finals week. Unbearable heat!",
        date: "2026-07-21 21:15",
        reactions: { love: 14, funny: 5, rant: 89, scary: 2, useful: 38, fire: 45, sob: 22, skull: 12, clown: 8, thumbsup: 30, poop: 3, mindblown: 9, redflag: 15, tea: 6, slay: 2, pray: 18, sleep: 4, party: 1, smart: 5, shh: 7 }
    },
    {
        uid: "c_002",
        category: "funny",
        title: "Embarrassing Moment in Lecture Hall",
        content: "Accidentally called my lecturer 'Mom' in front of 200 students.",
        date: "2026-07-21 19:40",
        reactions: { love: 42, funny: 128, rant: 3, scary: 0, useful: 12, fire: 19, sob: 34, skull: 88, clown: 64, thumbsup: 25, poop: 1, mindblown: 14, redflag: 2, tea: 40, slay: 11, pray: 9, sleep: 2, party: 8, smart: 3, shh: 15 }
    },
    {
        uid: "c_003",
        category: "horror",
        title: "Late Night at FKE Block",
        content: "Saw a shadowy figure standing outside FKE block at 3 AM.",
        date: "2026-07-21 02:10",
        reactions: { love: 8, funny: 12, rant: 4, scary: 97, useful: 6, fire: 11, sob: 18, skull: 52, clown: 7, thumbsup: 10, poop: 2, mindblown: 29, redflag: 14, tea: 21, slay: 3, pray: 35, sleep: 5, party: 2, smart: 4, shh: 48 }
    },
    {
        uid: "c_004",
        category: "improvement",
        title: "Shuttle Bus System Improvement",
        content: "UTeM shuttle buses need real-time GPS tracking for all routes.",
        date: "2026-07-20 16:25",
        reactions: { love: 65, funny: 2, rant: 11, scary: 0, useful: 142, fire: 80, sob: 4, skull: 2, clown: 1, thumbsup: 110, poop: 0, mindblown: 33, redflag: 1, tea: 5, slay: 14, pray: 20, sleep: 1, party: 6, smart: 42, shh: 3 }
    },
    {
        uid: "c_005",
        category: "romance",
        title: "Crush at FPTT Cafe",
        content: "To the girl in blue hoodie at FPTT cafe: your smile made my day!",
        date: "2026-07-20 14:05",
        reactions: { love: 112, funny: 19, rant: 1, scary: 0, useful: 8, fire: 27, sob: 15, skull: 9, clown: 4, thumbsup: 45, poop: 0, mindblown: 8, redflag: 3, tea: 62, slay: 31, pray: 16, sleep: 2, party: 12, smart: 6, shh: 24 }
    },
    {
        uid: "c_006",
        category: "academic",
        title: "Survived Data Structures Exam",
        content: "Passed Data Structures after studying non-stop for 48 straight hours!",
        date: "2026-07-19 11:30",
        reactions: { love: 76, funny: 31, rant: 15, scary: 5, useful: 54, fire: 94, sob: 28, skull: 41, clown: 3, thumbsup: 82, poop: 1, mindblown: 36, redflag: 2, tea: 8, slay: 40, pray: 50, sleep: 6, party: 38, smart: 55, shh: 9 }
    }
];

const categoryMeta = {
    rant: { label: "🤬 Rant", badgeBg: "rgba(239, 68, 68, 0.15)", color: "#ef4444" },
    funny: { label: "😂 Funny", badgeBg: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" },
    horror: { label: "👻 Horror", badgeBg: "rgba(168, 85, 247, 0.15)", color: "#a855f7" },
    improvement: { label: "💡 Improvement", badgeBg: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" },
    romance: { label: "❤️ Romance", badgeBg: "rgba(236, 72, 153, 0.15)", color: "#ec4899" },
    academic: { label: "📚 Academic", badgeBg: "rgba(16, 185, 129, 0.15)", color: "#10b981" }
};

function getReactionStoreKey(confessionUid, emojiKey) {
    return `ucpm_rxn_${confessionUid}_${emojiKey}`;
}

function handleEmojiClick(confessionUid, emojiKey, btnElement, countElement) {
    const storeKey = getReactionStoreKey(confessionUid, emojiKey);
    const hasReacted = localStorage.getItem(storeKey) === "true";

    const targetItem = confessionArchiveData.find(item => item.uid === confessionUid);
    if (!targetItem) return;

    if (!targetItem.reactions[emojiKey]) {
        targetItem.reactions[emojiKey] = 0;
    }

    if (hasReacted) {
        // Toggle off
        targetItem.reactions[emojiKey] = Math.max(0, targetItem.reactions[emojiKey] - 1);
        localStorage.removeItem(storeKey);
        btnElement.classList.remove("reacted");
    } else {
        // Toggle on
        targetItem.reactions[emojiKey] += 1;
        localStorage.setItem(storeKey, "true");
        btnElement.classList.add("reacted");

        // Popping animation effect
        btnElement.style.transform = "scale(1.25)";
        setTimeout(() => {
            btnElement.style.transform = "none";
        }, 200);
    }

    countElement.textContent = targetItem.reactions[emojiKey];
}

function renderArchiveConfessions(categoryFilter = "all", searchQuery = "", sortOrder = "latest") {
    if (!archiveContainer) return;
    archiveContainer.innerHTML = "";

    let filtered = [...confessionArchiveData];

    // Filter by Category
    if (categoryFilter !== "all") {
        filtered = filtered.filter(item => item.category === categoryFilter);
    }

    // Filter by Search Query
    const query = searchQuery.toLowerCase().trim();
    if (query) {
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.content.toLowerCase().includes(query)
        );
    }

    // Sort Order
    if (sortOrder === "latest") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "popular") {
        filtered.sort((a, b) => {
            const totalA = Object.values(a.reactions).reduce((sum, n) => sum + n, 0);
            const totalB = Object.values(b.reactions).reduce((sum, n) => sum + n, 0);
            return totalB - totalA;
        });
    } else if (sortOrder === "oldest") {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (archiveCountBadge) {
        archiveCountBadge.textContent = `${filtered.length} Confessions Found`;
    }

    if (filtered.length === 0) {
        archiveContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 40px 0;">No archived confessions found matching your criteria.</p>`;
        return;
    }

    filtered.forEach(item => {
        const cat = categoryMeta[item.category] || { label: item.category, badgeBg: "rgba(255,255,255,0.1)", color: "#ffffff" };
        
        const card = document.createElement("div");
        card.className = `archive-card cat-border-${item.category}`;

        // Generate 20 Emoji Buttons HTML
        const reactionsHtml = EMOJI_REACTIONS_LIST.map(rx => {
            const currentCount = item.reactions[rx.key] || 0;
            return `
                <button type="button" class="reaction-btn" data-uid="${item.uid}" data-key="${rx.key}" title="${rx.label}">
                    <span class="rxn-emoji">${rx.emoji}</span>
                    <span class="rxn-count">${currentCount}</span>
                </button>
            `;
        }).join('');

        card.innerHTML = `
            <div class="archive-card-header">
                <span class="archive-cat-tag" style="background: ${cat.badgeBg}; color: ${cat.color};">${cat.label}</span>
                <span class="archive-date">${item.date}</span>
            </div>

            <h3 class="archive-card-title">${item.title}</h3>
            <p class="archive-card-content">${item.content}</p>

            <div class="archive-reaction-grid">
                ${reactionsHtml}
            </div>
        `;

        archiveContainer.appendChild(card);

        // Bind 20 emoji reaction buttons
        card.querySelectorAll(".reaction-btn").forEach(btn => {
            const key = btn.getAttribute("data-key");
            const storeKey = getReactionStoreKey(item.uid, key);
            
            if (localStorage.getItem(storeKey) === "true") {
                btn.classList.add("reacted");
            }

            btn.addEventListener("click", () => {
                const countSpan = btn.querySelector(".rxn-count");
                handleEmojiClick(item.uid, key, btn, countSpan);
            });
        });
    });
}

// Event Listeners
archiveCategoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        archiveCategoryBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-category");
        const query = archiveSearch ? archiveSearch.value : "";
        const sort = archiveSortSelect ? archiveSortSelect.value : "latest";
        renderArchiveConfessions(category, query, sort);
    });
});

if (archiveSearch) {
    archiveSearch.addEventListener("input", () => {
        const activeBtn = document.querySelector(".archive-cat-btn.active");
        const category = activeBtn ? activeBtn.getAttribute("data-category") : "all";
        const sort = archiveSortSelect ? archiveSortSelect.value : "latest";
        renderArchiveConfessions(category, archiveSearch.value, sort);
    });
}

if (archiveSortSelect) {
    archiveSortSelect.addEventListener("change", () => {
        const activeBtn = document.querySelector(".archive-cat-btn.active");
        const category = activeBtn ? activeBtn.getAttribute("data-category") : "all";
        const query = archiveSearch ? archiveSearch.value : "";
        renderArchiveConfessions(category, query, archiveSortSelect.value);
    });
}

// Initial render
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => renderArchiveConfessions());
} else {
    renderArchiveConfessions();
}
