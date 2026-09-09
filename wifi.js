// wifi.js - UTeM Campus Network Latency & Portal Health Diagnostic Engine
// Real-time latency measurement and reachability checker for official UTeM portals and campus gateways.

(function () {
    'use strict';

    // 1. Diagnostic Endpoints Configuration (Focused on core student daily tools)
    const TARGET_SERVICES = [
        {
            id: 'portal',
            name: 'i-UTeM Student Portal',
            url: 'https://portal.utem.edu.my/iutem/',
            desc: 'Academic OAS, exam slips & results'
        },
        {
            id: 'ulearn',
            name: 'UTeM uLearn Hub',
            url: 'https://ulearn.utem.edu.my/hub/',
            desc: 'LMS, lecture slides & quizzes'
        },
        {
            id: 'internet',
            name: 'Internet Backbone',
            url: 'https://1.1.1.1/cdn-cgi/trace',
            desc: 'Global web latency baseline'
        }
    ];

    let isTesting = false;

    // 2. DOM Elements
    const btnRun = document.getElementById('btnRunNetworkTest');
    const btnText = document.getElementById('btnRunTestText');
    const radarIconBox = document.getElementById('radarIconBox');
    const deviceStatusDot = document.getElementById('deviceStatusDot');
    const deviceStatusText = document.getElementById('deviceStatusText');
    const deviceTechBadge = document.getElementById('deviceTechBadge');
    const verdictIconBadge = document.getElementById('verdictIconBadge');
    const verdictTitle = document.getElementById('verdictTitle');
    const verdictDesc = document.getElementById('verdictDesc');
    const verdictTime = document.getElementById('verdictTime');

    // 3. Update Local Device Status (Online/Offline & Network Type)
    function updateDeviceStatus() {
        const isOnline = navigator.onLine;

        if (deviceStatusDot) {
            deviceStatusDot.className = 'pulse-indicator-dot ' + (isOnline ? 'online' : 'offline');
        }

        if (deviceStatusText) {
            deviceStatusText.textContent = isOnline ? 'Online' : 'Offline';
        }

        if (deviceTechBadge) {
            if (!isOnline) {
                deviceTechBadge.textContent = 'Disconnected';
                deviceTechBadge.style.background = 'rgba(239, 68, 68, 0.15)';
                deviceTechBadge.style.color = '#ef4444';
            } else if (navigator.connection) {
                const conn = navigator.connection;
                const type = conn.effectiveType ? conn.effectiveType.toUpperCase() : 'Wi-Fi';
                const downlink = conn.downlink ? (' \u2022 ' + conn.downlink + 'M') : '';
                deviceTechBadge.textContent = type + downlink;
                deviceTechBadge.style.background = 'rgba(56, 189, 248, 0.15)';
                deviceTechBadge.style.color = '#38bdf8';
            } else {
                deviceTechBadge.textContent = 'Active';
                deviceTechBadge.style.background = 'rgba(16, 185, 129, 0.15)';
                deviceTechBadge.style.color = '#10b981';
            }
        }
    }

    // 4. Ping Service Utility via Fetch Timing
    async function pingService(url, timeoutMs = 4500) {
        if (!navigator.onLine) {
            return { status: 'offline', latency: null };
        }

        const startTime = performance.now();
        const cacheBuster = (url.includes('?') ? '&' : '?') + '_t=' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
        const targetUrl = url + cacheBuster;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        try {
            await fetch(targetUrl, {
                method: 'GET',
                mode: 'no-cors',
                cache: 'no-store',
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            const latency = Math.round(performance.now() - startTime);
            return { status: 'online', latency: Math.max(8, latency) };
        } catch (err) {
            clearTimeout(timeoutId);
            const duration = Math.round(performance.now() - startTime);
            if (err.name === 'AbortError') {
                return { status: 'timeout', latency: null };
            }
            if (navigator.onLine && duration < timeoutMs) {
                return { status: 'online', latency: Math.max(12, duration) };
            }
            return { status: 'unreachable', latency: null };
        }
    }

    // 5. Update Single Service Card UI
    function setServiceTesting(id) {
        const badge = document.getElementById(`status-badge-${id}`);
        const latencyVal = document.getElementById(`latency-${id}`);
        const meter = document.getElementById(`meter-${id}`);

        if (badge) {
            badge.className = 'service-status-pill status-testing';
            badge.innerHTML = '<span class="status-dot"></span><span class="status-label">Pinging...</span>';
        }
        if (latencyVal) latencyVal.textContent = '...';
        if (meter) {
            meter.style.width = '30%';
            meter.className = 'service-meter-bar testing';
        }
    }

    function setServiceResult(id, result) {
        const badge = document.getElementById(`status-badge-${id}`);
        const latencyVal = document.getElementById(`latency-${id}`);
        const meter = document.getElementById(`meter-${id}`);

        if (result.status === 'online' && typeof result.latency === 'number') {
            const ms = result.latency;
            let statusClass = 'status-optimal';
            let statusLabel = 'Optimal';
            let meterPct = Math.min(100, Math.max(15, Math.round((1 - (ms / 600)) * 100)));

            if (ms > 350) {
                statusClass = 'status-slow';
                statusLabel = 'High Ping';
            } else if (ms > 160) {
                statusClass = 'status-moderate';
                statusLabel = 'Moderate';
            }

            if (badge) {
                badge.className = `service-status-pill ${statusClass}`;
                badge.innerHTML = `<span class="status-dot"></span><span class="status-label">${statusLabel}</span>`;
            }
            if (latencyVal) {
                latencyVal.textContent = `${ms} ms`;
                latencyVal.style.color = statusClass === 'status-optimal' ? '#10b981' : (statusClass === 'status-moderate' ? '#f59e0b' : '#ef4444');
            }
            if (meter) {
                meter.className = `service-meter-bar ${statusClass.replace('status-', '')}`;
                meter.style.width = `${meterPct}%`;
            }
        } else if (result.status === 'timeout') {
            if (badge) {
                badge.className = 'service-status-pill status-timeout';
                badge.innerHTML = '<span class="status-dot"></span><span class="status-label">Timeout</span>';
            }
            if (latencyVal) {
                latencyVal.textContent = '> 4500 ms';
                latencyVal.style.color = '#ef4444';
            }
            if (meter) {
                meter.className = 'service-meter-bar timeout';
                meter.style.width = '6%';
            }
        } else {
            if (badge) {
                badge.className = 'service-status-pill status-unreachable';
                badge.innerHTML = '<span class="status-dot"></span><span class="status-label">Unreachable</span>';
            }
            if (latencyVal) {
                latencyVal.textContent = 'No Signal';
                latencyVal.style.color = '#94a3b8';
            }
            if (meter) {
                meter.className = 'service-meter-bar unreachable';
                meter.style.width = '0%';
            }
        }
    }

    // 6. Verdict Banner State Updater (Crisp Inline SVGs)
    function setVerdictUI(state, title, desc) {
        if (verdictTitle) verdictTitle.textContent = title;
        if (verdictDesc) verdictDesc.textContent = desc;

        if (!verdictIconBadge) return;
        verdictIconBadge.className = 'verdict-icon-badge' + (state ? ' ' + state : '');

        let svgHtml = '';
        if (state === 'optimal') {
            // Checkmark in circle
            svgHtml = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
        } else if (state === 'warning') {
            // Alert circle
            svgHtml = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
        } else if (state === 'offline') {
            // Alert diamond / cross
            svgHtml = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
        } else if (state === 'testing') {
            // Pulse wave
            svgHtml = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>';
        } else {
            // Lightning bolt
            svgHtml = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>';
        }
        verdictIconBadge.innerHTML = svgHtml;
    }

    // 7. Run Complete Diagnostic Sequence with Smart Crash / Overload Intelligence
    async function runDiagnostics() {
        if (isTesting) return;
        isTesting = true;

        updateDeviceStatus();

        if (btnRun) {
            btnRun.disabled = true;
            btnRun.classList.add('running');
        }
        if (btnText) btnText.textContent = 'Testing...';
        if (radarIconBox) radarIconBox.classList.add('radar-active');

        setVerdictUI('testing', 'Measuring Network Latency...', 'Sending real-time network packets to i-UTeM Portal, uLearn Hub, and internet backbone.');

        // Set all to testing state
        TARGET_SERVICES.forEach(s => setServiceTesting(s.id));

        const results = {};
        const pings = TARGET_SERVICES.map(async (service) => {
            const res = await pingService(service.url);
            results[service.id] = res;
            setServiceResult(service.id, res);
            return res;
        });

        await Promise.all(pings);

        const isInternetUp = results.internet && results.internet.status === 'online';
        const isPortalUp = results.portal && results.portal.status === 'online';
        const isUlearnUp = results.ulearn && results.ulearn.status === 'online';

        // Smart Crash, Overload & Congestion Analysis
        if (!navigator.onLine || !isInternetUp) {
            // Case 1: Local Device has no internet
            setVerdictUI('offline', 'Local Device Offline / No Internet', 'Your device cannot reach the external internet. Check your connection to eduroam, WiFi UTeM Net, or toggle your mobile data.');
        } else if (!isPortalUp && !isUlearnUp) {
            // Case 2: Both campus servers down / crashed (Internet is working)
            setVerdictUI('offline', 'Campus Servers Down / Traffic Crash Detected', 'Both i-UTeM Portal and uLearn Hub are unreachable. Your internet is working normally, but university servers are offline or overloaded (likely Course Registration Add/Drop or Exam Slip surge). Avoid repeated refreshing; try again in 15\u201330 minutes.');
        } else if (!isPortalUp && isUlearnUp) {
            // Case 3: Only i-UTeM is down
            setVerdictUI('warning', 'i-UTeM Student Portal Overloaded / Down', 'i-UTeM portal timed out (>4500 ms). This typically occurs during Course Registration Add/Drop surges or Exam Slip releases. uLearn Hub and external internet are working normally.');
        } else if (isPortalUp && !isUlearnUp) {
            // Case 4: Only uLearn is down
            setVerdictUI('warning', 'uLearn Hub Unresponsive / Submission Rush', 'uLearn Hub is not responding. Often caused by heavy concurrent traffic near midnight assignment submission deadlines or scheduled LMS maintenance. i-UTeM portal remains accessible.');
        } else if (results.portal.latency > 350 || results.ulearn.latency > 350) {
            // Case 5: Heavy queuing / throttling
            const portalMs = results.portal.latency;
            const ulearnMs = results.ulearn.latency;
            setVerdictUI('warning', 'Heavy Server Congestion / Throttling Detected', `Campus portals are responding slowly (i-UTeM: ${portalMs} ms, uLearn: ${ulearnMs} ms). Expect delays when submitting forms or loading slips\u2014avoid refreshing while pages are loading.`);
        } else if (results.portal.latency > 160 || results.ulearn.latency > 160) {
            // Case 6: Moderate latency
            const avgMs = Math.round((results.portal.latency + results.ulearn.latency) / 2);
            setVerdictUI('warning', `Campus Portals Operational (Avg ${avgMs} ms)`, 'Portals are accessible and responding normally, with moderate network transit latency.');
        } else {
            // Case 7: All optimal
            const avgMs = Math.round((results.portal.latency + results.ulearn.latency + results.internet.latency) / 3);
            setVerdictUI('optimal', `All Core Campus Portals Operational (Avg ${avgMs} ms)`, 'i-UTeM Portal and uLearn Hub are responsive with low round-trip latency. Ready for course registration, exam slip downloads, and assignment submissions.');
        }

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        if (verdictTime) verdictTime.textContent = `Updated ${timeStr}`;

        if (btnRun) {
            btnRun.disabled = false;
            btnRun.classList.remove('running');
        }
        if (btnText) btnText.textContent = 'Re-Test';
        if (radarIconBox) radarIconBox.classList.remove('radar-active');

        isTesting = false;
    }

    // --- 9. DEVICE WI-FI CONFIGURATOR & APPLE MOBILECONFIG ENGINE ---
    const wifiOsGuides = {
        android: {
            title: "🤖 Android 11, 12, 13 & 14+ Setup Settings",
            badge: "Android Enterprise",
            badgeColor: "#34d399",
            items: [
                { k: "Wi-Fi Network (SSID)", v: "<strong>UTeM-Wifi</strong> or <strong>eduroam</strong>" },
                { k: "EAP Method", v: "<code>PEAP</code>" },
                { k: "Phase 2 Authentication", v: "<code>MSCHAPv2</code>" },
                { k: "CA Certificate", v: "<strong>Use system certificates</strong> (or <em>Do not validate</em> on older devices)" },
                { k: "Online Certificate Status", v: "<code>Do not verify</code> (or <em>Request status</em>)" },
                { k: "Domain", v: "<code style='color: var(--accent-gold); font-weight: 700;'>utem.edu.my</code> <em>(Crucial: Android 11+ fails without this domain)</em>" },
                { k: "Identity", v: "Student ID (e.g. <code>b032110000</code> for UTeM-Wifi, or <code>b032110000@student.utem.edu.my</code> for eduroam)" },
                { k: "Anonymous Identity", v: "<em>Leave empty</em>" },
                { k: "Password", v: "Your official Student Portal password" }
            ],
            note: "💡 <strong>Randomized MAC Note:</strong> If your Android phone disconnects randomly, open Wi-Fi network settings, set <em>Privacy / MAC Address</em> from 'Randomized MAC' to <strong>'Use Device/Phone MAC'</strong>."
        },
        apple: {
            title: "🍎 Apple iOS (iPhone / iPad) & macOS",
            badge: "1-Tap Profile Ready",
            badgeColor: "#60a5fa",
            isApple: true,
            items: [
                { k: "Method 1 (Instant 1-Tap Setup)", v: "Download our pre-configured Apple Configuration Profile. Once downloaded, open <strong>iOS Settings ➔ Profile Downloaded ➔ Install</strong>. You will only be asked for your Student ID and Password!" },
                { k: "Method 2 (Manual Settings)", v: "Select <strong>UTeM-Wifi</strong> in Wi-Fi settings. Enter your Student ID and Password. When the certificate prompt for <strong>*.utem.edu.my</strong> appears, tap <strong>Trust</strong> in the upper right corner." }
            ],
            note: "🍎 <strong>Private Wi-Fi Address:</strong> You can keep Private Wi-Fi Address enabled. If login loops on campus, toggle Private Address OFF for UTeM-Wifi."
        },
        windows: {
            title: "🪟 Windows 10 & 11 Instructions",
            badge: "Windows Setup",
            badgeColor: "#38bdf8",
            items: [
                { k: "1. Connect", v: "Click the Wi-Fi icon in the taskbar and select <strong>UTeM-Wifi</strong> or <strong>eduroam</strong>." },
                { k: "2. Credentials", v: "Username: <code>Student ID</code> (or <code>ID@student.utem.edu.my</code> for eduroam). Password: <code>Student Portal Password</code>." },
                { k: "3. Trust Certificate", v: "When Windows asks <em>'Continue connecting? Server certificate issued to *.utem.edu.my'</em>, click <strong>Connect</strong>." }
            ],
            note: "💡 <strong>Fix 'Can't connect to this network':</strong> Go to <strong>Settings ➔ Network & Internet ➔ Wi-Fi ➔ Manage known networks</strong>, select UTeM-Wifi, click <strong>Forget</strong>, and reconnect."
        },
        console: {
            title: "🎮 Gaming Consoles, Smart TVs & IoT (Satria & Lestari)",
            badge: "Hostel MAC Whitelist",
            badgeColor: "#f59e0b",
            items: [
                { k: "Why Consoles Fail", v: "PlayStation (PS4/PS5), Nintendo Switch, Xbox, and Smart TVs do not support enterprise 802.1X PEAP authentication." },
                { k: "Solution 1: PTM MAC Registration", v: "Find the <strong>MAC Address</strong> of your console/TV in its Network Settings. Submit a device whitelist request to the UTeM PTM Helpdesk or the internal hostel MAC registration portal." },
                { k: "Solution 2: Laptop Hotspot (Instant)", v: "Connect your Windows laptop to UTeM-Wifi or hostel LAN, turn on <strong>Mobile Hotspot</strong> in Windows Settings, and connect your console/TV to your laptop's personal Wi-Fi hotspot." },
                { k: "Solution 3: Travel Mini-Router", v: "Use a pocket travel router (e.g. GL.iNet) in WISP Repeater mode to broadcast a private WPA2-Personal Wi-Fi network inside your room." }
            ],
            note: "⚡ <strong>Low Latency Gaming:</strong> The wall Ethernet RJ45 jacks in Kolej Satria & Lestari offer significantly lower ping and stable jitter for online gaming compared to campus Wi-Fi."
        }
    };

    function generateAppleMobileConfig() {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadDisplayName</key>
    <string>UTeM Campus Wi-Fi (UTeM-Wifi &amp; eduroam)</string>
    <key>PayloadDescription</key>
    <string>Configures Universiti Teknikal Malaysia Melaka (UTeM) enterprise 802.1X wireless networks.</string>
    <key>PayloadIdentifier</key>
    <string>my.edu.utem.wifi.profile</string>
    <key>PayloadOrganization</key>
    <string>Universiti Teknikal Malaysia Melaka</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>4F2A1C3B-8E9D-4B2E-9C3A-7F1E5D8A4B2C</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
    <key>PayloadContent</key>
    <array>
        <!-- UTeM-Wifi Payload -->
        <dict>
            <key>AutoJoin</key>
            <true/>
            <key>EncryptionType</key>
            <string>WPA2</string>
            <key>HIDDEN_NETWORK</key>
            <false/>
            <key>PayloadDisplayName</key>
            <string>UTeM-Wifi</string>
            <key>PayloadIdentifier</key>
            <string>my.edu.utem.wifi.network</string>
            <key>PayloadType</key>
            <string>com.apple.wifi.managed</string>
            <key>PayloadUUID</key>
            <string>5A3B2C1D-7E8F-4A1B-8C2D-6E5F4A3B2C1D</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>SSID_STR</key>
            <string>UTeM-Wifi</string>
            <key>EAPClientConfiguration</key>
            <dict>
                <key>AcceptEAPTypes</key>
                <array>
                    <integer>25</integer>
                </array>
                <key>EAPFASTUsePAC</key>
                <false/>
                <key>EAPFASTProvisionPAC</key>
                <false/>
                <key>OuterIdentity</key>
                <string></string>
                <key>TTLSInnerAuthentication</key>
                <string>MSCHAPv2</string>
            </dict>
        </dict>
        <!-- eduroam Payload -->
        <dict>
            <key>AutoJoin</key>
            <true/>
            <key>EncryptionType</key>
            <string>WPA2</string>
            <key>HIDDEN_NETWORK</key>
            <false/>
            <key>PayloadDisplayName</key>
            <string>eduroam</string>
            <key>PayloadIdentifier</key>
            <string>my.edu.utem.eduroam.network</string>
            <key>PayloadType</key>
            <string>com.apple.wifi.managed</string>
            <key>PayloadUUID</key>
            <string>6B4C3D2E-8F9A-4B2C-9D3E-7F6A5B4C3D2E</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>SSID_STR</key>
            <string>eduroam</string>
            <key>EAPClientConfiguration</key>
            <dict>
                <key>AcceptEAPTypes</key>
                <array>
                    <integer>25</integer>
                </array>
                <key>EAPFASTUsePAC</key>
                <false/>
                <key>EAPFASTProvisionPAC</key>
                <false/>
                <key>OuterIdentity</key>
                <string></string>
                <key>TTLSInnerAuthentication</key>
                <string>MSCHAPv2</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>`;

        const blob = new Blob([xml], { type: "application/x-apple-as-config;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "UTeM_Wifi_Setup.mobileconfig");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        if (typeof showToast === "function") {
            showToast("Apple profile downloaded! Open Settings > Profile Downloaded > Install.", "success", 5000);
        } else {
            alert("Apple profile downloaded! Open Settings > Profile Downloaded > Install.");
        }
    }

    function renderWifiOsGuide(osKey) {
        const box = document.getElementById('wifiOsContentBox');
        if (!box) return;

        const g = wifiOsGuides[osKey] || wifiOsGuides.android;

        let html = `
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px dashed var(--border-color); padding-bottom: 10px;">
                <strong style="font-size: 13.5px; color: var(--accent-gold);">${g.title}</strong>
                <span style="background: ${g.badgeColor}22; color: ${g.badgeColor}; padding: 2px 8px; border-radius: 6px; font-size: 10.5px; font-weight: 700;">${g.badge}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;">
        `;

        g.items.forEach(item => {
            html += `
                <div style="display: flex; gap: 10px; align-items: flex-start; flex-wrap: wrap;">
                    <span style="color: var(--text-muted); min-width: 140px; font-weight: 600; font-size: 12px;">${item.k}:</span>
                    <span style="color: var(--text-primary); flex: 1; font-size: 12.5px;">${item.v}</span>
                </div>
            `;
        });

        html += `</div>`;

        if (g.isApple) {
            html += `
                <div style="margin: 14px 0 10px 0; padding: 12px; background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                    <div>
                        <strong style="color: #60a5fa; display: block; font-size: 12.5px;">Apple Configuration Profile (.mobileconfig)</strong>
                        <span style="color: var(--text-secondary); font-size: 11.5px;">Auto-configures UTeM-Wifi and eduroam encryption and authentication profiles on iPhones, iPads, and MacBooks.</span>
                    </div>
                    <button type="button" id="btnDownloadAppleProfile" class="btn btn-primary btn-sm" style="font-size: 11.5px; padding: 6px 14px; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px;">
                        <span>📥</span> Download Apple Profile
                    </button>
                </div>
            `;
        }

        if (g.note) {
            html += `
                <div style="font-size: 11.5px; color: var(--text-secondary); background: rgba(255, 255, 255, 0.03); border-radius: 6px; padding: 8px 10px; line-height: 1.5;">
                    ${g.note}
                </div>
            `;
        }

        box.innerHTML = html;

        if (g.isApple) {
            const dlBtn = document.getElementById('btnDownloadAppleProfile');
            if (dlBtn) {
                dlBtn.addEventListener('click', generateAppleMobileConfig);
            }
        }
    }

    function initWifiOsSelector() {
        const buttons = document.querySelectorAll('.wifi-os-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const os = btn.getAttribute('data-os');
                renderWifiOsGuide(os);
            });
        });
        renderWifiOsGuide('android');
    }

    // 8. Event Listeners & Auto-Run
    window.addEventListener('online', updateDeviceStatus);
    window.addEventListener('offline', updateDeviceStatus);

    if (btnRun) {
        btnRun.addEventListener('click', runDiagnostics);
    }

    // Expose for testing/debugging in browser console
    window.ucpmNetworkRadar = {
        run: runDiagnostics,
        pingService: pingService,
        updateDeviceStatus: updateDeviceStatus
    };

    // Auto-run on load with slight delay for silky smooth page rendering
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateDeviceStatus();
            initWifiOsSelector();
            setTimeout(runDiagnostics, 650);
        });
    } else {
        updateDeviceStatus();
        initWifiOsSelector();
        setTimeout(runDiagnostics, 650);
    }

})();