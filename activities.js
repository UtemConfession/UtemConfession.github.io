// activities.js - Logic for Explore Melaka / Activities Feature

const activitiesCategories = [
    { id: "all", en: "All Activities", ms: "Semua Aktiviti", icon: "🌍" },
    { id: "historical", en: "History & Landmarks", ms: "Sejarah & Mercu Tanda", icon: "🏛️" },
    { id: "heritage", en: "Heritage & Museums", ms: "Warisan & Muzium", icon: "🏺" },
    { id: "unique_museums", en: "Unique Museums", ms: "Muzium Unik", icon: "👻" },
    { id: "nature", en: "Nature & Parks", ms: "Alam & Taman", icon: "🌳" },
    { id: "beaches", en: "Beaches", ms: "Pantai", icon: "🏖️" },
    { id: "zoo_animals", en: "Zoo & Animals", ms: "Zoo & Haiwan", icon: "🐘" },
    { id: "animal_wildlife", en: "Animal / Wildlife", ms: "Haiwan Liar", icon: "🐾" },
    { id: "amusement", en: "Theme Parks", ms: "Taman Tema", icon: "🎢" },
    { id: "indoor_activities", en: "Indoor Activities", ms: "Aktiviti Dalaman", icon: "🎳" },
    { id: "outdoor_adventure", en: "Outdoor Adventure", ms: "Pengembaraan Luar", icon: "🧗" },
    { id: "hot_springs", en: "Hot Springs", ms: "Kolam Air Panas", icon: "♨️" },
    { id: "night_activities", en: "Night Activities", ms: "Aktiviti Malam", icon: "🌙" },
    { id: "educational", en: "Educational", ms: "Pendidikan", icon: "🔭" },
    { id: "unique_places", en: "Unique Places", ms: "Tempat Unik", icon: "✨" }
];

let activeCategory = "all";
let activeType = "all";
let activeSort = "recommended";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
    initActivitiesUI();
    setupActivitiesModal();
    renderActivities();
    
    // Deep linking support (?id=activity_id or #activity_id)
    const urlParams = new URLSearchParams(window.location.search);
    const targetId = urlParams.get('id') || (window.location.hash ? window.location.hash.replace('#', '') : null);
    if (targetId && typeof activitiesData !== 'undefined') {
        const matchedItem = activitiesData.find(item => item.id === targetId);
        if (matchedItem) {
            setTimeout(() => {
                openActivityModal(matchedItem);
            }, 150);
        }
    }

    window.refreshActivitiesTranslations = function() {
        renderCategoryChips();
        renderActivities();
        updateStaticUITranslations();
    };
});

function initActivitiesUI() {
    const searchInput = document.getElementById("activitiesSearch");
    const typeSelect = document.getElementById("activitiesTypeSelect");
    const sortSelect = document.getElementById("activitiesSortSelect");
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderActivities();
        });
    }
    
    if (typeSelect) {
        typeSelect.addEventListener("change", (e) => {
            activeType = e.target.value;
            renderActivities();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            activeSort = e.target.value;
            renderActivities();
        });
    }
    
    renderCategoryChips();
}

function updateStaticUITranslations() {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : "en";
    const sortSelect = document.getElementById("activitiesSortSelect");
    if(sortSelect) {
        sortSelect.options[0].text = lang === "ms" ? "⭐ Disyorkan" : "⭐ Recommended";
        sortSelect.options[1].text = lang === "ms" ? "💰 Percuma" : "💰 Free / Low-cost";
    }
}

function renderCategoryChips() {
    const container = document.getElementById("activitiesCategoryChips");
    if (!container) return;
    
    container.innerHTML = "";
    
    // Set horizontal scrolling style for mobile, but wrap on desktop
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.gap = "8px";
    container.style.maxWidth = "100%";
    
    if (window.innerWidth <= 768) {
        container.style.flexWrap = "nowrap";
        container.style.overflowX = "auto";
        container.style.scrollbarWidth = "none"; 
        container.style.paddingBottom = "10px";
    } else {
        container.style.flexWrap = "wrap";
        container.style.overflowX = "visible";
        container.style.paddingBottom = "0px";
    }
    
    // Add window resize listener to update flexWrap dynamically if needed
    if (!container.dataset.resizeListenerAttached) {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 768) {
                container.style.flexWrap = "nowrap";
                container.style.overflowX = "auto";
                container.style.scrollbarWidth = "none"; 
                container.style.paddingBottom = "10px";
            } else {
                container.style.flexWrap = "wrap";
                container.style.overflowX = "visible";
                container.style.paddingBottom = "0px";
            }
        });
        container.dataset.resizeListenerAttached = "true";
    }
    
    const lang = (typeof currentLang !== 'undefined') ? currentLang : "en";
    
    activitiesCategories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "archive-pill" + (activeCategory === cat.id ? " active" : "");
        
        if (activeCategory === cat.id) {
            btn.style.background = "linear-gradient(135deg, #d4af37 0%, #ffeb3b 100%)";
            btn.style.border = "1px solid #d4af37";
            btn.style.color = "#000000";
            btn.style.boxShadow = "0 4px 12px rgba(212, 175, 55, 0.3)";
        } else {
            btn.style.background = "rgba(255, 255, 255, 0.05)";
            btn.style.border = "1px solid rgba(255, 255, 255, 0.15)";
            btn.style.color = "var(--text-secondary)";
        }
        
        btn.style.padding = "8px 14px";
        btn.style.borderRadius = "20px";
        btn.style.fontSize = "13px";
        btn.style.fontWeight = activeCategory === cat.id ? "800" : "600";
        btn.style.cursor = "pointer";
        btn.style.display = "inline-flex";
        btn.style.alignItems = "center";
        btn.style.gap = "6px";
        btn.style.flexShrink = "0"; // Crucial for horizontal scrolling
        btn.style.transition = "var(--transition)";
        
        btn.innerHTML = `${cat.icon} ${lang === "ms" ? cat.ms : cat.en}`;
        
        btn.addEventListener("click", () => {
            activeCategory = cat.id;
            renderCategoryChips();
            renderActivities();
        });
        
        container.appendChild(btn);
    });
}

function renderActivities() {
    const grid = document.getElementById("activitiesGrid");
    const noMsg = document.getElementById("noActivitiesFoundMsg");
    const countBadge = document.getElementById("activitiesCountBadge");
    if (!grid) return;
    
    const lang = (typeof currentLang !== 'undefined') ? currentLang : "en";
    
    grid.innerHTML = "";
    
    if (typeof activitiesData === "undefined") return;
    
    let filteredData = activitiesData.filter(item => {
        const matchCategory = activeCategory === "all" || item.categoryId === activeCategory;
        const matchType = activeType === "all" || item.type === activeType;
        const searchStr = `${item.name.en} ${item.name.ms} ${item.location} ${item.area} ${item.tags.en.join(' ')}`.toLowerCase();
        const matchSearch = searchQuery === "" || searchStr.includes(searchQuery);
        return matchCategory && matchType && matchSearch;
    });

    if (activeSort === "free") {
        filteredData.sort((a, b) => {
            const aFree = a.priceLevel.en.toLowerCase().includes("free") ? 0 : 1;
            const bFree = b.priceLevel.en.toLowerCase().includes("free") ? 0 : 1;
            return aFree - bFree;
        });
    }
    
    if (filteredData.length === 0) {
        grid.style.display = "none";
        if(noMsg) {
            noMsg.style.display = "block";
            noMsg.textContent = lang === "ms" ? "Tiada aktiviti dijumpai." : "No activities found matching your criteria.";
        }
    } else {
        grid.style.display = "grid";
        if(noMsg) noMsg.style.display = "none";
        
        filteredData.forEach(item => {
            const card = document.createElement("div");
            card.className = "activity-card card"; 
            card.style.display = "flex";
            card.style.flexDirection = "column";
            card.style.padding = "0"; 
            card.style.overflow = "hidden";
            card.style.cursor = "pointer";
            
            card.addEventListener("click", () => openActivityModal(item));
            
            const name = lang === "ms" && item.name.ms ? item.name.ms : item.name.en;
            const desc = lang === "ms" && item.shortDesc.ms ? item.shortDesc.ms : item.shortDesc.en;
            const tags = (lang === "ms" && item.tags.ms ? item.tags.ms : item.tags.en).join(" • ");
            const indoorText = item.type === "indoor" ? (lang === "ms" ? "Tertutup" : "Indoor") : (lang === "ms" ? "Luar" : "Outdoor");
            const priceText = lang === "ms" && item.priceLevel.ms ? item.priceLevel.ms : item.priceLevel.en;
            
            const suitableTranslationMap = {
                "Family": lang === "ms" ? "Keluarga" : "Family",
                "Friends": lang === "ms" ? "Rakan" : "Friends",
                "Couples": lang === "ms" ? "Pasangan" : "Couples",
                "Solo": lang === "ms" ? "Solo" : "Solo",
                "Photography": lang === "ms" ? "Fotografi" : "Photography",
                "Students": lang === "ms" ? "Pelajar" : "Students",
                "Exercise": lang === "ms" ? "Senaman" : "Exercise"
            };
            
            const suitableArr = item.suitableFor ? item.suitableFor.slice(0,3).map(s => suitableTranslationMap[s] || s).join(", ") : "";
            
            const catIcon = activitiesCategories.find(c => c.id === item.categoryId)?.icon || '🏛️';
            const imgHTML = `
                <div style="position: relative; width: 100%; height: 160px; background: var(--bg-card-hover); display: flex; align-items: center; justify-content: center; color: var(--text-muted); border-bottom: 1px solid var(--border-color); font-size: 40px; overflow: hidden;">
                    <span>${catIcon}</span>
                    ${item.image ? `<img src="${item.image}" alt="${name.replace(/"/g, '&quot;')}" referrerpolicy="no-referrer" decoding="async" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'" loading="lazy">` : ''}
                </div>
            `;

            card.innerHTML = `
                ${imgHTML}
                <div style="padding: 20px; display: flex; flex-direction: column; flex: 1; gap: 12px;">
                    <div>
                        <span style="display: inline-block; padding: 3px 10px; border-radius: 10px; background: rgba(59, 130, 246, 0.15); color: #3b82f6; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">
                            📍 ${item.area || item.location}
                        </span>
                        <h3 style="font-size: 18px; font-weight: 700; color: var(--text-primary); margin: 0; line-height: 1.3;">${name}</h3>
                    </div>
                    <div style="font-size: 12px; color: var(--accent-gold); font-weight: 600;">
                        ${tags}
                    </div>
                    <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.5; margin: 0; flex: 1;">
                        ${desc}
                    </p>
                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
                        👨‍👩‍👧‍👦 ${suitableArr}
                    </div>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; border-top: 1px solid var(--border-color); padding-top: 12px;">
                        <span style="background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: var(--text-secondary);">
                            ${item.type === 'indoor' ? '🏠' : '☀️'} ${indoorText}
                        </span>
                        <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 700;">
                            💰 ${priceText}
                        </span>
                    </div>
                    <button class="btn btn-secondary" style="margin-top: 8px; width: 100%; border-radius: 8px; padding: 10px; font-size: 13px;">
                        ${lang === 'ms' ? 'Lihat Butiran' : 'View Details'}
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    
    if(countBadge) {
        countBadge.textContent = `${filteredData.length} ${lang === "ms" ? "Dijumpai" : "Found"}`;
    }
}

function setupActivitiesModal() {
    if (document.getElementById("activityModalOverlay")) return;

    if (!document.getElementById("activityModalStyles")) {
        const style = document.createElement("style");
        style.id = "activityModalStyles";
        style.innerHTML = `
            .activity-modal-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(5px);
                z-index: 2000;
                align-items: flex-start;
                justify-content: center;
                padding: 16px 16px 80px 16px;
                box-sizing: border-box;
            }
            .activity-modal-overlay #activityModalContent {
                max-height: calc(100vh - 96px);
            }
            @media (min-width: 768px) {
                .activity-modal-overlay {
                    padding: 20px;
                    align-items: center;
                }
                .activity-modal-overlay #activityModalContent {
                    max-height: 90vh;
                }
            }
        `;
        document.head.appendChild(style);
    }

    const modalHTML = `
    <div id="activityModalOverlay" class="activity-modal-overlay" role="dialog" aria-modal="true">
        <div id="activityModalContent" class="card" tabindex="-1" style="width: 100%; max-width: 650px; overflow-y: auto; position: relative; padding: 0; background: var(--bg-card); display: flex; flex-direction: column;">
            <button id="closeActivityModalBtn" aria-label="Close" style="position: absolute; top: 16px; right: 16px; background: rgba(0,0,0,0.5); border: none; color: #fff; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; font-size: 20px; display: flex; align-items: center; justify-content: center; z-index: 10;">&times;</button>
            <div id="activityModalBody" style="display: flex; flex-direction: column;"></div>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const overlay = document.getElementById("activityModalOverlay");
    const closeBtn = document.getElementById("closeActivityModalBtn");
    
    closeBtn.addEventListener("click", closeActivityModal);
    overlay.addEventListener("click", (e) => {
        if(e.target === overlay) closeActivityModal();
    });
    
    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && overlay.style.display === "flex") {
            closeActivityModal();
        }
    });
}

function openActivityModal(item) {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : "en";
    const overlay = document.getElementById("activityModalOverlay");
    const body = document.getElementById("activityModalBody");
    const modalContent = document.getElementById("activityModalContent");
    
    const name = lang === "ms" && item.name.ms ? item.name.ms : item.name.en;
    const desc = lang === "ms" && item.fullDesc.ms ? item.fullDesc.ms : item.fullDesc.en;
    const tags = (lang === "ms" && item.tags.ms ? item.tags.ms : item.tags.en).join(" • ");
    
    const suitableTranslationMap = {
        "Family": lang === "ms" ? "Keluarga" : "Family",
        "Friends": lang === "ms" ? "Rakan" : "Friends",
        "Couples": lang === "ms" ? "Pasangan" : "Couples",
        "Solo": lang === "ms" ? "Solo" : "Solo",
        "Photography": lang === "ms" ? "Fotografi" : "Photography",
        "Students": lang === "ms" ? "Pelajar" : "Students",
        "Exercise": lang === "ms" ? "Senaman" : "Exercise",
        "Culture": lang === "ms" ? "Budaya" : "Culture",
        "Foodies": lang === "ms" ? "Peminat Makanan" : "Foodies",
        "Group activity": lang === "ms" ? "Aktiviti Berkumpulan" : "Group activity",
        "Rainy day": lang === "ms" ? "Hari Hujan" : "Rainy day"
    };
    const suitableFor = item.suitableFor ? item.suitableFor.map(s => suitableTranslationMap[s] || s).join(", ") : "";
    
    const indoorText = item.type === "indoor" ? (lang === "ms" ? "Tertutup" : "Indoor") : (lang === "ms" ? "Luar" : "Outdoor");
    const priceText = lang === "ms" && item.priceLevel.ms ? item.priceLevel.ms : item.priceLevel.en;
    const priceNotesText = item.priceNotes ? (lang === "ms" && item.priceNotes.ms ? item.priceNotes.ms : item.priceNotes.en) : "";
    const durationText = item.duration ? (lang === "ms" && item.duration.ms ? item.duration.ms : item.duration.en) : null;
    const bestTimeText = item.bestTime ? (lang === "ms" && item.bestTime.ms ? item.bestTime.ms : item.bestTime.en) : null;
    const openingHoursText = item.openingHours ? (lang === "ms" && item.openingHours.ms ? item.openingHours.ms : item.openingHours.en) : null;
    
    let imgHTML = "";
    if (item.image) {
        imgHTML = `<div style="width:100%; height:240px; overflow:hidden; position:relative; background: var(--bg-card-hover);">
            <img src="${item.image}" alt="${name.replace(/"/g, '&quot;')}" referrerpolicy="no-referrer" decoding="async" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'" loading="lazy">
        </div>`;
    }

    const bookingRow = item.bookingRequired ? `<p style="font-size: 13.5px; color: #ef4444; margin: 6px 0; font-weight: 700;">⚠️ ${lang === 'ms' ? 'Tempahan Diperlukan' : 'Booking Required'}</p>` : "";
    
    let websiteRow = "";
    if (item.websiteUrl) {
        websiteRow = `<a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="margin-top: 10px; display: flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; font-size: 13.5px; padding: 10px; border-radius: 8px;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            ${lang === 'ms' ? 'Laman Web Rasmi' : 'Official Website'}
        </a>`;
    }

    body.innerHTML = `
        ${imgHTML}
        <div style="padding: 24px;">
            <span style="display: inline-block; padding: 4px 12px; border-radius: 12px; background: rgba(59, 130, 246, 0.15); color: #3b82f6; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 12px; width: fit-content;">
                📍 ${item.location}
            </span>
            <h2 style="font-size: 26px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px; line-height: 1.2;">${name}</h2>
            <div style="font-size: 13px; color: var(--accent-gold); font-weight: 600; margin-bottom: 18px;">
                ${tags}
            </div>
            
            <p style="font-size: 15.5px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 24px;">
                ${desc}
            </p>
            
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 18px; border-radius: 12px; margin-bottom: 24px;">
                <p style="font-size: 13.5px; color: var(--text-secondary); margin: 0 0 6px 0;"><strong>👨‍👩‍👧‍👦 ${lang === 'ms' ? 'Sesuai Untuk' : 'Suitable For'}:</strong> ${suitableFor}</p>
                <p style="font-size: 13.5px; color: var(--text-secondary); margin: 6px 0;"><strong>${item.type === 'indoor' ? '🏠' : '☀️'} ${lang === 'ms' ? 'Jenis' : 'Type'}:</strong> ${indoorText}</p>
                <p style="font-size: 13.5px; color: var(--text-secondary); margin: 6px 0;"><strong>💰 ${lang === 'ms' ? 'Harga' : 'Price'}:</strong> ${priceText} <span style="opacity: 0.7; font-size: 12px;">(${priceNotesText})</span></p>
                ${openingHoursText ? `<p style="font-size: 13.5px; color: var(--text-secondary); margin: 6px 0;"><strong>⏰ ${lang === 'ms' ? 'Waktu Operasi' : 'Opening Hours'}:</strong> ${openingHoursText}</p>` : ""}
                ${durationText ? `<p style="font-size: 13.5px; color: var(--text-secondary); margin: 6px 0;"><strong>⏳ ${lang === 'ms' ? 'Tempoh' : 'Duration'}:</strong> ${durationText}</p>` : ""}
                ${bestTimeText ? `<p style="font-size: 13.5px; color: var(--text-secondary); margin: 6px 0;"><strong>🕒 ${lang === 'ms' ? 'Waktu Terbaik' : 'Best Time'}:</strong> ${bestTimeText}</p>` : ""}
                ${bookingRow}
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <a href="${item.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: var(--gold-gradient); color: #000; padding: 12px; border-radius: 10px; font-weight: 700; text-decoration: none; font-size: 14px;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    ${lang === 'ms' ? 'Buka di Google Maps' : 'Open in Google Maps'}
                </a>
                ${websiteRow}
            </div>
        </div>
    `;
    
    overlay.style.display = "flex";
    modalContent.focus();
}

function closeActivityModal() {
    const overlay = document.getElementById("activityModalOverlay");
    if(overlay) overlay.style.display = "none";
}
