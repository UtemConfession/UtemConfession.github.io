// updates.js
// Handles the rendering of the UCPM Updates page.

document.addEventListener("DOMContentLoaded", () => {
    // Wait slightly to ensure data and translations are loaded
    setTimeout(() => {
        if (typeof ucpmUpdates !== 'undefined') {
            renderUpdates();
        } else {
            console.error("ucpmUpdates data not found.");
        }
    }, 100);
});

function getCategoryConfig(type) {
    const configs = {
        'new': {
            icon: '🚀',
            label: 'NEW',
            color: '#4ade80',
            bg: 'rgba(74, 222, 128, 0.15)'
        },
        'improved': {
            icon: '✨',
            label: 'IMPROVED',
            color: '#3b82f6',
            bg: 'rgba(59, 130, 246, 0.15)'
        },
        'fixed': {
            icon: '🛠️',
            label: 'FIXED',
            color: '#ef4444',
            bg: 'rgba(239, 68, 68, 0.15)'
        },
        'important': {
            icon: '📢',
            label: 'IMPORTANT',
            color: '#f59e0b',
            bg: 'rgba(245, 158, 11, 0.15)'
        }
    };
    return configs[type] || configs['new'];
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

function getMonthYear(dateString) {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options).toUpperCase();
}

function renderUpdates() {
    const pinnedContainer = document.getElementById("pinnedUpdateContainer");
    const timelineContainer = document.getElementById("updatesTimelineContainer");

    if (!pinnedContainer || !timelineContainer) return;

    // Sort descending (newest first)
    const sortedUpdates = [...ucpmUpdates].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (sortedUpdates.length === 0) {
        pinnedContainer.innerHTML = `<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No updates available yet.</p>`;
        return;
    }

    // Render pinned update (newest)
    const latestUpdate = sortedUpdates[0];
    const catLatest = getCategoryConfig(latestUpdate.type);
    
    let pinnedHtml = `
        <div class="pinned-card" style="background: var(--bg-card); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 14px; padding: 24px; box-shadow: 0 8px 32px rgba(99, 102, 241, 0.08); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #3b82f6, #8b5cf6, transparent);"></div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="background: ${catLatest.bg}; color: ${catLatest.color}; padding: 6px 12px; border-radius: 20px; font-size: 11px; font-weight: 800; letter-spacing: 0.5px; border: 1px solid ${catLatest.color}40;">
                        ${catLatest.icon} ${catLatest.label}
                    </span>
                    <span style="color: #6366f1; background: rgba(99, 102, 241, 0.1); font-size: 11px; font-weight: 800; letter-spacing: 0.5px; border: 1px solid rgba(99, 102, 241, 0.3); padding: 6px 12px; border-radius: 20px;">PINNED</span>
                </div>
                <span style="color: var(--text-secondary); font-size: 13px; font-weight: 600;">${formatDate(latestUpdate.date)}</span>
            </div>
            <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 20px; color: var(--text-primary);">${latestUpdate.title}</h3>
            <p style="color: var(--text-secondary); margin-bottom: 16px; line-height: 1.5; font-size: 14.5px;">${latestUpdate.summary}</p>
            <ul style="margin: 0; padding-left: 20px; color: var(--text-primary); font-size: 14px; line-height: 1.6;">
                ${latestUpdate.items.map(item => `<li style="margin-bottom: 6px;">${item}</li>`).join('')}
            </ul>
        </div>
    `;
    pinnedContainer.innerHTML = pinnedHtml;

    // Render historical timeline grouped by month/year
    let timelineHtml = '<div class="timeline-wrapper">';
    let currentMonthYear = '';
    let currentExactDate = '';

    sortedUpdates.forEach((update) => {
        const updateMonthYear = getMonthYear(update.date);
        
        if (updateMonthYear !== currentMonthYear) {
            currentMonthYear = updateMonthYear;
            timelineHtml += `
                <div class="timeline-month-divider">
                    ${currentMonthYear}
                </div>
            `;
            currentExactDate = ''; // Reset exact date grouping on month change
        }

        const cat = getCategoryConfig(update.type);
        
        let itemsHtml = '';
        if (update.items && update.items.length > 0) {
            itemsHtml = `
                <div class="update-details" style="display: none; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border-color);">
                    <ul style="margin: 0; padding-left: 20px; color: var(--text-primary); font-size: 14px; line-height: 1.6;">
                        ${update.items.map(item => `<li style="margin-bottom: 6px;">${item}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-secondary btn-sm expand-update-btn" style="margin-top: 16px; width: 100%; border-radius: 8px; font-size: 13px;">Read more</button>
            `;
        }

        let dateHtml = '';
        if (update.date !== currentExactDate) {
            currentExactDate = update.date;
            const formattedDateParts = new Date(update.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).split(' ');
            const shortDate = `${formattedDateParts[1].replace(',', '')} ${formattedDateParts[0].toUpperCase()} ${formattedDateParts[2]}`;
            dateHtml = `<div class="timeline-date">${shortDate}</div>`;
        } else {
            // Keep empty div for desktop flex alignment, but zero out bottom margin for mobile
            dateHtml = `<div class="timeline-date" style="margin-bottom: 0;"></div>`;
        }

        timelineHtml += `
            <div class="timeline-item">
                ${dateHtml}
                <div class="timeline-marker" style="background-color: ${cat.color};"></div>
                <div class="timeline-content">
                    <div class="update-card">
                        <div style="margin-bottom: 12px;">
                            <span style="background: ${cat.bg}; color: ${cat.color}; padding: 4px 10px; border-radius: 20px; font-size: 10.5px; font-weight: 800; letter-spacing: 0.5px;">
                                ${cat.icon} ${cat.label}
                            </span>
                        </div>
                        <h3 style="margin-top: 0; margin-bottom: 8px; font-size: 17px; color: var(--text-primary);">${update.title}</h3>
                        <p style="color: var(--text-secondary); margin: 0; line-height: 1.5; font-size: 14px;">${update.summary}</p>
                        ${itemsHtml}
                    </div>
                </div>
            </div>
        `;
    });

    timelineHtml += '</div>';
    timelineContainer.innerHTML = timelineHtml;

    // Attach expand/collapse listeners
    document.querySelectorAll('.expand-update-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.update-card');
            const details = card.querySelector('.update-details');
            if (details.style.display === 'none') {
                details.style.display = 'block';
                e.target.textContent = 'Show less';
            } else {
                details.style.display = 'none';
                e.target.textContent = 'Read more';
            }
        });
    });
}
