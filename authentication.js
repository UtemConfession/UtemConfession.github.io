// authentication.js — Google Identity Services Module

const CLIENT_ID = "144642899181-rn6f8to2qlcnt3mfe2o62bbh94pk1a3o.apps.googleusercontent.com";

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

    console.log("Signed in successfully as:", currentUser.name, "(" + currentUser.email + ")");

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

    if (typeof window.updateSubmitButton === "function") {
        window.updateSubmitButton();
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

function initGoogleAuth() {
    if (typeof google === "undefined" || !google.accounts || !google.accounts.id) {
        setTimeout(initGoogleAuth, 200);
        return;
    }

    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse
    });

    const sidebarContainer = document.getElementById("googleSignInContainer");
    if (sidebarContainer) {
        google.accounts.id.renderButton(sidebarContainer, {
            theme: "outline",
            size: "large",
            shape: "pill",
            text: "signin_with",
            width: 240
        });
    }

    const confessionContainer = document.getElementById("g_id_signin");
    if (confessionContainer) {
        google.accounts.id.renderButton(confessionContainer, {
            theme: "filled_blue",
            size: "large",
            shape: "rectangular",
            text: "continue_with",
            width: 280
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
