// translation.js — All UI strings (EN/BM) and setLanguage / toggleLanguage

const translations = {
    en: {
        nav_confessions: "Confessions",
        nav_archive: "Confessions Archive",
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

        mobile_nav_gpa: "GPA Calc",
        mobile_nav_archive: "Archive",
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
        btn_submit_google: "Submit via Google Form ➔",
        title_guidelines: "Submission Guidelines",

        guide_anon_title: "Anonymous:",
        guide_anon_desc: "Your IP address, name, or metadata are never tracked or saved.",
        guide_respect_title: "Respectful:",
        guide_respect_desc: "No targeted bullying, sexual harassment, or hate speech towards students or lecturers.",
        guide_spam_title: "No Spam:",
        guide_spam_desc: "Submit button has a 30-second delay between submissions.",

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

        title_bus_transit: "UTeM Campus Shuttle Timetable (Semester Khas & Regular)",
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
        m10a_detail1: "<strong>Weekdays:</strong> Melaka Sentral ⇄ MITC (via Batu Berendam)",
        m10a_detail2: "<strong>Weekends:</strong> Extends directly to Zoo Melaka & UTeM",
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

        // Cards under Wi-Fi & Links tab
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
        card_vehicle_btn: "Download Form ➔"
    },
    ms: {
        nav_confessions: "Pengakuan",
        nav_archive: "Arkib Pengakuan",
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

        mobile_nav_gpa: "Kalkulator GPA",
        mobile_nav_archive: "Arkib",
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
        placeholder_confession: "taip pengakuan anda di sini...",
        checkbox_rules: "Saya bersetuju mematuhi peraturan pengakuan. Saya faham bahawa hantaran biadap atau melanggar undang-undang akan ditolak.",
        btn_submit: "Hantar Pengakuan",
        btn_submit_google: "Hantar melalui Google Form ➔",
        title_guidelines: "Garis Panduan Hantaran",

        guide_anon_title: "Rawak:",
        guide_anon_desc: "Alamat IP, nama, atau metadata anda tidak dijejak mahupun disimpan.",
        guide_respect_title: "Hormat:",
        guide_respect_desc: "Tiada pembulian bersasar, gangguan seksual, atau kata-kata kebencian terhadap pelajar atau pensyarah.",
        guide_spam_title: "Spam:",
        guide_spam_desc: "Butang hantar mempunyai had kelewatan 30 saat antara hantaran.",

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

        title_bus_transit: "Jadual Masa Shuttle Kampus UTeM (Semester Khas & Biasa)",
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
        m10a_detail1: "<strong>Hari Bekerja:</strong> Melaka Sentral ⇄ MITC (melalui Batu Berendam)",
        m10a_detail2: "<strong>Hujung Minggu:</strong> Dilanjutkan ke Zoo Melaka & UTeM",
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
        card_vehicle_btn: "Muat Turun Borang ➔"
    }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Mapped navigation dictionary by data-tab attribute
    const tabNavMap = {
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
        "support-tab": { desktop: t.nav_support, mobile: t.nav_support }
    };

    // 1. Sidebar nav items
    document.querySelectorAll(".sidebar .nav-menu .nav-item").forEach(item => {
        const tab = item.getAttribute("data-tab");
        if (tab && tabNavMap[tab]) {
            updateNodeText(item, tabNavMap[tab].desktop);
        } else if (item.getAttribute("href") === "guides.html") {
            updateNodeText(item, t.nav_guides);
        }
    });

    // 2. Mobile bottom nav buttons & drawer buttons
    document.querySelectorAll(".mobile-bottom-nav .mobile-nav-btn, .mobile-drawer-grid .drawer-item-btn").forEach(btn => {
        const tab = btn.getAttribute("data-tab");
        const span = btn.querySelector("span");
        if (tab && span && tabNavMap[tab]) {
            span.textContent = tabNavMap[tab].mobile;
        } else if (btn.getAttribute("href") === "guides.html" && span) {
            span.textContent = t.mobile_nav_guides;
        }
    });

    // 3. Language toggle buttons
    const desktopToggle = document.getElementById("desktopLangToggle");
    const mobileToggle  = document.getElementById("mobileLangToggle");
    const drawerToggle  = document.getElementById("drawerLangToggle");
    if (desktopToggle) desktopToggle.textContent = lang === "en" ? "Bahasa Melayu" : "English";
    if (mobileToggle)  mobileToggle.textContent  = lang === "en" ? "BM" : "EN";
    if (drawerToggle) {
        const span = drawerToggle.querySelector("span");
        if (span) span.textContent = lang === "en" ? "Bahasa Melayu" : "English";
    }

    const langSwitchLabel = document.getElementById("langSwitchLabel");
    if (langSwitchLabel) langSwitchLabel.textContent = t.lang_label;

    const themeSwitchLabel = document.getElementById("themeSwitchLabel");
    if (themeSwitchLabel) themeSwitchLabel.textContent = t.theme_switcher_label;

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
    if (guides.length >= 3) {
        guides[0].querySelector("strong").textContent = t.guide_anon_title;
        updateNodeText(guides[0], t.guide_anon_desc);
        guides[1].querySelector("strong").textContent = t.guide_respect_title;
        updateNodeText(guides[1], t.guide_respect_desc);
        guides[2].querySelector("strong").textContent = t.guide_spam_title;
        updateNodeText(guides[2], t.guide_spam_desc);
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

    const titleMarketServices = document.getElementById("titleMarketServices");
    if (titleMarketServices) titleMarketServices.textContent = lang === "en" ? "🚘 Student Services Directory" : "🚘 Direktori Perkhidmatan Pelajar";

    const subMarketServices = document.getElementById("subMarketServices");
    if (subMarketServices) subMarketServices.textContent = lang === "en" ? "Campus Runners & Services" : "Pelari Kampus & Perkhidmatan";

    const sellerNoticeMarketplace = document.getElementById("sellerNoticeMarketplace");
    if (sellerNoticeMarketplace) sellerNoticeMarketplace.innerHTML = lang === "en"
        ? '<strong>Want to list items or promote your student services?</strong> Feel free to contact admin email with your details at: <a href="mailto:utemconfessionpromax@duck.com" style="color: var(--accent-gold); font-weight: 700;">utemconfessionpromax@duck.com</a>'
        : '<strong>Ingin menjual barangan terpakai atau mempromosikan servis anda?</strong> Hubungi admin di: <a href="mailto:utemconfessionpromax@duck.com" style="color: var(--accent-gold); font-weight: 700;">utemconfessionpromax@duck.com</a>';

    // 7. Bus Transit (Minggu Semester Khas & Regular)
    const busTitle = document.querySelector("#bus-tab .card-title");
    if (busTitle) updateNodeText(busTitle, t.title_bus_transit || "UTeM Campus Shuttle Timetable (Semester Khas & Regular)");

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
    const titleScholarships = document.querySelector("#scholarships-tab .card-title");
    if (titleScholarships) updateNodeText(titleScholarships, t.title_scholarships);

    const descScholarships = document.getElementById("descScholarships");
    if (descScholarships) descScholarships.textContent = t.desc_scholarships;

    // 13. Archive Takedown Notice
    const noticeArchiveTakedown = document.getElementById("noticeArchiveTakedown");
    if (noticeArchiveTakedown && t.notice_archive_takedown) {
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
    } catch (e) {
        console.warn("Dynamic component translation warning:", e);
    }
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ms" : "en";
    localStorage.setItem("lang", currentLang);
    setLanguage(currentLang);
}
