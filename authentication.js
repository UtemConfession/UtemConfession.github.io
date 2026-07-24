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
    localStorage.removeItem(TOKEN_KEY);

    const userInfo = document.getElementById("userInfo");
    const gSigninBtn = document.getElementById("g_id_signin");
    const authNotice = document.getElementById("authNotice");

    if (userInfo) userInfo.style.display = "none";
    if (gSigninBtn) gSigninBtn.style.display = "block";
    if (authNotice) {
        authNotice.className = "auth-notice warning";
        authNotice.innerHTML = "🔒 <strong>Sign in required</strong>";
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
    localStorage.setItem(TOKEN_KEY, response.credential);

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
    const userName = document.getElementById("userName");
    const authNotice = document.getElementById("authNotice");

    if (userAvatar && currentUser.picture) {
        userAvatar.src = currentUser.picture;
    }
    if (userName && currentUser.name) {
        userName.textContent = currentUser.name;
    }

    if (userInfo) userInfo.style.display = "flex";
    if (gSigninBtn) gSigninBtn.style.display = "none";

    if (authNotice) {
        authNotice.className = "auth-notice success";
        authNotice.innerHTML = `✓ Signed in as <strong>${currentUser.name}</strong> (${currentUser.email})`;
    }
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
    const savedToken = localStorage.getItem(TOKEN_KEY);
    if (!savedToken) return false;

    const parsed = parseJwt(savedToken);
    if (!parsed) {
        localStorage.removeItem(TOKEN_KEY);
        return false;
    }

    // Check expiration (exp is in seconds)
    if (parsed.exp && parsed.exp * 1000 < Date.now()) {
        console.log("Saved session expired. Removing token.");
        localStorage.removeItem(TOKEN_KEY);
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

    if (typeof google === "undefined" || !google.accounts || !google.accounts.id) {
        setTimeout(initGoogleAuth, 200);
        return;
    }

    // 3. Initialize Google Identity Services
    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        ux_mode: isTelegramInAppBrowser() ? "redirect" : "popup",
        login_uri: window.location.origin + window.location.pathname
    });

    const confessionContainer = document.getElementById("g_id_signin");
    if (confessionContainer) {
        confessionContainer.addEventListener("click", (e) => {
            if (isTelegramInAppBrowser() && !currentUserToken) {
                triggerGoogleRedirectAuth();
            }
        }, true);

        const buttonWidth = Math.min(260, Math.max(180, window.innerWidth - 140));
        google.accounts.id.renderButton(confessionContainer, {
            theme: "filled_blue",
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
