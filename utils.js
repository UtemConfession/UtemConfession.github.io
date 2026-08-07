// utils.js — Shared helpers used across modules

function updateNodeText(element, text) {
    if (!element) return;
    for (let i = 0; i < element.childNodes.length; i++) {
        let node = element.childNodes[i];
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
            node.nodeValue = " " + text;
            return;
        }
    }
    element.appendChild(document.createTextNode(text));
}

function showToast(msg, type = "info", duration = 4000) {
    let toastContainer = document.getElementById("toastContainer");
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.id = "toastContainer";
        toastContainer.className = "toast-container";
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;

    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "error") icon = "⚠️";
    if (type === "warning") icon = "🔔";

    toast.innerHTML = `
        <span style="font-size: 16px;">${icon}</span>
        <span style="flex: 1; font-size: 13px; font-weight: 600; line-height: 1.4;">${escapeHtml(msg)}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-fade-out");
        setTimeout(() => toast.remove(), 400);
    }, duration);
}

function showStatus(msg, type) {
    showToast(msg, type || "info", 5000);
}

function escapeHtml(text) {
    if (!text) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatArchiveDate(rawDate) {
    if (!rawDate) return "Recent";
    try {
        const d = new Date(rawDate);
        if (isNaN(d.getTime())) return String(rawDate);
        return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
    } catch (e) {
        return String(rawDate);
    }
}

