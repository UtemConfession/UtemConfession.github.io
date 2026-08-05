// authentication.js — Google Identity Services & OAuth Redirect Module

const CLIENT_ID = "144642899181-rn6f8to2qlcnt3mfe2o62bbh94pk1a3o.apps.googleusercontent.com";
const TOKEN_KEY = "ucpm_google_token";

let currentUser = null;
let currentUserToken = null;

function getGoogleIdToken() {
    return currentUserToken;
}

function getCurrentUser() {
    return currentUser;
}

function signOut() {
    currentUserToken = null;
    currentUser = null;
    try { localStorage.removeItem(TOKEN_KEY); } catch (e) { }

    const userInfo = document.getElementById("userInfo");
    const gSigninBtn = document.getElementById("g_id_signin");
    const authNotice = document.getElementById("authNotice");

    if (userInfo) userInfo.style.display = "none";
    if (gSigninBtn) gSigninBtn.style.display = "flex";
    if (authNotice) {
        authNotice.style.display = "flex";
        authNotice.className = "auth-notice warning";
        authNotice.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align: text-bottom; margin-right: 4px;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg><span>Sign in required to submit a confession</span>`;
    }

    if (typeof window.updateSubmitButton === "function") {
        window.updateSubmitButton();
    }
}

function handleCredentialResponse(response) {
    if (!response || !response.credential) return;

    currentUserToken = response.credential;
    currentUser = parseJwt(response.credential);

    if (!currentUser) {
        console.error("Invalid JWT token received");
        return;
    }

    // Save to localStorage for persistent login across sessions
    try {
        localStorage.setItem(TOKEN_KEY, response.credential);
    } catch (e) {
        console.warn("localStorage is unavailable (cookies may be blocked). Login will not persist across reloads.");
    }

    console.log("Signed in successfully as:", currentUser.name, "(" + currentUser.email + ")");

    updateAuthUI();

    if (typeof window.updateSubmitButton === "function") {
        window.updateSubmitButton();
    }
}

function updateAuthUI() {
    if (!currentUser) return;

    const userInfo = document.getElementById("userInfo");
    const gSigninBtn = document.getElementById("g_id_signin");
    const userAvatar = document.getElementById("userAvatar");
    const userAvatarFallback = document.getElementById("userAvatarFallback");
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const authNotice = document.getElementById("authNotice");

    if (userAvatar) {
        userAvatar.referrerPolicy = "no-referrer";
        const avatarUrl = currentUser.picture;
        if (avatarUrl) {
            userAvatar.src = avatarUrl;
            userAvatar.style.display = "block";
            if (userAvatarFallback) userAvatarFallback.style.display = "none";

            userAvatar.onerror = function () {
                this.style.display = "none";
                if (userAvatarFallback) {
                    userAvatarFallback.style.display = "flex";
                    const initial = (currentUser.name || currentUser.email || "U").charAt(0).toUpperCase();
                    userAvatarFallback.innerHTML = `<span>${escapeHtml(initial)}</span>`;
                }
            };
        } else {
            userAvatar.style.display = "none";
            if (userAvatarFallback) {
                userAvatarFallback.style.display = "flex";
                const initial = (currentUser.name || currentUser.email || "U").charAt(0).toUpperCase();
                userAvatarFallback.innerHTML = `<span>${escapeHtml(initial)}</span>`;
            }
        }
    }

    if (userName && currentUser.name) {
        userName.textContent = currentUser.name;
    }
    if (userEmail && currentUser.email) {
        userEmail.textContent = currentUser.email;
    }

    if (userInfo) userInfo.style.display = "flex";
    if (gSigninBtn) gSigninBtn.style.display = "none";
    if (authNotice) authNotice.style.display = "none";
}

function parseJwt(token) {
    try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
        );
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Failed to parse JWT token:", e);
        return null;
    }
}

// Redirects full window to Google OAuth endpoint (for In-App Telegram Browsers)
function triggerGoogleRedirectAuth() {
    const redirectUri = window.location.origin + window.location.pathname;
    const scope = encodeURIComponent("openid profile email");
    const nonce = Date.now();
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=id_token&scope=${scope}&nonce=${nonce}`;
    window.location.href = oauthUrl;
}

// Checks if page was redirected back from Google OAuth with id_token in hash
function checkOAuthRedirectHash() {
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const idToken = params.get("id_token");
        if (idToken) {
            handleCredentialResponse({ credential: idToken });
            history.replaceState(null, "", window.location.pathname + window.location.search);
            return true;
        }
    }
    return false;
}

// Loads cached token from localStorage on page load
function loadSavedSession() {
    let savedToken = null;
    try { savedToken = localStorage.getItem(TOKEN_KEY); } catch (e) { }
    if (!savedToken) return false;

    const parsed = parseJwt(savedToken);
    if (!parsed) {
        try { localStorage.removeItem(TOKEN_KEY); } catch (e) { }
        return false;
    }

    // Check expiration (exp is in seconds)
    if (parsed.exp && parsed.exp * 1000 < Date.now()) {
        console.log("Saved session expired. Removing token.");
        try { localStorage.removeItem(TOKEN_KEY); } catch (e) { }
        return false;
    }

    currentUserToken = savedToken;
    currentUser = parsed;
    updateAuthUI();
    if (typeof window.updateSubmitButton === "function") {
        window.updateSubmitButton();
    }
    return true;
}

function isTelegramInAppBrowser() {
    const ua = (navigator.userAgent || navigator.vendor || window.opera || "").toLowerCase();
    return ua.includes("telegram") || ua.includes("fban") || ua.includes("fbav") || ua.includes("instagram") || ua.includes("line");
}

function initGoogleAuth() {
    // 1. First check if returning from a Google OAuth redirect
    const redirected = checkOAuthRedirectHash();

    // 2. If not returning from redirect, restore persistent localStorage session
    if (!redirected) {
        loadSavedSession();
    }

    // Display alert notice if opened inside Telegram or social media embedded webview
    const tgNotice = document.getElementById("telegramInAppNotice");
    if (tgNotice && isTelegramInAppBrowser() && !currentUserToken) {
        tgNotice.style.display = "block";
    }

    if (typeof google === "undefined" || !google.accounts || !google.accounts.id) {
        setTimeout(initGoogleAuth, 200);
        return;
    }

    // 3. Initialize Google Identity Services safely using popup mode for static hosting
    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        ux_mode: "popup"
    });

    const confessionContainer = document.getElementById("g_id_signin");
    if (confessionContainer) {
        confessionContainer.addEventListener("click", (e) => {
            if (isTelegramInAppBrowser() && !currentUserToken) {
                triggerGoogleRedirectAuth();
            }
        }, true);

        const buttonWidth = Math.min(320, Math.max(220, window.innerWidth - 60));
        google.accounts.id.renderButton(confessionContainer, {
            theme: "filled_black",
            size: "large",
            shape: "rectangular",
            text: "continue_with",
            width: buttonWidth
        });
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", signOut);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGoogleAuth);
} else {
    initGoogleAuth();
}
