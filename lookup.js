// lookup.js — Melaka public bus route lookup logic

const lookupDetails = {
    tampin: {
        en: "<strong>Routes M20 &amp; M21:</strong> Service operates between Melaka Sentral and Tampin Bus Terminal via Alor Gajah (and Durian Tunggal for M21). Check schedules and live arrival tracking on the official <a href='https://bas.my/basmymelaka.php' target='_blank' style='color: var(--accent-gold); font-weight: 600;'>bas.my Melaka Portal</a>.",
        ms: "<strong>Laluan M20 &amp; M21:</strong> Perkhidmatan beroperasi antara Melaka Sentral dan Terminal Bas Tampin melalui Alor Gajah (dan Durian Tunggal untuk M21). Semak jadual dan jejak ketibaan langsung di portal rasmi <a href='https://bas.my/basmymelaka.php' target='_blank' style='color: var(--accent-gold); font-weight: 600;'>bas.my Melaka</a>."
    },
    jasin: {
        en: "<strong>Route M32:</strong> Connects Melaka Sentral to Jasin Bus Terminal. Operates daily under the BAS.MY network by Handal Indah. Information sourced from the official <a href='https://www.causewaylink.com.my/BAS.MY-Melaka/' target='_blank' style='color: var(--accent-gold); font-weight: 600;'>Causeway Link Melaka Portal</a>.",
        ms: "<strong>Laluan M32:</strong> Menghubungkan Melaka Sentral ke Terminal Bas Jasin. Beroperasi setiap hari di bawah rangkaian BAS.MY oleh Handal Indah. Maklumat diperoleh dari <a href='https://www.causewaylink.com.my/BAS.MY-Melaka/' target='_blank' style='color: var(--accent-gold); font-weight: 600;'>Portal Melaka Causeway Link</a>."
    },
    klebang: {
        en: "<strong>Route M15 (Pulau Gadong):</strong> Public bus route departing from Melaka Sentral serving Pulau Gadong, passing through Klebang-adjacent districts. Check full coverage maps on <a href='https://bas.my/basmymelaka.php' target='_blank' style='color: var(--accent-gold); font-weight: 600;'>bas.my Melaka</a>.",
        ms: "<strong>Laluan M15 (Pulau Gadong):</strong> Laluan bas awam dari Melaka Sentral yang melayani Pulau Gadong dan melalui kawasan berhampiran Klebang. Semak peta liputan penuh di <a href='https://bas.my/basmymelaka.php' target='_blank' style='color: var(--accent-gold); font-weight: 600;'>bas.my Melaka</a>."
    },
    payaluboh: {
        en: "<strong>Route M16:</strong> Connects Melaka Sentral to Paya Luboh, serving local communities along the route daily. Detailed schedules available on <a href='https://www.causewaylink.com.my/BAS.MY-Melaka/' target='_blank' style='color: var(--accent-gold); font-weight: 600;'>Causeway Link Melaka</a>.",
        ms: "<strong>Laluan M16:</strong> Menghubungkan Melaka Sentral ke Paya Luboh, memberi khidmat kepada komuniti tempatan setiap hari. Jadual terperinci boleh didapati di <a href='https://www.causewaylink.com.my/BAS.MY-Melaka/' target='_blank' style='color: var(--accent-gold); font-weight: 600;'>Causeway Link Melaka</a>."
    }
};

// Event listener wired up in script.js init after DOMContentLoaded
