// translation.js — All UI strings (EN/BM) and setLanguage / toggleLanguage

const translations = {
    en: {
        nav_activities: "Activities",
        nav_confessions: "Confessions",
        nav_archive: "Student Voices",
        nav_calendar: "Academic Calendar",
        nav_gpa: "GPA Calculator",
        nav_exams: "Past Year Exams",
        nav_links: "Wi-Fi & Links",
        nav_buses: "Bus Schedules",
        nav_library: "Library (PLH)",
        nav_health: "Health Center (PKU)",
        nav_marketplace: "Marketplace & Services",
        nav_scholarships: "Scholarship",
        nav_guides: "Student Guides Hub",
        mobile_nav_guides: "Student Guides",
        nav_updates: "Updates",
        mobile_nav_updates: "Updates",

        mobile_nav_gpa: "GPA Calc",
        mobile_nav_archive: "Student Voices",
        mobile_nav_links: "Wi-Fi & Links",
        mobile_nav_buses: "Buses",
        mobile_nav_calendar: "Calendar",
        mobile_nav_exams: "Exams",
        mobile_nav_health: "Health",
        mobile_nav_library: "Library",
        mobile_nav_marketplace: "Marketplace",
        mobile_nav_scholarships: "Scholarship",

        title_important_links: "UTeM Wi-Fi & Links",
        desc_important_links: "Quick access to campus Wi-Fi credentials, LibProxy registration, VPN setup, official portals, and student channels.",

        title_submit_confession: "Submit Confession",
        label_submit_confession: "",
        placeholder_confession: "Type here to confess...",
        checkbox_rules: "I agree to follow the confession rules. I understand illegal or abusive submissions will be rejected.",
        btn_submit: "Submit Confession",
        btn_submit_google: "Google Forms currently unavailable",
        btn_choose_image: "Choose Image",
        placeholder_image_caption: "Write an optional caption...",
        checkbox_image_rules: "I agree to follow the rules. Images are reviewed before posting.",
        btn_submit_image: "Submit Image",
        title_guidelines: "Submission Guidelines",

        guide_anon_title: "Anonymous:",
        guide_anon_desc: "Your IP address, name, or metadata are never tracked or saved.",
        guide_respect_title: "Respectful:",
        guide_respect_desc: "No targeted bullying, sexual harassment, or hate speech towards students or lecturers.",
        guide_spam_title: "No Spam:",
        guide_spam_desc: "Submit button has a 30-second delay between submissions.",
        guide_image_title: "Images:",
        guide_image_desc: "Do not upload NSFW content, private images of individuals, or screenshots of social media posts containing visible faces or personal information.",
        guide_mod_title: "Moderation:",
        guide_mod_desc: "Image submissions are read and reviewed by human moderators before being published.",
        guide_links_title: "Links:",
        guide_links_desc: "Links can only be shared in image form. This is so that the admin can review first before sharing to the channel.",
        guide_impersonation_title: "Impersonation:",
        guide_impersonation_desc: "Don't pretend to be another student, lecturer, staff member, or organization in a way that could mislead others.",
        guide_threats_title: "Threats:",
        guide_threats_desc: "Threats of violence, intimidation, or encouragement of harm are not allowed.",
        guide_accusations_title: "Accusations:",
        guide_accusations_desc: "Do not post unproven allegations about identifiable people. Keep discussions factual and anonymous.",
        guide_connections_title: "Connections:",
        guide_connections_desc: "Posts seeking friendship, companionship, study partners, or other forms of connections are required to be respectful of boundaries, moral standards and responses.",
        guide_think_title: "Think Before You Post:",
        guide_think_desc: "Once published, a confession may be seen, shared, or screenshotted by others.",

        title_gpa_calc: "UTeM Semester GPA & CGPA Calculator",
        label_sem_gpa: "Current Semester GPA",
        label_sem_credits: "Semester Earned Credits",
        label_est_cgpa: "Estimated CGPA",
        th_course: "Course Title (Optional)",
        th_credits: "Credits",
        th_grade: "Grade Achieved",
        th_actions: "Actions",
        btn_add_subject: "➕ Add Subject Row",
        btn_clear_gpa: "✕ Clear All Entries",
        btn_print_gpa: "🖨️ Print / Save PDF",
        label_prior_cgpa: "Prior Cumulative CGPA",
        label_prior_credits: "Prior Earned Credits (Total)",

        title_countdown: "Countdown to Next Exams",
        label_countdown_custom: "Choose Custom Date & Time",
        btn_apply_countdown: "Apply Countdown",
        label_days: "Days",
        label_hours: "Hours",
        label_mins: "Mins",
        label_secs: "Secs",
        opt_sem2_finals: "UTeM Semester 2 Finals (Oct 12, 2026)",
        opt_sem1_finals: "UTeM Semester 1 Finals (Jan 25, 2027)",
        opt_merdeka: "Malaysia Merdeka Day (Aug 31, 2026)",
        opt_newyear: "New Year's Day (Jan 1, 2027)",
        opt_custom: "Set Custom Date...",

        title_bus_transit: "UTeM Campus Shuttle Timetable",
        label_next_departure: "Next Scheduled Departure:",
        label_note: "Note: Shuttle bus arrival times may vary based on traffic conditions on Lebuhraya Ayer Keroh. Please reach boarding points 5 minutes early.",
        th_departure: "Departure",
        th_day_type: "Days",
        th_status: "Status",

        title_public_bus: "BAS.MY Bus M10A Official Timetable (Pink Bus)",
        desc_public_bus: "Public bus service operating between Melaka Sentral ⇄ Batu Berendam ⇄ MITC ⇄ Zoo Melaka ⇄ UTeM Main Campus.",
        label_route_timeline: "M10A Route Stops",
        label_weekend: "Weekend Only",
        title_route_lookup: "Melaka Public Bus Route Lookup (Other Locations)",
        desc_route_lookup: "Select a destination below to find the correct BAS.MY bus route operating from Melaka Sentral.",
        label_select_dest: "Select destination...",
        opt_select_dest: "Choose a location...",
        opt_dest_tampin: "Tampin (via Alor Gajah) - Route M20 / M21",
        opt_dest_jasin: "Jasin - Route M32",
        opt_dest_klebang: "Klebang / Pulau Gadong - Route M15",
        opt_dest_paya: "Paya Luboh - Route M16",
        bus_sources_label: "Official Data Sources & Reference Links:",
        label_m10a_details: "M10A Schedule & Operations:",
        m10a_detail1: "<strong>Weekdays (Mon-Thu):</strong> Melaka Sentral ⇄ MITC (via Batu Berendam)",
        m10a_detail2: "<strong>Weekends (Fri-Sun):</strong> Extends directly to Zoo Melaka & UTeM",
        m10a_detail3: "<strong>Hours:</strong> 6:00 AM – 8:00 PM (Cashless: TNG, Debit, QR)",

        title_calendar: "Academic Calendar (2026/2027)",
        btn_cal_all: "All",
        btn_cal_academic: "Lectures",
        btn_cal_exam: "Exams",
        btn_cal_break: "Breaks",
        btn_cal_holiday: "Holidays",
        placeholder_search_cal: "Search calendar events...",
        calendar_sources_label: "Official Academic Calendar Reference:",
        calendar_link_label: "Official PDF ➔",
        title_past_exams_tab: "UTeM Past Year Exam Papers",
        desc_past_exams_tab: "Access the official UTeM library repository to search, browse, and download past semester examination papers for your courses.",
        label_past_exams_lib: "Official Exam Paper Database:",
        btn_past_exams_link: "Open Library Exam Portal ➔",

        title_health_tab: "Pusat Kesihatan UTeM (PKU)",
        desc_health_tab: "",
        label_health_hours: "Operating Hours",
        label_health_main_induk: "Main Campus (Durian Tunggal):",
        label_hours_induk_acad: "Academic Weeks: Mon - Fri, 8:00 AM - 7:00 PM",
        label_hours_induk_break: "Semester Breaks: Mon - Fri, 8:00 AM - 5:00 PM",
        label_health_tech_ayer: "Technology Campus (Ayer Keroh):",
        label_hours_tech: "Mon - Fri: 8:00 AM - 5:00 PM",
        label_health_breaks: "Daily Rest Breaks:",
        label_hours_break_monthu: "Mon - Thu: 1:00 PM - 2:00 PM",
        label_hours_break_fri: "Friday: 12:15 PM - 2:45 PM",
        label_health_closed: "Weekends & Public Holidays: Closed",
        label_health_services: "Online Appointments & Requests",
        label_dental_app: "Dental Clinic Appointment:",
        btn_dental_link: "Dental e-Appointment ➔",
        label_emerg_kit: "Borrow Emergency First Aid Kits:",
        btn_emerg_link: "First Aid Request Form ➔",
        label_health_policies: "Medical Leave (MC) & Policies",
        label_health_ext_mc: "External Private-Clinic MCs:",
        desc_health_ext_mc: "Medical certificates (MC) from external private clinics must be endorsed/validated by PKU UTeM before they are accepted by faculties.",
        label_health_exam_absence: "Examination Absence:",
        desc_health_exam_absence: "Absence from final exams due to medical reasons requires a verified MC/Endorsement submitted to your faculty/academic division.",
        label_health_coverage: "Student Medical Coverage:",
        desc_health_coverage: "Active/registered UTeM students are covered for outpatient treatment and basic dental care at PKU under the student health scheme.",
        label_health_contact: "Contact Information",
        label_health_phone: "Phone:",
        label_health_email: "Email:",
        label_health_address: "",
        label_health_ref: "Information sourced from official channels:",

        title_lib_tab: "Perpustakaan Laman Hikmah (PLH)",
        desc_lib_tab: "",
        label_lib_hours: "Library Hours",
        label_lib_main_hours: "Academic Semester Hours:",
        label_hours_lib_monthu: "Mon - Thu: 8:00 AM - 10:00 PM",
        label_hours_lib_fri: "Friday: 8:00 AM - 12:15 PM, 2:45 PM - 10:00 PM",
        label_lib_weekend_hours: "Study & Exam Weeks (Weekends):",
        label_hours_lib_weekend: "Sat - Sun: 9:00 AM - 5:00 PM (Selected areas)",
        label_lib_break_hours: "Semester Break Hours:",
        label_hours_lib_break: "Mon - Fri: 8:00 AM - 5:00 PM (Closed on Weekends)",
        label_lib_24hours: "24-Hour Study Area: Available at Main Entrance Area (Exam weeks)",
        label_lib_services: "PLH Gaming Zone & Leisure",
        label_lib_playstation: "PS4 Console & Controller Rental:",
        desc_lib_playstation: "RM4 per hour (max 2 hours, 2 controllers). 3 sets at Main Campus & 2 sets at Tech Campus. You can bring your own CDs but need to let the staff know.",
        label_lib_boardgames: "Free Indoor & Board Games:",
        desc_lib_boardgames: "Free rental for carrom, chess, darts, checkers, and board games at the counter.",
        label_lib_booking_title: "Booking & Further Questions:",
        desc_lib_booking_text: "Do at the Counter after passing the scanners. Contact:",
        label_lib_borrowing: "Borrowing & E-Resources",
        label_lib_renewals: "Book Renewals:",
        desc_lib_renewals: "Students can renew borrowed books online for a maximum of 2 renewals before they must be returned.",
        label_lib_ezproxy: "Off-Campus Access (EZproxy):",
        desc_lib_ezproxy: "Access premium journals (e.g., IEEE Xplore, ScienceDirect) from home using the UTeM EZproxy portal with your student credentials.",
        btn_lib_mail: "Email Circulation Desk ➔",
        label_lib_contact: "Contact & Inquiries",
        label_lib_phone: "Phone:",
        label_lib_email: "Email:",
        label_lib_address: "",
        label_lib_ref: "Visit official UTeM library site for catalog searches:",

        footer_text: "Unofficial Student Resource & Confessions Platform.",
        footer_home: "Home",
        footer_guides: "Student Guides",
        footer_about: "About Us",
        footer_rules: "Confession Rules",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",

        title_marketplace: "UTeM Student Marketplace",
        badge_marketplace: "Development Coming Soon",
        desc_marketplace: "Campus marketplace for UTeM students to buy, sell, or trade textbooks, notes, appliances, and tech.",
        notice_marketplace_seller: "To have your items sold here: Share in the Telegram group or contact admin email at:",

        title_scholarships: "Scholarship & Financial Aid",
        desc_scholarships: "Discover government loans, MARA schemes, state foundation grants, corporate awards, and university financial assistance available for UTeM and Malaysian university students.",
        notice_archive_takedown: "Content Removal Request: If a confession post involves you and you wish to have it removed from the archive, please contact the admin team via email or Telegram.",
        btn_contact_admin_removal: "Contact Admin ➔",

        nav_support: "Support Us",
        title_support: "Support UTeM Confessions Pro Max",
        desc_support: "Help keep our student portal, GPA calculator, bus schedules, and exam archives 100% free and accessible for all UTeM undergraduates.",
        label_free_support: "Option 1: Free Partner Support",
        title_partner_deals: "Explore Partner Offers & Student Deals 🎁",
        desc_partner_deals: "Visiting our sponsored partner offers helps fund site hosting, domain registration, and server maintenance at zero financial cost to you!",
        btn_partner_deals1: "Explore Partner Offers & Student Deals 🎁 ➔",
        btn_partner_deals2: "Visit Partner Site to Support UTeM Confessions ❤️ ➔",
        btn_partner_deals3: "Explore External Sponsored Offers 🌐 ➔",
        label_coffee_support: "Option 2: Voluntary Admin Tip",
        title_coffee: "Buy the Admin Team a Coffee ☕",
        desc_coffee: "If our GPA tool, bus routes, or exam prep guides helped you pass your semester, feel free to send our student volunteer team a small tip!",
        notice_kofi_currency: "*Please note: Tips are accepted in USD ($) only due to Ko-fi's platform limitations. This is normal and secure.",
        btn_kofi_support: "Buy Us a Coffee on Ko-fi ☕ ➔",
        btn_contact_admin_tip: "Contact Admin on Telegram ➔",
        label_transparency_title: "Our Transparency Promise:",
        desc_transparency: "UTeM Confessions Pro Max remains 100% free for all students. We use non-intrusive ads and partner offers solely to cover platform hosting fees. Thank you for supporting the UTeM student community!",

        theme_label_dark: "Dark Theme",
        theme_label_light: "Light Theme",

        status_waiting: "Please wait at least 30 seconds before submitting another confession.",
        status_submitting: "Submitting...",
        status_success: "Confession submitted successfully and sent for review!",
        status_success_local: "Successfully recorded confession locally. (Submission process finished!)",

        bus_active: "Active Service",
        bus_weekend: "Weekend Run",
        bus_no_service: "No service",
        bus_none_running: "No buses running today.",
        bus_arriving_in: "Arriving in",
        bus_minute: "minute",
        bus_minutes: "minutes",
        bus_hour: "hour",
        bus_hours: "hours",

        cat_all: "All",
        cat_academic: "Lecture",
        cat_exam: "Exam",
        cat_break: "Break",
        cat_holiday: "Holiday",

        lang_label: "Language",
        theme_switcher_label: "Dark Theme",

        card_libproxy_title: "LibProxy Account Registration",
        card_libproxy_sub: "Off-Campus EZProxy Access",
        card_libproxy_desc: "Video guide for UTeM students to register and activate LibProxy for off-campus e-journals and library databases.",
        card_libproxy_btn: "▶ Watch Video Guide ➔",

        card_vpn_title: "SoftEther VPN Download",
        card_vpn_sub: "Off-Campus Library Access",
        card_vpn_desc: "Official UTeM SoftEther VPN client guide for off-campus library database and e-journal access.",
        card_vpn_btn: "Download SoftEther VPN ➔",

        card_staff_title: "UTeM Staff Directory",
        card_staff_sub: "Lecturer & Staff Search",
        card_staff_desc: "Search portal for UTeM lecturer emails, room numbers, extensions, and department staff.",
        card_staff_btn: "Open Staff Directory ➔",

        card_mpp_title: "MPP UTeM Official",
        card_mpp_sub: "Majlis Perwakilan Pelajar",
        card_mpp_desc: "Official Instagram of UTeM Student Representative Council for announcements and student welfare.",
        card_mpp_btn: "Visit MPP Instagram ➔",

        card_aduan_title: "MOHE e-Aduan (SPAB)",
        card_aduan_sub: "Public Complaints System",
        card_aduan_desc: "Ministry of Higher Education (KPT/MOHE) public complaints portal for inquiries and feedback.",
        card_aduan_btn: "Open e-Aduan Portal ➔",

        card_konvo_title: "UTeM Convocation & Alumni",
        card_konvo_sub: "Graduation & Robe Collection",
        card_konvo_desc: "Official portal for convocation session schedules, academic robe collection, and alumni updates.",
        card_konvo_btn: "Open Konvo Portal ➔",

        card_vehicle_title: "Student Vehicle Form",
        card_vehicle_sub: "Campus Driving & Parking",
        card_vehicle_desc: "Download the official UTeM student vehicle application form for campus driving and parking access.",
        card_vehicle_btn: "Download Form ➔",

        wifi_guide_title: "UTeM Campus Wireless Networks & Digital Infrastructure Master Guide",
        wifi_guide_intro: "Universiti Teknikal Malaysia Melaka (UTeM) operates a high-speed, enterprise-grade campus network managed by the <strong>Pusat Perkhidmatan Pengetahuan & Komunikasi (PPPK)</strong> across Kampus Induk (Durian Tunggal), Kampus Teknologi (Ayer Keroh), and all on-campus residential colleges (Kolej Satria & Lestari). Connecting to the optimal wireless SSID ensures seamless access to online lecture streams, SMPWeb portals, library e-resources, and engineering cloud software suites.",
        wifi_th_ssid: "SSID Name",
        wifi_th_proto: "Security Protocol",
        wifi_th_auth: "Authentication Credentials",
        wifi_th_use: "Best Use Case",
        wifi_td_row1_ssid: "Wifi UTeM Net",
        wifi_td_row1_proto: "Captive Web Portal",
        wifi_td_row1_auth: "Semester Shared Password (<code>1UTeM@PPPK</code>)",
        wifi_td_row1_use: "Quick guest access, mobile phones, basic web browsing",
        wifi_td_row2_ssid: "UTeM-Wifi",
        wifi_td_row2_proto: "WPA2-Enterprise (802.1X)",
        wifi_td_row2_auth: "Matric Number (<code>B032...</code>) + SMPWeb Password",
        wifi_td_row2_use: "Laptops, stable high-bandwidth downloads, assignments & lab software",
        wifi_td_row3_ssid: "eduroam",
        wifi_td_row3_proto: "Global WPA2-Enterprise",
        wifi_td_row3_auth: "Full Student Email (<code>B032...@student.utem.edu.my</code>) + Password",
        wifi_td_row3_use: "Worldwide academic roaming across all Malaysian & global IPTA institutions",
        wifi_td_row4_ssid: "UTeM-Guest",
        wifi_td_row4_proto: "Temporary Web Ticket",
        wifi_td_row4_auth: "SMS OTP / Conference Voucher Code",
        wifi_td_row4_use: "Visiting lecturers, conference participants, official campus guests",
        wifi_sec2_title: "📲 Complete Platform-Specific Connection Guides",
        wifi_p_android_title: "🤖 Android (Android 11, 12, 13, 14 & 15)",
        wifi_android_steps: "<li>Select <strong>eduroam</strong> or <strong>UTeM-Wifi</strong>.</li><li><strong>EAP Method:</strong> Select <code>PEAP</code>.</li><li><strong>Phase 2 Authentication:</strong> Select <code>MSCHAPV2</code>.</li><li><strong>CA Certificate:</strong> Select <code>Use System Certificates</code> (or <code>Don't Validate</code>).</li><li><strong>Online Certificate Status:</strong> <code>Do not verify</code>.</li><li><strong>Domain:</strong> Type <code>utem.edu.my</code>.</li><li><strong>Identity:</strong> <code>YourID@student.utem.edu.my</code> (for eduroam) or Matric ID.</li><li><strong>Password:</strong> Active SMPWeb student portal password.</li>",
        wifi_p_win_title: "💻 Windows 11 & Windows 10",
        wifi_win_steps: "<li>Click the Wi-Fi icon on your taskbar and select <strong>UTeM-Wifi</strong> or <strong>eduroam</strong>.</li><li>Check <em>\"Connect automatically\"</em> and click <strong>Connect</strong>.</li><li>Enter your Student Matric Number (e.g. <code>b032110000</code>) and SMPWeb password.</li><li>When the <em>\"Continue connecting?\"</em> server thumbprint prompt appears, click <strong>Connect</strong> to trust the PPPK server.</li><li>If authentication drops, disable <em>\"Random Hardware Addresses\"</em> in Wi-Fi properties.</li>",
        wifi_p_apple_title: "🍎 Apple iOS, iPadOS & macOS",
        wifi_apple_steps: "<li>Tap <strong>eduroam</strong> or <strong>UTeM-Wifi</strong> in Settings.</li><li>Enter your full student email (for eduroam) or Matric ID and password.</li><li>When prompted with the <code>radius.utem.edu.my</code> Certificate, tap <strong>Trust</strong> in the upper right.</li><li>For <strong>Wifi UTeM Net</strong> captive network, disable <em>\"Private Wi-Fi Address\"</em> to avoid repeated logins.</li>",
        wifi_p_linux_title: "🐧 Linux (Ubuntu, Debian & Fedora)",
        wifi_linux_steps: "<li>Open Network Settings and choose <strong>eduroam</strong>.</li><li><strong>Wi-Fi Security:</strong> WPA & WPA2 Enterprise.</li><li><strong>Authentication:</strong> Protected EAP (PEAP).</li><li><strong>Inner Authentication:</strong> MSCHAPv2.</li><li><strong>CA Certificate:</strong> None (check <em>No CA certificate is required</em>).</li><li>Enter student email credentials and connect.</li>",
        wifi_sec3_title: "🛡️ Secure Remote Off-Campus Access (VPN & LibProxy)",
        wifi_sec3_desc: "When studying from off-campus rental units or during semester breaks, specific campus systems and high-value research databases require secure university network tunneling:",
        wifi_vpn_box_title: "🔒 SoftEther VPN Client Tunnel",
        wifi_vpn_box_desc: "Establishes an encrypted L2TP/IPsec tunnel to <code>vpn.utem.edu.my</code>. Essential for engineering undergraduates to check out concurrent campus network licenses for <strong>MATLAB, AutoCAD, SolidWorks, and ANSYS</strong> from home.",
        wifi_libproxy_box_title: "📚 LibProxy (EZproxy) Scholar Gateway",
        wifi_libproxy_box_desc: "Web-based Single Sign-On (SSO) gateway at <code>ezproxy.utem.edu.my</code> that grants off-campus access to indexed digital libraries including <strong>IEEE Xplore, ScienceDirect, Scopus, SpringerLink, and Web of Science</strong> without full VPN routing.",
        wifi_sec4_title: "🔧 Troubleshooting & Common Connection Issues",
        wifi_trouble1_title: "1. Captive Portal Login Page Not Appearing (Wifi UTeM Net)",
        wifi_trouble1_desc: "If the login screen does not auto-open, open any web browser and manually navigate to <code>http://1.1.1.1</code> or <code>http://neverssl.com</code> to trigger the captive gateway authentication prompt.",
        wifi_trouble2_title: "2. Authentication Failure After Resetting SMPWeb Password",
        wifi_trouble2_desc: "RADIUS servers synchronize with SMPWeb every 15 minutes. Forget the wireless network on your device, wait 15 minutes after password reset, and reconnect with your updated credentials.",
        wifi_trouble3_title: "3. \"Connected, No Internet\" / IP Lease Conflict",
        wifi_trouble3_desc: "Ensure your device is set to obtain IP and DNS automatically (DHCP). Custom static DNS addresses (e.g. 8.8.8.8) block local university gateway routing.",
        wifi_trouble4_title: "4. PPPK ICT Helpdesk Support Channels",
        wifi_trouble4_desc: "For account unlock or MAC whitelist inquiries, submit a ticket via <code>help.utem.edu.my</code> or visit the PPPK ServiceDesk Counter at Aras 1, Bangunan PPPK, Kampus Induk.",
        wifi_sec5_title: "❓ Frequently Asked Questions (FAQ)",
        wifi_faq1_q: "What is the difference between Wifi UTeM Net and eduroam?",
        wifi_faq1_a: "Wifi UTeM Net is a web-based captive portal network requiring semester passwords. In contrast, eduroam is an encrypted WPA2-Enterprise global network that works across all partner universities worldwide using your full student email.",
        wifi_faq2_q: "Why do I need the UTeM SoftEther VPN when off-campus?",
        wifi_faq2_a: "The UTeM SoftEther VPN routes your off-campus connection through the university subnet, granting remote access to campus software license servers (MATLAB, AutoCAD, SolidWorks) and internal administrative portals.",
        wifi_faq3_q: "What should I do if my Wi-Fi login fails or password expires?",
        wifi_faq3_a: "Reset your password on the official SMPWeb student portal. All Wi-Fi services (UTeM-Wifi and eduroam) synchronize with your SMPWeb credentials within 15 minutes of an update.",
        wifi_faq4_q: "Can I connect smart TVs, game consoles (PS5/Xbox), or printers to UTeM-Wifi?",
        wifi_faq4_a: "Devices that lack WPA2-Enterprise 802.1X browser support must connect to <strong>Wifi UTeM Net</strong> via web browser login, or have their MAC address registered directly with PPPK for hostel LAN ethernet port usage.",
        wifi_faq5_q: "Is internet bandwidth throttled during peak hours?",
        wifi_faq5_a: "PPPK enforces Quality of Service (QoS) bandwidth management to prioritize academic portals (SMPWeb, ULeMS, Google Classroom, IEEE) over peer-to-peer file sharing and heavy streaming during daytime lecture hours (08:00–17:00).",
        wifi_faq6_q: "Does eduroam work when visiting other universities in Malaysia?",
        wifi_faq6_a: "Yes! When visiting UM, UTM, USM, UKM, UiTM, or any of the 100+ global partner institutions, your device will auto-connect to their eduroam network using your UTeM student credentials without any guest registration.",
        wifi_sec6_title: "🔗 Related Student Guides",
        wifi_rel1_title: "💻 IT Setup, M365 & MATLAB Guide",
        wifi_rel1_desc: "Free student software licenses, Office 365 cloud setup, and installation guides.",
        wifi_rel2_title: "☕ Top 10 Campus Study Spots",
        wifi_rel2_desc: "Best places across campus with high-speed Wi-Fi and power outlets.",
        wifi_rel3_title: "📚 Perpustakaan Laman Hikmah (PLH)",
        wifi_rel3_desc: "Access e-books, online journals, 24-hour study areas, and gaming consoles.",

        bus_guide_title: "UTeM Shuttle Bus Transit Guide & BAS.MY Public Network Master Guide",
        bus_guide_intro: "Navigating transit between <strong>Universiti Teknikal Malaysia Melaka (UTeM)</strong> campuses requires understanding both the complimentary internal university shuttle bus fleet and the public State transit network operated by <strong>BAS.MY Melaka (Route M10A)</strong>. With faculties distributed across two distinct geographical zones—<strong>Kampus Induk</strong> in Durian Tunggal and <strong>Kampus Teknologi</strong> in Ayer Keroh separated by 12km via Lebuhraya Ayer Keroh—punctual transit planning is vital for arriving on time for lectures, laboratories, and examination halls.",
        bus_sec1_title: "🚌 Comprehensive Campus Shuttle Route Directory",
        bus_th_route: "Route Name",
        bus_th_coverage: "Key Boarding Stops & Coverage",
        bus_th_freq: "Peak Frequency",
        bus_th_operating: "Operating Days & Hours",
        bus_td_r1_name: "Kampus Induk (KI) ⇄ Kampus Teknologi (KT)",
        bus_td_r1_cov: "Kompleks Dewan Kuliah (KDK), PLH Library, FTMK ⇄ FKE, FKEKK, FKP Ayer Keroh",
        bus_td_r1_freq: "Every 30–45 mins",
        bus_td_r1_hours: "Mon – Fri (07:30 – 18:30)",
        bus_td_r2_name: "Kolej Satria ⇄ Faculty Morning Loop",
        bus_td_r2_cov: "Kolej Kediaman Satria (Blok A-H) ⇄ FTMK, FPTT, KDK Lecture Complex",
        bus_td_r2_freq: "Every 15–20 mins",
        bus_td_r2_hours: "Mon – Fri (07:15 – 09:00)",
        bus_td_r3_name: "Kolej Lestari ⇄ Faculty Loop",
        bus_td_r3_cov: "Kolej Kediaman Lestari (Induk) ⇄ Kompleks Dewan Kuliah & Workshop Labs",
        bus_td_r3_freq: "Every 20–30 mins",
        bus_td_r3_hours: "Mon – Fri (07:20 – 17:45)",
        bus_td_r4_name: "Emerald Park (EP) Off-Campus Line",
        bus_td_r4_cov: "Taman Emerald Park, Taman Tasik Utama, Bukit Beruang ⇄ Kampus Induk Terminal",
        bus_td_r4_freq: "Scheduled Timetable",
        bus_td_r4_hours: "Semester Morning & Evening Runs",
        bus_td_r5_name: "Friday Prayer Special Shuttle",
        bus_td_r5_cov: "Kolej Kediaman Satria & Lestari ⇄ Masjid Sayyidina Ali / Masjid Kampus Induk",
        bus_td_r5_freq: "Continuous Loop",
        bus_td_r5_hours: "Fridays (12:15 – 14:30)",
        bus_sec2_title: "💖 BAS.MY M10A Pink Bus Public Transit Guide",
        bus_sec2_desc: "The state-managed pink bus fleet provides essential public transit connecting Melaka Sentral transit terminal directly to UTeM and surrounding Ayer Keroh commercial hubs:",
        bus_m10a_box1_title: "🚍 Weekday Operations (Mon – Thu)",
        bus_m10a_box1_desc: "Operates between <strong>Melaka Sentral ⇄ Batu Berendam ⇄ MITC / Mydin Ayer Keroh</strong> from 06:00 to 20:00. Students disembarking at MITC can connect to university shuttle lines.",
        bus_m10a_box2_title: "⭐ Weekend Direct Campus Entry (Fri – Sun)",
        bus_m10a_box2_desc: "On <strong>Fridays, Saturdays, and Sundays</strong>, Route M10A extends past MITC to Zoo Melaka and drives directly into the <strong>UTeM Kampus Induk main terminal</strong>, providing direct access for outstation travelers.",
        bus_m10a_box3_title: "💳 100% Cashless Transit Payments",
        bus_m10a_box3_desc: "BAS.MY accepts Touch 'n Go cards (min RM5 balance), MyRapid student concession cards, contactless MyDebit cards, and DuitNow QR. Cash is strictly not accepted on board.",
        bus_sec3_title: "💡 Essential Commuter Strategies & Transit Etiquette",
        bus_tip1_title: "1. Lebuhraya Ayer Keroh Peak Hour Buffers",
        bus_tip1_desc: "Allow a minimum of 25–35 minutes for transit between Kampus Induk and Kampus Teknologi during morning peak hours (07:45–08:30) and evening return hours (16:45–17:30) due to traffic at the MITC / Ayer Keroh toll interchange.",
        bus_tip2_title: "2. Final Exam Week Deployment",
        bus_tip2_desc: "During official university examination weeks, the Transport Unit deploys high-capacity double-trip shuttles starting 45 minutes prior to each morning (09:00) and afternoon (14:30) exam slot. Arrive at designated stops 15 minutes early.",
        bus_tip3_title: "3. E-Hailing & Grab Fare-Splitting Pickup Points",
        bus_tip3_desc: "Popular student carpool and Grab ride-sharing hubs are located at Pintu Gerbang Utama Kampus Induk, FTMK Lobby, and the Ayer Keroh MITC Mydin bus bay (averaging RM10–RM14 per car trip).",
        bus_tip4_title: "4. UTeM Transport Unit Hotline & Lost Property",
        bus_tip4_desc: "If you accidentally leave your student matric card, laptop, or bag on an internal bus, contact the UTeM Transport Unit Hotline at <code>011-11494251</code> or visit the Unit Pengangkutan counter next to Bengkel Utama Kampus Induk.",
        bus_sec4_title: "❓ Frequently Asked Questions (FAQ)",
        bus_faq1_q: "Is the internal UTeM campus shuttle bus free for students?",
        bus_faq1_a: "Yes, all official internal UTeM campus shuttle buses operating between Kampus Induk (Durian Tunggal), Kampus Teknologi (Ayer Keroh), Kolej Kediaman Satria, and Kolej Kediaman Lestari are completely free of charge for all enrolled students.",
        bus_faq2_q: "How does the BAS.MY M10A pink bus service connect to UTeM?",
        bus_faq2_a: "The public BAS.MY M10A pink bus runs from Melaka Sentral to MITC. On Fridays, Saturdays, and Sundays, the route extends directly to Zoo Melaka and the UTeM Main Campus main entrance terminal.",
        bus_faq3_q: "What payment methods are accepted on the BAS.MY M10A pink bus?",
        bus_faq3_a: "BAS.MY operates strictly cashless. Passengers can pay using a Touch 'n Go card, MyRapid transit pass, contactless debit card, or DuitNow QR scanner on board.",
        bus_faq4_q: "Do campus shuttle buses operate during semester breaks?",
        bus_faq4_a: "During semester holidays and inter-semester study breaks, internal shuttle frequencies are scaled down to reduced skeleton services operating between KI and KT for postgraduate and administrative needs.",
        bus_faq5_q: "How can I track real-time bus arrivals in Melaka?",
        bus_faq5_a: "You can track public BAS.MY buses live using the official <strong>Pulse by Prasarana</strong> or <strong>Moovit</strong> mobile application by selecting the Melaka public transport network.",
        bus_faq6_q: "Can I bring bicycles, electric scooters, or heavy luggage on board?",
        bus_faq6_a: "Foldable electric scooters and luggage are permitted on internal shuttles provided they do not obstruct walkways during peak crowding. Full-size bicycles must use outdoor bike racks.",
        bus_sec5_title: "🔗 Related Student Guides",
        bus_rel1_title: "🚌 UTeM Shuttle Bus & Transit Guide",
        bus_rel1_desc: "In-depth route timetables, stop maps, and transit tips.",
        bus_rel2_title: "🚗 Vehicle Sticker & Parking Rules",
        bus_rel2_desc: "How to apply for UTeM motor and car parking stickers.",
        bus_rel3_title: "🏠 Off-Campus Housing Near Bus Stops",
        bus_rel3_desc: "Rental guide for Emerald Park, Taman Tasik Utama, and Bukit Beruang.",

        gpa_guide_title: "UTeM GPA & CGPA Calculation Guide & Academic Grading Scale",
        gpa_guide_intro: "Universiti Teknikal Malaysia Melaka (UTeM) employs the standard Malaysian 4.00 Grade Point Average (GPA) and Cumulative Grade Point Average (CGPA) system across all undergraduate, diploma, and postgraduate faculties. Understanding how quality points and credit hours intersect is essential for maintaining good academic standing (Kedudukan Baik), targeting Dean's List (Anugerah Dekan), and qualifying for First Class PTPTN loan exemptions.",
        gpa_sec1_title: "📐 How to Calculate UTeM GPA & CGPA Step-by-Step",
        gpa_sec1_desc: "GPA is computed by dividing your <strong>Total Quality Points (Jumlah Nilai Mata)</strong> by your <strong>Total Registered Credit Hours (Jumlah Jam Kredit)</strong> for the semester:",
        gpa_formula1_box: "GPA = Total (Credit Hours &times; Grade Point Value) &divide; Total Semester Credit Hours",
        gpa_formula2_box: "CGPA = Cumulative (All Quality Points Across All Semesters) &divide; Cumulative Total Earned Credit Hours",
        gpa_worked_example: "<em>Example Calculation:</em> If you take 3 credits of Software Engineering (Grade A, 4.00 = 12.00 points), 4 credits of Data Structures (Grade B+, 3.30 = 13.20 points), and 3 credits of Calculus (Grade B, 3.00 = 9.00 points), your Total Quality Points are 34.20 divided by 10 credits = <strong>GPA 3.42</strong>.",
        gpa_sec2_title: "📊 Official UTeM Grading Scale & Quality Points",
        gpa_th_grade: "Grade (Gred)",
        gpa_th_marks: "Marks Range (%)",
        gpa_th_gpv: "Quality Point (Nilai Mata)",
        gpa_th_status: "Academic Meaning",
        gpa_g_a: "Cemerlang (Distinction)",
        gpa_g_am: "Cemerlang (Excellent)",
        gpa_g_bp: "Kepujian Tinggi (Very Good)",
        gpa_g_b: "Kepujian (Good)",
        gpa_g_bm: "Lulus Memuaskan (Pass Satisfactory)",
        gpa_g_cp: "Lulus Sederhana (Pass Average)",
        gpa_g_c: "Lulus Minimum (Minimum Passing Grade)",
        gpa_g_cm: "Lulus Bersyarat (Conditional Pass)",
        gpa_g_dp: "Lulus Lemah (Weak Pass)",
        gpa_g_d: "Lulus Sangat Lemah (Very Weak)",
        gpa_g_f: "Gagal (Fail - Must Repeat)",
        gpa_sec3_title: "⚖️ UTeM Academic Standing (Status Akademik) Rules",
        gpa_kb_title: "🟢 Kedudukan Baik (KB - Good Standing)",
        gpa_kb_desc: "Cumulative CGPA &ge; 2.00. Students maintain unrestricted course registration privileges and can register full-time credit loads (12 to 20 credit hours).",
        gpa_ks_title: "🟡 Kedudukan Bersyarat (KS - Academic Probation)",
        gpa_ks_desc: "Cumulative CGPA between 1.70 and 1.99. Maximum credit load is strictly restricted to 12 credit hours to facilitate academic recovery. PTPTN loan disbursements are suspended while on KS.",
        gpa_kg_title: "🔴 Kedudukan Gagal & Diberhentikan (KG - Academic Dismissal)",
        gpa_kg_desc: "Cumulative CGPA &lt; 1.70 in any single semester, or receiving KS for two consecutive regular semesters. Students dismissed under KG may submit an official appeal to the university Senate within 14 days of result release.",
        gpa_sec4_title: "🏆 Anugerah Dekan & First Class Honours Criteria",
        gpa_deans_desc: "To be awarded the prestigious <strong>Anugerah Dekan (Dean's List)</strong> certificate at UTeM, a student must fulfill all three criteria in a single regular academic semester:",
        gpa_deans_list: "<li>Achieve a semester <strong>GPA of 3.50 or higher</strong>.</li><li>Register and complete a minimum of <strong>12 graded credit hours</strong> (excluding non-graded audit or Pass/Fail courses like Kokurikulum).</li><li>Possess <strong>no failing grades (F/E)</strong> or incomplete grades (TL) in that semester.</li>",
        gpa_ptptn_waiver_title: "🎓 PTPTN Loan-to-Scholarship Conversion (First Class)",
        gpa_ptptn_waiver_desc: "Graduates completing their bachelor's degree with <strong>First Class Honours (CGPA &ge; 3.70)</strong> can apply for 100% PTPTN loan exemption through the myPTPTN portal within 12 months of official graduation.",
        gpa_sec5_title: "🚀 Grade Improvement & Course Retake Strategy (Ulang Gred)",
        gpa_repeat_desc: "Under UTeM academic regulations, students can redeem low grades by repeating courses in subsequent semesters:",
        gpa_repeat_strategy: "<li><strong>Grade Replacement Impact:</strong> When you repeat a course with a previous grade of C-, D, or F, the newer grade point value replaces the older one in cumulative CGPA computations.</li><li><strong>High-Credit Course Priority:</strong> Prioritize repeating core 3-credit and 4-credit courses. Replacing an F (0.00) in a 4-credit course with an A- (3.70) yields a massive +14.80 quality point boost.</li><li><strong>Transcript Notation:</strong> Both attempts remain logged on your permanent transcript, but only the latest/higher grade contributes to the graduating CGPA.</li>",
        gpa_sec6_title: "❓ Frequently Asked Questions (FAQ)",
        gpa_faq1_q: "How does repeating a failed course affect my UTeM CGPA?",
        gpa_faq1_a: "When you repeat a course, the new grade replaces the previous failing grade (Grade F) in the cumulative CGPA calculation, significantly raising your CGPA. However, the original attempt remains visible on your official academic transcript.",
        gpa_faq2_q: "Does PTPTN freeze if my GPA drops below 2.00?",
        gpa_faq2_a: "Yes. PTPTN requires all loan recipients to maintain Kedudukan Baik (GPA &ge; 2.00). If your GPA falls below 2.00, PTPTN disbursements will be suspended for the following semester until your standing recovers.",
        gpa_faq3_q: "What CGPA is required for First Class degree honours at UTeM?",
        gpa_faq3_a: "First Class Honours (Ijazah Kelas Pertama) generally requires a graduating CGPA of <strong>3.70 and above</strong> (or 3.50+ depending on specific engineering accreditation faculty guidelines). First-class graduates are eligible for 100% PTPTN loan repayment exemptions.",
        gpa_faq4_q: "Do Pass/Fail (TL/HL) courses count toward my semester GPA?",
        gpa_faq4_a: "No. Non-graded courses such as Kokurikulum (HL/TL) or Credit Transfers award credits toward degree completion but are omitted from GPA and CGPA quality point calculations.",
        gpa_faq5_q: "How can I recover from Kedudukan Bersyarat (KS) probation?",
        gpa_faq5_a: "To clear KS, you must achieve a semester GPA high enough to pull your cumulative CGPA back to &ge; 2.00. Focus intensely on repeating failed subjects and managing the restricted 12-credit workload.",
        gpa_faq6_q: "Can I appeal if I receive Kedudukan Gagal (KG)?",
        gpa_faq6_a: "Yes. Students can submit an official Rayuan Meneruskan Pengajian (Appeal to Continue Studies) to the Academic Management Division (BPA) within 14 working days of official result announcement.",
        gpa_sec7_title: "🔗 Related Student Guides",
        gpa_rel1_title: "🎓 In-Depth UTeM GPA Guide",
        gpa_rel1_desc: "Step-by-step strategies for Dean's List and probation recovery.",
        gpa_rel2_title: "📋 Course Add/Drop & Credit Limits",
        gpa_rel2_desc: "Understand credit hour caps by academic standing.",
        gpa_rel3_title: "💰 PTPTN 1st Class Loan Waiver",
        gpa_rel3_desc: "How to convert your PTPTN loan into a full scholarship.",

        exam_guide_title: "UTeM Past Year Examination Repository & Academic Success Master Guide",
        exam_guide_intro: "The official Universiti Teknikal Malaysia Melaka (UTeM) examination paper repository is curated and archived by <strong>Perpustakaan Laman Hikmah (PLH)</strong>. Undergraduates across all engineering, computer science, and technology management faculties can access previous semester final examination questions to practice problem-solving paradigms, evaluate marking allocations, and calibrate revision ahead of midterm and final examinations.",
        exam_sec1_title: "🏛️ Complete UTeM Faculty Course Code Directory",
        exam_th_faculty: "Faculty (Fakulti)",
        exam_th_prefix: "Code Prefixes",
        exam_th_fields: "Major Engineering & Tech Disciplines",
        exam_f_ftmk: "Software Engineering, Cybersecurity, Networking, Data Science, Artificial Intelligence, Interactive Media",
        exam_f_ftkm: "Mechanical Engineering, Automotive Systems, Thermodynamics, Fluid Dynamics, Structural Mechanics",
        exam_f_ftkee: "Electrical Power Systems, Control Engineering, Telecommunications, Mechatronics & Robotics",
        exam_f_fkp: "Manufacturing Systems, Industrial Automation, Product Design, Quality Engineering & Lean Production",
        exam_f_fptt: "Technology Management, Technopreneurship, Supply Chain & Logistics, Project Management",
        exam_f_ftkip: "Industrial Electronics, Computer Engineering Technology, Instrumentation & Process Control",
        exam_sec2_title: "🔐 Accessing Exam Papers Off-Campus via UTeM LibProxy",
        exam_sec2_desc: "When accessing the examination repository from off-campus residential Wi-Fi or mobile hotspots, the university firewall enforces Single Sign-On (SSO) authentication:",
        exam_libproxy_steps: "<li>Navigate directly to the official <strong>UTeM LibProxy portal</strong> (<a href=\"https://ezproxy.utem.edu.my\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--accent-gold); font-weight: 700;\">ezproxy.utem.edu.my</a>).</li><li>Log in using your standard UTeM Student Matric Number (e.g. <code>B032110000</code>) and SMPWeb student password.</li><li>Once authenticated, search by subject code (e.g. <code>BITP 1113</code>) to download high-resolution official PDF papers without encountering 403 Forbidden errors.</li>",
        exam_sec3_title: "💡 High-Yield Past Year Examination Revision Strategies",
        exam_strat1_title: "1. Simulate Timed 3-Hour Closed-Book Exam Conditions",
        exam_strat1_desc: "Avoid reading answers passively. Complete full 3-hour past papers under strict timer conditions without notes to master calculation pacing and time management across multi-part questions.",
        exam_strat2_title: "2. Master Bloom's Taxonomy Marks Allocation (C1 to C6)",
        exam_strat2_desc: "In technical degree courses, higher-order analysis, evaluation, and design problems (Bloom's C4–C6) represent 50%–70% of total examination marks. Prioritize derivation and design problems over simple definition memorization.",
        exam_strat3_title: "3. Collaborative Peer Solution Circles & Formula Sheet Mastery",
        exam_strat3_desc: "Form focused study groups of 3–4 classmates to compare mathematical derivations and algorithm traces. Practice solving complex problems using only the standard approved UTeM examination formula appendices.",
        exam_sec4_title: "📜 Official Examination Hall Rules & Regulations",
        exam_rule1_title: "1. Slip Menduduki Peperiksaan (SMPWeb Exam Slip)",
        exam_rule1_desc: "Every student must print their official <em>Slip Menduduki Peperiksaan</em> from SMPWeb before exam week. You must bring the physical printed slip along with your Student Matric Card to every exam session.",
        exam_rule2_title: "2. Dress Code & Prohibited Items",
        exam_rule2_desc: "Formal attire with collared shirts and covered shoes is mandatory. Smartwatches, programmable calculator memory banks without reset, and mobile phones are strictly prohibited at examination desks.",
        exam_rule3_title: "3. Medical Absence & PKU Endorsement Procedure",
        exam_rule3_desc: "If you are unable to sit for an examination due to illness, you must obtain an official Medical Certificate (MC) from Pusat Kesihatan UTeM (PKU) or endorse private clinic MCs within 48 hours to qualify for special replacement exams.",
        exam_rule4_title: "4. Grade Remarking & Result Appeals (Semakan Semula)",
        exam_rule4_desc: "If you suspect a grading error on your final paper, you can submit an official <em>Permohonan Semakan Semula Keputusan Peperiksaan</em> to the Academic Management Division (BPA) within 14 working days of official result release.",
        exam_sec5_title: "❓ Frequently Asked Questions (FAQ)",
        exam_faq1_q: "Why do some UTeM exam papers require EZproxy login when accessed off-campus?",
        exam_faq1_a: "Perpustakaan Laman Hikmah (PLH) restricts past examination papers to enrolled students and faculty. When off-campus, you must authenticate through the UTeM LibProxy portal using your Student ID and SMPWeb password.",
        exam_faq2_q: "Are answer schemes (skema jawapan) included in the library repository?",
        exam_faq2_a: "No, official marking schemes and answer keys are not released publicly in the library repository to encourage independent critical thinking and tutorial discussion with course lecturers.",
        exam_faq3_q: "How many past semester papers should I practice before finals?",
        exam_faq3_a: "Reviewing 3 to 5 recent past semesters is recommended to identify recurring question formats, syllabus weightings, and key engineering calculation paradigms.",
        exam_faq4_q: "Where can I find exam papers if my course code was recently updated?",
        exam_faq4_a: "When faculties restructure curriculum codes (e.g. from <code>BITM</code> to <code>BITS</code>), search using the previous equivalent course title or old subject code to find historical papers covering the identical syllabus topics.",
        exam_faq5_q: "What should I do if two of my final exams clash on the timetable?",
        exam_faq5_a: "Timetable clashes must be reported to your Faculty Academic Advisor and the Academic Management Division (BPA) within 5 working days of the draft exam schedule release to arrange special isolated sitting sessions.",
        exam_faq6_q: "Are non-programmable scientific calculators inspected before entry?",
        exam_faq6_a: "Yes. Invigilators verify calculator models (e.g. Casio fx-570 series). Calculator covers with written notes or formulas are confiscated, and programmable memories must be cleared prior to exam commencement.",
        exam_sec6_title: "🔗 Related Student Guides",
        exam_rel1_title: "📝 Past Year Exam Practice Guide",
        exam_rel1_desc: "In-depth study techniques, active recall, and exam week schedule planner.",
        exam_rel2_title: "📚 Perpustakaan Laman Hikmah (PLH)",
        exam_rel2_desc: "Study rooms, 24-hour exam zones, borrowing quotas, and digital libraries.",
        exam_rel3_title: "🎓 GPA & CGPA Target Calculator",
        exam_rel3_desc: "Calculate target examination grades needed to earn Dean's List honours.",

        titleLibTab: "Perpustakaan Laman Hikmah (PLH)",
        labelLibHours: "Library Hours",
        labelLibMainHours: "Academic Semester Hours:",
        labelHoursLibMonThu: "Mon - Thu: 8:00 AM - 10:00 PM",
        labelHoursLibFri: "Friday: 8:00 AM - 12:15 PM, 2:45 PM - 10:00 PM",
        labelLibWeekendHours: "Study & Exam Weeks (Weekends):",
        labelHoursLibWeekend: "Sat - Sun: 9:00 AM - 5:00 PM (Selected areas)",
        labelLibBreakHours: "Semester Break Hours:",
        labelHoursLibBreak: "Mon - Fri: 8:00 AM - 5:00 PM (Closed on Weekends)",
        labelLib24Hours: "24-Hour Study Area: Available at Main Entrance Area (Exam weeks)",
        labelLibServices: "PLH Gaming Zone & Leisure",
        labelLibPlaystation: "PS4 Console & Controller Rental:",
        descLibPlaystation: "RM4 per hour (max 2 hours, 2 controllers). 3 sets at Main Campus & 2 sets at Tech Campus. You can bring your own CDs but need to let the staff know.",
        labelLibBoardgames: "Free Indoor & Board Games:",
        descLibBoardgames: "Free rental for carrom, chess, darts, checkers, and board games at the counter.",
        labelLibBookingTitle: "Booking & Further Questions:",
        descLibBookingText: "Do at the Counter after passing the scanners. Contact:",
        btnLibMail: "Email Circulation Desk ➔",
        labelLibBorrowing: "Borrowing & E-Resources",
        labelLibRenewals: "Book Renewals:",
        descLibRenewals: "Students can renew borrowed books online for a maximum of 2 renewals before they must be returned.",
        labelLibEzproxy: "Off-Campus Access (EZproxy):",
        descLibEzproxy: "Access premium journals (e.g., IEEE Xplore, ScienceDirect) from home using the UTeM EZproxy portal with your student credentials.",
        labelLibContact: "Contact & Inquiries",
        labelLibPhone: "Phone:",
        labelLibEmail: "Email:",
        labelLibRef: "Visit official UTeM library site for catalog searches:",

        lib_guide_title: "UTeM Perpustakaan Laman Hikmah (PLH) Student Services Master Guide",
        lib_guide_intro: "<strong>Perpustakaan Laman Hikmah (PLH)</strong> serves as the central research and learning knowledge hub for Universiti Teknikal Malaysia Melaka. Operating multi-storey facilities across <strong>Kampus Induk (Durian Tunggal)</strong> and a specialized branch at <strong>Kampus Teknologi (Ayer Keroh)</strong>, PLH provides undergraduates with collaborative research spaces, digital archives, and student leisure facilities.",
        lib_sec1_title: "📚 Book Loan Entitlements & Overdue Policies",
        lib_th_patron: "Patron Category",
        lib_th_quota: "Max Loan Quota",
        lib_th_duration: "Loan Duration",
        lib_th_renewals: "Online Renewals",
        lib_th_fines: "Late Fines",
        lib_cat_ug: "Diploma & Degree Students",
        lib_quota_ug: "10 Books",
        lib_dur_ug: "14 Days",
        lib_ren_ug: "Up to 2 Times (OPAC)",
        lib_cat_pg: "Postgraduate (Master / PhD)",
        lib_quota_pg: "20 Books",
        lib_dur_pg: "30 Days",
        lib_ren_pg: "Up to 2 Times (OPAC)",
        lib_cat_red: "Final Year Project (Red Spot)",
        lib_quota_red: "2 Books",
        lib_dur_red: "Overnight / 3 Days",
        lib_ren_red: "In-person only",
        lib_sec2_title: "🏢 Available Library Facilities & Zones",
        lib_facilities_list: "<li><strong>24-Hour Study Zone:</strong> Dedicated air-conditioned study hall at Ground Floor with secure matric-card access during revision and exam weeks.</li><li><strong>Bilik Perbincangan (Discussion Rooms):</strong> Private acoustic-paneled group project rooms equipped with whiteboards and HDMI presentation monitors.</li><li><strong>PS4 Gaming & Board Game Zone:</strong> Recreational student lounge on Level 1 featuring console gaming and strategy board games for stress relief.</li><li><strong>Kubikel Individu (Silent Carrels):</strong> Distraction-free single-occupancy study pods located across Level 2 and Level 3 stacks.</li>",
        lib_sec3_title: "🔍 Scholarly E-Resources & Database Subscriptions",
        lib_sec3_desc: "UTeM students have unlimited institutional access to premier engineering and technology databases including <strong>IEEE Xplore, ScienceDirect, Scopus, SpringerLink, Web of Science, and Emerald Insight</strong>. Access databases on-campus via campus Wi-Fi or remotely through the <a href=\"https://ezproxy.utem.edu.my\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--accent-gold); font-weight: 700;\">UTeM LibProxy</a> gateway.",
        lib_sec4_title: "❓ Frequently Asked Questions (FAQ)",
        lib_faq1_q: "How do I book a private discussion room or PS4 console at PLH?",
        lib_faq1_a: "Discussion rooms and PS4 console sessions can be reserved in person at the PLH Customer Service Counter (Level 1) or online via the UTeM Library Portal using your active Student ID.",
        lib_faq2_q: "Can I access the 24-hour study area after regular library operating hours?",
        lib_faq2_a: "Yes, the 24-Hour Study Zone located at the Ground Floor of PLH Kampus Induk remains accessible via student matric card tap-in even after main counter hours, particularly during exam revision weeks.",
        lib_faq3_q: "How can I renew borrowed library books online?",
        lib_faq3_a: "Log into your student account on the UTeM Library OPAC catalog portal (library.utem.edu.my) to renew unreserved books up to two consecutive times before the due date.",
        lib_sec5_title: "🔗 Related Student Guides",
        lib_rel1_title: "📝 Past Year Exam Practice",
        lib_rel1_desc: "Access previous semester exam questions from the library archive.",
        lib_rel2_title: "☕ Top 10 Campus Study Spots",
        lib_rel2_desc: "Compare quiet spots across Kampus Induk & Kampus Teknologi.",
        lib_rel3_title: "💻 IT Setup & Software Licenses",
        lib_rel3_desc: "Download MATLAB, SolidWorks, and setup eduroam Wi-Fi.",

        titleHealthTab: "Pusat Kesihatan UTeM (PKU)",
        labelHealthHours: "Operating Hours",
        labelHealthMainInduk: "Main Campus (Durian Tunggal):",
        labelHoursIndukAcad: "Academic Weeks: Mon - Fri, 8:00 AM - 7:00 PM",
        labelHoursIndukBreak: "Semester Breaks: Mon - Fri, 8:00 AM - 5:00 PM",
        labelHealthTechAyer: "Technology Campus (Ayer Keroh):",
        labelHoursTech: "Mon - Fri: 8:00 AM - 5:00 PM",
        labelHealthBreaks: "Daily Rest Breaks:",
        labelHoursBreakMonThu: "Mon - Thu: 1:00 PM - 2:00 PM",
        labelHoursBreakFri: "Friday: 12:15 PM - 2:45 PM",
        labelHealthClosed: "Weekends & Public Holidays: Closed",
        labelHealthServices: "Online Appointments & Requests",
        labelDentalApp: "Dental Clinic Appointment:",
        btnDentalLink: "Dental e-Appointment ➔",
        labelEmergKit: "Borrow Emergency First Aid Kits:",
        btnEmergLink: "First Aid Request Form ➔",
        labelHealthPolicies: "Medical Leave (MC) & Policies",
        labelHealthExtMc: "External Private-Clinic MCs:",
        descHealthExtMc: "Medical certificates (MC) from external private clinics must be endorsed/validated by PKU UTeM before they are accepted by faculties.",
        labelHealthExamAbsence: "Exam Absence Due to Illness:",
        descHealthExamAbsence: "If you miss an official exam due to health emergencies, obtain an official PKU MC on the same day to submit with your Faculty special exam petition.",
        labelHealthCoverage: "Student Takaful Insurance Coverage:",
        descHealthCoverage: "All registered UTeM students are covered under the university group student Takaful scheme for accidental injuries and hospital admissions.",
        labelHealthContact: "Contact & Inquiries",
        labelHealthPhone: "Phone:",
        labelHealthEmail: "Email:",
        labelHealthRef: "Visit official PKU site for health advisories:",

        health_guide_title: "UTeM Pusat Kesihatan Universiti (PKU) Student Healthcare Master Guide",
        health_guide_intro: "<strong>Pusat Kesihatan Universiti (PKU UTeM)</strong> provides primary healthcare, emergency medical response, dispensary pharmacy services, dental treatments, first aid equipment loans, and confidential mental health counseling for all registered diploma, undergraduate, and postgraduate students across <strong>Kampus Induk (Durian Tunggal)</strong> and <strong>Kampus Teknologi (Ayer Keroh)</strong>.",
        health_sec1_title: "🏥 Available Medical Services & Clinic Hours",
        health_services_list: "<li><strong>Outpatient Medical Consultation (Pesakit Luar):</strong> General diagnosis, fever/flu treatments, chronic disease monitoring, and minor surgical procedures (dressing & wound care). Operating Monday–Friday, 8:00 AM – 5:00 PM.</li><li><strong>Dispensary Pharmacy:</strong> Dispensing prescribed generic medications and medical supplies covered under student health fees.</li><li><strong>Dental Clinic (Klinik Pergigian):</strong> Routine oral check-ups, scaling, fillings, and tooth extractions by appointment via the PKU dental portal.</li><li><strong>First-Aid Kits Loan:</strong> Equipment supply for approved student association events and outdoor sports tournaments.</li>",
        health_sec2_title: "🚨 24/7 Emergency Response & Ambulance Hotline",
        health_sec2_desc: "For acute medical emergencies, vehicle collisions, or severe injuries occurring outside regular clinic hours:",
        health_sec2_steps: "<li>Call the <strong>UTeM Security Control Room (Pejabat Keselamatan)</strong> 24/7 Hotline: <code style=\"color: var(--accent-gold); font-size: 13px;\">06-270 1200</code> or <code style=\"color: var(--accent-gold); font-size: 13px;\">06-270 1300</code>.</li><li>State the exact casualty location (e.g. Kolej Kediaman Satria Block B, FTMK Level 2, or Lestari Cafe).</li><li>The control room will immediately dispatch the on-duty campus ambulance or coordinate with <strong>Hospital Melaka / Hospital Alor Gajah</strong> for emergency room triage.</li>",
        health_sec3_title: "📄 Medical Certificate (MC) Endorsement Rules",
        health_sec3_desc: "If you receive a Medical Certificate (MC / Cuti Sakit) from an external private clinic or government hospital, university academic regulations require you to submit the physical slip to PKU for endorsement by a UTeM Medical Officer within <strong>48 hours</strong>. Unverified external MCs may not be accepted by your faculty for missed midterms, quizzes, or final examinations.",
        health_sec4_title: "❓ Frequently Asked Questions (FAQ)",
        health_faq1_q: "How do I get private clinic MCs validated by PKU for missed exams?",
        health_faq1_a: "Medical certificates (MC) issued by external private clinics must be presented in person to PKU within 48 hours of issue for official endorsement by a UTeM Medical Officer before submission to your faculty dean's office.",
        health_faq2_q: "Are medical consultations and dispensary medications free for UTeM students?",
        health_faq2_a: "Yes, basic primary outpatient consultations, standard dispensary medications, and minor treatments at PKU are covered by student health service fees included in your semester registration.",
        health_faq3_q: "How do I request ambulance transport for after-hours on-campus emergencies?",
        health_faq3_a: "Contact the 24/7 UTeM Security Control Centre (Pejabat Keselamatan) immediately at 06-270 1200 or 06-270 1300 to dispatch the on-duty campus emergency response vehicle or coordinate with 999.",
        health_sec5_title: "🔗 Related Student Guides",
        health_rel1_title: "🎒 Freshman Survival Guide",
        health_rel1_desc: "Essential emergency hotlines and clinic navigation tips.",
        health_rel2_title: "🏢 Kolej Kediaman Hostel Guide",
        health_rel2_desc: "Hostel warden contacts and first-aid points at Satria & Lestari.",
        health_rel3_title: "🚌 Campus Shuttle Buses",
        health_rel3_desc: "Shuttle routes between Durian Tunggal and Ayer Keroh clinics.",

        descImportantLinks: "Quick access to campus Wi-Fi credentials, LibProxy registration, VPN setup, official portals, and student channels.",
        libproxyTitle: "UTeM LibProxy (Off-Campus)",
        libproxySub: "Single Sign-On Access",
        libproxyDesc: "Access IEEE Xplore, ScienceDirect, and past year exams from home without network blocks.",
        libproxyBtn: "Open LibProxy Gateway ➔",
        vpnTitle: "SoftEther VPN Portal",
        vpnSub: "Remote Campus LAN Tunnel",
        vpnDesc: "Official campus VPN connection to access internal student systems and MATLAB software licenses.",
        vpnBtn: "Download VPN Profile ➔",
        staffDirTitle: "UTeM Staff Directory",
        staffDirSub: "Lecturer & Staff Search",
        staffDirDesc: "Search portal for UTeM lecturer emails, room numbers, extensions, and department staff.",
        staffDirBtn: "Open Staff Directory ➔",
        mppTitle: "MPP UTeM Official",
        mppSub: "Majlis Perwakilan Pelajar",
        mppDesc: "Official Instagram of UTeM Student Representative Council for announcements and student welfare.",
        mppBtn: "Visit MPP Instagram ➔",
        konvoTitle: "UTeM Convocation & Alumni",
        konvoSub: "Graduation & Robe Collection",
        konvoDesc: "Official portal for convocation session schedules, academic robe collection, and alumni updates.",
        konvoBtn: "Open Konvo Portal ➔",
        vehicleTitle: "Student Vehicle Form",
        vehicleSub: "Campus Driving & Parking",
        vehicleDesc: "Download the official UTeM student vehicle application form for campus driving and parking access.",
        vehicleBtn: "Download Form ➔",

        titleSupport: "Support UTeM Confessions Pro Max",
        descSupport: "UTeM Confessions Pro Max is a free, student-built platform maintained voluntarily to support UTeM students with tools, schedules, past papers, and student life guides.",
        titlePartnerDeals: "Student Discounts & Perks",
        descPartnerDeals: "Exclusive verified discount codes and promotional vouchers for UTeM students from food, tech, and student essentials partners.",
        titleCoffee: "Buy the Developer a Coffee ☕",
        descCoffee: "Keep our servers running smoothly and support continuous improvements to the campus transit tracker, exam archives, and interactive tools.",
        noticeKofiCurrency: "Tips and donations directly help fund server hosting, domain renewals, and API bandwidth costs.",

        updatesTitle: "Campus & Platform Updates",
        updatesSubtitle: "Stay informed with the latest UTeM campus notices, academic timetable releases, bus schedule revisions, and new feature rollouts on UCPM.",

        descMarketItems: "Buy and sell pre-loved textbooks, lab coats, drawing sets, electronics, and dorm appliances safely within the UTeM student community.",
        descMarketServices: "Discover freelance student services across campus including document printing, room moving, device repair, photography, and tutoring.",
        sellerNoticeMarketplace: "⚠️ Notice: UCPM does not handle direct financial transactions. Always meet in open public campus locations (e.g. PLH lobby or Satria cafeteria) for item handovers.",

        titleScholarships: "Scholarship & Financial Aid",
        descScholarships: "Explore available undergraduate financial aid, government education loans, emergency zakat relief, and state foundation scholarships for UTeM students.",

        titlePastExamsTab: "UTeM Past Year Examination Repository",
        descPastExamsTab: "Search and download previous semester final examination question papers across all engineering, computing, and technology faculties.",
        labelPastExamsLib: "Access the official Perpustakaan Laman Hikmah (PLH) digital exam database directly:",

        drawerLibrary: "Library (PLH)",
        drawerHealth: "Health Center (PKU)",
        drawerSupport: "Support Us",

        busTabInternal: "🚌 Campus Shuttle",
        busTabPublic: "💖 Bus M10A Pink Bus",
        title_campus_bus: "UTeM Campus Shuttle Timetable",
        semToggleSpecial: "📌 Special Semester",
        semToggleRegular: "🗓️ Regular Semester",
        labelRadarTitle: "UTeM Shuttle Route Radar",
        titlePublicBus: "Bus M10A Pink Bus",
        m10aLiveBadge: "Weekend Service to UTeM",
        labelRouteTimeline: "M10A Route Stops",
        labelWeekend1: "Fri-Sun Only",
        labelWeekend2: "Fri-Sun Only",
        labelM10ADetails: "Operational Notes & Guidelines",
        m10aDetail1: "Pink Bus operates between Melaka Sentral and Zoo Melaka on all 7 days of the week.",
        m10aDetail2: "Friday through Sunday (Weekend Extension), selected trips extend directly inside UTeM Main Campus.",
        m10aDetail3: "Payment is strictly cashless via Touch 'n Go, debit card, or credit card. Cash is not accepted.",
        titleRouteLookup: "Bus Route Finder",
        descRouteLookup: "Check transfer points and transit routes from UTeM to popular destinations in Melaka.",
        labelSelectDest: "Select Destination:",
        optSelectDest: "-- Select a Destination --",
        optDestTampin: "Tampin KTM Station (KTM Komuter / ETS)",
        optDestJasin: "Jasin Sentral / Bandar Jasin",
        optDestKlebang: "Pantai Klebang / Dataran 1Malaysia",
        optDestPaya: "Paya Rumput / Cheng Industrial Area",
        busSourcesLabel: "Information verified via official UTeM Student Affairs & Panorama Melaka channels.",

        activitiesTitle: "UTeM Campus Activities & Events",
        descActivities: "Discover club activities, sports competitions, workshops, academic symposiums, and volunteer programs happening across UTeM.",
        noActivitiesFoundMsg: "No activities match your selected filters.",

        calendarLinkLabel: "Download official BPA Academic Calendar PDF",

        gpaEstimationNote: "Note: Official final CGPA calculations follow the university grading policy on SMPWeb with credit-weighted quality points.",

        title_archive: "Student Voices",
        desc_archive: "Catch up on campus tea, student rants, and relatable stories. Search by keywords or filter by category to dive in!",
        note_archive: "<strong>Community Note:</strong> Confessions and stories shared in Student Voices are contributed for entertainment, peer relatability, and lighthearted campus discussions. They do not represent official university views and carry no intent to target, harm, or defame any individual or organization. Read with an open mind and keep the campus culture kind and respectful!",
        placeholder_archive_search: "🔍 Search confessions by keyword, tags, topic...",

        staticContactCard: '<p id="sellerNoticeMarketplace" style="margin: 0; color: var(--text-primary); font-weight: 500; line-height: 1.6;">Got something to sell or offering a service? 🚀 Get listed here! Drop us an email at <a href="mailto:utemconfessionpromax@duck.com" style="color: #facc15; text-decoration: underline; font-weight: 700;">utemconfessionpromax@duck.com</a></p>'
    },
    ms: {
        nav_activities: "Aktiviti",
        nav_confessions: "Pengakuan",
        nav_archive: "Suara Pelajar",
        nav_calendar: "Kalendar Akademik",
        nav_gpa: "Kalkulator GPA",
        nav_exams: "Kertas Exam Lepas",
        nav_links: "Wi-Fi & Pautan",
        nav_buses: "Jadual Bas",
        nav_library: "Perpustakaan (PLH)",
        nav_health: "Pusat Kesihatan (PKU)",
        nav_marketplace: "Pasar & Perkhidmatan",
        nav_scholarships: "Biasiswa",
        nav_guides: "Hub Panduan Pelajar",
        mobile_nav_guides: "Panduan Pelajar",
        nav_updates: "Kemas Kini",
        mobile_nav_updates: "Kemas Kini",

        mobile_nav_gpa: "Kalkulator GPA",
        mobile_nav_archive: "Suara Pelajar",
        mobile_nav_links: "Wi-Fi & Pautan",
        mobile_nav_buses: "Bas",
        mobile_nav_calendar: "Kalendar",
        mobile_nav_exams: "Exam",
        mobile_nav_health: "PKU",
        mobile_nav_library: "Perpustakaan",
        mobile_nav_marketplace: "Pasar",
        mobile_nav_scholarships: "Biasiswa",

        title_important_links: "Wi-Fi & Pautan Rasmi UTeM",
        desc_important_links: "Akses pantas ke kata laluan Wi-Fi kampus, panduan LibProxy, persediaan VPN, portal rasmi, dan saluran pelajar.",

        title_submit_confession: "Hantar Pengakuan",
        label_submit_confession: "",
        placeholder_confession: "Tulis pengakuan anda di sini...",
        checkbox_rules: "Saya bersetuju mematuhi peraturan pengakuan. Saya faham bahawa hantaran biadap atau melanggar undang-undang akan ditolak.",
        btn_submit: "Hantar Pengakuan",
        btn_submit_google: "Google Form buat masa ini tidak tersedia",
        btn_choose_image: "Pilih Imej",
        placeholder_image_caption: "Tulis keterangan pilihan...",
        checkbox_image_rules: "Saya bersetuju mematuhi peraturan. Imej akan disemak sebelum disiarkan.",
        btn_submit_image: "Hantar Imej",
        title_guidelines: "Garis Panduan Hantaran",

        guide_anon_title: "Rawak:",
        guide_anon_desc: "Alamat IP, nama, atau metadata anda tidak dijejak mahupun disimpan.",
        guide_respect_title: "Hormat:",
        guide_respect_desc: "Tiada pembulian bersasar, gangguan seksual, atau kata-kata kebencian terhadap pelajar atau pensyarah.",
        guide_spam_title: "Spam:",
        guide_spam_desc: "Butang hantar mempunyai had kelewatan 30 saat antara hantaran.",
        guide_image_title: "Imej:",
        guide_image_desc: "Jangan muat naik kandungan NSFW, gambar peribadi individu, atau tangkapan skrin media sosial yang mengandungi wajah yang jelas atau maklumat peribadi.",
        guide_mod_title: "Semakan:",
        guide_mod_desc: "Hantaran imej dibaca dan disemak oleh moderator manusia sebelum disiarkan.",
        guide_links_title: "Pautan:",
        guide_links_desc: "Pautan hanya boleh dikongsi dalam bentuk imej. Ini adalah supaya pihak admin dapat menyemak terlebih dahulu sebelum disiarkan ke saluran.",
        guide_impersonation_title: "Penyamaran:",
        guide_impersonation_desc: "Jangan menyamar sebagai pelajar, pensyarah, kakitangan, atau organisasi lain dengan cara yang boleh mengelirukan orang lain.",
        guide_threats_title: "Ancaman:",
        guide_threats_desc: "Ancaman keganasan, ugutan, atau galakan untuk mendatangkan mudarat adalah tidak dibenarkan sama sekali.",
        guide_accusations_title: "Tuduhan:",
        guide_accusations_desc: "Jangan siarkan tuduhan tanpa bukti terhadap individu tertentu. Kekalkan perbincangan secara fakta dan tanpa nama.",
        guide_connections_title: "Kenalan:",
        guide_connections_desc: "Hantaran yang mencari persahabatan, teman, rakan belajar, atau bentuk hubungan lain diwajibkan untuk menghormati batasan, standard moral, dan maklum balas.",
        guide_think_title: "Fikir Sebelum Kongsi:",
        guide_think_desc: "Setelah disiarkan, pengakuan mungkin dilihat, dikongsi, atau ditangkap layar oleh orang lain.",

        title_gpa_calc: "Kalkulator GPA & CGPA Semester UTeM",
        label_sem_gpa: "GPA Semester Semasa",
        label_sem_credits: "Jam Kredit Semester",
        label_est_cgpa: "Anggaran CGPA",
        th_course: "Nama Kursus (Pilihan)",
        th_credits: "Kredit",
        th_grade: "Gred Dicapai",
        th_actions: "Tindakan",
        btn_add_subject: "➕ Tambah Baris",
        btn_clear_gpa: "✕ Padam Semua",
        btn_print_gpa: "🖨️ Cetak / Simpan PDF",
        label_prior_cgpa: "CGPA Kumulatif Terdahulu",
        label_prior_credits: "Kredit Dikumpul Terdahulu (Jumlah)",

        title_countdown: "Countdown Peperiksaan Seterusnya",
        label_countdown_custom: "Pilih Tarikh & Waktu Khas",
        btn_apply_countdown: "Gunakan Countdown",
        label_days: "Hari",
        label_hours: "Jam",
        label_mins: "Minit",
        label_secs: "Saat",
        opt_sem2_finals: "Akhir Semester 2 UTeM (12 Okt 2026)",
        opt_sem1_finals: "Akhir Semester 1 UTeM (25 Jan 2027)",
        opt_merdeka: "Hari Merdeka Malaysia (31 Ogos 2026)",
        opt_newyear: "Tahun Baru (1 Jan 2027)",
        opt_custom: "Tetapkan Tarikh Khas...",

        title_bus_transit: "Jadual Bas Shuttle UTeM",
        label_next_departure: "Pelepasan Seterusnya:",
        label_note: "Nota: Masa ketibaan bas shuttle mungkin berbeza mengikut keadaan trafik di Lebuhraya Ayer Keroh. Sila berada di tempat menunggu 5 minit awal.",
        th_departure: "Pelepasan",
        th_day_type: "Hari",
        th_status: "Status",

        title_public_bus: "Jadual Masa Rasmi Bas M10A BAS.MY (Bas Pink)",
        desc_public_bus: "Perkhidmatan bas awam beroperasi antara Melaka Sentral ⇄ Batu Berendam ⇄ MITC ⇄ Zoo Melaka ⇄ Kampus Induk UTeM.",
        label_route_timeline: "Hentian Laluan M10A",
        label_weekend: "Hujung Minggu Sahaja",
        title_route_lookup: "Carian Laluan Bas Awam Melaka (Lokasi Lain)",
        desc_route_lookup: "Pilih destinasi di bawah untuk mencari laluan bas BAS.MY yang betul dari Melaka Sentral.",
        label_select_dest: "Pilih destinasi...",
        opt_select_dest: "Pilih lokasi...",
        opt_dest_tampin: "Tampin (melalui Alor Gajah) - Laluan M20 / M21",
        opt_dest_jasin: "Jasin - Laluan M32",
        opt_dest_klebang: "Klebang / Pulau Gadong - Laluan M15",
        opt_dest_paya: "Paya Luboh - Laluan M16",
        bus_sources_label: "Sumber Data Rasmi & Pautan Rujukan:",
        label_m10a_details: "Jadual & Operasi M10A:",
        m10a_detail1: "<strong>Isnin-Khamis:</strong> Melaka Sentral ⇄ MITC (melalui Batu Berendam)",
        m10a_detail2: "<strong>Jumaat-Ahad:</strong> Dilanjutkan ke Zoo Melaka & UTeM",
        m10a_detail3: "<strong>Waktu:</strong> 6:00 AM – 8:00 PM (Tanpa Tunai: TNG, Kad Debit, QR)",

        title_calendar: "Kalendar Akademik (2026/2027)",
        btn_cal_all: "Semua",
        btn_cal_academic: "Kuliah",
        btn_cal_exam: "Peperiksaan",
        btn_cal_break: "Cuti Belajar",
        btn_cal_holiday: "Cuti Umum",
        placeholder_search_cal: "Cari acara kalendar...",
        calendar_sources_label: "Rujukan Kalendar Akademik Rasmi:",
        calendar_link_label: "PDF Rasmi ➔",
        title_past_exams_tab: "Kertas Peperiksaan Tahun Lepas UTeM",
        desc_past_exams_tab: "Akses repositori rasmi perpustakaan UTeM untuk mencari, menyemak imbas dan memuat turun kertas soalan peperiksaan semester lepas bagi kursus anda.",
        label_past_exams_lib: "Pangkalan Data Kertas Peperiksaan Rasmi:",
        btn_past_exams_link: "Buka Portal Peperiksaan Perpustakaan ➔",

        title_health_tab: "Pusat Kesihatan UTeM (PKU)",
        desc_health_tab: "",
        label_health_hours: "Waktu Operasi",
        label_health_main_induk: "Kampus Induk (Durian Tunggal):",
        label_hours_induk_acad: "Minggu Akademik: Isnin - Jumaat, 8:00 AM - 7:00 PM",
        label_hours_induk_break: "Cuti Semester: Isnin - Jumaat, 8:00 AM - 5:00 PM",
        label_health_tech_ayer: "Kampus Teknologi (Ayer Keroh):",
        label_hours_tech: "Isnin - Jumaat: 8:00 AM - 5:00 PM",
        label_health_breaks: "Waktu Rehat Harian:",
        label_hours_break_monthu: "Isnin - Khamis: 1:00 PM - 2:00 PM",
        label_hours_break_fri: "Jumaat: 12:15 PM - 2:45 PM",
        label_health_closed: "Hujung Minggu & Cuti Umum: Tutup",
        label_health_services: "Temu Janji & Permohonan Dalam Talian",
        label_dental_app: "Temu Janji Klinik Pergigian:",
        btn_dental_link: "e-Temu Janji Pergigian ➔",
        label_emerg_kit: "Pinjaman Kit Pertolongan Cemas Kecemasan:",
        btn_emerg_link: "Borang Permohonan First Aid ➔",
        label_health_policies: "Cuti Sakit (MC) & Polisi",
        label_health_ext_mc: "MC Klinik Swasta Luar:",
        desc_health_ext_mc: "Sijil cuti sakit (MC) dari klinik swasta luar perlu disahkan/diendors oleh PKU UTeM sebelum diterima oleh fakulti.",
        label_health_exam_absence: "Ketidakhadiran Peperiksaan:",
        desc_health_exam_absence: "Ketidakhadiran dalam peperiksaan akhir atas sebab kesihatan memerlukan pengesahan MC/Endorsmen yang dihantar kepada fakulti/bahagian akademik anda.",
        label_health_coverage: "Perlindungan Perubatan Pelajar:",
        desc_health_coverage: "Pelajar UTeM yang aktif/berdaftar dilindungi untuk rawatan pesakit luar dan penjagaan asas pergigian di PKU di bawah skim kesihatan pelajar.",
        label_health_contact: "Maklumat Perhubungan",
        label_health_phone: "Telefon:",
        label_health_email: "E-mel:",
        label_health_address: "",
        label_health_ref: "Maklumat diperolehi daripada saluran rasmi:",

        title_lib_tab: "Perpustakaan Laman Hikmah (PLH)",
        desc_lib_tab: "",
        label_lib_hours: "Waktu Operasi Perpustakaan",
        label_lib_main_hours: "Waktu Semester Akademik:",
        label_hours_lib_monthu: "Isnin - Khamis: 8:00 AM - 10:00 PM",
        label_hours_lib_fri: "Jumaat: 8:00 AM - 12:15 PM, 2:45 PM - 10:00 PM",
        label_lib_weekend_hours: "Minggu Ulang Kaji & Peperiksaan (Hujung Minggu):",
        label_hours_lib_weekend: "Sabtu - Ahad: 9:00 AM - 5:00 PM (Kawasan terpilih)",
        label_lib_break_hours: "Waktu Cuti Semester:",
        label_hours_lib_break: "Isnin - Jumaat: 8:00 AM - 5:00 PM (Tutup pada Hujung Minggu)",
        label_lib_24hours: "Kawasan Pembelajaran 24-Jam: Disediakan di Kawasan Pintu Masuk Utama (Minggu Peperiksaan)",
        label_lib_services: "Zon Permainan PLH & Riadah",
        label_lib_playstation: "Sewaan Konsol & Alat Kawalan PS4:",
        desc_lib_playstation: "RM4 sejam (maks 2 jam, 2 controllers). 3 set di Kampus Induk & 2 set di Kampus Teknologi. Anda boleh membawa CD sendiri tetapi perlu memaklumkan kepada staf.",
        label_lib_boardgames: "Permainan Dalaman & Papan Percuma:",
        desc_lib_boardgames: "Pinjaman percuma untuk karom, catur, dart, dan permainan papan di kaunter.",
        label_lib_booking_title: "Tempahan & Soalan Lanjut:",
        desc_lib_booking_text: "Lakukan di Kaunter selepas melepasi pengimbas. Hubungi:",
        label_lib_borrowing: "Peminjaman & Sumber-E",
        label_lib_renewals: "Pembaharuan Buku:",
        desc_lib_renewals: "Pelajar boleh memperbaharui buku pinjaman secara dalam talian maksimum 2 kali sebelum ia perlu dipulangkan.",
        label_lib_ezproxy: "Akses Luar Kampus (EZproxy):",
        desc_lib_ezproxy: "Akses jurnal premium (cth., IEEE Xplore, ScienceDirect) dari rumah menggunakan portal EZproxy UTeM dengan kredensial pelajar anda.",
        btn_lib_mail: "E-mel Kaunter Sirkulasi ➔",
        label_lib_contact: "Hubungi & Pertanyaan",
        label_lib_phone: "Telefon:",
        label_lib_email: "E-mel:",
        label_lib_address: "",
        label_lib_ref: "Layari portal perpustakaan rasmi UTeM untuk carian katalog:",

        footer_text: "Platform Sumber & Pengakuan Pelajar Tidak Rasmi.",
        footer_home: "Laman Utama",
        footer_guides: "Panduan Pelajar",
        footer_about: "Tentang Kami",
        footer_rules: "Peraturan Pengakuan",
        footer_privacy: "Dasar Privasi",
        footer_terms: "Syarat Perkhidmatan",

        title_marketplace: "Pasar Pelajar UTeM",
        badge_marketplace: "Pembangunan Akan Datang",
        desc_marketplace: "Pasar kampus untuk pelajar UTeM membeli, menjual, atau menukar buku teks, nota, peralatan, dan gajet.",
        notice_marketplace_seller: "Untuk menjual barangan anda di sini: Kongsi dalam kumpulan Telegram atau hubungi e-mel admin di:",

        title_scholarships: "Biasiswa & Bantuan Kewangan",
        desc_scholarships: "Ketahui pinjaman kerajaan, skim MARA, hibah yayasan negeri, biasiswa korporat, dan bantuan kewangan universiti untuk pelajar UTeM dan IPT Malaysia.",
        notice_archive_takedown: "Permohonan Pemadaman Kandungan: Jika terdapat hantaran pengakuan yang melibatkan anda dan anda mahu ia dipadam daripada arkib, sila hubungi pasukan admin melalui e-mel atau Telegram.",
        btn_contact_admin_removal: "Hubungi Admin ➔",

        nav_support: "Sokong Kami",
        title_support: "Sokong UTeM Confessions Pro Max",
        desc_support: "Bantu kekalkan portal pelajar, kalkulator GPA, jadual bas, dan arkib peperiksaan kami 100% percuma dan boleh diakses oleh semua pelajar UTeM.",
        label_free_support: "Pilihan 1: Sokongan Percuma Rakan Kongsi",
        title_partner_deals: "Terokai Tawaran Rakan Kongsi & Hadiah Pelajar 🎁",
        desc_partner_deals: "Lawat tawaran tajaan membantu sedikit kos pelayan, pendaftaran domain, dan penyelenggaraan platform tanpa sebarang bayaran daripada anda!",
        btn_partner_deals1: "Terokai Tawaran Rakan Kongsi & Hadiah Pelajar 🎁 ➔",
        btn_partner_deals2: "Lawat Laman Rakan Kongsi untuk menyokong laman ini ❤️ ➔",
        btn_partner_deals3: "Terokai Tawaran Tajaan Luar 🌐 ➔",
        label_coffee_support: "Pilihan 2: Sumbangan Ikhlas Pasukan Admin",
        title_coffee: "Belanja Pasukan Admin Kopi ☕",
        desc_coffee: "Jika alat GPA, laluan bas, atau panduan peperiksaan kami membantu anda dalam semester ini, segala sumbangan ikhlas kepada pasukan sukarelawan pelajar kami amatlah dihargai!",
        notice_kofi_currency: "*Sila ambil maklum: Tip/Sumbangan hanya diterima dalam nilai USD ($) disebabkan oleh had platform Ko-fi. Ini adalah normal dan selamat.",
        btn_kofi_support: "Belanja Kami Kopi di Ko-fi ☕ ➔",
        btn_contact_admin_tip: "Hubungi Admin di Telegram ➔",
        label_transparency_title: "Janji Ketelusan Kami:",
        desc_transparency: "UTeM Confessions Pro Max kekal 100% percuma untuk semua pelajar. Kami menggunakan iklan dan tawaran rakan kongsi tanpa gangguan semata-mata untuk menampung kos pelayan. Terima kasih kerana menyokong komuniti pelajar UTeM!",

        theme_label_dark: "Tema Gelap",
        theme_label_light: "Tema Terang",

        status_waiting: "Sila tunggu sekurang-kurangnya 30 saat sebelum menghantar pengakuan baru.",
        status_submitting: "Menghantar...",
        status_success: "Pengakuan berjaya dihantar dan kini dalam semakan!",
        status_success_local: "Berjaya merekod pengakuan secara tempatan. (Proses hantaran selesai!)",

        bus_active: "Servis Aktif",
        bus_weekend: "Laluan Hujung Minggu",
        bus_no_service: "Tiada perkhidmatan",
        bus_none_running: "Tiada bas beroperasi hari ini.",
        bus_arriving_in: "Tiba dalam",
        bus_minute: "minit",
        bus_minutes: "minit",
        bus_hour: "jam",
        bus_hours: "jam",

        cat_all: "Semua",
        cat_academic: "Kuliah",
        cat_exam: "Peperiksaan",
        cat_break: "Cuti",
        cat_holiday: "Cuti Umum",

        lang_label: "Bahasa",
        theme_switcher_label: "Tema Gelap",

        // Cards under Wi-Fi & Links tab
        card_libproxy_title: "Pendaftaran Akaun LibProxy",
        card_libproxy_sub: "Akses EZProxy Luar Kampus",
        card_libproxy_desc: "Panduan video pendaftaran dan pengaktifan akaun LibProxy bagi akses e-jurnal dan pangkalan data perpustakaan dari rumah.",
        card_libproxy_btn: "▶ Tonton Panduan Video ➔",

        card_vpn_title: "Muat Turun SoftEther VPN",
        card_vpn_sub: "Akses Perpustakaan Luar Kampus",
        card_vpn_desc: "Panduan rasmi klien SoftEther VPN UTeM untuk capaian pangkalan data perpustakaan dan e-jurnal dari rumah.",
        card_vpn_btn: "Muat Turun SoftEther VPN ➔",

        card_staff_title: "Direktori Staf UTeM",
        card_staff_sub: "Carian Pensyarah & Staf",
        card_staff_desc: "Portal carian e-mel pensyarah, nombor bilik, sambungan telefon, dan staf jabatan UTeM.",
        card_staff_btn: "Buka Direktori Staf ➔",

        card_mpp_title: "MPP UTeM Rasmi",
        card_mpp_sub: "Majlis Perwakilan Pelajar",
        card_mpp_desc: "Saluran Instagram rasmi Majlis Perwakilan Pelajar UTeM bagi pengumuman dan kebajikan pelajar.",
        card_mpp_btn: "Lawati Instagram MPP ➔",

        card_aduan_title: "e-Aduan KPT (SPAB)",
        card_aduan_sub: "Sistem Aduan Awam Kementerian",
        card_aduan_desc: "Portal aduan awam Kementerian Pendidikan Tinggi (KPT) bagi maklum balas dan pertanyaan.",
        card_aduan_btn: "Buka Portal e-Aduan ➔",

        card_konvo_title: "Konvokesyen & Alumni UTeM",
        card_konvo_sub: "Jadual Graduasi & Jubah",
        card_konvo_desc: "Portal rasmi untuk jadual sesi konvokesyen, pengambilan jubah akademik, dan alumni UTeM.",
        card_konvo_btn: "Buka Portal Konvo ➔",

        card_vehicle_title: "Borang Kenderaan Pelajar",
        card_vehicle_sub: "Memandu & Meletak Kenderaan",
        card_vehicle_desc: "Muat turun borang permohonan kenderaan pelajar rasmi UTeM untuk akses memandu dan meletak kenderaan di kampus.",
        card_vehicle_btn: "Muat Turun Borang ➔",

        // --- Wi-Fi Enriched Section (BM) ---
        wifi_guide_title: "Panduan Lengkap Rangkaian Tanpa Wayar & Infrastruktur Digital UTeM",
        wifi_guide_intro: "Universiti Teknikal Malaysia Melaka (UTeM) mengendalikan rangkaian kampus berkelajuan tinggi gred perusahaan yang diuruskan oleh <strong>Pusat Perkhidmatan Pengetahuan & Komunikasi (PPPK)</strong> merangkumi Kampus Induk (Durian Tunggal), Kampus Teknologi (Ayer Keroh), dan seluruh kolej kediaman pelajar (Kolej Satria & Lestari). Menyambung ke SSID tanpa wayar yang betul memastikan akses lancar kepada penstriman kuliah, portal SMPWeb, e-sumber perpustakaan, dan perisian kejuruteraan berasaskan awan.",
        wifi_sec1_title: "📶 SSID Wi-Fi Kampus & Kaedah Keselamatan",
        wifi_th_ssid: "Nama SSID",
        wifi_th_proto: "Protokol Keselamatan",
        wifi_th_auth: "Kredensial Pengesahan",
        wifi_th_use: "Kegunaan Terbaik",
        wifi_td_row1_ssid: "Wifi UTeM Net",
        wifi_td_row1_proto: "Portal Web Captive",
        wifi_td_row1_auth: "Kata Laluan Semester Kongsi (<code>1UTeM@PPPK</code>)",
        wifi_td_row1_use: "Akses pantas pelawat, telefon bimbit, pelayaran web asas",
        wifi_td_row2_ssid: "UTeM-Wifi",
        wifi_td_row2_proto: "WPA2-Enterprise (802.1X)",
        wifi_td_row2_auth: "Nombor Matrik (<code>B032...</code>) + Kata Laluan SMPWeb",
        wifi_td_row2_use: "Komputer riba, muat turun data stabil, tugasan & perisian makmal",
        wifi_td_row3_ssid: "eduroam",
        wifi_td_row3_proto: "WPA2-Enterprise Global",
        wifi_td_row3_auth: "Emel Penuh Pelajar (<code>B032...@student.utem.edu.my</code>) + Kata Laluan",
        wifi_td_row3_use: "Perantauan akademik global di seluruh IPTA Malaysia & institusi antarabangsa",
        wifi_td_row4_ssid: "UTeM-Guest",
        wifi_td_row4_proto: "Tiket Web Sementara",
        wifi_td_row4_auth: "SMS OTP / Kod Baucar Persidangan",
        wifi_td_row4_use: "Penceramah jemputan, peserta persidangan, tetamu rasmi universiti",
        wifi_sec2_title: "📲 Panduan Sambungan Lengkap Mengikut Platform",
        wifi_p_android_title: "🤖 Android (Android 11, 12, 13, 14 & 15)",
        wifi_android_steps: "<li>Pilih <strong>eduroam</strong> atau <strong>UTeM-Wifi</strong>.</li><li><strong>Kaedah EAP:</strong> Pilih <code>PEAP</code>.</li><li><strong>Pengesahan Fasa 2:</strong> Pilih <code>MSCHAPV2</code>.</li><li><strong>Sijil CA:</strong> Pilih <code>Gunakan Sijil Sistem</code> (atau <code>Jangan Sahkan</code>).</li><li><strong>Status Sijil Dalam Talian:</strong> <code>Jangan sahkan</code>.</li><li><strong>Domain:</strong> Taip <code>utem.edu.my</code>.</li><li><strong>Identiti:</strong> <code>NoMatrik@student.utem.edu.my</code> (untuk eduroam) atau No Matrik.</li><li><strong>Kata Laluan:</strong> Kata laluan portal pelajar SMPWeb yang aktif.</li>",
        wifi_p_win_title: "💻 Windows 11 & Windows 10",
        wifi_win_steps: "<li>Klik ikon Wi-Fi pada taskbar dan pilih <strong>UTeM-Wifi</strong> atau <strong>eduroam</strong>.</li><li>Tandakan <em>\"Connect automatically\"</em> dan klik <strong>Connect</strong>.</li><li>Masukkan Nombor Matrik Pelajar (cth: <code>b032110000</code>) dan kata laluan SMPWeb.</li><li>Apabila tetingkap perakuan pelayan PPPK muncul, klik <strong>Connect</strong> untuk mempercayai sijil.</li><li>Jika sambungan kerap terputus, matikan <em>\"Random Hardware Addresses\"</em> dalam sifat Wi-Fi.</li>",
        wifi_p_apple_title: "🍎 Apple iOS, iPadOS & macOS",
        wifi_apple_steps: "<li>Ketik <strong>eduroam</strong> atau <strong>UTeM-Wifi</strong> dalam Tetapan.</li><li>Masukkan emel pelajar penuh (untuk eduroam) atau No Matrik dan kata laluan.</li><li>Apabila sijil <code>radius.utem.edu.my</code> dipaparkan, ketik <strong>Trust</strong> di bahagian atas kanan.</li><li>Bagi rangkaian captive <strong>Wifi UTeM Net</strong>, matikan <em>\"Private Wi-Fi Address\"</em> untuk mengelakkan log masuk berulang.</li>",
        wifi_p_linux_title: "🐧 Linux (Ubuntu, Debian & Fedora)",
        wifi_linux_steps: "<li>Buka Tetapan Rangkaian dan pilih <strong>eduroam</strong>.</li><li><strong>Keselamatan Wi-Fi:</strong> WPA & WPA2 Enterprise.</li><li><strong>Pengesahan:</strong> Protected EAP (PEAP).</li><li><strong>Pengesahan Dalaman:</strong> MSCHAPv2.</li><li><strong>Sijil CA:</strong> Tiada (tandakan <em>No CA certificate is required</em>).</li><li>Masukkan kredensial emel pelajar dan buat sambungan.</li>",
        wifi_sec3_title: "🛡️ Akses Luar Kampus Selamat (VPN & LibProxy)",
        wifi_sec3_desc: "Apabila mengulang kaji di rumah sewa luar kampus atau cuti semester, sistem universiti dan pangkalan data penyelidikan bernilai tinggi memerlukan terowong rangkaian kampus yang selamat:",
        wifi_vpn_box_title: "🔒 Terowong Klien VPN SoftEther",
        wifi_vpn_box_desc: "Membina terowong L2TP/IPsec disulitkan ke <code>vpn.utem.edu.my</code>. Penting untuk mahasiswa kejuruteraan mengakses lesen rangkaian perisian kampus seperti <strong>MATLAB, AutoCAD, SolidWorks, dan ANSYS</strong> dari rumah.",
        wifi_libproxy_box_title: "📚 Gerbang Sarjana LibProxy (EZproxy)",
        wifi_libproxy_box_desc: "Gerbang Log Masuk Tunggal (SSO) berasaskan web di <code>ezproxy.utem.edu.my</code> yang membolehkan akses luar kampus ke perpustakaan digital berindeks termasuk <strong>IEEE Xplore, ScienceDirect, Scopus, SpringerLink, dan Web of Science</strong> tanpa VPN.",
        wifi_sec4_title: "🔧 Penyelesaian Masalah & Isu Sambungan Lazim",
        wifi_trouble1_title: "1. Halaman Log Masuk Captive Portal Tidak Muncul (Wifi UTeM Net)",
        wifi_trouble1_desc: "Jika skrin log masuk tidak dibuka secara automatik, buka pelayar web dan layari <code>http://1.1.1.1</code> atau <code>http://neverssl.com</code> secara manual untuk mencetuskan gesaan log masuk captive gateway.",
        wifi_trouble2_title: "2. Kegagalan Pengesahan Selepas Menukar Kata Laluan SMPWeb",
        wifi_trouble2_desc: "Pelayan RADIUS menyegerakkan data dengan SMPWeb setiap 15 minit. Lupakan (forget) rangkaian tanpa wayar pada peranti anda, tunggu 15 minit selepas menukar kata laluan, dan sambung semula dengan kata laluan baharu.",
        wifi_trouble3_title: "3. \"Connected, No Internet\" / Pertembungan Pajakan IP",
        wifi_trouble3_desc: "Pastikan peranti anda ditetapkan untuk mendapatkan IP dan DNS secara automatik (DHCP). DNS statik pihak ketiga (seperti 8.8.8.8) menyekat penghalaan gateway universiti tempatan.",
        wifi_trouble4_title: "4. Saluran Sokongan Helpdesk ICT PPPK",
        wifi_trouble4_desc: "Untuk membuka kunci akaun atau pertanyaan senarai putih MAC, hantar tiket melalui <code>help.utem.edu.my</code> atau kunjungi Kaunter Helpdesk PPPK di Aras 1, Bangunan PPPK, Kampus Induk.",
        wifi_sec5_title: "❓ Soalan Lazim (FAQ)",
        wifi_faq1_q: "Apakah perbezaan antara Wifi UTeM Net dan eduroam?",
        wifi_faq1_a: "Wifi UTeM Net ialah rangkaian portal web captive yang memerlukan kata laluan semester berkongsi. Manakala eduroam ialah rangkaian disulitkan WPA2-Enterprise global yang berfungsi di seluruh universiti rakan kongsi di seluruh dunia menggunakan emel pelajar penuh anda.",
        wifi_faq2_q: "Mengapakah saya memerlukan VPN SoftEther UTeM semasa di luar kampus?",
        wifi_faq2_a: "VPN SoftEther UTeM menghalakan sambungan luar kampus anda melalui subnet universiti, membolehkan akses jauh ke pelayan lesen perisian kampus (MATLAB, AutoCAD, SolidWorks) dan portal pentadbiran dalaman.",
        wifi_faq3_q: "Apakah yang perlu saya lakukan jika log masuk Wi-Fi gagal atau kata laluan tamat tempoh?",
        wifi_faq3_a: "Tetapkan semula kata laluan anda di portal rasmi pelajar SMPWeb. Semua perkhidmatan Wi-Fi (UTeM-Wifi dan eduroam) diselaraskan dengan kelayakan SMPWeb anda dalam masa 15 minit selepas kemas kini.",
        wifi_faq4_q: "Bolehkah saya menyambungkan TV pintar, konsol permainan (PS5/Xbox), atau pencetak ke UTeM-Wifi?",
        wifi_faq4_a: "Peranti yang tidak menyokong pelayar WPA2-Enterprise 802.1X perlu disambungkan ke <strong>Wifi UTeM Net</strong> melalui log masuk pelayar web, atau daftarkan alamat MAC secara terus dengan PPPK untuk penggunaan port ethernet LAN kolej kediaman.",
        wifi_faq5_q: "Adakah lebar jalur (bandwidth) internet dihadkan semasa waktu puncak?",
        wifi_faq5_a: "PPPK melaksanakan pengurusan Quality of Service (QoS) untuk mengutamakan portal akademik (SMPWeb, ULeMS, Google Classroom, IEEE) berbanding perkongsian fail peer-to-peer dan penstriman video berat semasa waktu kuliah siang (08:00–17:00).",
        wifi_faq6_q: "Adakah eduroam berfungsi semasa melawat universiti lain di Malaysia?",
        wifi_faq6_a: "Ya! Apabila melawat UM, UTM, USM, UKM, UiTM, atau mana-mana 100+ institusi rakan kongsi global, peranti anda akan bersambung secara automatik ke rangkaian eduroam mereka menggunakan ID pelajar UTeM tanpa pendaftaran tetamu.",
        wifi_sec6_title: "🔗 Panduan Pelajar Berkaitan",
        wifi_rel1_title: "💻 Panduan Persediaan IT, M365 & MATLAB",
        wifi_rel1_desc: "Lesen perisian pelajar percuma, tetapan Office 365, dan panduan pemasangan.",
        wifi_rel2_title: "☕ 10 Tempat Belajar Terbaik Kampus",
        wifi_rel2_desc: "Lokasi terbaik di seluruh kampus dengan Wi-Fi pantas dan punca kuasa elektrik.",
        wifi_rel3_title: "📚 Perpustakaan Laman Hikmah (PLH)",
        wifi_rel3_desc: "Akses e-buku, jurnal dalam talian, ruang belajar 24 jam, dan konsol permainan.",

        // --- Bus Enriched Section (BM) ---
        bus_guide_title: "Panduan Lengkap Transit Bas UTeM & Rangkaian Awam BAS.MY",
        bus_guide_intro: "Mengurus perjalanan antara kampus <strong>Universiti Teknikal Malaysia Melaka (UTeM)</strong> memerlukan pemahaman tentang bas shuttle dalaman universiti yang percuma serta rangkaian transit awam negeri yang dikendalikan oleh <strong>BAS.MY Melaka (Laluan M10A)</strong>. Memandangkan fakulti terletak di dua zon geografi berbeza—<strong>Kampus Induk</strong> di Durian Tunggal dan <strong>Kampus Teknologi</strong> di Ayer Keroh yang berjarak 12km melalui Lebuhraya Ayer Keroh—perancangan masa yang tepat amat penting untuk sampai ke kuliah, makmal, dan dewan peperiksaan tepat pada masanya.",
        bus_sec1_title: "🚌 Direktori Laluan Bas Shuttle Kampus",
        bus_th_route: "Nama Laluan",
        bus_th_coverage: "Hentian Utama & Liputan",
        bus_th_freq: "Kekerapan Puncak",
        bus_th_operating: "Hari & Waktu Operasi",
        bus_td_r1_name: "Kampus Induk (KI) ⇄ Kampus Teknologi (KT)",
        bus_td_r1_cov: "Kompleks Dewan Kuliah (KDK), Perpustakaan PLH, FTMK ⇄ FKE, FKEKK, FKP Ayer Keroh",
        bus_td_r1_freq: "Setiap 30–45 minit",
        bus_td_r1_hours: "Isnin – Jumaat (07:30 – 18:30)",
        bus_td_r2_name: "Kolej Satria ⇄ Pusingan Fakulti Pagi",
        bus_td_r2_cov: "Kolej Kediaman Satria (Blok A-H) ⇄ FTMK, FPTT, Kompleks Kuliah KDK",
        bus_td_r2_freq: "Setiap 15–20 minit",
        bus_td_r2_hours: "Isnin – Jumaat (07:15 – 09:00)",
        bus_td_r3_name: "Kolej Lestari ⇄ Pusingan Fakulti",
        bus_td_r3_cov: "Kolej Kediaman Lestari (Induk) ⇄ Kompleks Dewan Kuliah & Makmal Bengkel",
        bus_td_r3_freq: "Setiap 20–30 minit",
        bus_td_r3_hours: "Isnin – Jumaat (07:20 – 17:45)",
        bus_td_r4_name: "Laluan Luar Kampus Emerald Park (EP)",
        bus_td_r4_cov: "Taman Emerald Park, Taman Tasik Utama, Bukit Beruang ⇄ Terminal Kampus Induk",
        bus_td_r4_freq: "Jadual Khas",
        bus_td_r4_hours: "Trip Pagi & Petang Semester",
        bus_td_r5_name: "Shuttle Khas Solat Jumaat",
        bus_td_r5_cov: "Kolej Kediaman Satria & Lestari ⇄ Masjid Sayyidina Ali / Masjid Kampus Induk",
        bus_td_r5_freq: "Pusingan Berterusan",
        bus_td_r5_hours: "Hari Jumaat (12:15 – 14:30)",
        bus_sec2_title: "💖 Panduan Bas Awam BAS.MY Laluan M10A Pink Bus",
        bus_sec2_desc: "Bas merah jambu kelolaan kerajaan negeri menyediakan pengangkutan awam penting yang menghubungkan Melaka Sentral terus ke UTeM dan hab komersial Ayer Keroh:",
        bus_m10a_box1_title: "🚍 Operasi Hari Bekerja (Isnin – Khamis)",
        bus_m10a_box1_desc: "Beroperasi antara <strong>Melaka Sentral ⇄ Batu Berendam ⇄ MITC / Mydin Ayer Keroh</strong> dari 06:00 hingga 20:00. Pelajar boleh turun di MITC untuk menyambung bas shuttle universiti.",
        bus_m10a_box2_title: "⭐ Akses Masuk Terus Hujung Minggu (Jum – Ahad)",
        bus_m10a_box2_desc: "Pada hari <strong>Jumaat, Sabtu, dan Ahad</strong>, Laluan M10A memanjangkan laluan melepasi MITC ke Zoo Melaka dan masuk terus ke dalam <strong>Terminal Utama Kampus Induk UTeM</strong>, memberi kemudahan kepada pelajar luar Melaka.",
        bus_m10a_box3_title: "💳 100% Pembayaran Tanpa Tunai",
        bus_m10a_box3_desc: "BAS.MY menerima kad Touch 'n Go (baki minimum RM5), kad konsesi pelajar MyRapid, kad debit MyDebit tanpa sentuh, dan DuitNow QR. Bayaran tunai tidak diterima sama sekali di dalam bas.",
        bus_sec3_title: "💡 Strategi Perjalanan Pelajar & Etika Transit",
        bus_tip1_title: "1. Buffer Waktu Puncak Lebuhraya Ayer Keroh",
        bus_tip1_desc: "Sediakan masa sekurang-kurangnya 25–35 minit untuk transit antara Kampus Induk dan Kampus Teknologi semasa waktu puncak pagi (07:45–08:30) dan petang (16:45–17:30) disebabkan kesesakan di persimpangan tol MITC / Ayer Keroh.",
        bus_tip2_title: "2. Penempatan Bas Tambahan Minggu Peperiksaan",
        bus_tip2_desc: "Semasa minggu peperiksaan akhir, Unit Pengangkutan menyediakan bas kapasiti tinggi dengan trip berganda bermula 45 minit sebelum sesi peperiksaan pagi (09:00) dan petang (14:30). Sila hadir di perhentian 15 minit lebih awal.",
        bus_tip3_title: "3. Lokasi Ambil Penumpang Grab & Perkongsian Tambang",
        bus_tip3_desc: "Lokasi tumpuan carpool dan Grab pelajar terletak di Pintu Gerbang Utama Kampus Induk, Lobi FTMK, dan ruang bas Mydin MITC Ayer Keroh (anggaran tambang RM10–RM14 setiap kereta).",
        bus_tip4_title: "4. Talian Hotline Unit Pengangkutan UTeM & Barangan Hilang",
        bus_tip4_desc: "Jika anda tertinggal kad matrik, komputer riba, atau beg di dalam bas dalaman, hubungi Talian Hotline Pengangkutan UTeM di <code>011-11494251</code> atau kunjungi kaunter Unit Pengangkutan bersebelahan Bengkel Utama Kampus Induk.",
        bus_sec4_title: "❓ Soalan Lazim (FAQ)",
        bus_faq1_q: "Adakah bas shuttle dalaman UTeM percuma untuk pelajar?",
        bus_faq1_a: "Ya, semua bas shuttle rasmi dalaman kampus UTeM yang beroperasi antara Kampus Induk (Durian Tunggal), Kampus Teknologi (Ayer Keroh), Kolej Kediaman Satria, dan Kolej Kediaman Lestari adalah percuma sepenuhnya untuk semua mahasiswa berdaftar.",
        bus_faq2_q: "Bagaimanakah bas awam BAS.MY M10A berhubung dengan UTeM?",
        bus_faq2_a: "Bas awam BAS.MY M10A berjalan dari Melaka Sentral ke MITC. Pada hari Jumaat, Sabtu, dan Ahad, laluan dilanjutkan terus ke Zoo Melaka dan terminal pintu gerbang utama Kampus Induk UTeM.",
        bus_faq3_q: "Apakah kaedah pembayaran yang diterima di dalam bas BAS.MY M10A?",
        bus_faq3_a: "BAS.MY beroperasi tanpa tunai sepenuhnya. Penumpang boleh membayar menggunakan kad Touch 'n Go, pas konsesi MyRapid, kad debit tanpa sentuh, atau pengimbas kod DuitNow QR.",
        bus_faq4_q: "Adakah bas shuttle beroperasi semasa cuti semester?",
        bus_faq4_a: "Semasa cuti semester dan cuti pertengahan semester, kekerapan bas shuttle dikurangkan kepada perkhidmatan minimum teras antara KI dan KT bagi keperluan pascasiswazah dan urusan pentadbiran.",
        bus_faq5_q: "Bagaimanakah cara untuk menyemak ketibaan bas secara masa nyata di Melaka?",
        bus_faq5_a: "Anda boleh memantau pergerakan bas BAS.MY secara langsung menggunakan aplikasi mudah alih <strong>Pulse by Prasarana</strong> atau <strong>Moovit</strong> dengan memilih rangkaian transit Melaka.",
        bus_faq6_q: "Bolehkah saya membawa basikal, skuter elektrik, atau beg besar ke dalam bas?",
        bus_faq6_a: "Skuter elektrik boleh lipat dan beg dibenarkan di dalam bas shuttle selagi tidak menghalang laluan pejalan kaki semasa waktu sesak. Basikal bersaiz penuh perlu diletakkan di rak basikal luar.",
        bus_sec5_title: "🔗 Panduan Pelajar Berkaitan",
        bus_rel1_title: "🚌 Panduan Bas Shuttle & Transit UTeM",
        bus_rel1_desc: "Jadual laluan terperinci, peta hentian bas, dan tip transit mahasiswa.",
        bus_rel2_title: "🚗 Panduan Pelekat Kenderaan & Parkir",
        bus_rel2_desc: "Syarat permohonan pelekat kenderaan motor dan kereta UTeM.",
        bus_rel3_title: "🏠 Rumah Sewa Luar Kampus Berdekatan Laluan Bas",
        bus_rel3_desc: "Panduan sewa rumah di Emerald Park, Taman Tasik Utama, dan Bukit Beruang.",

        // --- GPA Enriched Section (BM) ---
        gpa_guide_title: "Panduan Lengkap Pengiraan GPA & CGPA Serta Skala Penggredan UTeM",
        gpa_guide_intro: "Universiti Teknikal Malaysia Melaka (UTeM) mengguna pakai sistem Purata Nilai Gred (GPA) dan Purata Nilai Gred Kumulatif (CGPA) berasaskan skala 4.00 merangkumi semua program diploma, sarjana muda, dan pascasiswazah. Memahami perkaitan nilai mata dan jam kredit amat penting untuk mengekalkan Kedudukan Baik (KB), menyasarkan Anugerah Dekan, dan melayakkan diri untuk pengecualian bayaran balik pinjaman PTPTN Kelas Pertama.",
        gpa_sec1_title: "📐 Cara Mengira GPA & CGPA UTeM Langkah demi Langkah",
        gpa_sec1_desc: "GPA dikira dengan membahagikan <strong>Jumlah Nilai Mata (Quality Points)</strong> dengan <strong>Jumlah Jam Kredit Berdaftar</strong> untuk semester berkenaan:",
        gpa_formula1_box: "GPA = Jumlah (Jam Kredit &times; Nilai Gred Mata) &divide; Jumlah Jam Kredit Semester",
        gpa_formula2_box: "CGPA = Kumulatif (Semua Nilai Mata Seluruh Semester) &divide; Jumlah Keseluruhan Jam Kredit Terkumpul",
        gpa_worked_example: "<em>Contoh Pengiraan:</em> Jika anda mengambil 3 kredit Kejuruteraan Perisian (Gred A, 4.00 = 12.00 mata), 4 kredit Struktur Data (Gred B+, 3.30 = 13.20 mata), dan 3 kredit Kalkulus (Gred B, 3.00 = 9.00 mata), Jumlah Nilai Mata anda ialah 34.20 dibahagikan dengan 10 kredit = <strong>GPA 3.42</strong>.",
        gpa_sec2_title: "📊 Skala Penggredan Rasmi & Nilai Mata Kualiti UTeM",
        gpa_th_grade: "Gred",
        gpa_th_marks: "Julat Markah (%)",
        gpa_th_gpv: "Nilai Mata (GPV)",
        gpa_th_status: "Maksud Akademik",
        gpa_g_a: "Cemerlang (Distinction)",
        gpa_g_am: "Cemerlang (Excellent)",
        gpa_g_bp: "Kepujian Tinggi (Very Good)",
        gpa_g_b: "Kepujian (Good)",
        gpa_g_bm: "Lulus Memuaskan (Pass Satisfactory)",
        gpa_g_cp: "Lulus Sederhana (Pass Average)",
        gpa_g_c: "Lulus Minimum (Minimum Passing Grade)",
        gpa_g_cm: "Lulus Bersyarat (Conditional Pass)",
        gpa_g_dp: "Lulus Lemah (Weak Pass)",
        gpa_g_d: "Lulus Sangat Lemah (Very Weak)",
        gpa_g_f: "Gagal (Fail - Mesti Ulang Kursus)",
        gpa_sec3_title: "⚖️ Peraturan Status Akademik UTeM",
        gpa_kb_title: "🟢 Kedudukan Baik (KB - Good Standing)",
        gpa_kb_desc: "CGPA Kumulatif &ge; 2.00. Pelajar mengekalkan kelayakan pendaftaran kursus penuh (12 hingga 20 jam kredit).",
        gpa_ks_title: "🟡 Kedudukan Bersyarat (KS - Academic Probation)",
        gpa_ks_desc: "CGPA Kumulatif antara 1.70 dan 1.99. Beban kredit dihadkan maksimum 12 jam kredit untuk membantu pemulihan akademik. Bayaran pinjaman PTPTN digantung semasa berstatus KS.",
        gpa_kg_title: "🔴 Kedudukan Gagal & Diberhentikan (KG - Academic Dismissal)",
        gpa_kg_desc: "CGPA Kumulatif &lt; 1.70 dalam mana-mana semester, atau memperoleh KS selama dua semester biasa berturut-turut. Pelajar yang mendapat KG boleh mengemukakan rayuan rasmi kepada Senat universiti dalam tempoh 14 hari.",
        gpa_sec4_title: "🏆 Syarat Anugerah Dekan & Ijazah Kelas Pertama",
        gpa_deans_desc: "Untuk dianugerahkan sijil berprestij <strong>Anugerah Dekan</strong> di UTeM, pelajar mesti memenuhi ketiga-tiga syarat dalam semester biasa:",
        gpa_deans_list: "<li>Mencapai semester <strong>GPA 3.50 atau lebih tinggi</strong>.</li><li>Mendaftar dan menyempurnakan sekurang-kurangnya <strong>12 jam kredit bergred</strong> (tidak termasuk subjek audit atau Lulus/Gagal seperti Kokurikulum).</li><li><strong>Tiada gred gagal (F/E)</strong> atau gred tidak lengkap (TL) dalam semester tersebut.</li>",
        gpa_ptptn_waiver_title: "🎓 Penukaran Pinjaman PTPTN ke Biasiswa (Kelas Pertama)",
        gpa_ptptn_waiver_desc: "Graduan yang menamatkan pengajian Ijazah Sarjana Muda dengan <strong>Ijazah Kelas Pertama (CGPA &ge; 3.70)</strong> boleh memohon pengecualian 100% bayaran balik pinjaman PTPTN melalui portal myPTPTN dalam masa 12 bulan selepas tamat pengajian.",
        gpa_sec5_title: "🚀 Strategi Penebusan Gred & Mengulang Kursus (Ulang Gred)",
        gpa_repeat_desc: "Di bawah peraturan akademik UTeM, pelajar boleh menebus gred rendah dengan mengulang kursus pada semester berikutnya:",
        gpa_repeat_strategy: "<li><strong>Kesan Penggantian Gred:</strong> Apabila anda mengulang kursus bergred C-, D, atau F, nilai mata gred baharu akan menggantikan gred lama dalam pengiraan CGPA kumulatif.</li><li><strong>Keutamaan Subjek Kredit Tinggi:</strong> Utamakan mengulang kursus teras 3 dan 4 kredit. Menggantikan gred F (0.00) bagi subjek 4 kredit dengan gred A- (3.70) memberikan lonjakan besar +14.80 mata kualiti.</li><li><strong>Catatan Transkrip:</strong> Kedua-dua percubaan kekal tercatat dalam transkrip rasmi, tetapi hanya gred tertinggi/terkini dikira dalam CGPA graduasi.</li>",
        gpa_sec6_title: "❓ Soalan Lazim (FAQ)",
        gpa_faq1_q: "Bagaimanakah mengulang subjek yang gagal mempengaruhi CGPA UTeM saya?",
        gpa_faq1_a: "Apabila anda mengulang kursus, gred baharu menggantikan gred gagal (Gred F) terdahulu dalam pengiraan CGPA kumulatif, sekali gus meningkatkan CGPA anda dengan ketara. Walau bagaimanapun, rekod percubaan asal kekal dalam transkrip rasmi.",
        gpa_faq2_q: "Adakah pinjaman PTPTN akan digantung jika GPA jatuh bawah 2.00?",
        gpa_faq2_a: "Ya. PTPTN menetapkan semua penerima pinjaman mengekalkan Kedudukan Baik (GPA &ge; 2.00). Jika GPA anda jatuh bawah 2.00, pengeluaran pinjaman akan digantung pada semester berikutnya sehingga prestasi anda pulih.",
        gpa_faq3_q: "Berapakah CGPA yang diperlukan untuk Ijazah Kelas Pertama di UTeM?",
        gpa_faq3_a: "Ijazah Kelas Pertama secara amnya memerlukan CGPA graduasi <strong>3.70 dan ke atas</strong> (atau 3.50+ bergantung kepada panduan akreditasi fakulti kejuruteraan tertentu). Graduan kelas pertama layak mendapat pengecualian bayaran balik 100% pinjaman PTPTN.",
        gpa_faq4_q: "Adakah kursus Lulus/Gagal (HL/TL) dikira dalam GPA semester saya?",
        gpa_faq4_a: "Tidak. Kursus tanpa gred seperti Kokurikulum (HL/TL) atau Pindahan Kredit memberikan jam kredit ke arah keperluan graduasi tetapi dikecualikan daripada pengiraan nilai mata GPA dan CGPA.",
        gpa_faq5_q: "Bagaimanakah cara untuk pulih daripada status Kedudukan Bersyarat (KS)?",
        gpa_faq5_a: "Untuk melepasi KS, anda perlu memperoleh GPA semester yang cukup tinggi untuk menaikkan semula CGPA kumulatif kepada &ge; 2.00. Fokuskan usaha pada mengulang subjek gagal dan mengurus beban maksimum 12 kredit dengan baik.",
        gpa_faq6_q: "Bolehkah saya membuat rayuan jika menerima status Kedudukan Gagal (KG)?",
        gpa_faq6_a: "Ya. Pelajar boleh menghantar Rayuan Meneruskan Pengajian rasmi kepada Bahagian Pengurusan Akademik (BPA) dalam tempoh 14 hari bekerja selepas keputusan rasmi diumumkan.",
        gpa_sec7_title: "🔗 Panduan Pelajar Berkaitan",
        gpa_rel1_title: "🎓 Panduan Lengkap GPA UTeM",
        gpa_rel1_desc: "Strategi terperinci untuk meraih Anugerah Dekan dan pemulihan status akademik.",
        gpa_rel2_title: "📋 Pendaftaran Kursus & Had Jam Kredit",
        gpa_rel2_desc: "Ketahui had jam kredit berdaftar mengikut status kedudukan akademik.",
        gpa_rel3_title: "💰 Pengecualian Pinjaman PTPTN Kelas Pertama",
        gpa_rel3_desc: "Cara menukar pinjaman pendidikan PTPTN anda kepada biasiswa penuh.",

        // --- Exams Enriched Section (BM) ---
        exam_guide_title: "Panduan Lengkap Repositori Kertas Peperiksaan Lepas UTeM & Kejayaan Akademik",
        exam_guide_intro: "Repositori kertas soalan peperiksaan akhir rasmi Universiti Teknikal Malaysia Melaka (UTeM) dikumpul dan diarkibkan oleh <strong>Perpustakaan Laman Hikmah (PLH)</strong>. Mahasiswa dari semua fakulti kejuruteraan, sains komputer, dan pengurusan teknologi boleh mengakses soalan semester lepas untuk memahami format soalan, menilai peruntukan markah, dan memantapkan ulang kaji menjelang ujian pertengahan dan peperiksaan akhir.",
        exam_sec1_title: "🏛️ Direktori Kod Kursus Fakulti UTeM",
        exam_th_faculty: "Fakulti",
        exam_th_prefix: "Awalan Kod",
        exam_th_fields: "Disiplin Utama Kejuruteraan & Teknologi",
        exam_f_ftmk: "Kejuruteraan Perisian, Keselamatan Siber, Rangkaian, Sains Data, Kecerdasan Buatan, Media Interaktif",
        exam_f_ftkm: "Kejuruteraan Mekanikal, Sistem Automotif, Termodinamik, Dinamik Bendalir, Mekanik Struktur",
        exam_f_ftkee: "Sistem Kuasa Elektrik, Kejuruteraan Kawalan, Telekomunikasi, Mekatronik & Robotik",
        exam_f_fkp: "Sistem Pembuatan, Automasi Industri, Reka Bentuk Produk, Kejuruteraan Kualiti & Pengeluaran Lean",
        exam_f_fptt: "Pengurusan Teknologi, Teknousahawanan, Rantaian Bekalan & Logistik, Pengurusan Projek",
        exam_f_ftkip: "Elektronik Industri, Teknologi Kejuruteraan Komputer, Instrumentasi & Kawalan Proses",
        exam_sec2_title: "🔐 Mengakses Kertas Peperiksaan Luar Kampus Melalui UTeM LibProxy",
        exam_sec2_desc: "Apabila mengakses repositori peperiksaan dari Wi-Fi rumah atau hotspot mudah alih, firewall universiti mewajibkan pengesahan Log Masuk Tunggal (SSO):",
        exam_libproxy_steps: "<li>Layari terus <strong>portal UTeM LibProxy</strong> (<a href=\"https://ezproxy.utem.edu.my\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--accent-gold); font-weight: 700;\">ezproxy.utem.edu.my</a>).</li><li>Log masuk menggunakan Nombor Matrik Pelajar (cth: <code>B032110000</code>) dan kata laluan SMPWeb.</li><li>Selepas pengesahan berjaya, buat carian mengikut kod subjek (cth: <code>BITP 1113</code>) untuk memuat turun fail PDF rasmi tanpa ralat 403 Forbidden.</li>",
        exam_sec3_title: "💡 Strategi Ulang Kaji Kertas Peperiksaan Berimpak Tinggi",
        exam_strat1_title: "1. Simulasi Keadaan Peperiksaan 3 Jam Tanpa Rujukan",
        exam_strat1_desc: "Elakkan membaca skema secara pasif. Selesaikan kertas soalan 3 jam penuh dengan pemasa masa nyata tanpa merujuk nota untuk melatih kepantasan pengiraan dan pengurusan masa bagi soalan berangkai.",
        exam_strat2_title: "2. Kuasai Peruntukan Markah Taksonomi Bloom (C1 hingga C6)",
        exam_strat2_desc: "Dalam program teknikal, soalan analisis, penilaian, dan reka bentuk aras tinggi (Bloom C4–C6) menyumbang 50%–70% daripada keseluruhan markah peperiksaan. Berikan keutamaan kepada soalan terbitan formula dan reka bentuk sistem berbanding hafalan teori.",
        exam_strat3_title: "3. Kumpulan Belajar Rakan Sebaya & Penguasaan Lampiran Formula",
        exam_strat3_desc: "Bina kumpulan belajar 3–4 rakan untuk membandingkan langkah pengiraan matematik dan algoritma. Berlatih menyelesaikan soalan menggunakan lampiran formula peperiksaan standard yang diluluskan UTeM.",
        exam_sec4_title: "📜 Peraturan Rasmi Dewan Peperiksaan UTeM",
        exam_rule1_title: "1. Slip Menduduki Peperiksaan (SMPWeb)",
        exam_rule1_desc: "Setiap pelajar wajib mencetak <em>Slip Menduduki Peperiksaan</em> rasmi dari portal SMPWeb sebelum minggu peperiksaan. Anda mesti membawa slip bercetak fizikal bersama Kad Matrik ke setiap sesi peperiksaan.",
        exam_rule2_title: "2. Kod Etika Pakaian & Barangan Dilarang",
        exam_rule2_desc: "Pakaian formal berkolar dan kasut bertutup adalah wajib. Jam tangan pintar, memori kalkulator boleh atur cara tanpa reset, dan telefon pintar dilarang sama sekali di atas meja peperiksaan.",
        exam_rule3_title: "3. Ketidakhadiran Atas Faktor Kesihatan & Pengesahan MC PKU",
        exam_rule3_desc: "Jika anda tidak dapat menduduki peperiksaan kerana sakit, anda mesti mendapatkan Sijil Cuti Sakit (MC) daripada Pusat Kesihatan UTeM (PKU) atau mengesahkan MC klinik swasta dalam tempoh 48 jam untuk melayakkan peperiksaan gantian khas.",
        exam_rule4_title: "4. Permohonan Semakan Semula Keputusan Peperiksaan",
        exam_rule4_desc: "Jika anda mengesyaki terdapat kesilapan pemarkahan, anda boleh menghantar <em>Permohonan Semakan Semula Keputusan Peperiksaan</em> kepada Bahagian Pengurusan Akademik (BPA) dalam masa 14 hari bekerja selepas keputusan rasmi diumumkan.",
        exam_sec5_title: "❓ Soalan Lazim (FAQ)",
        exam_faq1_q: "Mengapakah sesetengah kertas exam UTeM memerlukan log masuk EZproxy di luar kampus?",
        exam_faq1_a: "Perpustakaan Laman Hikmah (PLH) mengehadkan kertas soalan peperiksaan lepas kepada pelajar dan staf UTeM yang berdaftar. Semasa di luar kampus, anda perlu melalui portal LibProxy menggunakan ID Pelajar dan kata laluan SMPWeb.",
        exam_faq2_q: "Adakah skema jawapan peperiksaan disediakan dalam repositori perpustakaan?",
        exam_faq2_a: "Tidak, skema jawapan dan skema pemarkahan rasmi tidak diterbitkan secara terbuka dalam repositori perpustakaan bagi menggalakkan pemikiran kritis berdikari dan perbincangan tutorial bersama pensyarah.",
        exam_faq3_q: "Berapa banyakkah kertas peperiksaan semester lepas yang patut saya latih?",
        exam_faq3_a: "Mengulang kaji 3 hingga 5 semester terkini amat disyorkan untuk mengenal pasti bentuk soalan berulang, pecahan bab silibus penting, dan formula pengiraan teras.",
        exam_faq4_q: "Di manakah saya boleh mencari kertas peperiksaan jika kod kursus saya baru dikemas kini?",
        exam_faq4_a: "Apabila fakulti menyusun semula kod kurikulum (cth: daripada <code>BITM</code> kepada <code>BITS</code>), buat carian menggunakan nama kursus terdahulu yang setara atau kod subjek lama yang merangkumi silibus sama.",
        exam_faq5_q: "Apakah tindakan jika dua kertas peperiksaan akhir saya bertembung dalam jadual?",
        exam_faq5_a: "Pertembungan jadual mesti dilaporkan kepada Penasihat Akademik Fakulti dan Bahagian Pengurusan Akademik (BPA) dalam masa 5 hari bekerja selepas draf jadual dikeluarkan untuk penjadualan sesi peperiksaan berasingan.",
        exam_faq6_q: "Adakah kalkulator saintifik diperiksa sebelum masuk ke dewan peperiksaan?",
        exam_faq6_a: "Ya. Pengawas memeriksa model kalkulator (cth: siri Casio fx-570). Penutup kalkulator yang mempunyai sebarang tulisan nota atau formula akan dirampas, dan memori boleh atur cara mesti dikosongkan sebelum peperiksaan bermula.",
        exam_sec6_title: "🔗 Panduan Pelajar Berkaitan",
        exam_rel1_title: "📝 Panduan Latihan Kertas Peperiksaan Lepas",
        exam_rel1_desc: "Teknik ulang kaji berimpak tinggi, active recall, dan perancang jadual minggu exam.",
        exam_rel2_title: "📚 Perpustakaan Laman Hikmah (PLH)",
        exam_rel2_desc: "Bilik perbincangan, zon belajar 24 jam, kuota pinjaman buku, dan pangkalan data.",
        exam_rel3_title: "🎓 Kalkulator Sasaran GPA & CGPA",
        exam_rel3_desc: "Kira sasaran gred peperiksaan yang diperlukan untuk meraih Anugerah Dekan.",

        // --- Library Tab (library.html) (BM) ---
        titleLibTab: "Perpustakaan Laman Hikmah (PLH)",
        labelLibHours: "Waktu Operasi Perpustakaan",
        labelLibMainHours: "Waktu Semester Akademik:",
        labelHoursLibMonThu: "Isnin - Khamis: 8:00 PG - 10:00 MLM",
        labelHoursLibFri: "Jumaat: 8:00 PG - 12:15 TGH, 2:45 PTG - 10:00 MLM",
        labelLibWeekendHours: "Minggu Ulang Kaji & Peperiksaan (Hujung Minggu):",
        labelHoursLibWeekend: "Sabtu - Ahad: 9:00 PG - 5:00 PTG (Kawasan Terpilih)",
        labelLibBreakHours: "Waktu Cuti Semester:",
        labelHoursLibBreak: "Isnin - Jumaat: 8:00 PG - 5:00 PTG (Tutup pada Hujung Minggu)",
        labelLib24Hours: "Ruang Belajar 24 Jam: Dibuka di Ruang Pintu Masuk Utama (Minggu Peperiksaan)",
        labelLibServices: "Zon Permainan PLH & Santai",
        labelLibPlaystation: "Sewa Konsol & Alat Kawalan PS4:",
        descLibPlaystation: "RM4 sejam (maksimum 2 jam, 2 alat kawalan). 3 set di Kampus Induk & 2 set di Kampus Teknologi. Anda boleh bawa CD sendiri tetapi perlu maklumkan kepada staf.",
        labelLibBoardgames: "Permainan Dalaman & Papan Percuma:",
        descLibBoardgames: "Sewa percuma untuk karom, catur, dam, dan pelbagai permainan papan di kaunter.",
        labelLibBookingTitle: "Tempahan & Pertanyaan Lanjut:",
        descLibBookingText: "Lakukan di Kaunter selepas melepasi pengimbas keselamatan. Hubungi:",
        btnLibMail: "Emel Kaunter Sirkulasi ➔",
        labelLibBorrowing: "Peminjaman & E-Sumber",
        labelLibRenewals: "Pembaharuan Buku:",
        descLibRenewals: "Pelajar boleh memperbaharui buku pinjaman secara dalam talian maksimum sebanyak 2 kali sebelum tarikh pemulangan.",
        labelLibEzproxy: "Akses Luar Kampus (EZproxy):",
        descLibEzproxy: "Akses jurnal premium (cth: IEEE Xplore, ScienceDirect) dari rumah menggunakan portal EZproxy UTeM dengan kelayakan pelajar anda.",
        labelLibContact: "Hubungan & Pertanyaan",
        labelLibPhone: "Telefon:",
        labelLibEmail: "Emel:",
        labelLibRef: "Layari portal rasmi perpustakaan UTeM untuk carian katalog:",

        // --- Library Guide SEO Section (BM) ---
        lib_guide_title: "Panduan Lengkap Perkhidmatan Pelajar Perpustakaan Laman Hikmah (PLH) UTeM",
        lib_guide_intro: "<strong>Perpustakaan Laman Hikmah (PLH)</strong> bertindak sebagai hab pengetahuan penyelidikan dan pembelajaran utama Universiti Teknikal Malaysia Melaka. Beroperasi di bangunan bertingkat di <strong>Kampus Induk (Durian Tunggal)</strong> serta cawangan khusus di <strong>Kampus Teknologi (Ayer Keroh)</strong>, PLH menyediakan ruang kolaboratif, arkib digital, dan kemudahan riadah kepada mahasiswa.",
        lib_sec1_title: "📚 Kelayakan Pinjaman Buku & Polisi Denda Lewat",
        lib_th_patron: "Kategori Pengguna",
        lib_th_quota: "Had Maksimum Pinjaman",
        lib_th_duration: "Tempoh Pinjaman",
        lib_th_renewals: "Pembaharuan Dalam Talian",
        lib_th_fines: "Denda Lewat",
        lib_cat_ug: "Pelajar Diploma & Ijazah Sarjana Muda",
        lib_quota_ug: "10 Buah Buku",
        lib_dur_ug: "14 Hari",
        lib_ren_ug: "Sehingga 2 Kali (OPAC)",
        lib_cat_pg: "Pascasiswazah (Sarjana / PhD)",
        lib_quota_pg: "20 Buah Buku",
        lib_dur_pg: "30 Hari",
        lib_ren_pg: "Sehingga 2 Kali (OPAC)",
        lib_cat_red: "Projek Tahun Akhir (Red Spot)",
        lib_quota_red: "2 Buah Buku",
        lib_dur_red: "Semalaman / 3 Hari",
        lib_ren_red: "Di kaunter sahaja",
        lib_sec2_title: "🏢 Kemudahan & Zon Belajar Perpustakaan",
        lib_facilities_list: "<li><strong>Zon Belajar 24 Jam:</strong> Dewan belajar berhawa dingin di Aras Bawah dengan akses kad matrik selamat semasa minggu ulang kaji dan peperiksaan.</li><li><strong>Bilik Perbincangan:</strong> Bilik projek berkumpulan kedap bunyi yang dilengkapi papan putih dan monitor persembahan HDMI.</li><li><strong>Zon Permainan PS4 & Board Game:</strong> Ruang santai pelajar di Aras 1 yang menyediakan konsol permainan video dan permainan papan strategi untuk rehat minda.</li><li><strong>Kubikel Individu:</strong> Pod belajar individu bebas gangguan yang terletak di jajaran rak buku Aras 2 dan Aras 3.</li>",
        lib_sec3_title: "🔍 E-Sumber Akademik & Pangkalan Data Berlanggan",
        lib_sec3_desc: "Pelajar UTeM mempunyai akses institusi tanpa had ke pangkalan data kejuruteraan dan teknologi terkemuka termasuk <strong>IEEE Xplore, ScienceDirect, Scopus, SpringerLink, Web of Science, dan Emerald Insight</strong>. Akses dalam kampus melalui Wi-Fi atau luar kampus melalui gerbang <a href=\"https://ezproxy.utem.edu.my\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--accent-gold); font-weight: 700;\">UTeM LibProxy</a>.",
        lib_sec4_title: "❓ Soalan Lazim (FAQ)",
        lib_faq1_q: "Bagaimanakah cara menempah bilik perbincangan atau konsol PS4 di PLH?",
        lib_faq1_a: "Bilik perbincangan dan sesi konsol PS4 boleh ditempah secara fizikal di Kaunter Perkhidmatan Pelanggan PLH (Aras 1) atau secara dalam talian melalui Portal Perpustakaan UTeM menggunakan ID Pelajar aktif anda.",
        lib_faq2_q: "Bolehkah saya mengakses ruang belajar 24 jam selepas waktu operasi biasa perpustakaan?",
        lib_faq2_a: "Ya, Zon Belajar 24 Jam di Aras Bawah PLH Kampus Induk boleh diakses menggunakan imbasan kad matrik pelajar walaupun kaunter utama telah ditutup, terutamanya pada minggu peperiksaan.",
        lib_faq3_q: "Bagaimanakah cara memperbaharui buku pinjaman secara dalam talian?",
        lib_faq3_a: "Log masuk ke akaun pelajar anda di portal katalog OPAC Perpustakaan UTeM (library.utem.edu.my) untuk memperbaharui buku yang tidak ditempah orang lain sehingga 2 kali berturut-turut sebelum tarikh akhir.",
        lib_sec5_title: "🔗 Panduan Pelajar Berkaitan",
        lib_rel1_title: "📝 Latihan Kertas Peperiksaan Lepas",
        lib_rel1_desc: "Akses soalan peperiksaan semester lepas daripada arkib perpustakaan.",
        lib_rel2_title: "☕ 10 Tempat Belajar Terbaik Kampus",
        lib_rel2_desc: "Bandingkan ruang santai dan tempat belajar tenang di Kampus Induk & Teknologi.",
        lib_rel3_title: "💻 Persediaan IT & Lesen Perisian",
        lib_rel3_desc: "Muat turun MATLAB, SolidWorks, dan persediaan Wi-Fi eduroam.",

        // --- Health Center Tab (health.html) (BM) ---
        titleHealthTab: "Pusat Kesihatan UTeM (PKU)",
        labelHealthHours: "Waktu Operasi",
        labelHealthMainInduk: "Kampus Induk (Durian Tunggal):",
        labelHoursIndukAcad: "Minggu Akademik: Isnin - Jumaat, 8:00 PG - 7:00 MLM",
        labelHoursIndukBreak: "Cuti Semester: Isnin - Jumaat, 8:00 PG - 5:00 PTG",
        labelHealthTechAyer: "Kampus Teknologi (Ayer Keroh):",
        labelHoursTech: "Isnin - Jumaat: 8:00 PG - 5:00 PTG",
        labelHealthBreaks: "Waktu Rehat Harian:",
        labelHoursBreakMonThu: "Isnin - Khamis: 1:00 PTG - 2:00 PTG",
        labelHoursBreakFri: "Jumaat: 12:15 TGH - 2:45 PTG",
        labelHealthClosed: "Hujung Minggu & Cuti Umum: Tutup",
        labelHealthServices: "Temu Janji Dalam Talian & Permohonan",
        labelDentalApp: "Temu Janji Klinik Pergigian:",
        btnDentalLink: "e-Temu Janji Pergigian ➔",
        labelEmergKit: "Pinjaman Kit Pertolongan Cemas:",
        btnEmergLink: "Borang Permohonan First Aid ➔",
        labelHealthPolicies: "Cuti Sakit (MC) & Polisi",
        labelHealthExtMc: "Sijil Sakit (MC) Klinik Swasta Luar:",
        descHealthExtMc: "Sijil cuti sakit (MC) dari klinik swasta luar mesti disahkan/diendors oleh PKU UTeM sebelum diterima oleh pihak fakulti.",
        labelHealthExamAbsence: "Ketidakhadiran Peperiksaan Atas Faktor Kesihatan:",
        descHealthExamAbsence: "Jika anda tidak dapat menghadiri peperiksaan kerana kecemasan kesihatan, dapatkan MC rasmi PKU pada hari yang sama untuk disertakan dalam rayuan peperiksaan khas fakulti.",
        labelHealthCoverage: "Perlindungan Insurans Takaful Pelajar:",
        descHealthCoverage: "Semua pelajar UTeM yang berdaftar dilindungi di bawah skim Takaful berkelompok universiti bagi kecederaan kemalangan dan kemasukan ke hospital.",
        labelHealthContact: "Hubungan & Pertanyaan",
        labelHealthPhone: "Telefon:",
        labelHealthEmail: "Emel:",
        labelHealthRef: "Layari portal rasmi PKU untuk maklumat kesihatan terkini:",

        // --- Health Center Guide SEO Section (BM) ---
        health_guide_title: "Panduan Lengkap Perkhidmatan Kesihatan Pelajar Pusat Kesihatan Universiti (PKU) UTeM",
        health_guide_intro: "<strong>Pusat Kesihatan Universiti (PKU UTeM)</strong> menyediakan perkhidmatan rawatan pesakit luar, kecemasan perubatan, farmasi dispensari, rawatan pergigian, pinjaman peti pertolongan cemas, dan sesi kaunseling kesihatan mental untuk semua pelajar diploma, prasiswazah, dan pascasiswazah di <strong>Kampus Induk (Durian Tunggal)</strong> dan <strong>Kampus Teknologi (Ayer Keroh)</strong>.",
        health_sec1_title: "🏥 Perkhidmatan Klinikal & Waktu Rawatan",
        health_services_list: "<li><strong>Rawatan Perundingan Pesakit Luar:</strong> Diagnosis am, rawatan demam/selsema, pemantauan penyakit kronik, dan rawatan pembedahan kecil (balutan & cucian luka). Beroperasi Isnin–Jumaat, 8:00 PG – 5:00 PTG.</li><li><strong>Farmasi & Dispensari:</strong> Pembekalan ubat-ubatan generik yang dipreskripsikan di bawah yuran kesihatan pelajar.</li><li><strong>Klinik Pergigian:</strong> Pemeriksaan rutin gigi, penskaleran (scaling), tampalan, dan cabutan gigi melalui temu janji portal pergigian PKU.</li><li><strong>Pinjaman Kit First-Aid:</strong> Pembekalan peti pertolongan cemas bagi program persatuan pelajar dan kejohanan sukan luar kampus.</li>",
        health_sec2_title: "🚨 Respons Kecemasan 24/7 & Talian Ambulans Kampus",
        health_sec2_desc: "Bagi kes kecemasan akut, kemalangan kenderaan, atau kecederaan parah di luar waktu operasi klinik biasa:",
        health_sec2_steps: "<li>Hubungi <strong>Bilik Kawalan Keselamatan UTeM (Pejabat Keselamatan)</strong> Talian 24/7: <code style=\"color: var(--accent-gold); font-size: 13px;\">06-270 1200</code> atau <code style=\"color: var(--accent-gold); font-size: 13px;\">06-270 1300</code>.</li><li>Nyatakan lokasi tepat mangsa (cth: Kolej Kediaman Satria Blok B, Lobi FTMK Aras 2, atau Kafe Lestari).</li><li>Bilik kawalan akan menghantar ambulans kampus bertugas dengan segera atau menyelaras rujukan wad kecemasan ke <strong>Hospital Melaka / Hospital Alor Gajah</strong>.</li>",
        health_sec3_title: "📄 Peraturan Pengesahan Sijil Cuti Sakit (MC)",
        health_sec3_desc: "Jika anda menerima Sijil Cuti Sakit (MC) daripada klinik swasta luar atau hospital kerajaan, peraturan akademik universiti mewajibkan anda menghantar slip fizikal tersebut ke PKU untuk pengesahan Pegawai Perubatan UTeM dalam tempoh <strong>48 jam</strong>. MC luar yang tidak disahkan tidak akan diterima oleh fakulti bagi kes ketidakhadiran ujian pertengahan, kuiz, atau peperiksaan akhir.",
        health_sec4_title: "❓ Soalan Lazim (FAQ)",
        health_faq1_q: "Bagaimanakah cara mengesahkan MC klinik swasta untuk peperiksaan yang terlepas?",
        health_faq1_a: "Sijil cuti sakit (MC) dari klinik swasta luar mesti dibawa secara fizikal ke PKU dalam tempoh 48 jam dari tarikh dikeluarkan untuk pengesahan rasmi Pegawai Perubatan UTeM sebelum dihantar ke pejabat dekan fakulti anda.",
        health_faq2_q: "Adakah rawatan perubatan dan ubat-ubatan percuma untuk pelajar UTeM?",
        health_faq2_a: "Ya, rawatan pesakit luar asas, bekalan ubat dispensari standard, dan rawatan kecil di PKU adalah percuma kerana dilindungi di bawah yuran perkhidmatan kesihatan pelajar setiap semester.",
        health_faq3_q: "Bagaimanakah cara meminta bantuan ambulans di luar waktu klinik?",
        health_faq3_a: "Hubungi Pusat Kawalan Keselamatan UTeM 24 Jam dengan segera di talian 06-270 1200 atau 06-270 1300 untuk menghantar ambulans bertugas kampus atau berhubung dengan 999.",
        health_sec5_title: "🔗 Panduan Pelajar Berkaitan",
        health_rel1_title: "🎒 Panduan Harung Mahasiswa Baharu",
        health_rel1_desc: "Talian penting kecemasan dan panduan navigasi klinik kampus.",
        health_rel2_title: "🏢 Panduan Kolej Kediaman & Asrama",
        health_rel2_desc: "Nombor warden asrama dan lokasi bantuan first-aid Satria & Lestari.",
        health_rel3_title: "🚌 Jadual Bas Shuttle Kampus",
        health_rel3_desc: "Laluan bas shuttle antara klinik Durian Tunggal dan Ayer Keroh.",

        // --- Important Links Card Elements (wifi.html) (BM) ---
        descImportantLinks: "Akses pantas ke kelayakan Wi-Fi kampus, pendaftaran LibProxy, persediaan VPN, portal rasmi, dan saluran pelajar.",
        libproxyTitle: "UTeM LibProxy (Luar Kampus)",
        libproxySub: "Akses Log Masuk Tunggal",
        libproxyDesc: "Akses IEEE Xplore, ScienceDirect, dan kertas soalan lepas dari rumah tanpa sekatan rangkaian.",
        libproxyBtn: "Buka Gerbang LibProxy ➔",
        vpnTitle: "Portal VPN SoftEther",
        vpnSub: "Terowong Rangkaian Kampus Jauh",
        vpnDesc: "Sambungan VPN rasmi kampus untuk mengakses sistem dalaman pelajar dan lesen perisian MATLAB.",
        vpnBtn: "Muat Turun Profil VPN ➔",
        staffDirTitle: "Direktori Staf UTeM",
        staffDirSub: "Carian Pensyarah & Kakitangan",
        staffDirDesc: "Portal carian emel pensyarah UTeM, nombor bilik, sambungan telefon, dan staf jabatan.",
        staffDirBtn: "Buka Direktori Staf ➔",
        mppTitle: "MPP UTeM Rasmi",
        mppSub: "Majlis Perwakilan Pelajar",
        mppDesc: "Instagram rasmi Majlis Perwakilan Pelajar UTeM untuk pengumuman rasmi dan kebajikan mahasiswa.",
        mppBtn: "Layari Instagram MPP ➔",
        konvoTitle: "Konvokesyen & Alumni UTeM",
        konvoSub: "Jadual Graduasi & Jubah",
        konvoDesc: "Portal rasmi untuk jadual sesi konvokesyen, pengambilan jubah akademik, dan alumni UTeM.",
        konvoBtn: "Buka Portal Konvo ➔",
        vehicleTitle: "Borang Kenderaan Pelajar",
        vehicleSub: "Memandu & Meletak Kenderaan",
        vehicleDesc: "Muat turun borang permohonan kenderaan pelajar rasmi UTeM untuk akses memandu dan meletak kenderaan di kampus.",
        vehicleBtn: "Muat Turun Borang ➔",

        // --- Support Tab (support.html) (BM) ---
        titleSupport: "Sokong UTeM Confessions Pro Max",
        descSupport: "UTeM Confessions Pro Max ialah platform percuma binaan pelajar yang diselenggara secara sukarela untuk membantu warga kampus UTeM dengan pelbagai alatan, jadual, soalan peperiksaan lepas, dan panduan kehidupan kampus.",
        titlePartnerDeals: "Diskaun & Tawaran Pelajar",
        descPartnerDeals: "Kod promosi dan baucar diskaun eksklusif untuk pelajar UTeM daripada rakan niaga makanan, teknologi, dan keperluan harian.",
        titleCoffee: "Belanja Pembangun Secawan Kopi ☕",
        descCoffee: "Bantu memastikan pelayan kami beroperasi lancar dan menyokong penambahbaikan berterusan bagi penjejak bas, arkib soalan peperiksaan, dan aplikasi interaktif.",
        noticeKofiCurrency: "Sumbangan anda membantu menampung kos pengehosan pelayan, pembaharuan domain, dan lebar jalur API.",

        // --- Updates Tab (updates.html) (BM) ---
        updatesTitle: "Kemas Kini Kampus & Platform",
        updatesSubtitle: "Ketahui notis terkini kampus UTeM, pengumuman jadual akademik, pindaan jadual bas shuttle, dan ciri-ciri baharu di UCPM.",

        // --- Marketplace Tab (marketplace.html) (BM) ---
        descMarketItems: "Jual beli buku teks terpakai, kot makmal, set lukisan teknikal, peranti elektronik, dan kelengkapan bilik asrama secara selamat dalam kalangan warga UTeM.",
        descMarketServices: "Temui perkhidmatan bebas pelajar di seluruh kampus termasuk percetakan dokumen, khidmat pindah bilik, pembaikan gajet, fotografi, dan tuisyen.",
        sellerNoticeMarketplace: "⚠️ Peringatan: UCPM tidak mengendalikan transaksi kewangan secara langsung. Sentiasa berjumpa di kawasan terbuka kampus (cth: lobi PLH atau kafeteria Satria) untuk urusan serahan barangan.",

        // --- Scholarships Tab (scholarships.html) (BM) ---
        titleScholarships: "Biasiswa & Bantuan Kewangan",
        descScholarships: "Terokai bantuan kewangan prasiswazah, pinjaman pendidikan kerajaan, bantuan zakat kecemasan, dan biasiswa yayasan negeri untuk pelajar UTeM.",

        // --- Past Exams Header (exams.html) (BM) ---
        titlePastExamsTab: "Repositori Kertas Peperiksaan Lepas UTeM",
        descPastExamsTab: "Cari dan muat turun kertas soalan peperiksaan akhir semester lepas merangkumi semua fakulti kejuruteraan, komputer, dan teknologi.",
        labelPastExamsLib: "Akses pangkalan data peperiksaan digital Perpustakaan Laman Hikmah (PLH) secara terus:",

        // --- Mobile Drawer Shared Labels (BM) ---
        drawerLibrary: "Perpustakaan (PLH)",
        drawerHealth: "Pusat Kesihatan (PKU)",
        drawerSupport: "Sokong Kami",

        // --- Bus Tab UI Elements (bus.html) (BM) ---
        busTabInternal: "🚌 Bas Shuttle Kampus",
        busTabPublic: "💖 Bas Pink M10A",
        title_campus_bus: "Jadual Bas Shuttle Kampus UTeM",
        semToggleSpecial: "📌 Semester Khas",
        semToggleRegular: "🗓️ Semester Biasa",
        labelRadarTitle: "Radar Laluan Bas Shuttle UTeM",
        titlePublicBus: "Bas Pink M10A",
        m10aLiveBadge: "Perkhidmatan Hujung Minggu ke UTeM",
        labelRouteTimeline: "Hentian Laluan M10A",
        labelWeekend1: "Jumaat-Ahad Sahaja",
        labelWeekend2: "Jumaat-Ahad Sahaja",
        labelM10ADetails: "Nota & Panduan Operasi",
        m10aDetail1: "Bas Pink beroperasi antara Melaka Sentral dan Zoo Melaka setiap hari (7 hari seminggu).",
        m10aDetail2: "Jumaat hingga Ahad (Lanjutan Hujung Minggu), perjalanan terpilih masuk terus ke dalam Kampus Induk UTeM.",
        m10aDetail3: "Bayaran adalah tanpa tunai (cashless) sepenuhnya melalui kad Touch 'n Go, kad debit, atau kad kredit.",
        titleRouteLookup: "Carian Laluan Bas",
        descRouteLookup: "Semak stesen pertukaran dan laluan transit dari UTeM ke destinasi popular di Melaka.",
        labelSelectDest: "Pilih Destinasi:",
        optSelectDest: "-- Pilih Destinasi --",
        optDestTampin: "Stesen KTM Tampin (KTM Komuter / ETS)",
        optDestJasin: "Jasin Sentral / Bandar Jasin",
        optDestKlebang: "Pantai Klebang / Dataran 1Malaysia",
        optDestPaya: "Paya Rumput / Kawasan Perindustrian Cheng",
        busSourcesLabel: "Maklumat disahkan melalui saluran rasmi Hal Ehwal Pelajar UTeM & Panorama Melaka.",

        // --- Activities Tab (activities.html) (BM) ---
        activitiesTitle: "Aktiviti & Acara Kampus UTeM",
        descActivities: "Ketahui aktiviti kelab, kejohanan sukan, bengkel, simposium akademik, dan program sukarelawan di seluruh UTeM.",
        noActivitiesFoundMsg: "Tiada aktiviti yang sepadan dengan tapisan anda.",

        // --- Calendar Tab (calendar.html) (BM) ---
        calendarLinkLabel: "Muat turun PDF Kalendar Akademik Rasmi BPA",

        // --- GPA Tab (gpa.html) (BM) ---
        gpaEstimationNote: "Nota: Pengiraan CGPA rasmi tertakluk kepada polisi penggredan universiti di SMPWeb mengikut nilai mata kualiti kredit.",

        // --- Student Voices Tab (archive.html) (BM) ---
        title_archive: "Suara Pelajar",
        desc_archive: "Layan cerita santai, luahan pelajar, dan gosip panas kampus. Cari guna kata kunci atau tapis ikut kategori di bawah",
        note_archive: "<strong>Nota Komuniti:</strong> Hantaran dan luahan di Suara Pelajar dikongsi semata-mata untuk hiburan, perkongsian santai, dan pengalaman sesama pelajar. Ia tidak mencerminkan pendirian rasmi universiti dan tiada sebarang niat untuk menyakiti, menyasarkan, atau memfitnah mana-mana pihak. Hayati dengan minda terbuka dan marilah kekalkan budaya kampus yang positif dan saling menghormati!",
        placeholder_archive_search: "🔍 Cari confession ikut kata kunci, tag, topik...",

        // --- Marketplace Tab (marketplace.html) (BM) ---
        staticContactCard: '<p id="sellerNoticeMarketplace" style="margin: 0; color: var(--text-primary); font-weight: 500; line-height: 1.6;">Ada barang nak letgo atau buat servis student? 🚀 Iklankan di sini! E-melkan butiran korang terus ke <a href="mailto:utemconfessionpromax@duck.com" style="color: #facc15; text-decoration: underline; font-weight: 700;">utemconfessionpromax@duck.com</a></p>'
    }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Generic direct ID mapping for all keys in translation dictionary
    for (const [key, val] of Object.entries(t)) {
        const el = document.getElementById(key);
        if (el) {
            if (typeof val === 'string' && (val.includes('<') || val.includes('&'))) {
                el.innerHTML = val;
            } else if (typeof val === 'string') {
                el.textContent = val;
            }
        }
    }

    // Language toggle buttons are updated at the end of this function.

    // Mapped navigation dictionary by data-tab attribute or href
    const tabNavMap = {
        "activities-tab": { desktop: t.nav_activities, mobile: t.nav_activities },
        "confession-tab": { desktop: t.nav_confessions, mobile: t.nav_confessions },
        "archive-tab": { desktop: t.nav_archive, mobile: t.mobile_nav_archive },
        "calendar-tab": { desktop: t.nav_calendar, mobile: t.mobile_nav_calendar },
        "gpa-tab": { desktop: t.nav_gpa, mobile: t.mobile_nav_gpa },
        "exams-tab": { desktop: t.nav_exams, mobile: t.mobile_nav_exams },
        "links-tab": { desktop: t.nav_links, mobile: t.mobile_nav_links },
        "bus-tab": { desktop: t.nav_buses, mobile: t.mobile_nav_buses },
        "library-tab": { desktop: t.nav_library, mobile: t.mobile_nav_library },
        "health-tab": { desktop: t.nav_health, mobile: t.mobile_nav_health },
        "marketplace-tab": { desktop: t.nav_marketplace, mobile: t.mobile_nav_marketplace },
        "scholarships-tab": { desktop: t.nav_scholarships, mobile: t.mobile_nav_scholarships },
        "support-tab": { desktop: t.nav_support, mobile: t.nav_support },
        "updates-tab": { desktop: t.nav_updates, mobile: t.mobile_nav_updates }
    };

    const hrefNavMap = {
        "calendar.html": { desktop: t.nav_calendar, mobile: t.mobile_nav_calendar },
        "bus.html": { desktop: t.nav_buses, mobile: t.mobile_nav_buses },
        "library.html": { desktop: t.nav_library, mobile: t.mobile_nav_library },
        "health.html": { desktop: t.nav_health, mobile: t.mobile_nav_health },
        "gpa.html": { desktop: t.nav_gpa, mobile: t.mobile_nav_gpa },
        "scholarships.html": { desktop: t.nav_scholarships, mobile: t.mobile_nav_scholarships },
        "exams.html": { desktop: t.nav_exams, mobile: t.mobile_nav_exams },
        "wifi.html": { desktop: t.nav_links, mobile: t.mobile_nav_links },
        "support.html": { desktop: t.nav_support, mobile: t.nav_support },
        "activities.html": { desktop: t.nav_activities, mobile: t.nav_activities },
        "marketplace.html": { desktop: t.nav_marketplace, mobile: t.mobile_nav_marketplace },
        "guides.html": { desktop: t.nav_guides, mobile: t.mobile_nav_guides },
        "updates.html": { desktop: t.nav_updates, mobile: t.mobile_nav_updates },
        "index.html": { desktop: t.nav_confessions, mobile: t.nav_confessions },
        "index.html#confession-tab": { desktop: t.nav_confessions, mobile: t.nav_confessions },
        "index.html#calendar-tab": { desktop: t.nav_calendar, mobile: t.mobile_nav_calendar },
        "index.html#gpa-tab": { desktop: t.nav_gpa, mobile: t.mobile_nav_gpa },
        "index.html#exams-tab": { desktop: t.nav_exams, mobile: t.mobile_nav_exams },
        "index.html#links-tab": { desktop: t.nav_links, mobile: t.mobile_nav_links },
        "index.html#bus-tab": { desktop: t.nav_buses, mobile: t.mobile_nav_buses },
        "index.html#marketplace-tab": { desktop: t.nav_marketplace, mobile: t.mobile_nav_marketplace },
        "index.html#library-tab": { desktop: t.nav_library, mobile: t.mobile_nav_library },
        "index.html#health-tab": { desktop: t.nav_health, mobile: t.mobile_nav_health },
        "index.html#activities-tab": { desktop: t.nav_activities, mobile: t.nav_activities },
        "index.html#scholarships-tab": { desktop: t.nav_scholarships, mobile: t.mobile_nav_scholarships },
        "index.html#support-tab": { desktop: t.nav_support, mobile: t.nav_support },
        "index.html#updates-tab": { desktop: t.nav_updates, mobile: t.mobile_nav_updates }
    };

    // 1. Sidebar nav items
    document.querySelectorAll(".sidebar .nav-menu .nav-item").forEach(item => {
        const tab = item.getAttribute("data-tab");
        const href = item.getAttribute("href");
        if (tab && tabNavMap[tab]) {
            updateNodeText(item, tabNavMap[tab].desktop);
        } else if (href && hrefNavMap[href]) {
            updateNodeText(item, hrefNavMap[href].desktop);
        }
    });

    // 2. Mobile bottom nav buttons & drawer buttons
    document.querySelectorAll(".mobile-bottom-nav .mobile-nav-btn, .mobile-drawer-grid .drawer-item-btn").forEach(btn => {
        const tab = btn.getAttribute("data-tab");
        const href = btn.getAttribute("href");
        const span = btn.querySelector("span");
        if (span) {
            if (tab && tabNavMap[tab]) {
                span.textContent = tabNavMap[tab].mobile;
            } else if (href && hrefNavMap[href]) {
                span.textContent = hrefNavMap[href].mobile;
            }
        }
    });

    // 3. Language toggle buttons
    const desktopToggle = document.getElementById("desktopLangToggle");
    const mobileToggle  = document.getElementById("mobileLangToggle") || document.getElementById("mobileLangToggleOld");
    const drawerToggle  = document.getElementById("drawerLangToggle");
    const toggleLabel   = lang === "en" ? "Bahasa Melayu" : "English";
    
    if (desktopToggle) desktopToggle.textContent = toggleLabel;
    if (mobileToggle)  mobileToggle.textContent  = toggleLabel;
    if (drawerToggle) {
        const span = drawerToggle.querySelector("span");
        if (span) span.textContent = toggleLabel;
        else drawerToggle.textContent = toggleLabel;
    }

    const langSwitchLabel = document.getElementById("langSwitchLabel");
    if (langSwitchLabel) langSwitchLabel.textContent = t.lang_label;



    // 4. Confessions tab
    const confessionTitle = document.querySelector("#confession-tab .card-title");
    updateNodeText(confessionTitle, t.title_submit_confession);

    const labelSubmit = document.querySelector("#confession-tab .form-group .form-label");
    if (labelSubmit) labelSubmit.textContent = t.label_submit_confession;

    const confText = document.getElementById("confessionText");
    if (confText) confText.setAttribute("placeholder", t.placeholder_confession);

    const chCountLabel = document.getElementById("charCount");
    if (chCountLabel && confText) {
        const len = confText.value.length;
        chCountLabel.textContent = lang === "en" ? `${len} / 10000 characters` : `${len} / 10000 aksara`;
    }

    const agreeLabel = document.querySelector("#confession-tab .checkbox-container");
    if (agreeLabel) updateNodeText(agreeLabel, t.checkbox_rules);

    const sBtn = document.getElementById("submitBtn");
    if (sBtn && sBtn.textContent !== "Submitting..." && sBtn.textContent !== "Menghantar...") {
        sBtn.textContent = t.btn_submit;
    }

    const gFormBtn = document.querySelector("#confession-tab .btn-gold-outline");
    if (gFormBtn) gFormBtn.textContent = t.btn_submit_google;

    const guidelinesTitle = document.querySelector("#confession-tab .card:nth-child(2) .card-title");
    updateNodeText(guidelinesTitle, t.title_guidelines);

    const guides = document.querySelectorAll("#confession-tab .guide-list li");
    if (guides.length >= 11) {
        guides[0].querySelector("strong").textContent = t.guide_anon_title;
        updateNodeText(guides[0], t.guide_anon_desc);
        guides[1].querySelector("strong").textContent = t.guide_respect_title;
        updateNodeText(guides[1], t.guide_respect_desc);
        guides[2].querySelector("strong").textContent = t.guide_spam_title;
        updateNodeText(guides[2], t.guide_spam_desc);
        guides[3].querySelector("strong").textContent = t.guide_image_title;
        updateNodeText(guides[3], t.guide_image_desc);
        guides[4].querySelector("strong").textContent = t.guide_mod_title;
        updateNodeText(guides[4], t.guide_mod_desc);
        guides[5].querySelector("strong").textContent = t.guide_links_title;
        updateNodeText(guides[5], t.guide_links_desc);
        guides[6].querySelector("strong").textContent = t.guide_impersonation_title;
        updateNodeText(guides[6], t.guide_impersonation_desc);
        guides[7].querySelector("strong").textContent = t.guide_threats_title;
        updateNodeText(guides[7], t.guide_threats_desc);
        guides[8].querySelector("strong").textContent = t.guide_accusations_title;
        updateNodeText(guides[8], t.guide_accusations_desc);
        guides[9].querySelector("strong").textContent = t.guide_connections_title;
        updateNodeText(guides[9], t.guide_connections_desc);
        guides[10].querySelector("strong").textContent = t.guide_think_title;
        updateNodeText(guides[10], t.guide_think_desc);
    }

    // 5. GPA Calculator
    const gpaTitle = document.querySelector("#gpa-tab .card-title");
    updateNodeText(gpaTitle, t.title_gpa_calc);

    const deansListBadge = document.getElementById("deansListBadge");
    if (deansListBadge) deansListBadge.textContent = lang === "en" ? "🏆 Dean's List (Anugerah Dekan) Eligible!" : "🏆 Layak Anugerah Dekan (Dean's List)!";
    
    const firstClassBadge = document.getElementById("firstClassBadge");
    if (firstClassBadge) firstClassBadge.textContent = lang === "en" ? "🎓 First Class (Kelas Pertama) Eligible!" : "🎓 Layak Kelas Pertama (First Class)!";

    const gpaLabels = document.querySelectorAll("#gpa-tab .gpa-result-card .form-label");
    if (gpaLabels.length >= 3) {
        gpaLabels[0].textContent = t.label_sem_gpa;
        gpaLabels[1].textContent = t.label_sem_credits;
        gpaLabels[2].textContent = t.label_est_cgpa;
    }

    const gpaThs = document.querySelectorAll("#gpa-tab .gpa-table th");
    if (gpaThs.length >= 4) {
        gpaThs[0].textContent = t.th_course;
        gpaThs[1].textContent = t.th_credits;
        gpaThs[2].textContent = t.th_grade;
        gpaThs[3].textContent = t.th_actions;
    }

    const aRowBtn = document.getElementById("addRowBtn");
    if (aRowBtn) aRowBtn.textContent = t.btn_add_subject;

    const cGpaBtn = document.getElementById("clearGpaBtn");
    if (cGpaBtn) cGpaBtn.textContent = t.btn_clear_gpa;

    const pGpaBtn = document.getElementById("btnPrintGpa");
    if (pGpaBtn) pGpaBtn.textContent = t.btn_print_gpa;

    const priorLabels = document.querySelectorAll(".cgpa-calc-box .form-label");
    if (priorLabels.length >= 2) {
        priorLabels[0].textContent = t.label_prior_cgpa;
        priorLabels[1].textContent = t.label_prior_credits;
    }

    // 6. Wi-Fi & Links
    const titleLinks = document.querySelector("#links-tab .card-title");
    if (titleLinks) updateNodeText(titleLinks, t.title_important_links || "UTeM Wi-Fi & Links");

    const descImportantLinks = document.getElementById("descImportantLinks");
    if (descImportantLinks) descImportantLinks.textContent = t.desc_important_links || "Quick access to essential official campus portals, VPN clients, student council channels, and academic systems.";

    const libproxyTitle = document.getElementById("libproxyTitle");
    if (libproxyTitle) libproxyTitle.textContent = t.card_libproxy_title;
    const libproxySub = document.getElementById("libproxySub");
    if (libproxySub) libproxySub.textContent = t.card_libproxy_sub;
    const libproxyDesc = document.getElementById("libproxyDesc");
    if (libproxyDesc) libproxyDesc.textContent = t.card_libproxy_desc;
    const libproxyBtn = document.getElementById("libproxyBtn");
    if (libproxyBtn) updateNodeText(libproxyBtn, t.card_libproxy_btn);

    const vpnTitle = document.getElementById("vpnTitle");
    if (vpnTitle) vpnTitle.textContent = t.card_vpn_title;
    const vpnSub = document.getElementById("vpnSub");
    if (vpnSub) vpnSub.textContent = t.card_vpn_sub;
    const vpnDesc = document.getElementById("vpnDesc");
    if (vpnDesc) vpnDesc.textContent = t.card_vpn_desc;
    const vpnBtn = document.getElementById("vpnBtn");
    if (vpnBtn) updateNodeText(vpnBtn, t.card_vpn_btn);

    const staffDirTitle = document.getElementById("staffDirTitle");
    if (staffDirTitle) staffDirTitle.textContent = t.card_staff_title;
    const staffDirSub = document.getElementById("staffDirSub");
    if (staffDirSub) staffDirSub.textContent = t.card_staff_sub;
    const staffDirDesc = document.getElementById("staffDirDesc");
    if (staffDirDesc) staffDirDesc.textContent = t.card_staff_desc;
    const staffDirBtn = document.getElementById("staffDirBtn");
    if (staffDirBtn) updateNodeText(staffDirBtn, t.card_staff_btn);

    const mppTitle = document.getElementById("mppTitle");
    if (mppTitle) mppTitle.textContent = t.card_mpp_title;
    const mppSub = document.getElementById("mppSub");
    if (mppSub) mppSub.textContent = t.card_mpp_sub;
    const mppDesc = document.getElementById("mppDesc");
    if (mppDesc) mppDesc.textContent = t.card_mpp_desc;
    const mppBtn = document.getElementById("mppBtn");
    if (mppBtn) updateNodeText(mppBtn, t.card_mpp_btn);

    const aduanTitle = document.getElementById("aduanTitle");
    if (aduanTitle) aduanTitle.textContent = t.card_aduan_title;
    const aduanSub = document.getElementById("aduanSub");
    if (aduanSub) aduanSub.textContent = t.card_aduan_sub;
    const aduanDesc = document.getElementById("aduanDesc");
    if (aduanDesc) aduanDesc.textContent = t.card_aduan_desc;
    const aduanBtn = document.getElementById("aduanBtn");
    if (aduanBtn) updateNodeText(aduanBtn, t.card_aduan_btn);

    const konvoTitle = document.getElementById("konvoTitle");
    if (konvoTitle) konvoTitle.textContent = t.card_konvo_title;
    const konvoSub = document.getElementById("konvoSub");
    if (konvoSub) konvoSub.textContent = t.card_konvo_sub;
    const konvoDesc = document.getElementById("konvoDesc");
    if (konvoDesc) konvoDesc.textContent = t.card_konvo_desc;
    const konvoBtn = document.getElementById("konvoBtn");
    if (konvoBtn) updateNodeText(konvoBtn, t.card_konvo_btn);

    // Marketplace & Services Tab
    const titleMarketplace = document.getElementById("titleMarketplace");
    if (titleMarketplace) updateNodeText(titleMarketplace, lang === "en" ? "UTeM Marketplace & Student Services" : "Pasar & Perkhidmatan Pelajar UTeM");
    
    const descMarketplace = document.getElementById("descMarketplace");
    if (descMarketplace) descMarketplace.textContent = lang === "en" 
        ? "One-stop campus platform for UTeM students to buy & sell pre-loved items, textbooks, gadgets, and offer student services like Grab, Personal Shopper, and printing."
        : "Platform sehenti kampus untuk pelajar UTeM membeli & menjual barangan terpakai, buku teks, gajet, dan menawarkan perkhidmatan seperti Grab, Personal Shopper, dan percetakan.";

    const badgeMarketplace = document.getElementById("badgeMarketplace");
    if (badgeMarketplace) badgeMarketplace.textContent = lang === "en" ? "Student Deals & Services Hub" : "Pusat Barangan & Perkhidmatan Pelajar";

    const titleMarketItems = document.getElementById("titleMarketItems");
    if (titleMarketItems) titleMarketItems.textContent = lang === "en" ? "🛒 Pre-loved Items & Marketplace" : "🛒 Barangan Terpakai & Pasar Pelajar";

    const subMarketItems = document.getElementById("subMarketItems");
    if (subMarketItems) subMarketItems.textContent = lang === "en" ? "Buy & Sell Student Essentials" : "Beli & Jual Keperluan Pelajar";

    const descMarketItems = document.getElementById("descMarketItems");
    if (descMarketItems) descMarketItems.textContent = lang === "en" 
        ? "Buy & sell student essentials directly with fellow UTeM students. From mechanical keyboards and electronics to textbooks and hostel gear." 
        : "Beli & jual keperluan pelajar secara terus dengan rakan pelajar UTeM. Dari papan kekunci mekanikal dan barangan elektronik kepada buku teks dan kelengkapan asrama.";

    const titleMarketServices = document.getElementById("titleMarketServices");
    if (titleMarketServices) titleMarketServices.textContent = lang === "en" ? "🚘 Student Services Directory" : "🚘 Direktori Perkhidmatan Pelajar";

    const subMarketServices = document.getElementById("subMarketServices");
    if (subMarketServices) subMarketServices.textContent = lang === "en" ? "Campus Runners & Services" : "Pelari Kampus & Perkhidmatan";

    const descMarketServices = document.getElementById("descMarketServices");
    if (descMarketServices) descMarketServices.textContent = lang === "en" 
        ? "Discover trusted student-run services around campus, including campus Grab drivers, personal shoppers, print runners, and project helpers." 
        : "Temui perkhidmatan pelajar yang dipercayai di sekitar kampus, termasuk pemandu Grab kampus, pembeli peribadi (personal shopper), pelari cetakan (print runners), dan pembantu projek.";

    const sellerNoticeMarketplace = document.getElementById("sellerNoticeMarketplace");
    if (sellerNoticeMarketplace) sellerNoticeMarketplace.innerHTML = lang === "en"
        ? 'Got something to sell or offering a service? 🚀 Get listed here! Drop us an email at <a href="mailto:utemconfessionpromax@duck.com" style="color: #facc15; text-decoration: underline; font-weight: 700;">utemconfessionpromax@duck.com</a>'
        : 'Ada barang nak letgo atau buat servis student? 🚀 Iklankan di sini! E-melkan butiran korang terus ke admin di <a href="mailto:utemconfessionpromax@duck.com" style="color: #facc15; text-decoration: underline; font-weight: 700;">utemconfessionpromax@duck.com</a>';

    // 7. Bus Transit (Minggu Semester Khas & Regular)
    const titleCampusBus = document.getElementById("title_campus_bus");
    if (titleCampusBus) titleCampusBus.textContent = t.title_bus_transit || "UTeM Campus Shuttle Timetable";

    const labelRadarTitle = document.getElementById("labelRadarTitle");
    if (labelRadarTitle) labelRadarTitle.textContent = lang === "en" ? "UTeM Shuttle Route Radar" : "Radar Laluan Bas UTeM";

    document.querySelectorAll(".bus-route-pill").forEach(pill => {
        const routeKey = pill.getAttribute("data-route");
        if (routeKey === "kt") pill.textContent = "KT (Ayer Keroh)";
        else if (routeKey === "ki") pill.textContent = "KI (Induk)";
        else if (routeKey === "ep") pill.textContent = "EP (Off-Campus)";
        else if (routeKey === "ftmk_regular") pill.textContent = "KI ⇄ KT";
        else if (routeKey === "satria_regular") pill.textContent = "Satria ⇄ Fakulti";
        else if (routeKey === "lestari_regular") pill.textContent = "Lestari ⇄ Fakulti";
    });

    const busThs = document.querySelectorAll("#bus-tab .gpa-table th");
    if (busThs.length >= 3) {
        busThs[0].textContent = t.th_departure || "Departure";
        busThs[1].textContent = t.th_day_type || "Days";
        busThs[2].textContent = t.th_status || "Status";
    }

    const busNote = document.querySelector(".bus-next-alert p");
    if (busNote) busNote.textContent = t.label_note;

    const departureLabel = document.querySelector(".bus-next-alert span.form-label");
    if (departureLabel) departureLabel.textContent = t.label_next_departure;

    const titlePublicBus = document.getElementById("titlePublicBus");
    if (titlePublicBus) titlePublicBus.textContent = t.title_public_bus || "Bus M10A Pink Bus";

    const descPublicBus = document.getElementById("descPublicBus");
    if (descPublicBus) descPublicBus.textContent = t.desc_public_bus;

    const labelRouteTimeline = document.getElementById("labelRouteTimeline");
    if (labelRouteTimeline) labelRouteTimeline.textContent = t.label_route_timeline;

    const labelWeekend1 = document.getElementById("labelWeekend1");
    if (labelWeekend1) labelWeekend1.textContent = t.label_weekend;

    const labelWeekend2 = document.getElementById("labelWeekend2");
    if (labelWeekend2) labelWeekend2.textContent = t.label_weekend;

    const labelM10ADetails = document.getElementById("labelM10ADetails");
    if (labelM10ADetails) labelM10ADetails.textContent = t.label_m10a_details;

    const m10aDetail1 = document.getElementById("m10aDetail1");
    if (m10aDetail1) m10aDetail1.innerHTML = t.m10a_detail1;

    const m10aDetail2 = document.getElementById("m10aDetail2");
    if (m10aDetail2) m10aDetail2.innerHTML = t.m10a_detail2;

    const m10aDetail3 = document.getElementById("m10aDetail3");
    if (m10aDetail3) m10aDetail3.innerHTML = t.m10a_detail3;

    const titleRouteLookup = document.getElementById("titleRouteLookup");
    if (titleRouteLookup) titleRouteLookup.textContent = t.title_route_lookup;

    const descRouteLookup = document.getElementById("descRouteLookup");
    if (descRouteLookup) descRouteLookup.textContent = t.desc_route_lookup;

    const labelSelectDest = document.getElementById("labelSelectDest");
    if (labelSelectDest) labelSelectDest.textContent = t.label_select_dest;

    const optSelectDest = document.getElementById("optSelectDest");
    if (optSelectDest) optSelectDest.textContent = t.opt_select_dest;

    const optDestTampin = document.getElementById("optDestTampin");
    if (optDestTampin) optDestTampin.textContent = t.opt_dest_tampin;

    const optDestJasin = document.getElementById("optDestJasin");
    if (optDestJasin) optDestJasin.textContent = t.opt_dest_jasin;

    const optDestKlebang = document.getElementById("optDestKlebang");
    if (optDestKlebang) optDestKlebang.textContent = t.opt_dest_klebang;

    const optDestPaya = document.getElementById("optDestPaya");
    if (optDestPaya) optDestPaya.textContent = t.opt_dest_paya;

    const busSourcesLabel = document.getElementById("busSourcesLabel");
    if (busSourcesLabel) busSourcesLabel.textContent = t.bus_sources_label;

    const destSelect = document.getElementById("melakaDestSelect");
    const resBox = document.getElementById("lookupResultBox");
    if (destSelect && resBox && destSelect.value) {
        resBox.innerHTML = lookupDetails[destSelect.value][lang];
    }

    // 8. Academic Calendar
    const calTitle = document.querySelector("#calendar-tab .card-title");
    updateNodeText(calTitle, t.title_calendar);

    const calBtns = document.querySelectorAll(".cal-filter-btn");
    if (calBtns.length >= 5) {
        calBtns[0].textContent = t.btn_cal_all;
        calBtns[1].textContent = t.btn_cal_academic;
        calBtns[2].textContent = t.btn_cal_exam;
        calBtns[3].textContent = t.btn_cal_break;
        calBtns[4].textContent = t.btn_cal_holiday;
    }

    const calSearchInput = document.getElementById("calendarSearch");
    if (calSearchInput) calSearchInput.setAttribute("placeholder", t.placeholder_search_cal);

    const calendarSourcesLabel = document.getElementById("calendarSourcesLabel");
    if (calendarSourcesLabel) calendarSourcesLabel.textContent = t.calendar_sources_label;

    const calendarLinkLabel = document.getElementById("calendarLinkLabel");
    if (calendarLinkLabel) updateNodeText(calendarLinkLabel, t.calendar_link_label);

    const titlePastExamsTab = document.getElementById("titlePastExamsTab");
    if (titlePastExamsTab) titlePastExamsTab.textContent = t.title_past_exams_tab;

    const descPastExamsTab = document.getElementById("descPastExamsTab");
    if (descPastExamsTab) descPastExamsTab.textContent = t.desc_past_exams_tab;

    const labelPastExamsLib = document.getElementById("labelPastExamsLib");
    if (labelPastExamsLib) labelPastExamsLib.textContent = t.label_past_exams_lib;

    const btnPastExamsLink = document.getElementById("btnPastExamsLink");
    if (btnPastExamsLink) updateNodeText(btnPastExamsLink, t.btn_past_exams_link);

    // 9. Health Center
    const titleHealthTab = document.getElementById("titleHealthTab");
    if (titleHealthTab) titleHealthTab.textContent = t.title_health_tab;

    const descHealthTab = document.getElementById("descHealthTab");
    if (descHealthTab) descHealthTab.textContent = t.desc_health_tab;

    const labelHealthHours = document.getElementById("labelHealthHours");
    if (labelHealthHours) labelHealthHours.textContent = t.label_health_hours;

    const labelHealthMainInduk = document.getElementById("labelHealthMainInduk");
    if (labelHealthMainInduk) labelHealthMainInduk.textContent = t.label_health_main_induk;

    const labelHoursIndukAcad = document.getElementById("labelHoursIndukAcad");
    if (labelHoursIndukAcad) labelHoursIndukAcad.textContent = t.label_hours_induk_acad;

    const labelHoursIndukBreak = document.getElementById("labelHoursIndukBreak");
    if (labelHoursIndukBreak) labelHoursIndukBreak.textContent = t.label_hours_induk_break;

    const labelHealthTechAyer = document.getElementById("labelHealthTechAyer");
    if (labelHealthTechAyer) labelHealthTechAyer.textContent = t.label_health_tech_ayer;

    const labelHoursTech = document.getElementById("labelHoursTech");
    if (labelHoursTech) labelHoursTech.textContent = t.label_hours_tech;

    const labelHealthBreaks = document.getElementById("labelHealthBreaks");
    if (labelHealthBreaks) labelHealthBreaks.textContent = t.label_health_breaks;

    const labelHoursBreakMonThu = document.getElementById("labelHoursBreakMonThu");
    if (labelHoursBreakMonThu) labelHoursBreakMonThu.textContent = t.label_hours_break_monthu;

    const labelHoursBreakFri = document.getElementById("labelHoursBreakFri");
    if (labelHoursBreakFri) labelHoursBreakFri.textContent = t.label_hours_break_fri;

    const labelHealthClosed = document.getElementById("labelHealthClosed");
    if (labelHealthClosed) labelHealthClosed.textContent = t.label_health_closed;

    const labelHealthServices = document.getElementById("labelHealthServices");
    if (labelHealthServices) labelHealthServices.textContent = t.label_health_services;

    const labelDentalApp = document.getElementById("labelDentalApp");
    if (labelDentalApp) labelDentalApp.textContent = t.label_dental_app;

    const btnDentalLink = document.getElementById("btnDentalLink");
    if (btnDentalLink) updateNodeText(btnDentalLink, t.btn_dental_link);

    const labelEmergKit = document.getElementById("labelEmergKit");
    if (labelEmergKit) labelEmergKit.textContent = t.label_emerg_kit;

    const btnEmergLink = document.getElementById("btnEmergLink");
    if (btnEmergLink) updateNodeText(btnEmergLink, t.btn_emerg_link);

    const labelHealthPolicies = document.getElementById("labelHealthPolicies");
    if (labelHealthPolicies) labelHealthPolicies.textContent = t.label_health_policies;

    const labelHealthExtMc = document.getElementById("labelHealthExtMc");
    if (labelHealthExtMc) labelHealthExtMc.textContent = t.label_health_ext_mc;

    const descHealthExtMc = document.getElementById("descHealthExtMc");
    if (descHealthExtMc) descHealthExtMc.textContent = t.desc_health_ext_mc;

    const labelHealthExamAbsence = document.getElementById("labelHealthExamAbsence");
    if (labelHealthExamAbsence) labelHealthExamAbsence.textContent = t.label_health_exam_absence;

    const descHealthExamAbsence = document.getElementById("descHealthExamAbsence");
    if (descHealthExamAbsence) descHealthExamAbsence.textContent = t.desc_health_exam_absence;

    const labelHealthCoverage = document.getElementById("labelHealthCoverage");
    if (labelHealthCoverage) labelHealthCoverage.textContent = t.label_health_coverage;

    const descHealthCoverage = document.getElementById("descHealthCoverage");
    if (descHealthCoverage) descHealthCoverage.textContent = t.desc_health_coverage;

    const labelHealthContact = document.getElementById("labelHealthContact");
    if (labelHealthContact) labelHealthContact.textContent = t.label_health_contact;

    const labelHealthPhone = document.getElementById("labelHealthPhone");
    if (labelHealthPhone) labelHealthPhone.textContent = t.label_health_phone;

    const labelHealthEmail = document.getElementById("labelHealthEmail");
    if (labelHealthEmail) labelHealthEmail.textContent = t.label_health_email;

    const labelHealthAddress = document.getElementById("labelHealthAddress");
    if (labelHealthAddress) labelHealthAddress.textContent = t.label_health_address;

    const labelHealthRef = document.getElementById("labelHealthRef");
    if (labelHealthRef) labelHealthRef.textContent = t.label_health_ref;

    // 10. Library
    const titleLibTab = document.getElementById("titleLibTab");
    if (titleLibTab) titleLibTab.textContent = t.title_lib_tab;

    const descLibTab = document.getElementById("descLibTab");
    if (descLibTab) descLibTab.textContent = t.desc_lib_tab;

    const labelLibHours = document.getElementById("labelLibHours");
    if (labelLibHours) labelLibHours.textContent = t.label_lib_hours;

    const labelLibMainHours = document.getElementById("labelLibMainHours");
    if (labelLibMainHours) labelLibMainHours.textContent = t.label_lib_main_hours;

    const labelHoursLibMonThu = document.getElementById("labelHoursLibMonThu");
    if (labelHoursLibMonThu) labelHoursLibMonThu.textContent = t.label_hours_lib_monthu;

    const labelHoursLibFri = document.getElementById("labelHoursLibFri");
    if (labelHoursLibFri) labelHoursLibFri.textContent = t.label_hours_lib_fri;

    const labelLibWeekendHours = document.getElementById("labelLibWeekendHours");
    if (labelLibWeekendHours) labelLibWeekendHours.textContent = t.label_lib_weekend_hours;

    const labelHoursLibWeekend = document.getElementById("labelHoursLibWeekend");
    if (labelHoursLibWeekend) labelHoursLibWeekend.textContent = t.label_hours_lib_weekend;

    const labelLibBreakHours = document.getElementById("labelLibBreakHours");
    if (labelLibBreakHours) labelLibBreakHours.textContent = t.label_lib_break_hours;

    const labelHoursLibBreak = document.getElementById("labelHoursLibBreak");
    if (labelHoursLibBreak) labelHoursLibBreak.textContent = t.label_hours_lib_break;

    const labelLib24Hours = document.getElementById("labelLib24Hours");
    if (labelLib24Hours) labelLib24Hours.textContent = t.label_lib_24hours;

    const labelLibServices = document.getElementById("labelLibServices");
    if (labelLibServices) labelLibServices.textContent = t.label_lib_services;

    const labelLibPlaystation = document.getElementById("labelLibPlaystation");
    if (labelLibPlaystation) labelLibPlaystation.textContent = t.label_lib_playstation;

    const descLibPlaystation = document.getElementById("descLibPlaystation");
    if (descLibPlaystation) descLibPlaystation.textContent = t.desc_lib_playstation;

    const labelLibBoardgames = document.getElementById("labelLibBoardgames");
    if (labelLibBoardgames) labelLibBoardgames.textContent = t.label_lib_boardgames;

    const descLibBoardgames = document.getElementById("descLibBoardgames");
    if (descLibBoardgames) descLibBoardgames.textContent = t.desc_lib_boardgames;

    const labelLibBookingTitle = document.getElementById("labelLibBookingTitle");
    if (labelLibBookingTitle) labelLibBookingTitle.textContent = t.label_lib_booking_title;

    const descLibBookingText = document.getElementById("descLibBookingText");
    if (descLibBookingText) descLibBookingText.textContent = t.desc_lib_booking_text;

    const labelLibBorrowing = document.getElementById("labelLibBorrowing");
    if (labelLibBorrowing) labelLibBorrowing.textContent = t.label_lib_borrowing;

    const labelLibRenewals = document.getElementById("labelLibRenewals");
    if (labelLibRenewals) labelLibRenewals.textContent = t.label_lib_renewals;

    const descLibRenewals = document.getElementById("descLibRenewals");
    if (descLibRenewals) descLibRenewals.textContent = t.desc_lib_renewals;

    const labelLibEzproxy = document.getElementById("labelLibEzproxy");
    if (labelLibEzproxy) labelLibEzproxy.textContent = t.label_lib_ezproxy;

    const descLibEzproxy = document.getElementById("descLibEzproxy");
    if (descLibEzproxy) descLibEzproxy.textContent = t.desc_lib_ezproxy;

    const btnGoogle = document.getElementById("btnGoogleForm");
    if (btnGoogle) updateNodeText(btnGoogle, t.btn_submit_google);

    const btnChooseImage = document.getElementById("chooseImageBtn");
    if (btnChooseImage) updateNodeText(btnChooseImage, t.btn_choose_image);

    const imageCaptionInput = document.getElementById("imageCaptionInput");
    if (imageCaptionInput) imageCaptionInput.placeholder = t.placeholder_image_caption;

    const agreeImageLabel = document.getElementById("agreeImageRulesLabel");
    if (agreeImageLabel) updateNodeText(agreeImageLabel, t.checkbox_image_rules);

    const btnSubmitImage = document.getElementById("submitImageBtn");
    if (btnSubmitImage) updateNodeText(btnSubmitImage, t.btn_submit_image);

    // Update image character count immediately
    const imgCharCountLabel = document.getElementById("imageCharCount");
    if (imgCharCountLabel && imageCaptionInput) {
        const len = imageCaptionInput.value.length;
        imgCharCountLabel.textContent = lang === "en" ? `${len} / 500 characters` : `${len} / 500 aksara`;
    }

    const btnLibMail = document.getElementById("btnLibMail");
    if (btnLibMail) updateNodeText(btnLibMail, t.btn_lib_mail);

    const labelLibContact = document.getElementById("labelLibContact");
    if (labelLibContact) labelLibContact.textContent = t.label_lib_contact;

    const labelLibPhone = document.getElementById("labelLibPhone");
    if (labelLibPhone) labelLibPhone.textContent = t.label_lib_phone;

    const labelLibEmail = document.getElementById("labelLibEmail");
    if (labelLibEmail) labelLibEmail.textContent = t.label_lib_email;

    const labelLibAddress = document.getElementById("labelLibAddress");
    if (labelLibAddress) labelLibAddress.textContent = t.label_lib_address;

    const labelLibRef = document.getElementById("labelLibRef");
    if (labelLibRef) labelLibRef.textContent = t.label_lib_ref;

    // Vehicle Form Card
    const vehicleTitle = document.getElementById("vehicleTitle");
    if (vehicleTitle) vehicleTitle.textContent = t.card_vehicle_title;

    const vehicleSub = document.getElementById("vehicleSub");
    if (vehicleSub) vehicleSub.textContent = t.card_vehicle_sub;

    const vehicleDesc = document.getElementById("vehicleDesc");
    if (vehicleDesc) vehicleDesc.textContent = t.card_vehicle_desc;

    const vehicleBtn = document.getElementById("vehicleBtn");
    if (vehicleBtn) updateNodeText(vehicleBtn, t.card_vehicle_btn);

    // 12. Scholarship Tracker
    const titleScholarships = document.getElementById("titleScholarships") || document.querySelector("#scholarships-tab .card-title");
    if (titleScholarships) {
        if (titleScholarships.tagName === "SPAN") {
            titleScholarships.textContent = t.title_scholarships || t.titleScholarships || "Scholarship & Financial Aid";
        } else {
            updateNodeText(titleScholarships, t.title_scholarships || t.titleScholarships || "Scholarship & Financial Aid");
        }
    }

    const descScholarships = document.getElementById("descScholarships");
    if (descScholarships) descScholarships.textContent = t.desc_scholarships;

    // 13. Student Voices
    const titleArchive = document.getElementById("archiveTitle");
    if (titleArchive) updateNodeText(titleArchive, t.title_archive || (currentLang === "ms" ? "Suara Pelajar" : "Student Voices"));

    const descArchive = document.getElementById("descArchive");
    if (descArchive) descArchive.textContent = t.desc_archive || (currentLang === "ms" ? "Layan cerita santai, luahan pelajar, dan gosip panas kampus. Cari guna kata kunci atau tapis ikut kategori di bawah" : "Catch up on campus tea, student rants, and relatable stories. Search by keywords or filter by category to dive in!");

    const noteArchiveText = document.getElementById("noteArchiveText");
    if (noteArchiveText) {
        noteArchiveText.innerHTML = t.note_archive || (currentLang === "ms"
            ? "<strong>Nota Komuniti:</strong> Hantaran dan luahan di Suara Pelajar dikongsi semata-mata untuk hiburan, perkongsian santai, dan pengalaman sesama pelajar. Ia tidak mencerminkan pendirian rasmi universiti dan tiada sebarang niat untuk menyakiti, menyasarkan, atau memfitnah mana-mana pihak. Hayati dengan minda terbuka dan marilah kekalkan budaya kampus yang positif dan saling menghormati!"
            : "<strong>Community Note:</strong> Confessions and stories shared in Student Voices are contributed for entertainment, peer relatability, and lighthearted campus discussions. They do not represent official university views and carry no intent to target, harm, or defame any individual or organization. Read with an open mind and keep the campus culture kind and respectful!");
    }

    const archiveSearchInput = document.getElementById("archiveSearch");
    if (archiveSearchInput) archiveSearchInput.setAttribute("placeholder", t.placeholder_archive_search || (currentLang === "ms" ? "🔍 Cari confession ikut kata kunci, tag, topik..." : "🔍 Search confessions by keyword, tags, topic..."));

    const noticeArchiveTakedown = document.getElementById("noticeArchiveTakedown");
    if (noticeArchiveTakedown) {
        noticeArchiveTakedown.innerHTML = `<strong>${currentLang === "ms" ? "Permohonan Pemadaman Kandungan:" : "Content Removal Request:"}</strong> ${currentLang === "ms" ? "Jika terdapat hantaran pengakuan yang melibatkan anda dan anda mahu ia dipadam daripada arkib, sila hubungi pasukan admin melalui e-mel atau Telegram." : "If a confession post involves you and you wish to have it removed from the archive, please contact the admin team via email or Telegram."}`;
    }
    const btnContactAdminRemoval = document.getElementById("btnContactAdminRemoval");
    if (btnContactAdminRemoval && t.btn_contact_admin_removal) {
        updateNodeText(btnContactAdminRemoval, t.btn_contact_admin_removal);
    }

    // 14. Support Us Tab
    const navSupport = document.getElementById("navSupport");
    if (navSupport) navSupport.textContent = t.nav_support;

    const titleSupport = document.getElementById("titleSupport");
    if (titleSupport) updateNodeText(titleSupport, t.title_support);

    const descSupport = document.getElementById("descSupport");
    if (descSupport) descSupport.textContent = t.desc_support;

    const labelFreeSupport = document.getElementById("labelFreeSupport");
    if (labelFreeSupport) labelFreeSupport.textContent = t.label_free_support;

    const titlePartnerDeals = document.getElementById("titlePartnerDeals");
    if (titlePartnerDeals) titlePartnerDeals.textContent = t.title_partner_deals;

    const descPartnerDeals = document.getElementById("descPartnerDeals");
    if (descPartnerDeals) descPartnerDeals.textContent = t.desc_partner_deals;

    const btnPartnerDeals1 = document.getElementById("btnPartnerDeals1");
    if (btnPartnerDeals1) btnPartnerDeals1.textContent = currentLang === "ms" ? "Terokai Tawaran Rakan Kongsi & Hadiah Pelajar 🎁 ➔" : "Explore Partner Offers & Student Deals 🎁 ➔";

    const btnPartnerDeals2 = document.getElementById("btnPartnerDeals2");
    if (btnPartnerDeals2) btnPartnerDeals2.textContent = currentLang === "ms" ? "Lawat Laman Rakan Kongsi untuk menyokong laman ini ❤️ ➔" : "Visit Partner Site to Support UTeM Confessions ❤️ ➔";

    const activitiesTitle = document.getElementById("activitiesTitle");
    if (activitiesTitle) updateNodeText(activitiesTitle, lang === "ms" ? "Teroka Melaka" : "Explore Melaka");
      const descActivities = document.getElementById("descActivities");
      if (descActivities) descActivities.textContent = lang === "ms" ? "Temui aktiviti menarik di sekitar Melaka, dari tapak bersejarah hingga kawasan alam semula jadi yang tersembunyi." : "Discover things to do around Melaka, from historical sites to hidden nature spots.";
      const activitiesSearch = document.getElementById("activitiesSearch");
      if (activitiesSearch) activitiesSearch.placeholder = lang === "ms" ? "🔍 Cari tempat, lokasi..." : "🔍 Search attractions, location...";
      
      const activitiesTypeSelect = document.getElementById("activitiesTypeSelect");
      if (activitiesTypeSelect) {
          activitiesTypeSelect.options[0].text = lang === "ms" ? "🌍 Semua Jenis" : "🌍 All Types";
          activitiesTypeSelect.options[1].text = lang === "ms" ? "🏠 Tertutup" : "🏠 Indoor";
          activitiesTypeSelect.options[2].text = lang === "ms" ? "☀️ Luar" : "☀️ Outdoor";
      }

      const btnPartnerDeals3 = document.getElementById("btnPartnerDeals3");
    if (btnPartnerDeals3) btnPartnerDeals3.textContent = currentLang === "ms" ? "Terokai Tawaran Tajaan Luar 🌐 ➔" : "Explore External Sponsored Offers 🌐 ➔";

    const labelCoffeeSupport = document.getElementById("labelCoffeeSupport");
    if (labelCoffeeSupport) labelCoffeeSupport.textContent = t.label_coffee_support;

    const titleCoffee = document.getElementById("titleCoffee");
    if (titleCoffee) titleCoffee.textContent = t.title_coffee;

    const descCoffee = document.getElementById("descCoffee");
    if (descCoffee) descCoffee.textContent = t.desc_coffee;

    const noticeKofiCurrency = document.getElementById("noticeKofiCurrency");
    if (noticeKofiCurrency) noticeKofiCurrency.textContent = t.notice_kofi_currency;

    const btnKofiSupport = document.getElementById("btnKofiSupport");
    if (btnKofiSupport) btnKofiSupport.textContent = t.btn_kofi_support || "Buy Us a Coffee on Ko-fi ☕ ➔";

    const btnContactAdminTip = document.getElementById("btnContactAdminTip");
    if (btnContactAdminTip) btnContactAdminTip.textContent = t.btn_contact_admin_tip;

    const labelTransparencyTitle = document.getElementById("labelTransparencyTitle");
    if (labelTransparencyTitle) labelTransparencyTitle.textContent = t.label_transparency_title;

    const descTransparency = document.getElementById("descTransparency");
    if (descTransparency) descTransparency.textContent = t.desc_transparency;

    // 15. Footer
    const footerDiv = document.querySelector("footer div");
    if (footerDiv) {
        footerDiv.innerHTML = `<strong>UTeM Confessions Pro Max</strong> &copy; ${t.footer_text}`;
    }
    const footerLinksMap = {
        "index.html": t.footer_home || "Home",
        "guides.html": t.footer_guides || "Student Guides",
        "about.html": t.footer_about || "About Us",
        "rules.html": t.footer_rules || "Confession Rules",
        "privacy.html": t.footer_privacy || "Privacy Policy",
        "terms.html": t.footer_terms || "Terms of Service"
    };
    document.querySelectorAll(".footer-links a").forEach(link => {
        const href = link.getAttribute("href");
        if (href && footerLinksMap[href]) {
            link.textContent = footerLinksMap[href];
        }
    });

    // Trigger dependent dynamic updates safely
    try {
        if (typeof updateBusScheduleDisplay === 'function') updateBusScheduleDisplay();
        if (typeof updateM10ANextDeparture === 'function') updateM10ANextDeparture();
        if (typeof renderCalendarEvents === 'function') {
            const activeCalBtn = document.querySelector(".cal-filter-btn.active");
            const category = activeCalBtn ? activeCalBtn.getAttribute("data-category") : 'all';
            const calSearch = document.getElementById("calendarSearch");
            renderCalendarEvents(category, calSearch ? calSearch.value : '');
        }
        try { applyScholarshipTranslations(); } catch (err) { console.warn('Scholarship translation error:', err); }
        try { if(typeof refreshActivitiesTranslations === 'function') refreshActivitiesTranslations(); } catch (err) { console.warn('Activities translation error:', err); }
    } catch (e) {
        console.warn("Dynamic component translation warning:", e);
    }
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ms" : "en";
    localStorage.setItem("lang", currentLang);
    setLanguage(currentLang);
}


// ---- SCHOLARSHIPS TRANSLATION DICTIONARY ----
const scholarshipDict = {
    "Bantuan Kewangan Kecemasan (UTeM Pusat Islam)": { ms: "Bantuan Kewangan Kecemasan (UTeM Pusat Islam)" },
    "Official emergency financial aid provided by UTeM Pusat Islam and Pejabat Hal Ehwal Pelajar (HEP) for B40 undergraduates facing sudden financial hardship, medical emergencies, or living expense distress.": { ms: "Bantuan kewangan kecemasan rasmi yang disediakan oleh Pusat Islam UTeM dan Pejabat Hal Ehwal Pelajar (HEP) untuk pelajar prasiswazah B40 yang menghadapi kesulitan kewangan mengejut, kecemasan perubatan, atau kesukaran sara hidup." },
    "PTPTN Higher Education Loan (Pinjaman PTPTN)": { ms: "Pinjaman Pendidikan Tinggi PTPTN" },
    "Primary tertiary education loan scheme for Malaysian undergraduates. First-Class Honours graduates from UTeM may qualify for complete loan-to-scholarship conversion (bebas bayaran balik).": { ms: "Skim pinjaman pendidikan tertiari utama untuk pelajar prasiswazah Malaysia. Graduan Kelas Pertama UTeM mungkin layak mendapat penukaran pinjaman kepada biasiswa sepenuhnya (bebas bayaran balik)." },
    "State Scholarships & Foundations": { ms: "Biasiswa & Yayasan Negeri" },
    "Scholarships offered by all states in Malaysia for students from their respective states studying in local universities. Select a state to view available scholarships.": { ms: "Biasiswa yang ditawarkan oleh semua negeri di Malaysia untuk pelajar dari negeri masing-masing yang belajar di universiti tempatan. Pilih negeri untuk melihat biasiswa yang ada." },
    "Yayasan Tunku Abdul Rahman (YTAR) & Yayasan Bank Rakyat (YBR)": { ms: "Yayasan Tunku Abdul Rahman (YTAR) & Yayasan Bank Rakyat (YBR)" },
    "Prestigious undergraduate scholarships and Pembiayaan Pendidikan Boleh Ubah (PPBU) offering full tuition, monthly allowances, and leadership development programs for high-achieving undergraduates.": { ms: "Biasiswa prasiswazah berprestij dan Pembiayaan Pendidikan Boleh Ubah (PPBU) yang menawarkan yuran pengajian penuh, elaun bulanan, dan program pembangunan kepimpinan untuk pelajar prasiswazah cemerlang." },
    "Yayasan TM (YTM) Future Leaders Scholarship": { ms: "Biasiswa Pemimpin Masa Depan Yayasan TM (YTM)" },
    "Telekom Malaysia foundation scholarship for high-performing Malaysian students pursuing Computer Science, Software Engineering, Cybersecurity, AI, and Telecommunication Engineering.": { ms: "Biasiswa yayasan Telekom Malaysia untuk pelajar Malaysia berprestasi tinggi dalam Sains Komputer, Kejuruteraan Perisian, Keselamatan Siber, AI, dan Kejuruteraan Telekomunikasi." },
    "JPA MyScholarship (Program Penajaan JPA PIDN/LSPN)": { ms: "JPA MyScholarship (Program Penajaan JPA PIDN/LSPN)" },
    "Jabatan Perkhidmatan Awam (JPA) undergraduate sponsorship for Malaysian students pursuing Degree programs in engineering, computer science, technology, and applied sciences.": { ms: "Penajaan prasiswazah Jabatan Perkhidmatan Awam (JPA) untuk pelajar Malaysia dalam program Ijazah sarjana muda bagi bidang kejuruteraan, sains komputer, teknologi, dan sains gunaan." },
    "Biasiswa Gamuda Scholarship (Yayasan Gamuda)": { ms: "Biasiswa Gamuda (Yayasan Gamuda)" },
    "Full scholarship program prioritizing B40 and M40 students. Includes tuition fees, living allowances, accommodation, and guaranteed job placement in Gamuda group upon graduation.": { ms: "Program biasiswa penuh mengutamakan pelajar B40 dan M40. Merangkumi yuran pengajian, elaun sara hidup, penginapan, dan jaminan penempatan pekerjaan di kumpulan Gamuda selepas tamat pengajian." },
    "Kijang Scholarship (Bank Negara Malaysia)": { ms: "Biasiswa Kijang (Bank Negara Malaysia)" },
    "Highly competitive scholarship by BNM focusing on Economics, Accounting, Finance, Actuarial Science, Mathematics, Law, and Computer Science programs.": { ms: "Biasiswa berdaya saing tinggi oleh BNM yang menumpukan pada program Ekonomi, Perakaunan, Kewangan, Sains Aktuari, Matematik, Undang-undang, dan Sains Komputer." },
    "MARA Tertiary Education Sponsorship (TESP)": { ms: "Penajaan Pendidikan Tertiari MARA (TESP)" },
    "Majlis Amanah Rakyat (MARA) convertible loan for Bumiputera students pursuing targeted degrees at selected universities. Excellent CGPA can convert loan to 100% scholarship.": { ms: "Pinjaman boleh ubah Majlis Amanah Rakyat (MARA) untuk pelajar Bumiputera yang mengikuti ijazah sasaran di universiti terpilih. CGPA cemerlang boleh menukar pinjaman kepada 100% biasiswa." },
    "Bantuan Kewangan Asnaf & Zakat IPT": { ms: "Bantuan Kewangan Asnaf & Zakat IPT" },
    "Emergency financial aid, zakat assistance, food vouchers, and medical assistance managed directly by Pejabat Hal Ehwal Pelajar & Alumni (HEP UTeM) for active students facing financial hardship.": { ms: "Bantuan kewangan kecemasan, bantuan zakat, baucar makanan, dan bantuan perubatan yang diuruskan terus oleh Pejabat Hal Ehwal Pelajar & Alumni (HEP UTeM) untuk pelajar aktif yang menghadapi masalah kewangan." },
    
    "Maklumat tajaan dan permohonan boleh diakses melalui Portal Rasmi Yayasan Pelajaran Johor (YPJ). Mendaftar dan memohon Pinjaman Pelajaran Dalam Negara atau bantuan di Portal Bantuan YPJ atau sistem pengurusan YPJ Prolims.": { en: "Sponsorship and application info is accessible via the Official Portal of Yayasan Pelajaran Johor (YPJ). Register and apply for Domestic Education Loans or assistance at the YPJ Aid Portal or YPJ Prolims system." },
    "Info mengenai Biasiswa Kerajaan Negeri Kedah diuruskan oleh Seksyen Pembiayaan Pendidikan Negeri Kedah (SPPNK). Bagi Derma Siswa atau bantuan pendidikan Zakat, rujuk Lembaga Zakat Negeri Kedah.": { en: "Info on Kedah State Gov Scholarships is managed by the Kedah Education Financing Section (SPPNK). For Student Donations or Zakat education aid, refer to the Kedah State Zakat Board." },
    "Segala maklumat mengenai Biasiswa Yayasan Kelantan dihoskan di Laman Utama YAKIN. Menghantar permohonan Pinjaman Pelajaran secara terus melalui Sistem eSPMB YAKIN.": { en: "All info on Yayasan Kelantan Scholarships is hosted on the YAKIN Main Page. Submit Education Loan applications directly via the YAKIN eSPMB System." },
    "Info lengkap mengenai Pinjaman Wang Pengajian Tinggi (PWPT) dan Bantuan Awal IPT dipaparkan di laman TAPEM.": { en: "Complete info on Higher Education Money Loans (PWPT) and IPT Early Aid is displayed on the TAPEM page." },
    "Maklumat mengenai Anugerah Siswazah Cemerlang dan pinjaman pendidikan terbuka. Permohonan bantuan sara hidup mahasiswa anak negeri diisi secara dalam talian melalui Halaman Pembangunan Insan YNS.": { en: "Information on Outstanding Graduate Awards and open education loans. Applications for state student living allowances are filled online via the YNS Human Development Page." },
    "Semua terma Biasiswa Cemerlang dan Skim Pinjaman boleh disemak di Laman Web Rasmi Yayasan Pahang. Memohon inisiatif bantuan siswa secara online melalui portal eSiswa Kerajaan Negeri Pahang.": { en: "All terms for Excellence Scholarships and Loan Schemes can be checked on the Yayasan Pahang Official Website. Apply for student aid initiatives online via the Pahang State Gov eSiswa portal." },
    "Syarat kelayakan serta borang pendaftaran elektronik untuk Penang Scholar dan Mutiara Scholar terletak di portal rasmi Penang Future Foundation (PFF).": { en: "Eligibility requirements and electronic registration forms for Penang Scholar and Mutiara Scholar are located on the official Penang Future Foundation (PFF) portal." },
    "Panduan mengenai Dermasiswa dan skim bantuan siswa boleh dirujuk di Laman Utama Yayasan Perak. Borang online untuk Insentif Siswa IPT boleh diakses di Halaman INSISYP Yayasan Perak.": { en: "Guides on Dermasiswa and student aid schemes can be referred to on the Yayasan Perak Main Page. Online forms for IPT Student Incentives can be accessed on the Yayasan Perak INSISYP Page." },
    "Bantuan awal pengajian IPT daripada Majlis Agama Islam Perlis boleh disemak melalui Portal Rasmi MAIPs. Info dana pendidikan negeri boleh dirujuk melalui Portal Rasmi Yayasan Islam Perlis.": { en: "Early IPT study aid from the Perlis Islamic Religious Council can be checked via the MAIPs Official Portal. Info on state education funds can be referred to via the Yayasan Islam Perlis Official Portal." },
    "Urusan Biasiswa Kerajaan Negeri Sabah dibuat sepenuhnya secara online di portal bersepadu BKNS. Maklumat alternatif tajaan tempatan boleh disemak melalui Bahagian Pembangunan Pendidikan Yayasan Sabah.": { en: "Sabah State Gov Scholarship matters are done fully online on the integrated BKNS portal. Alternative local sponsorship info can be checked via the Yayasan Sabah Education Development Division." },
    "Program biasiswa negeri, pinjaman boleh ubah tanpa faedah, dan insentif penerbangan IPT dipaparkan di Laman Web Rasmi Yayasan Sarawak. Hantar dokumen dan isi borang menggunakan Sistem Yayasan Sarawak Student Portal (YSSP).": { en: "State scholarship programs, interest-free convertible loans, and IPT flight incentives are displayed on the Yayasan Sarawak Official Website. Submit documents and fill forms using the Yayasan Sarawak Student Portal (YSSP) System." },
    "Biasiswa TKWBNS dan Pinjaman Terbuka boleh melayari Portal Bahagian Sektoral Kerajaan Negeri Selangor. Urusan permohonan RM1,000 bantuan pendaftaran kolej pertama kali diuruskan melalui Portal Rasmi HPIPT Selangor.": { en: "For TKWBNS Scholarships and Open Loans, visit the Selangor State Gov Sectoral Division Portal. Applications for the RM1,000 first-time college registration aid are managed via the Official Selangor HPIPT Portal." },
    "Permohonan Skim Pelajar Cemerlang serta Pinjaman Pendidikan diuruskan secara berpusat di Portal Rasmi Yayasan Terengganu. Pendaftaran akaun dan borang digital melalui Sistem Terengganu Advance Education (TAE).": { en: "Applications for Excellent Student Schemes and Education Loans are managed centrally at the Yayasan Terengganu Official Portal. Account registration and digital forms via the Terengganu Advance Education (TAE) System." },
    "Skim Biasiswa Menara Gading serta program bantuan asnaf boleh disemak di Laman Utama Yayasan Wilayah Persekutuan. Pelajar Muslim boleh memohon Bantuan Am Pelajaran IPT melalui Sistem eBantuan MAIWP.": { en: "Menara Gading Scholarship Schemes and asnaf aid programs can be checked on the Yayasan Wilayah Persekutuan Main Page. Muslim students can apply for General IPT Education Aid via the MAIWP eBantuan System." },
    
    "Biasiswa & Pinjaman Yayasan Pelajaran Johor (YPJ)": { en: "Yayasan Pelajaran Johor (YPJ) Scholarships & Loans" },
    "Biasiswa Kerajaan Negeri Kedah & iPINJAM": { en: "Kedah State Government Scholarships & iPINJAM" },
    "Yayasan Kelantan Darulnaim (YAKIN)": { en: "Yayasan Kelantan Darulnaim (YAKIN)" },
    "Tabung Amanah Pendidikan Negeri Melaka (TAPEM)": { en: "Melaka State Education Trust Fund (TAPEM)" },
    "Yayasan Negeri Sembilan (YNS)": { en: "Yayasan Negeri Sembilan (YNS)" },
    "Yayasan Pahang & eSiswa": { en: "Yayasan Pahang & eSiswa" },
    "Penang Future Foundation (PFF)": { en: "Penang Future Foundation (PFF)" },
    "Yayasan Perak & INSISYP": { en: "Yayasan Perak & INSISYP" },
    "Yayasan Islam Perlis & MAIPs": { en: "Yayasan Islam Perlis & MAIPs" },
    "Biasiswa Kerajaan Negeri Sabah (BKNS) & Yayasan Sabah": { en: "Sabah State Gov Scholarships (BKNS) & Yayasan Sabah" },
    "Yayasan Sarawak (YSSP)": { en: "Yayasan Sarawak (YSSP)" },
    "Biasiswa Kerajaan Negeri Selangor & HPIPT": { en: "Selangor State Gov Scholarships & HPIPT" },
    "Yayasan Terengganu (YT) & TAE": { en: "Yayasan Terengganu (YT) & TAE" },
    "Yayasan Wilayah Persekutuan & MAIWP": { en: "Yayasan Wilayah Persekutuan & MAIWP" },

    "Target:": { ms: "Sasaran:" },
    "Sasaran:": { en: "Target:" }
};

function applyScholarshipTranslations() {
    const cards = document.querySelectorAll('.scholarship-card, .state-panel, #scholarships-tab .scholarship-card, #stateScholarshipsResult .state-panel');
    cards.forEach(card => {
        const titleEl = card.querySelector('h3, h4');
        const descEl = card.querySelector('p');
        const targetEl = card.querySelector('strong'); 
        
        [titleEl, descEl, targetEl].forEach(el => {
            if (!el) return;
            
            if (!el.hasAttribute('data-orig-text')) {
                el.setAttribute('data-orig-text', el.textContent.replace(/\s+/g, ' ').trim());
            }
            
            const orig = el.getAttribute('data-orig-text');
            const map = scholarshipDict[orig];
            
            if (map) {
                if (currentLang === 'ms' && map.ms) {
                    el.textContent = map.ms;
                } else if (currentLang === 'en' && map.en) {
                    el.textContent = map.en;
                } else {
                    el.textContent = orig;
                }
            }
        });
    });
}


