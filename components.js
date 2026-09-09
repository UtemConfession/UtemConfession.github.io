// Instant theme application before DOM render to prevent flash of unstyled theme
(function() {
    try {
        const saved = localStorage.getItem('ucpm_theme');
        const validThemes = [
            'oled', 'monochrome',
            'sakura', 'synthwave', 'peach', 'arcade',
            'dracula', 'catppuccin', 'nebula',
            'cyberpunk', 'tokyo', 'abyssal', 'cobalt',
            'matrix', 'eva',
            'sepia', 'cathedral'
        ];
        if (saved && validThemes.indexOf(saved) !== -1) {
            document.documentElement.setAttribute('data-theme', saved);
        } else if (saved && saved !== 'classic') {
            localStorage.setItem('ucpm_theme', 'classic');
        }
    } catch (e) {}
})();

// components.js - Centralized Navigation Components
const UCPMHeaderHTML = `<!-- Mobile Header (Full Width Sticky Top Bar) -->
    <header class="mobile-header">
        <div class="mobile-brand">
            <!-- Custom SVG Clock Tower Logo Replicated from Screenshot -->
            <img src="UCPMLogo.webp" alt="UTeM Confessions Pro Max" class="mobile-logo-img">
            <div class="mobile-title-container">
                <span class="mobile-title">UTeM Confessions</span>
                <span class="mobile-subtitle">Pro Max</span>
            </div>
        </div>
        <div class="mobile-lang-wrapper" style="display: flex; align-items: center; gap: 6px;">
            <button class="btn btn-secondary btn-sm lang-toggle-btn" id="mobileLangToggle" aria-label="Switch Language / Tukar Bahasa" style="padding: 4px 9px; font-size: 11px; height: 28px; display: inline-flex; align-items: center; gap: 3px;">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="margin: 0;">
                    <path
                        d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2.1l1.1-3h4.6l1.1 3H23l-4.5-12zm-2.62 7l1.62-4.41L19.12 17h-3.24z" />
                </svg>
                <span>BM</span>
            </button>
            <button class="theme-toggle-btn" id="mobileThemeToggle" type="button" aria-label="Choose Theme" title="Choose Theme" style="padding: 4px 8px; font-size: 11px; height: 28px; display: inline-flex; align-items: center; gap: 4px;">
                <span class="theme-icon">🎨</span>
                <span class="theme-label-short">Theme</span>
            </button>
        </div>
    </header>`;
const UCPMSidebarHTML = `<!-- Desktop Sidebar Navigation -->
        <aside class="sidebar">
            <div class="brand-section">
                <!-- Custom Inline SVG Logo matching Channel Emblem -->
                <img src="UCPMLogo.webp" alt="UTeM Confessions Pro Max" class="brand-logo-img">
                <h1 class="brand-title">UTeM Confessions</h1>
                <span class="brand-subtitle">Pro Max</span>
            </div>
            <!-- Sidebar Controls (Language & Theme) -->
            <div class="sidebar-ctrl-wrapper"
                style="padding: 0 16px 12px 16px; display: flex; gap: 8px; justify-content: center; border-bottom: 1px solid var(--border-color); margin-bottom: 12px;">
                <button class="btn btn-secondary btn-sm lang-toggle-btn" id="desktopLangToggle" aria-label="Switch Language / Tukar Bahasa"
                    style="flex: 1.1; min-width: 70px; padding: 4px 8px; font-size: 11.5px; font-weight: 700; border-color: rgba(var(--accent-gold-rgb), 0.4); color: var(--accent-gold); background: rgba(var(--accent-gold-rgb), 0.05); border-radius: 6px; transition: all 0.2s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px;">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="margin: 0;">
                        <path
                            d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2.1l1.1-3h4.6l1.1 3H23l-4.5-12zm-2.62 7l1.62-4.41L19.12 17h-3.24z" />
                    </svg>
                    <span>BM</span>
                </button>
                <button class="theme-toggle-btn desktop-theme-btn" id="desktopThemeToggle" type="button" aria-label="Choose Theme" title="Choose Theme"
                    style="flex: 1; padding: 4px 8px; font-size: 11.5px; font-weight: 700; border-color: rgba(var(--accent-gold-rgb), 0.4); color: var(--accent-gold); background: rgba(var(--accent-gold-rgb), 0.05); border-radius: 6px; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; gap: 4px; cursor: pointer;">
                    <span class="theme-icon">🎨</span>
                    <span class="theme-label">Theme</span>
                </button>
            </div>

            <!-- Tab Items -->
            <ul class="nav-menu">
                <a href="index.html" class="nav-item" data-tab="confession-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                    </svg>
                    Confessions
                </a>
                <a href="calendar.html" class="nav-item" data-tab="calendar-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                    Academic Calendar
                </a>
                <a href="gpa.html" class="nav-item" data-tab="gpa-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2zm0 8H7v-2h10v2z" />
                    </svg>
                    GPA Calculator
                </a>
                <a href="exams.html" class="nav-item" data-tab="exams-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 18.5c-3.73 0-6.95-1.95-8.66-4.9L12 21l8.66-4.4c-1.71 2.95-4.93 4.9-8.66 4.9z" />
                    </svg>
                    Past Year Exams
                </a>
                <a href="wifi.html" class="nav-item" data-tab="links-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                    </svg>
                    Wi-Fi & Links
                </a>
                <a href="bus.html" class="nav-item" data-tab="bus-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 11H6V6h12v5z" />
                    </svg>
                    Bus Schedules
                </a>
                <a href="parcels.html" class="nav-item" data-tab="parcels-tab" id="desktopParcelsTab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 7l-8-4-8 4 8 4 8-4zm-8 6l-8-4v8l8 4 8-4v-8l-8 4z"/>
                    </svg>
                    Parcel Hub
                </a>
                <a href="marketplace.html" class="nav-item" data-tab="marketplace-tab" id="desktopMarketplaceTab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    Marketplace & Services
                </a>
                <a href="library.html" class="nav-item" data-tab="library-tab" id="desktopLibraryTab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                    </svg>
                    Library (PLH)
                </a>
                <a href="health.html" class="nav-item" data-tab="health-tab" id="desktopHealthTab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
                    </svg>
                    Health Center (PKU)
                </a>
                <a href="activities.html" class="nav-item" data-tab="activities-tab" id="desktopActivitiesTab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                    </svg>
                    Explore Melaka
                </a>
                <a href="scholarships.html" class="nav-item" data-tab="scholarships-tab" id="desktopScholarshipsTab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>
                    Scholarship
                </a>
                <a href="support.html" class="nav-item" data-tab="support-tab" id="desktopSupportTab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    Support Us
                </a>
                <a href="archive.html" class="nav-item" data-tab="archive-tab" id="desktopArchiveTab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.41l.83-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.58L16 13.5z"/></svg>
                    Student Voices
                </a>
                <a href="updates.html" class="nav-item" data-tab="updates-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                    </svg>
                    Updates
                </a>
                <a href="guides.html" class="nav-item" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    Student Guides Hub
                </a>
            </ul>

            <div class="sidebar-footer">
                <!-- Google AdSense Sidebar Multiplex Unit -->
                <div class="ad-slot ad-sidebar ad-slot--desktop-only" id="adSidebar">
                    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1444529930367815"
                        data-ad-slot="7411190923" data-ad-format="autorelaxed" data-full-width-responsive="true"></ins>
                </div>
            </div>
        </aside>`;
const UCPMNavHTML = `<!-- Mobile Horizontal Bottom Navigation Bar -->
    <nav class="mobile-bottom-nav">
        <a href="index.html" class="mobile-nav-btn " data-tab="confession-tab" style="text-decoration: none; color: inherit;">
            <svg viewBox="0 0 24 24">
                <path
                    d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 12H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
            <span>Confessions</span>
        </a>
        <a href="calendar.html" class="mobile-nav-btn" data-tab="calendar-tab" style="text-decoration: none; color: inherit;">
            <svg viewBox="0 0 24 24">
                <path
                    d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
            </svg>
            <span>Calendar</span>
        </a>
        <a href="gpa.html" class="mobile-nav-btn" data-tab="gpa-tab" style="text-decoration: none; color: inherit;">
            <svg viewBox="0 0 24 24">
                <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2zm0 8H7v-2h10v2z" />
            </svg>
            <span>GPA Calc</span>
        </a>
        <a href="bus.html" class="mobile-nav-btn" data-tab="bus-tab" style="text-decoration: none; color: inherit;">
            <svg viewBox="0 0 24 24">
                <path
                    d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z" />
            </svg>
            <span>Buses</span>
        </a>
        <button class="mobile-nav-btn" id="openMobileDrawerBtn" type="button" aria-label="Open More Tools Menu">
            <svg viewBox="0 0 24 24">
                <path
                    d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
            </svg>
            <span>More</span>
        </button>
    </nav>`;
const UCPMDrawerHTML = `<!-- Slide-Up "More" Tools Drawer Modal -->
    <div id="mobileMoreDrawer" class="mobile-drawer-overlay">
        <div class="mobile-drawer-sheet">
            <div class="mobile-drawer-header">
                <div class="mobile-drawer-title" style="display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0; padding-right: 8px;">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="flex-shrink: 0;">
                        <path
                            d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                    </svg>
                    <span id="drawerHeaderTitle" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 14.5px;">Services</span>
                    <button class="btn btn-secondary btn-sm lang-toggle-btn" id="drawerLangToggle" type="button" aria-label="Switch Language / Tukar Bahasa"
                        style="padding: 2px 7px; font-size: 11px; margin-left: auto; border-color: rgba(212, 175, 55, 0.4); color: var(--accent-gold); background: rgba(212, 175, 55, 0.05); border-radius: 6px; display: inline-flex; align-items: center; gap: 3px; height: 24px; cursor: pointer; flex-shrink: 0; white-space: nowrap;">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" style="margin: 0;">
                            <path
                                d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2.1l1.1-3h4.6l1.1 3H23l-4.5-12zm-2.62 7l1.62-4.41L19.12 17h-3.24z" />
                        </svg>
                        <span>BM</span>
                    </button>
                    <button class="theme-toggle-btn drawer-theme-btn" id="drawerThemeToggle" type="button" aria-label="Choose Theme" title="Choose Theme"
                        style="padding: 2px 7px; font-size: 11px; margin-left: 5px; border-color: rgba(212, 175, 55, 0.4); color: var(--accent-gold); background: rgba(212, 175, 55, 0.05); border-radius: 6px; display: inline-flex; align-items: center; gap: 4px; height: 24px; cursor: pointer; flex-shrink: 0; white-space: nowrap;">
                        <span class="theme-icon">🎨</span>
                        <span class="theme-label-short">Theme</span>
                    </button>
                </div>
                <button id="closeMobileDrawerBtn" class="mobile-drawer-close-btn" type="button"
                    aria-label="Close Tools Menu">&times;</button>
            </div>
            <div class="mobile-drawer-grid">
                <a href="exams.html" class="drawer-item-btn" data-tab="exams-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 18.5c-3.73 0-6.95-1.95-8.66-4.9L12 21l8.66-4.4c-1.71 2.95-4.93 4.9-8.66 4.9z" />
                    </svg>
                    <span>Past Year Exams</span>
                </a>
                <a href="wifi.html" class="drawer-item-btn" data-tab="links-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                    </svg>
                    <span>Wi-Fi & Links</span>
                </a>
                <a href="library.html" class="drawer-item-btn" data-tab="library-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                    </svg>
                    <span id="drawerLibrary">Library</span>
                </a>
                <a href="health.html" class="drawer-item-btn" data-tab="health-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
                    </svg>
                    <span id="drawerHealth">Health Center</span>
                </a>
                <a href="parcels.html" class="drawer-item-btn" data-tab="parcels-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 7l-8-4-8 4 8 4 8-4zm-8 6l-8-4v8l8 4 8-4v-8l-8 4z"/>
                    </svg>
                    <span id="drawerParcels">Parcel Hub</span>
                </a>
                <a href="marketplace.html" class="drawer-item-btn" data-tab="marketplace-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    <span>Marketplace & Services</span>
                </a>
                <a href="activities.html" class="drawer-item-btn" data-tab="activities-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                    </svg>
                    <span>Explore Melaka</span>
                </a>
                <a href="scholarships.html" class="drawer-item-btn" data-tab="scholarships-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>
                    <span>Scholarships</span>
                </a>
                <a href="guides.html" class="drawer-item-btn" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    <span>Student Guides</span>
                </a>
                <a href="support.html" class="drawer-item-btn" data-tab="support-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span id="drawerSupport">Support Us</span>
                </a>
                <a href="updates.html" class="drawer-item-btn" data-tab="updates-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                    </svg>
                    <span>Updates</span>
                </a>
                <a href="archive.html" class="drawer-item-btn" data-tab="archive-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.41l.83-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.58L16 13.5z"/></svg>
                    <span>Student Voices</span>
                </a>
            </div>
        </div>
    </div>`;

const UCPMThemeModalHTML = `<!-- Curated Theme Palette Selection Modal -->
    <div id="themePaletteModal" class="theme-modal-overlay" aria-hidden="true" role="dialog" aria-labelledby="themeModalTitle">
        <div class="theme-modal-card">
            <div class="theme-modal-header">
                <div class="theme-modal-title-wrap">
                    <span class="theme-modal-icon">🎨</span>
                    <div>
                        <h3 id="themeModalTitle" class="theme-modal-heading">Curated Themes</h3>
                        <p id="themeModalSubtitle" class="theme-modal-sub">Choose your favorite vibe & style</p>
                    </div>
                </div>
                <button id="closeThemeModalBtn" class="theme-modal-close-btn" type="button" aria-label="Close Theme Picker">&times;</button>
            </div>
            <div class="theme-palette-grid">
                <!-- Group 1: Core / Neutral / High-Contrast -->
                <!-- 1. Classic Gold -->
                <button type="button" class="theme-card-option" data-theme-id="classic">
                    <div class="theme-swatch-ring" style="border-color: #d4af37; background: #060b19;">
                        <span class="theme-swatch-core" style="background: #d4af37; box-shadow: 0 0 6px #d4af37;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🌕</span> Classic UCPM</span>
                        <span class="theme-card-desc">Deep Slate & Gold</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 2. Midnight Eclipse -->
                <button type="button" class="theme-card-option" data-theme-id="oled">
                    <div class="theme-swatch-ring" style="border-color: #ffd700; background: #000000;">
                        <span class="theme-swatch-core" style="background: #ffd700; box-shadow: 0 0 6px #ffd700;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🌑</span> Midnight Eclipse</span>
                        <span class="theme-card-desc">Pitch Black & Gold</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 3. Minimal Monochrome -->
                <button type="button" class="theme-card-option" data-theme-id="monochrome">
                    <div class="theme-swatch-ring" style="border-color: #ffffff; background: #080808;">
                        <span class="theme-swatch-core" style="background: #ffffff; box-shadow: 0 0 6px #ffffff;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">⚪</span> Monochrome</span>
                        <span class="theme-card-desc">Matte Onyx & Studio</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- Group 2: Pink / Magenta / Red / Peach -->
                <!-- 4. Sakura Neon -->
                <button type="button" class="theme-card-option" data-theme-id="sakura">
                    <div class="theme-swatch-ring" style="border-color: #ff6b8b; background: #000000;">
                        <span class="theme-swatch-core" style="background: #ff6b8b; box-shadow: 0 0 6px #ff6b8b;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🌸</span> Sakura Neon</span>
                        <span class="theme-card-desc">Vibrant Pink & Black</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 5. Synthwave 80s -->
                <button type="button" class="theme-card-option" data-theme-id="synthwave">
                    <div class="theme-swatch-ring" style="border-color: #f43f5e; background: #0b0217;">
                        <span class="theme-swatch-core" style="background: #fbbf24; box-shadow: 0 0 6px #f43f5e;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🌆</span> Synthwave 80s</span>
                        <span class="theme-card-desc">Retro Plum & Magenta</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 6. Peach Blossom -->
                <button type="button" class="theme-card-option" data-theme-id="peach">
                    <div class="theme-swatch-ring" style="border-color: #fb7185; background: #150e12;">
                        <span class="theme-swatch-core" style="background: #fb7185; box-shadow: 0 0 6px #fb7185;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🍑</span> Peach Blossom</span>
                        <span class="theme-card-desc">Espresso & Soft Coral</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 7. Arcade 1984 -->
                <button type="button" class="theme-card-option" data-theme-id="arcade">
                    <div class="theme-swatch-ring" style="border-color: #ff2a6d; background: #090510;">
                        <span class="theme-swatch-core" style="background: #ff2a6d; box-shadow: 0 0 6px #ff2a6d;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🕹️</span> Arcade 1984</span>
                        <span class="theme-card-desc">CRT Cabinet & Laser Red</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- Group 3: Purple / Lilac / Ultraviolet -->
                <!-- 8. Dracula Violet -->
                <button type="button" class="theme-card-option" data-theme-id="dracula">
                    <div class="theme-swatch-ring" style="border-color: #c084fc; background: #0d081a;">
                        <span class="theme-swatch-core" style="background: #c084fc; box-shadow: 0 0 6px #c084fc;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🔮</span> Dracula Violet</span>
                        <span class="theme-card-desc">Obsidian & Electric Lilac</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 9. Pastel Mocha -->
                <button type="button" class="theme-card-option" data-theme-id="catppuccin">
                    <div class="theme-swatch-ring" style="border-color: #cba6f7; background: #181825;">
                        <span class="theme-swatch-core" style="background: #cba6f7; box-shadow: 0 0 6px #cba6f7;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">☕</span> Pastel Mocha</span>
                        <span class="theme-card-desc">Velvet Slate & Soft Mocha</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 10. Cosmic Nebula -->
                <button type="button" class="theme-card-option" data-theme-id="nebula">
                    <div class="theme-swatch-ring" style="border-color: #d946ef; background: #080414;">
                        <span class="theme-swatch-core" style="background: #d946ef; box-shadow: 0 0 6px #d946ef;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🪐</span> Cosmic Nebula</span>
                        <span class="theme-card-desc">Interstellar & Ultraviolet</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- Group 4: Blue / Cyan / Teal / Marine -->
                <!-- 11. Cyberpunk Cyan -->
                <button type="button" class="theme-card-option" data-theme-id="cyberpunk">
                    <div class="theme-swatch-ring" style="border-color: #00f5d4; background: #000000;">
                        <span class="theme-swatch-core" style="background: #00f5d4; box-shadow: 0 0 6px #00f5d4;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">💎</span> Cyberpunk Cyan</span>
                        <span class="theme-card-desc">Neon Cyan & Black</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 12. Tokyo Night -->
                <button type="button" class="theme-card-option" data-theme-id="tokyo">
                    <div class="theme-swatch-ring" style="border-color: #7aa2f7; background: #1a1b26;">
                        <span class="theme-swatch-core" style="background: #7aa2f7; box-shadow: 0 0 6px #7aa2f7;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🗼</span> Tokyo Night</span>
                        <span class="theme-card-desc">Storm Indigo & Azure</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 13. Abyssal Blue -->
                <button type="button" class="theme-card-option" data-theme-id="abyssal">
                    <div class="theme-swatch-ring" style="border-color: #06b6d4; background: #020813;">
                        <span class="theme-swatch-core" style="background: #06b6d4; box-shadow: 0 0 6px #06b6d4;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🌊</span> Abyssal Blue</span>
                        <span class="theme-card-desc">Deep Trench & Teal</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 14. Cobalt Blue -->
                <button type="button" class="theme-card-option" data-theme-id="cobalt">
                    <div class="theme-swatch-ring" style="border-color: #3b82f6; background: #050814;">
                        <span class="theme-swatch-core" style="background: #3b82f6; box-shadow: 0 0 6px #3b82f6;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🧿</span> Cobalt Blue</span>
                        <span class="theme-card-desc">Midnight Ink & Azure</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- Group 5: Green / Cyber -->
                <!-- 15. Matrix Emerald -->
                <button type="button" class="theme-card-option" data-theme-id="matrix">
                    <div class="theme-swatch-ring" style="border-color: #10b981; background: #000000;">
                        <span class="theme-swatch-core" style="background: #10b981; box-shadow: 0 0 6px #10b981;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">📟</span> Matrix Emerald</span>
                        <span class="theme-card-desc">Pitch Black & Hacker Green</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 16. Electric Aurora -->
                <button type="button" class="theme-card-option" data-theme-id="eva">
                    <div class="theme-swatch-ring" style="border-color: #00ff66; background: #0e081c;">
                        <span class="theme-swatch-core" style="background: #00ff66; box-shadow: 0 0 6px #00ff66;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🌌</span> Electric Aurora</span>
                        <span class="theme-card-desc">Violet Night & Radiant Green</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- Group 6: Warm Earth & Hearth -->
                <!-- 17. Sepia Warm Night -->
                <button type="button" class="theme-card-option" data-theme-id="sepia">
                    <div class="theme-swatch-ring" style="border-color: #e2a964; background: #15110e;">
                        <span class="theme-swatch-core" style="background: #e2a964; box-shadow: 0 0 6px #e2a964;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">☕</span> Sepia Warm Night</span>
                        <span class="theme-card-desc">Amber & Reading Paper</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
                <!-- 18. Gothic Ember -->
                <button type="button" class="theme-card-option" data-theme-id="cathedral">
                    <div class="theme-swatch-ring" style="border-color: #f59e0b; background: #0c0b0e;">
                        <span class="theme-swatch-core" style="background: #f59e0b; box-shadow: 0 0 6px #f59e0b;"></span>
                    </div>
                    <div class="theme-card-info">
                        <span class="theme-card-name"><span class="theme-card-emoji">🕯️</span> Gothic Ember</span>
                        <span class="theme-card-desc">Dark Slate & Warm Flame</span>
                    </div>
                    <div class="theme-check-circle" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </button>
            </div>
        </div>
    </div>`;

class UCPMMobileHeader extends HTMLElement { connectedCallback() { this.insertAdjacentHTML('afterend', UCPMHeaderHTML); this.remove(); } }
customElements.define('ucpm-mobile-header', UCPMMobileHeader);

class UCPMSidebar extends HTMLElement { connectedCallback() { this.insertAdjacentHTML('afterend', UCPMSidebarHTML); this.remove(); } }
customElements.define('ucpm-sidebar', UCPMSidebar);

class UCPMMobileNav extends HTMLElement { connectedCallback() { this.insertAdjacentHTML('afterend', UCPMNavHTML); this.remove(); } }
customElements.define('ucpm-mobile-nav', UCPMMobileNav);

class UCPMMobileDrawer extends HTMLElement { connectedCallback() { this.insertAdjacentHTML('afterend', UCPMDrawerHTML); this.remove(); } }
customElements.define('ucpm-mobile-drawer', UCPMMobileDrawer);

document.addEventListener('DOMContentLoaded', () => {
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage || currentPage === "") currentPage = "index.html";
    
    // Strip hash and query parameters
    currentPage = currentPage.split("?")[0].split("#")[0];

    // Normalize guide sub-pages to guides.html
    let lookupPage = currentPage;
    if (lookupPage.startsWith("guide-")) {
        lookupPage = "guides.html";
    }

    const activeLinks = document.querySelectorAll(
        '.nav-item[href*="' + lookupPage + '"], .mobile-nav-btn[href*="' + lookupPage + '"], .drawer-item-btn[href*="' + lookupPage + '"]'
    );
    activeLinks.forEach(link => link.classList.add("active"));

    if (lookupPage === "index.html") {
        document.querySelectorAll('.nav-item[data-tab="confession-tab"]').forEach(el => el.classList.add("active"));
        document.querySelectorAll('.mobile-nav-btn[data-tab="confession-tab"]').forEach(el => el.classList.add("active"));
    }

    // If current page is an item inside the "More" drawer, highlight the "More" bottom nav button
    const activeDrawerItem = document.querySelector('.drawer-item-btn.active');
    const activeMobileBottomBtn = document.querySelector('.mobile-bottom-nav .mobile-nav-btn.active');
    const openDrawerBtn = document.getElementById("openMobileDrawerBtn");

    if (activeDrawerItem && !activeMobileBottomBtn && openDrawerBtn) {
        openDrawerBtn.classList.add("active");
    }

    initPwaInstallPrompt();
    initOfflineStatusBar();
    initScrollReveal();
    initThemePresetSystem();
});

// --- PWA Native Install Prompt Handler ---
function initPwaInstallPrompt() {
    let deferredPrompt = null;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;

        if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) return;

        const dismissedAt = localStorage.getItem('ucpm_pwa_dismissed');
        if (dismissedAt && (Date.now() - Number(dismissedAt) < 7 * 24 * 60 * 60 * 1000)) return;

        if (document.getElementById('pwaInstallBanner')) return;

        const banner = document.createElement('div');
        banner.id = 'pwaInstallBanner';
        banner.className = 'pwa-install-banner';
        banner.innerHTML = `
            <div class="pwa-install-left">
                <img src="UCPMLogo.webp" alt="UCPM App" class="pwa-install-icon" width="38" height="38">
                <div class="pwa-install-text">
                    <span class="pwa-install-title">Install UCPM App</span>
                    <span class="pwa-install-subtitle">Fast offline access &amp; transit radar</span>
                </div>
            </div>
            <div class="pwa-install-right">
                <button id="pwaInstallBtn" class="btn btn-primary btn-sm" type="button" style="padding: 6px 14px; font-size: 12px; font-weight: 700;">Install</button>
                <button id="pwaDismissBtn" class="pwa-dismiss-btn" type="button" aria-label="Close">&times;</button>
            </div>
        `;
        document.body.appendChild(banner);

        const installBtn = document.getElementById('pwaInstallBtn');
        if (installBtn) {
            installBtn.addEventListener('click', async () => {
                if (!deferredPrompt) return;
                deferredPrompt.prompt();
                const choice = await deferredPrompt.userChoice;
                if (choice && choice.outcome === 'accepted') {
                    localStorage.setItem('ucpm_pwa_installed', 'true');
                }
                deferredPrompt = null;
                banner.remove();
            });
        }

        const dismissBtn = document.getElementById('pwaDismissBtn');
        if (dismissBtn) {
            dismissBtn.addEventListener('click', () => {
                localStorage.setItem('ucpm_pwa_dismissed', Date.now().toString());
                banner.remove();
            });
        }
    });

    window.addEventListener('appinstalled', () => {
        const banner = document.getElementById('pwaInstallBanner');
        if (banner) banner.remove();
        localStorage.setItem('ucpm_pwa_installed', 'true');
    });
}

// --- Native Offline Mode Status Bar Handler ---
function initOfflineStatusBar() {
    const bar = document.createElement('div');
    bar.id = 'offlineStatusBar';
    bar.className = 'offline-status-bar';
    bar.setAttribute('role', 'status');
    bar.setAttribute('aria-live', 'polite');
    document.body.appendChild(bar);

    let hideTimer = null;

    function updateNetworkState(isOnline) {
        clearTimeout(hideTimer);
        if (!isOnline) {
            bar.className = 'offline-status-bar visible offline';
            bar.innerHTML = '<span class="offline-status-dot"></span><span><strong>Offline Mode</strong> &bull; Viewing saved schedules &amp; guides</span>';
        } else {
            if (bar.classList.contains('offline')) {
                bar.className = 'offline-status-bar visible online';
                bar.innerHTML = '<span class="offline-status-dot"></span><span><strong>Back Online</strong> &bull; Live sync restored</span>';
                hideTimer = setTimeout(() => {
                    bar.classList.remove('visible');
                }, 3000);
            }
        }
    }

    window.addEventListener('offline', () => updateNetworkState(false));
    window.addEventListener('online', () => updateNetworkState(true));

    if (!navigator.onLine) {
        updateNetworkState(false);
    }
}

// --- Scroll Reveal for Below-The-Fold Cards ---
function initScrollReveal() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
    });

    function observeNewElements() {
        const items = document.querySelectorAll(
            '.archive-card:nth-child(n+7):not(.scroll-revealed), ' +
            '.guide-card:nth-child(n+7):not(.scroll-revealed), ' +
            '.activity-card:nth-child(n+7):not(.scroll-revealed), ' +
            '.scroll-reveal:not(.scroll-revealed)'
        );
        items.forEach(el => observer.observe(el));
    }

    observeNewElements();

    const mainContent = document.querySelector('.main-content');
    if (mainContent && window.MutationObserver) {
        const mutObs = new MutationObserver(() => observeNewElements());
        mutObs.observe(mainContent, { childList: true, subtree: true });
    }
}

// --- MODEL B: Curated Theme Preset Engine & Circular View Transition System ---
const UCPM_THEMES = {
    // 1. Core / Neutral / High-Contrast
    classic: { id: 'classic', name: 'Classic', icon: '🌕', fullName: 'Classic UCPM', color: '#d4af37' },
    oled: { id: 'oled', name: 'Eclipse', icon: '🌑', fullName: 'Midnight Eclipse', color: '#ffd700' },
    monochrome: { id: 'monochrome', name: 'Mono', icon: '⚪', fullName: 'Minimal Monochrome', color: '#ffffff' },
    // 2. Pink / Magenta / Red / Peach
    sakura: { id: 'sakura', name: 'Sakura', icon: '🌸', fullName: 'Sakura Neon', color: '#ff6b8b' },
    synthwave: { id: 'synthwave', name: 'Synthwave', icon: '🌆', fullName: 'Synthwave 80s', color: '#f43f5e' },
    peach: { id: 'peach', name: 'Peach', icon: '🍑', fullName: 'Peach Blossom', color: '#fb7185' },
    arcade: { id: 'arcade', name: 'Arcade', icon: '🕹️', fullName: 'Arcade 1984', color: '#ff2a6d' },
    // 3. Purple / Lilac / Ultraviolet
    dracula: { id: 'dracula', name: 'Dracula', icon: '🔮', fullName: 'Dracula Violet', color: '#c084fc' },
    catppuccin: { id: 'catppuccin', name: 'Mocha', icon: '\u2615', fullName: 'Pastel Mocha', color: '#cba6f7' },
    nebula: { id: 'nebula', name: 'Nebula', icon: '🪐', fullName: 'Cosmic Nebula', color: '#d946ef' },
    // 4. Blue / Cyan / Teal / Marine
    cyberpunk: { id: 'cyberpunk', name: 'Cyberpunk', icon: '💎', fullName: 'Cyberpunk Cyan', color: '#00f5d4' },
    tokyo: { id: 'tokyo', name: 'Tokyo', icon: '🗼', fullName: 'Tokyo Night', color: '#7aa2f7' },
    abyssal: { id: 'abyssal', name: 'Abyssal', icon: '🌊', fullName: 'Abyssal Blue', color: '#06b6d4' },
    cobalt: { id: 'cobalt', name: 'Cobalt Blue', icon: '🧿', fullName: 'Cobalt Blue', color: '#3b82f6' },
    // 5. Green / Cyber
    matrix: { id: 'matrix', name: 'Matrix', icon: '📟', fullName: 'Matrix Emerald', color: '#10b981' },
    eva: { id: 'eva', name: 'Aurora', icon: '\uD83C\uDF0C', fullName: 'Electric Aurora', color: '#00ff66' },
    // 6. Warm Earth & Hearth
    sepia: { id: 'sepia', name: 'Sepia', icon: '☕', fullName: 'Sepia Warm Night', color: '#e2a964' },
    cathedral: { id: 'cathedral', name: 'Gothic Ember', icon: '🕯️', fullName: 'Gothic Ember', color: '#f59e0b' }
};

function getActiveThemeId() {
    const dataTheme = document.documentElement.getAttribute('data-theme');
    if (dataTheme && UCPM_THEMES[dataTheme]) return dataTheme;
    const stored = localStorage.getItem('ucpm_theme');
    if (stored && UCPM_THEMES[stored]) return stored;
    return 'classic';
}

let themeModalCloseTimer = null;

function initThemePresetSystem() {
    // Ensure modal container is mounted in DOM if not yet present
    if (!document.getElementById('themePaletteModal')) {
        document.body.insertAdjacentHTML('beforeend', UCPMThemeModalHTML);
    }

    const currentTheme = getActiveThemeId();
    if (currentTheme === 'classic') {
        document.documentElement.removeAttribute('data-theme');
        try {
            const stored = localStorage.getItem('ucpm_theme');
            if (stored && !UCPM_THEMES[stored]) {
                localStorage.setItem('ucpm_theme', 'classic');
            }
        } catch (e) {}
    } else {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    updateThemePresetUI(currentTheme);

    // Global listener for opening theme palette
    document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('.theme-toggle-btn');
        if (toggleBtn) {
            e.preventDefault();
            e.stopPropagation();
            if (navigator.vibrate) {
                try { navigator.vibrate(8); } catch (err) {}
            }
            openThemePaletteModal();
            return;
        }

        // Close modal triggers
        const closeBtn = e.target.closest('#closeThemeModalBtn');
        const modalOverlay = e.target.closest('#themePaletteModal');
        if (closeBtn || (modalOverlay && e.target === modalOverlay)) {
            e.preventDefault();
            if (themeModalCloseTimer) {
                clearTimeout(themeModalCloseTimer);
                themeModalCloseTimer = null;
            }
            if (closeBtn && navigator.vibrate) {
                try { navigator.vibrate(6); } catch (err) {}
            }
            closeThemePaletteModal();
            return;
        }

        // Theme option click inside modal
        const optionBtn = e.target.closest('.theme-card-option');
        if (optionBtn) {
            e.preventDefault();
            const targetTheme = optionBtn.getAttribute('data-theme-id');
            if (targetTheme) {
                if (themeModalCloseTimer) {
                    clearTimeout(themeModalCloseTimer);
                    themeModalCloseTimer = null;
                }
                applyThemePreset(targetTheme, e);
            }
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (themeModalCloseTimer) {
                clearTimeout(themeModalCloseTimer);
                themeModalCloseTimer = null;
            }
            closeThemePaletteModal();
        }
    });
}

function openThemePaletteModal() {
    if (themeModalCloseTimer) {
        clearTimeout(themeModalCloseTimer);
        themeModalCloseTimer = null;
    }
    const modal = document.getElementById('themePaletteModal');
    if (!modal) return;
    const currentTheme = getActiveThemeId();
    updateThemePresetUI(currentTheme);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeThemePaletteModal() {
    if (themeModalCloseTimer) {
        clearTimeout(themeModalCloseTimer);
        themeModalCloseTimer = null;
    }
    const modal = document.getElementById('themePaletteModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function updateThemePresetUI(themeId) {
    const theme = UCPM_THEMES[themeId] || UCPM_THEMES.classic;
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    
    buttons.forEach(btn => {
        const iconEl = btn.querySelector('.theme-icon');
        const textEl = btn.querySelector('.theme-label, .theme-text');
        const shortTextEl = btn.querySelector('.theme-label-short');
        const generalSpan = btn.querySelector('span:not(.theme-icon):not(.theme-label):not(.theme-label-short)');

        if (iconEl) iconEl.textContent = theme.icon;
        if (textEl) textEl.textContent = theme.name;
        if (shortTextEl) shortTextEl.textContent = theme.name;
        if (generalSpan && !textEl && !shortTextEl) generalSpan.textContent = theme.name;

        btn.setAttribute('aria-label', `Theme: ${theme.fullName}. Tap to change.`);
        btn.setAttribute('title', `Theme: ${theme.fullName}`);
    });

    // Update active highlight in modal options
    const options = document.querySelectorAll('.theme-card-option');
    options.forEach(opt => {
        const optThemeId = opt.getAttribute('data-theme-id');
        opt.classList.toggle('active', optThemeId === themeId);
    });
}

function applyThemePreset(targetTheme, e) {
    if (!UCPM_THEMES[targetTheme]) targetTheme = 'classic';

    if (navigator.vibrate) {
        try { navigator.vibrate(12); } catch (err) {}
    }

    const applyDOMChanges = () => {
        if (targetTheme === 'classic') {
            document.documentElement.removeAttribute('data-theme');
            try { localStorage.setItem('ucpm_theme', 'classic'); } catch (err) {}
        } else {
            document.documentElement.setAttribute('data-theme', targetTheme);
            try { localStorage.setItem('ucpm_theme', targetTheme); } catch (err) {}
        }
        updateThemePresetUI(targetTheme);

        // Smoothly dismiss palette modal and mobile drawer with DOM commit
        closeThemePaletteModal();
        const drawer = document.getElementById('mobileMoreDrawer');
        if (drawer && drawer.classList.contains('active')) {
            drawer.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (typeof showStatus === 'function') {
            const themeInfo = UCPM_THEMES[targetTheme];
            showStatus(`${themeInfo.icon} ${themeInfo.fullName} Activated`, 'success');
        }
    };

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (e) {
        if (typeof e.clientX === 'number' && (e.clientX > 0 || e.clientY > 0)) {
            x = e.clientX;
            y = e.clientY;
        } else if (e.touches && e.touches.length > 0) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        } else if (e.changedTouches && e.changedTouches.length > 0) {
            x = e.changedTouches[0].clientX;
            y = e.changedTouches[0].clientY;
        } else {
            const targetEl = (e.target && e.target.closest) 
                ? e.target.closest('.theme-card-option, .theme-toggle-btn') 
                : (e.currentTarget || e.target);
            if (targetEl && typeof targetEl.getBoundingClientRect === 'function') {
                const rect = targetEl.getBoundingClientRect();
                x = rect.left + rect.width / 2;
                y = rect.top + rect.height / 2;
            }
        }
    }

    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (document.startViewTransition && !prefersReducedMotion) {
        // Set CSS Custom Properties for pure CSS @keyframes animation (Safari 18+ and Chromium)
        document.documentElement.style.setProperty('--ripple-x', `${Math.round(x)}px`);
        document.documentElement.style.setProperty('--ripple-y', `${Math.round(y)}px`);
        document.documentElement.style.setProperty('--ripple-radius', `${Math.round(endRadius * 1.15)}px`);

        document.documentElement.classList.add('theme-ripple-active');

        const cleanupRipple = () => {
            document.documentElement.classList.remove('theme-ripple-active');
        };

        try {
            const transition = document.startViewTransition(() => {
                applyDOMChanges();
            });

            if (transition.finished) {
                transition.finished.finally(cleanupRipple);
            } else {
                setTimeout(cleanupRipple, 900);
            }

            transition.ready.then(() => {
                // Dual-drive: JS animation for Chromium; if Safari rejects pseudoElement, CSS @keyframes takes over
                try {
                    document.documentElement.animate(
                        {
                            clipPath: [
                                `circle(0px at ${x}px ${y}px)`,
                                `circle(${Math.round(endRadius * 1.15)}px at ${x}px ${y}px)`
                            ]
                        },
                        {
                            duration: 750,
                            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                            pseudoElement: '::view-transition-new(root)'
                        }
                    );
                } catch (animErr) {
                    // Safari 18 executes via CSS @keyframes ucpm-theme-ripple automatically
                }
            }).catch(() => {
                cleanupRipple();
            });
        } catch (vtErr) {
            cleanupRipple();
            applyDOMChanges();
        }
    } else if (!prefersReducedMotion) {
        // Universal iOS WebKit / In-App WebView Shockwave Circular Reveal
        const themeInfo = UCPM_THEMES[targetTheme] || UCPM_THEMES.classic;
        const accentColor = themeInfo.color || '#d4af37';

        const themeBgMap = {
            classic: '#0a0f1d',
            oled: '#000000',
            monochrome: '#121212',
            sakura: '#170c14',
            synthwave: '#160822',
            peach: '#150e12',
            arcade: '#090510',
            dracula: '#120d1c',
            catppuccin: '#141221',
            nebula: '#11091e',
            cyberpunk: '#05161e',
            tokyo: '#0d111e',
            abyssal: '#04151e',
            cobalt: '#070f26',
            matrix: '#03140c',
            eva: '#0a1408',
            sepia: '#15110d',
            cathedral: '#1a100a'
        };
        const targetBg = themeBgMap[targetTheme] || '#0a0f1d';
        const targetRadius = Math.ceil(endRadius * 1.2);

        const wipeEl = document.createElement('div');
        wipeEl.className = 'ucpm-universal-theme-wipe';
        wipeEl.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 2999998;
            background: ${targetBg};
            clip-path: circle(0px at ${x}px ${y}px);
            -webkit-clip-path: circle(0px at ${x}px ${y}px);
            transition: clip-path 0.7s cubic-bezier(0.25, 1, 0.5, 1), -webkit-clip-path 0.7s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.35s ease;
            will-change: clip-path, -webkit-clip-path;
        `;

        const ringEl = document.createElement('div');
        ringEl.className = 'ucpm-universal-theme-ring';
        ringEl.style.cssText = `
            position: fixed;
            left: ${x - 40}px;
            top: ${y - 40}px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 2999999;
            border: 3.5px solid ${accentColor};
            box-shadow: 0 0 45px ${accentColor}, inset 0 0 25px ${accentColor};
            transform: scale(0);
            transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.7s ease;
            will-change: transform, opacity;
        `;

        document.body.appendChild(wipeEl);
        document.body.appendChild(ringEl);

        void wipeEl.offsetWidth;

        wipeEl.style.clipPath = `circle(${targetRadius}px at ${x}px ${y}px)`;
        wipeEl.style.webkitClipPath = `circle(${targetRadius}px at ${x}px ${y}px)`;

        const ringScale = (targetRadius * 2) / 80;
        ringEl.style.transform = `scale(${ringScale})`;
        ringEl.style.opacity = '0';

        setTimeout(() => {
            applyDOMChanges();
        }, 280);

        setTimeout(() => {
            wipeEl.style.opacity = '0';
            setTimeout(() => {
                if (wipeEl.parentNode) wipeEl.parentNode.removeChild(wipeEl);
                if (ringEl.parentNode) ringEl.parentNode.removeChild(ringEl);
            }, 320);
        }, 660);
    } else {
        applyDOMChanges();
    }
}
