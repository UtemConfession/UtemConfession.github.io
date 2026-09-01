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
        <div class="mobile-lang-wrapper">
            <button class="btn btn-secondary btn-sm lang-toggle-btn" id="mobileLangToggle">
                Bahasa Melayu
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
            <!-- Sidebar Language Toggle -->
            <div
                style="padding: 0 20px 12px 20px; display: flex; justify-content: center; border-bottom: 1px solid var(--border-color); margin-bottom: 12px;">
                <button class="btn btn-secondary btn-sm lang-toggle-btn" id="desktopLangToggle"
                    style="width: auto; min-width: 130px; padding: 4px 12px; font-size: 11.5px; font-weight: 700; border-color: rgba(212, 175, 55, 0.4); color: var(--accent-gold); background: rgba(212, 175, 55, 0.05); border-radius: 6px; transition: all 0.2s;">
                    Bahasa Melayu
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
                    <svg viewBox="0 0 24 24">
                        <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.41l.83-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.58L16 13.5z"/>
                    </svg>
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
        <a href="calendar.html" class="mobile-nav-btn" style="text-decoration: none; color: inherit;">
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
                <div class="mobile-drawer-title" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path
                            d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                    </svg>
                    <span>Campus Services & Tools</span>
                    <button class="btn btn-secondary btn-sm lang-toggle-btn" id="drawerLangToggle" type="button"
                        style="padding: 2px 8px; font-size: 11px; margin-left: auto; border-color: rgba(212, 175, 55, 0.4); color: var(--accent-gold); background: rgba(212, 175, 55, 0.05); border-radius: 6px; display: inline-flex; align-items: center; gap: 4px; height: 24px;">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="margin: 0;">
                            <path
                                d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2.1l1.1-3h4.6l1.1 3H23l-4.5-12zm-2.62 7l1.62-4.41L19.12 17h-3.24z" />
                        </svg>
                        <span>Bahasa Melayu</span>
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
    
    const activeLinks = document.querySelectorAll('.nav-item[href="' + currentPage + '"], .mobile-nav-btn[href="' + currentPage + '"], .drawer-item-btn[href="' + currentPage + '"]');
    activeLinks.forEach(link => link.classList.add("active"));

    if (currentPage === "index.html") {
        document.querySelectorAll('.nav-item[data-tab="confession-tab"]').forEach(el => el.classList.add("active"));
        document.querySelectorAll('.mobile-nav-btn[data-tab="confession-tab"]').forEach(el => el.classList.add("active"));
    }
});



