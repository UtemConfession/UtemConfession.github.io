// updates-data.js
// Source of truth for UCPM Updates page.

const ucpmUpdates = [
    {
        date: "2026-09-05",
        type: "new",
        title: "Real-Time Operating Hours & Campus Smart Pills",
        summary: "Introduced dynamic top smart pills for Library (PLH), PKU Health Center, and Unit Mel Parcel Hub with automatic live schedule status tracking.",
        items: [
            "Library Smart Pill: Real-time opening hours, semester break schedules, and exam season 24-hour continuous study area access indicator",
            "PKU Health Center Smart Pill: Live clinic consultation hours for Main Campus (Durian Tunggal) including Friday prayer and lunch breaks",
            "Parcel Hub Smart Pill: Live package pickup desk hours, weekend closures, and instant click-to-scroll to the verified hostel shipping address generator",
            "Academic Calendar Countdown: Real-time semester break and lecture milestone countdown pill with 1-click jump to the calendar timeline"
        ]
    },
    {
        date: "2026-09-05",
        type: "improved",
        title: "Shuttle Bus Transit Tracker & Radar Animations",
        summary: "Upgraded the campus transit suite with live route departure countdowns, interactive radar tracking, and seamless bilingual support.",
        items: [
            "Live M10A Pink Bus loop countdown timer with pulsating radar transit visualizer",
            "Introduced unified semester toggle seamlessly switching between regular academic terms and semester break shuttle schedules",
            "Streamlined transit alerts and stop listings across Kampus Induk, Kampus Teknologi, and Ayer Keroh loops",
            "Polished top smart pill layouts and typography for unified cross-tab consistency"
        ]
    },
    {
        date: "2026-09-05",
        type: "fixed",
        title: "Smart Pill Visual Sizing & Phase Badge Alignment",
        summary: "Resolved smart pill sizing inconsistencies, corrected calendar phase badge alignment, and replaced harsh warning glows with modern ambient accents.",
        items: [
            "Parcel Hub Pill Sizing: Unified responsive padding and font sizing with Library and PKU health pills",
            "Academic Calendar Formatting: Separated current campus phase (Semester Break) from upcoming countdown (Lectures begin in X days)",
            "Ambient Glow Palette: Replaced harsh red warning shadows with calm, modern purple and slate ambient glows",
            "Instant Language Sync: Fixed language toggle so calendar and transit smart pills switch between English and Malay immediately without page reload"
        ]
    },
    {
        date: "2026-09-04",
        type: "new",
        title: "State Scholarship & Financial Aid Directory",
        summary: "Added a comprehensive directory connecting UTeM students to state foundation sponsorships, zakat education funds, and government aid schemes across Malaysia.",
        items: [
            "Detailed listings for all 13 state foundations (Yayasan Melaka, Yayasan Selangor, Yayasan Johor, Yayasan Sabah, Yayasan Sarawak, etc.)",
            "Direct application portal links, eligibility requirements, and student support contact details",
            "One-off Bantuan Awal Pengajian (BAP) and student emergency zakat assistance guidelines"
        ]
    },
    {
        date: "2026-09-04",
        type: "improved",
        title: "Explore Melaka Directory & Student Guides Expansion",
        summary: "Expanded local attraction recommendations and optimized educational survival guides for smoother mobile reading.",
        items: [
            "Curated 72+ Melaka student attractions with instant category filters, indoor/outdoor tags, and quick search",
            "Refined typography, callouts, and structured tables across 14 comprehensive campus survival guides",
            "Enhanced slide-out mobile drawer navigation with quick shortcuts to all utilities"
        ]
    },
    {
        date: "2026-09-04",
        type: "fixed",
        title: "Mobile Navigation Layering & Tag Balance Audit",
        summary: "Fixed mobile drawer overlapping, normalized bottom navigation touch padding, and cleaned up HTML markup across all pages.",
        items: [
            "Corrected z-index layering conflicts between the sticky mobile header and bottom navigation bar",
            "Ensured 100% balanced HTML semantic structure across all 33 platform pages",
            "Preserved full UTF-8 character integrity and eliminated text encoding inconsistencies across all core tools"
        ]
    },
    {
        date: "2026-08-28",
        type: "new",
        title: "Student Voices Hub & Curated Confessions",
        summary: "Introduced the newly rebranded Student Voices (Suara Pelajar) community space featuring searchable confession threads, distinct category themes, and refined reader experience.",
        items: [
            "Rebranded Confessions Archive to Student Voices (Suara Pelajar) across the platform for a more welcoming and community-driven space",
            "Expanded curated confession collection to 97+ unique submissions with standardized reply formats (↳)",
            "Enhanced badge color palette with a dedicated Indigo theme for Question & Inquiry posts",
            "Optimized confession card spacing and responsive layout for a cleaner reading experience on all devices"
        ]
    },
    {
        date: "2026-08-26",
        type: "improved",
        title: "Comprehensive Guides & Resource Info Expansion",
        summary: "Significantly expanded core tool and utility pages with in-depth educational guides, official academic rules, FAQ sections, and transit advice.",
        items: [
            "GPA Calculator: Added UTeM academic status breakdown (KB/KS/KG), Dean's List requirements, and PTPTN First Class loan conversion strategies",
            "Bus Schedules: Added shuttle route breakdowns, campus loop transit guides, and peak-hour commuter advice",
            "Library (PLH): Added borrowing quotas, 24/7 exam-week study area access rules, and console/games rental details",
            "Wi-Fi & Links: Added step-by-step eduroam setup and student Wi-Fi troubleshooting guidance",
            "Marketplace & Services: Added campus meet-up safety advice and simplified student listing submission process",
            "Past Year Exams & Calendar: Added BPA exam regulations and academic milestone breakdowns"
        ]
    },
    {
        date: "2026-08-25",
        type: "new",
        title: "14 In-Depth Student Resource & Survival Guides",
        summary: "Published 14 comprehensive, long-form student survival and academic guides covering all major aspects of student life at UTeM.",
        items: [
            "Academic & Career: GPA & First Class Honors, FYP Survival Guide, Course Registration Add/Drop, Past Year Exams, and Internship Training",
            "Financial & Living: PTPTN Loan Exemption, Budget Living & Food, Off-Campus Rental Housing, and Hostel Kolej Kediaman Merit",
            "Transit & Campus Tools: Campus Shuttle Bus Transit, Vehicle Sticker & Parking Rules, Top 10 Study Spots, and IT Setup & Eduroam"
        ]
    },
    {
        date: "2026-08-25",
        type: "fixed",
        title: "High-Contrast Dark Mode Text Fix",
        summary: "Enhanced text color variables across all cards, resource guides, and footers to exceed WCAG AA accessibility standards in dark mode.",
        items: [
            "Brightened muted and secondary text colors on dark navy backgrounds",
            "Improved legibility of small guide descriptions, badges, and editorial disclaimers",
            "Passed full automated accessibility contrast checks across all 33 pages"
        ]
    },
    {
        date: "2026-08-23",
        type: "improved",
        title: "Automated Profanity & Moderation Filter",
        summary: "Integrated an automated keyword moderation filter to proactively detect and prevent profanity, personal attacks, and abusive language in confession submissions.",
        items: [
            "Real-time keyword filtering on confession text input",
            "Instant blocking of malicious or abusive submissions before entering the queue",
            "Reinforced Community Moderation & Takedown channel for fast privacy protection"
        ]
    },
    {
        date: "2026-08-22",
        type: "fixed",
        title: "GPA Calculator Interface Clean-Up",
        summary: "Streamlined the GPA calculation interface for faster input and a cleaner user experience on mobile devices.",
        items: [
            "Removed redundant print options in favor of a cleaner mobile-first calculation view",
            "Enhanced subject row layout and grade input responsiveness"
        ]
    },
    {
        date: "2026-08-16",
        type: "improved",
        title: "UI/UX Enhancements & Mobile Optimization",
        summary: "We've refined the interface to provide a cleaner, more spacious look, ensuring a better experience across all devices.",
        items: [
            "Optimized layout spacing for a cleaner and more modern visual experience",
            "Improved mobile responsiveness allowing more content to be viewable on screen",
            "Polished overall UI elements for smoother navigation"
        ]
    },
    {
        date: "2026-08-16",
        type: "improved",
        title: "Updated Submission Guidelines",
        summary: "Expanded and clarified the confession submission guidelines to ensure a safer and more respectful community.",
        items: [
            "Added guidelines for Moderation, Images, Impersonation, Threats, Accusations, and Connections"
        ]
    },
    {
        date: "2026-08-16",
        type: "new",
        title: "UCPM Updates Page Launched",
        summary: "A brand new page to keep you informed about the latest additions, improvements, and fixes across the UCPM platform.",
        items: [
            "Added a centralized Updates hub",
            "Added a pinned What's New section for quick viewing",
            "Integrated updates directly into the UCPM navigation sidebar"
        ]
    },
    {
        date: "2026-08-15",
        type: "fixed",
        title: "Confession Character Limit & Validation Fix",
        summary: "Added real-time character counting with automatic validation feedback to prevent submission errors before sending confessions to the moderation queue.",
        items: [
            "Live 10,000-character countdown display with visual threshold indicators",
            "Instant validation ensuring terms agreement checkbox is checked before submitting",
            "Clear error notifications when exceeding limits or submitting empty text"
        ]
    },
    {
        date: "2026-08-14",
        type: "new",
        title: "Student Marketplace & Services",
        summary: "A dedicated marketplace for UTeM students to buy, sell, or trade items, as well as offer student services (like laptop repairs or printing).",
        items: [
            "Category filtering (Electronics, Textbooks, Vehicles, etc.)",
            "Direct WhatsApp and Telegram integration for contacting sellers"
        ]
    },
    {
        date: "2026-08-14",
        type: "improved",
        title: "Added Images to Explore Melaka",
        summary: "Added visual previews and images to the Explore Melaka activities tab to help you discover places faster.",
        items: [
            "Added high-quality images for Melaka attractions",
            "Images load efficiently for mobile users"
        ]
    },
    {
        date: "2026-08-13",
        type: "new",
        title: "Scholarships & Financial Aid Hub",
        summary: "A directory of financial aid options available to UTeM students.",
        items: [
            "Covers PTPTN and JPA",
            "Covers Yayasan TM",
            "State-specific scholarships for all states in Malaysia"
        ]
    },
    {
        date: "2026-08-13",
        type: "improved",
        title: "Mobile UI & Navigation Enhancements",
        summary: "A refined mobile experience.",
        items: [
            "Includes a new bottom navigation bar",
            "A slide-out 'More' drawer for extra tools",
            "Sticky headers for better accessibility on phones"
        ]
    },
    {
        date: "2026-08-11",
        type: "new",
        title: "PKU Clinic & Student Health Directory",
        summary: "Added a dedicated Pusat Kesihatan Universiti (PKU) health hub featuring clinic operating hours, emergency hotlines, and official medical certificate guidelines.",
        items: [
            "Official PKU operating hours for Main Campus (Durian Tunggal) and Tech Campus (Ayer Keroh)",
            "Emergency ambulance and campus health officer hotlines",
            "Guidelines on panel clinic treatments and official UTeM MC endorsement rules"
        ]
    },
    {
        date: "2026-08-10",
        type: "new",
        title: "State Scholarship & Yayasan Directory",
        summary: "Added a comprehensive state-by-state financial aid hub covering Yayasan Melaka, Yayasan Selangor, Yayasan Johor, Yayasan Sabah, Yayasan Sarawak, and all state foundations across Malaysia.",
        items: [
            "Detailed eligibility criteria and allowance rates for 13 state foundations",
            "Direct application portal links and contact numbers for state education units",
            "Bantuan Awal Pengajian (BAP) one-off student aid breakdown"
        ]
    },
    {
        date: "2026-08-09",
        type: "new",
        title: "Explore Melaka Directory",
        summary: "A comprehensive, curated guide to 72+ attractions, historical landmarks, food spots, and night markets in Melaka tailored specifically for UTeM students.",
        items: [
            "Includes search functionality",
            "Filtering by indoor/outdoor",
            "Sorting options (A-Z)"
        ]
    },
    {
        date: "2026-08-08",
        type: "fixed",
        title: "Mobile Bottom Navigation & Drawer Smoothness",
        summary: "Fixed mobile header overlap issues and polished the slide-out 'More' drawer transitions for smaller smartphone screens.",
        items: [
            "Resolved z-index layering conflicts between sticky header and floating navigation",
            "Smoothed drawer slide-in animation and backdrop tap-to-close behavior",
            "Enhanced touch target sizing for all drawer icons"
        ]
    },
    {
        date: "2026-08-07",
        type: "fixed",
        title: "Confession Submission Rate Limiting",
        summary: "Added a 30-second cooldown between confession submissions.",
        items: [
            "Prevents spamming",
            "Ensures higher quality submissions to the moderation queue"
        ]
    },
    {
        date: "2026-08-07",
        type: "improved",
        title: "Full Bilingual Support (EN & BM)",
        summary: "The entire platform now supports seamless switching between English and Bahasa Melayu.",
        items: [
            "Instantly translates navigation, guides, rules, and core tools",
            "Translates without needing to reload the page"
        ]
    },
    {
        date: "2026-08-07",
        type: "new",
        title: "Student Guides Hub",
        summary: "A collection of written survival guides for UTeM students.",
        items: [
            "Covers Freshman Survival",
            "Campus Transit Guides",
            "GPA tips"
        ]
    },
    {
        date: "2026-08-07",
        type: "improved",
        title: "GPA & CGPA Calculator",
        summary: "A custom calculator designed specifically for UTeM's grading system.",
        items: [
            "Allows students to add multiple subjects",
            "Calculate current semester GPA",
            "Estimate cumulative CGPA easily"
        ]
    },
    {
        date: "2026-08-07",
        type: "important",
        title: "UTeM Confessions Pro Max Launched",
        summary: "The definitive companion app for UTeM students is officially live. Welcome!",
        items: []
    },
    {
        date: "2026-06-06",
        type: "important",
        title: "Development Commenced",
        summary: "The initial planning, design, and coding of UTeM Confessions Pro Max officially began.",
        items: []
    }
];
