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

function showStatus(msg, type) {
    const statusMessage = document.getElementById("statusMessage");
    if (statusMessage) {
        statusMessage.textContent = msg;
        statusMessage.className = `status-message ${type}`;
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 6000);
    }
}
