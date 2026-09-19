// parcels.js — UTeM Parcel Hub, Unit Mel Operating Hours & Multi-Courier Tracking Engine

(function () {
    'use strict';

    let unitMelIntervalId = null;

    document.addEventListener('DOMContentLoaded', () => {
        const hostelSelect = document.getElementById('hostelSelect');
        const nameInput = document.getElementById('studentNameInput');
        const matricInput = document.getElementById('studentMatricInput');
        const phoneInput = document.getElementById('studentPhoneInput');
        const roomInput = document.getElementById('studentRoomInput');
        const preview = document.getElementById('addressPreviewText');
        const copyBtn = document.getElementById('copyAddressBtn');

        const trackingInput = document.getElementById('trackingNumberInput');
        const courierSelect = document.getElementById('courierSelect');
        const trackBtn = document.getElementById('trackPackageBtn');

        const PARCEL_PROFILE_KEY = 'ucpm_parcel_profile';

        function saveParcelProfile() {
            try {
                const profile = {
                    hostel: hostelSelect ? hostelSelect.value : 'satria',
                    name: nameInput ? nameInput.value : '',
                    matric: matricInput ? matricInput.value : '',
                    phone: phoneInput ? phoneInput.value : '',
                    room: roomInput ? roomInput.value : ''
                };
                localStorage.setItem(PARCEL_PROFILE_KEY, JSON.stringify(profile));
            } catch (e) {}
        }

        function loadParcelProfile() {
            try {
                const saved = localStorage.getItem(PARCEL_PROFILE_KEY);
                if (saved) {
                    const profile = JSON.parse(saved);
                    if (profile) {
                        if (profile.hostel && hostelSelect) hostelSelect.value = profile.hostel;
                        if (profile.name && nameInput) nameInput.value = profile.name;
                        if (profile.matric && matricInput) matricInput.value = profile.matric;
                        if (profile.phone && phoneInput) phoneInput.value = profile.phone;
                        if (profile.room && roomInput) roomInput.value = profile.room;
                    }
                }
            } catch (e) {}
        }

        // 1. Address Generator Logic
        function updateAddressPreview() {
            if (!hostelSelect || !preview) return;
            const hostel = hostelSelect.value;
            const isMs = (typeof currentLang !== 'undefined' && currentLang === 'ms') || window.currentLang === 'ms' || document.documentElement.lang === 'ms';
            const name = (nameInput && nameInput.value.trim()) || (isMs ? '[Nama Anda]' : '[Your Name]');
            const matric = (matricInput && matricInput.value.trim()) ? ` (Matrik: ${matricInput.value.trim()})` : '';
            const phone = (phoneInput && phoneInput.value.trim()) ? `Tel: ${phoneInput.value.trim()}` : (isMs ? 'Tel: [No. Telefon]' : 'Tel: [Your Phone]');
            const room = (roomInput && roomInput.value.trim()) || (isMs ? '[No. Blok & Bilik]' : '[Block & Room No.]');

            let formatted = '';

            if (hostel === 'satria') {
                formatted = `${name}${matric}\n${room}, Kolej Kediaman Satria\nc/o Unit Mel, Pusat Persatuan Pelajar\nUniversiti Teknikal Malaysia Melaka (UTeM)\nHang Tuah Jaya, 76100 Durian Tunggal, Melaka\n${phone}`;
            } else if (hostel === 'lestari') {
                formatted = `${name}${matric}\n${room}, Kolej Kediaman Lestari\nc/o Unit Mel, Pusat Persatuan Pelajar\nUniversiti Teknikal Malaysia Melaka (UTeM)\nHang Tuah Jaya, 76100 Durian Tunggal, Melaka\n${phone}`;
            } else if (hostel === 'emerald') {
                formatted = `${name}${matric}\n${room}, Pangsapuri Emerald Park\nJalan Durian Tunggal / Ayer Keroh\n76100 Durian Tunggal, Melaka\n${phone}`;
            } else if (hostel === 'kt') {
                formatted = `${name}${matric}\n${room}, Kampus Teknologi UTeM\nUniversiti Teknikal Malaysia Melaka\nHang Tuah Jaya, 76100 Durian Tunggal, Melaka\n${phone}`;
            }

            preview.textContent = formatted;
        }

        loadParcelProfile();

        [hostelSelect, nameInput, matricInput, phoneInput, roomInput].forEach(el => {
            if (el) {
                el.addEventListener('input', () => {
                    updateAddressPreview();
                    saveParcelProfile();
                });
                if (el.tagName === 'SELECT') {
                    el.addEventListener('change', () => {
                        updateAddressPreview();
                        saveParcelProfile();
                    });
                }
            }
        });
        updateAddressPreview();

        // 2. Copy Address Action
        if (copyBtn && preview) {
            copyBtn.addEventListener('click', () => {
                saveParcelProfile();
                const text = preview.textContent;
                const isMs = (typeof currentLang !== 'undefined' && currentLang === 'ms') || window.currentLang === 'ms' || document.documentElement.lang === 'ms';
                const successMsg = isMs
                    ? 'Alamat penghantaran disalin ke papan klip! Sedia ditampal di Shopee/TikTok.'
                    : 'Shipping address copied to clipboard! Ready to paste into Shopee/TikTok.';
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => {
                        if (typeof showToast === 'function') {
                            showToast(successMsg, 'success', 3500);
                        } else {
                            alert(successMsg);
                        }
                    }).catch(() => {
                        copyFallback(text, successMsg);
                    });
                } else {
                    copyFallback(text, successMsg);
                }
            });
        }

        function copyFallback(text, msg) {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            if (typeof showToast === 'function') {
                showToast(msg, 'success', 3500);
            } else {
                alert(msg);
            }
        }

        // 3. Multi-Courier Tracking Handler
        if (trackBtn && trackingInput) {
            trackBtn.addEventListener('click', () => {
                const trNum = trackingInput.value.trim();
                const isMs = (typeof currentLang !== 'undefined' && currentLang === 'ms') || window.currentLang === 'ms' || document.documentElement.lang === 'ms';
                if (!trNum) {
                    const warnMsg = isMs ? 'Sila tampal nombor penjejakan terlebih dahulu.' : 'Please paste a valid tracking number first.';
                    if (typeof showToast === 'function') {
                        showToast(warnMsg, 'warning', 3000);
                    } else {
                        alert(warnMsg);
                    }
                    return;
                }

                let carrier = courierSelect ? courierSelect.value : 'auto';
                const upper = trNum.toUpperCase();

                if (carrier === 'auto') {
                    if (upper.startsWith('SPXMY') || upper.startsWith('MY')) {
                        carrier = 'spx';
                    } else if (upper.startsWith('600') || upper.startsWith('JNT') || /^\d{12}$/.test(upper)) {
                        carrier = 'jnt';
                    } else if (upper.startsWith('ER') || upper.startsWith('CP') || upper.startsWith('EN')) {
                        carrier = 'poslaju';
                    } else if (upper.startsWith('TH') || upper.startsWith('FL')) {
                        carrier = 'flash';
                    } else {
                        carrier = 'spx'; // Default fallback
                    }
                }

                let trackUrl = '';
                if (carrier === 'spx') {
                    trackUrl = `https://spx.com.my/track?tracking_number=${encodeURIComponent(trNum)}`;
                } else if (carrier === 'jnt') {
                    trackUrl = `https://www.jtexpress.my/tracking?bills=${encodeURIComponent(trNum)}`;
                } else if (carrier === 'poslaju') {
                    trackUrl = `https://www.pos.com.my/tracking?trackingNo=${encodeURIComponent(trNum)}`;
                } else if (carrier === 'flash') {
                    trackUrl = `https://flashexpress.my/tracking/?se=${encodeURIComponent(trNum)}`;
                } else if (carrier === 'ninjavan') {
                    trackUrl = `https://www.ninjavan.co/en-my/tracking?id=${encodeURIComponent(trNum)}`;
                } else if (carrier === 'dhl') {
                    trackUrl = `https://ecommerceportal.dhl.com/track/?jobCodes=${encodeURIComponent(trNum)}`;
                }

                if (trackUrl) {
                    window.open(trackUrl, '_blank', 'noopener,noreferrer');
                }
            });
        }

        // 4. Live Unit Mel Status Smart Pill
        const parcelHolidays = {
            "2026-08-31": { en: "National Day", ms: "Hari Kebangsaan" },
            "2026-09-16": { en: "Malaysia Day", ms: "Hari Malaysia" },
            "2026-09-24": { en: "Maulidur Rasul", ms: "Maulidur Rasul" },
            "2026-11-08": { en: "Deepavali", ms: "Hari Deepavali" },
            "2026-12-25": { en: "Christmas Day", ms: "Hari Krismas" },
            "2027-01-01": { en: "New Year's Day", ms: "Tahun Baru 2027" },
            "2027-02-06": { en: "Chinese New Year", ms: "Tahun Baru Cina" },
            "2027-02-07": { en: "Chinese New Year", ms: "Tahun Baru Cina" },
            "2027-03-09": { en: "Hari Raya Aidilfitri", ms: "Hari Raya Aidilfitri" },
            "2027-03-10": { en: "Hari Raya Aidilfitri", ms: "Hari Raya Aidilfitri" },
            "2027-05-01": { en: "Labour Day", ms: "Hari Pekerja" },
            "2027-05-20": { en: "Wesak Day", ms: "Hari Wesak" }
        };

        function updateUnitMelStatus() {
            const pill = document.getElementById('parcelHoursPill');
            const pillIcon = document.getElementById('parcelPillIcon');
            const pillText = document.getElementById('parcelPillText');
            const pillBadge = document.getElementById('parcelPillBadge');
            if (!pill || !pillText) return;

            const isMs = (typeof currentLang !== 'undefined' && currentLang === 'ms') || window.currentLang === 'ms' || document.documentElement.lang === 'ms';
            const now = new Date();

            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const dayOfMonth = String(now.getDate()).padStart(2, '0');
            const dateKey = `${year}-${month}-${dayOfMonth}`;

            const day = now.getDay(); // 0 = Sun, 5 = Fri, 6 = Sat
            const timeMinutes = now.getHours() * 60 + now.getMinutes();

            function applyPill(glowClass, iconChar, textStr, badgeText, badgeBg, badgeColor) {
                pill.classList.remove('glow-parcel-open', 'glow-parcel-closed');
                pill.classList.add(glowClass);
                if (pillIcon) pillIcon.textContent = iconChar;
                pillText.textContent = textStr;
                if (pillBadge) {
                    pillBadge.textContent = badgeText;
                    pillBadge.style.background = badgeBg;
                    pillBadge.style.color = badgeColor;
                }
            }

            // Case 1: Public Holidays
            const holiday = parcelHolidays[dateKey];
            if (holiday) {
                const hName = isMs ? holiday.ms : holiday.en;
                applyPill(
                    'glow-parcel-closed',
                    '\u{1F512}',
                    isMs ? `Ditutup Hari Ini \u00B7 ${hName}` : `Closed Today \u00B7 ${hName}`,
                    isMs ? 'Cuti Am' : 'Holiday',
                    'rgba(239, 68, 68, 0.15)',
                    '#ef4444'
                );
                return;
            }

            // Case 2: Weekends (Saturday & Sunday)
            if (day === 0 || day === 6) {
                applyPill(
                    'glow-parcel-closed',
                    '\u{1F512}',
                    isMs ? 'Ditutup Hari Ini \u00B7 Dibuka Isnin 8:00 PG' : 'Closed Today \u00B7 Reopens Mon 8:00 AM',
                    isMs ? 'Hujung Minggu' : 'Weekend',
                    'rgba(148, 163, 184, 0.15)',
                    '#94a3b8'
                );
                return;
            }

            // Case 3: Before 8:00 AM
            if (timeMinutes < 480) {
                applyPill(
                    'glow-parcel-closed',
                    '\u23F3',
                    isMs ? 'Ditutup \u00B7 Dibuka Hari Ini 8:00 PG' : 'Closed \u00B7 Opens Today at 8:00 AM',
                    isMs ? 'Ditutup' : 'Closed',
                    'rgba(148, 163, 184, 0.15)',
                    '#94a3b8'
                );
                return;
            }

            // Case 4: Friday Prayer Break (12:15 PM - 2:45 PM)
            if (day === 5 && timeMinutes >= 735 && timeMinutes < 885) {
                applyPill(
                    'glow-parcel-closed',
                    '\u23F3',
                    isMs ? 'Rehat Solat Jumaat \u00B7 Dibuka 2:45 PTG' : 'Friday Prayer Break \u00B7 Reopens 2:45 PM',
                    isMs ? 'Solat Jumaat' : 'Prayer Break',
                    'rgba(234, 179, 8, 0.15)',
                    '#eab308'
                );
                return;
            }

            // Case 5: Mon - Thu Lunch Break (1:00 PM - 2:00 PM)
            if (day >= 1 && day <= 4 && timeMinutes >= 780 && timeMinutes < 840) {
                applyPill(
                    'glow-parcel-closed',
                    '\u23F3',
                    isMs ? 'Rehat Harian \u00B7 Dibuka 2:00 PTG' : 'Daily Rest Break \u00B7 Reopens 2:00 PM',
                    isMs ? 'Waktu Rehat' : 'Rest Break',
                    'rgba(234, 179, 8, 0.15)',
                    '#eab308'
                );
                return;
            }

            // Case 6: Open Operating Hours (8:00 AM - 5:00 PM)
            if (timeMinutes < 1020) {
                if (day === 5 && timeMinutes < 735) {
                    applyPill(
                        'glow-parcel-open',
                        '\u{1F4E6}',
                        isMs ? 'Dibuka Hari Ini \u00B7 8:00 PG \u2013 12:15 PTG' : 'Open Today \u00B7 8:00 AM \u2013 12:15 PM',
                        isMs ? 'Dibuka' : 'Open',
                        'rgba(16, 185, 129, 0.15)',
                        '#10b981'
                    );
                } else if (day === 5 && timeMinutes >= 885) {
                    applyPill(
                        'glow-parcel-open',
                        '\u{1F4E6}',
                        isMs ? 'Dibuka Hari Ini \u00B7 2:45 PTG \u2013 5:00 PTG' : 'Open Today \u00B7 2:45 PM \u2013 5:00 PM',
                        isMs ? 'Dibuka' : 'Open',
                        'rgba(16, 185, 129, 0.15)',
                        '#10b981'
                    );
                } else {
                    applyPill(
                        'glow-parcel-open',
                        '\u{1F4E6}',
                        isMs ? 'Dibuka Hari Ini \u00B7 8:00 PG \u2013 5:00 PTG' : 'Open Today \u00B7 8:00 AM \u2013 5:00 PM',
                        isMs ? 'Dibuka' : 'Open',
                        'rgba(16, 185, 129, 0.15)',
                        '#10b981'
                    );
                }
                return;
            }

            // Case 7: Evening After Closing (5:00 PM onwards)
            if (day === 5) {
                applyPill(
                    'glow-parcel-closed',
                    '\u{1F512}',
                    isMs ? 'Ditutup \u00B7 Dibuka Isnin 8:00 PG' : 'Closed \u00B7 Reopens Mon 8:00 AM',
                    isMs ? 'Ditutup' : 'Closed',
                    'rgba(148, 163, 184, 0.15)',
                    '#94a3b8'
                );
            } else {
                applyPill(
                    'glow-parcel-closed',
                    '\u{1F512}',
                    isMs ? 'Ditutup Malam Ini \u00B7 Dibuka 8:00 PG' : 'Closed Tonight \u00B7 Reopens 8:00 AM',
                    isMs ? 'Ditutup' : 'Closed',
                    'rgba(148, 163, 184, 0.15)',
                    '#94a3b8'
                );
            }
        }

        // Click-to-scroll down to Unit Mel Pickup Hours card
        const parcelPill = document.getElementById('parcelHoursPill');
        if (parcelPill && !parcelPill.dataset.listenerAttached) {
            parcelPill.dataset.listenerAttached = 'true';
            parcelPill.addEventListener('click', () => {
                const target = document.getElementById('titlePickupHours');
                if (target) {
                    const card = target.closest('.card');
                    if (card) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.style.boxShadow = '0 0 0 3px rgba(var(--accent-gold-rgb), 0.45)';
                        card.style.transition = 'box-shadow 0.3s ease';
                        setTimeout(() => { card.style.boxShadow = ''; }, 1500);
                    }
                }
            });
        }

        window.updateUnitMelStatus = updateUnitMelStatus;
        updateUnitMelStatus();

        if (!unitMelIntervalId) {
            unitMelIntervalId = setInterval(updateUnitMelStatus, 60000);
        }

        window.addEventListener('languageChanged', () => {
            updateUnitMelStatus();
            updateAddressPreview();
        });

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) updateUnitMelStatus();
        });
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) updateUnitMelStatus();
        });
    });
})();
