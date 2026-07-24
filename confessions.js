// confessions.js — Submission-Type Driven Confession Client Logic (Text & Image Modes)

// Text Confession DOM Elements
const confessionText = document.getElementById("confessionText");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");
const agreeRules = document.getElementById("agreeRules");

// Image Submission DOM Elements
const tabTextMode = document.getElementById("tabTextMode");
const tabImageMode = document.getElementById("tabImageMode");
const textSubmissionPanel = document.getElementById("textSubmissionPanel");
const imageSubmissionPanel = document.getElementById("imageSubmissionPanel");

const imageDropZone = document.getElementById("imageDropZone");
const imageFileInput = document.getElementById("imageFileInput");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const imagePreviewImg = document.getElementById("imagePreviewImg");
const imagePreviewName = document.getElementById("imagePreviewName");
const imagePreviewSize = document.getElementById("imagePreviewSize");
const removeImageBtn = document.getElementById("removeImageBtn");

const imageCaptionInput = document.getElementById("imageCaptionInput");
const imageCharCount = document.getElementById("imageCharCount");
const agreeImageRules = document.getElementById("agreeImageRules");
const submitImageBtn = document.getElementById("submitImageBtn");

// State Variable for Selected Image File
let selectedImageFile = null;

// Webhook endpoint for Google Apps Script submission manager
const APPS_SCRIPT_WEBHOOK = "https://script.google.com/macros/s/AKfycbznUn5W2T0-DRnni5VG3mvS6ogG4WH4UD-5M2lfznXqLxUal4RubZMwclDnWVjwTTSKdQ/exec";

// Helper to format bytes into readable KB / MB
function formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// -------------------------------------------------------------
// 1. Mode Sub-Tab Switcher Logic
// -------------------------------------------------------------
function switchSubMode(mode) {
    if (mode === "text") {
        if (tabTextMode) {
            tabTextMode.classList.add("active");
            tabTextMode.style.background = "";
            tabTextMode.style.color = "";
        }
        if (tabImageMode) {
            tabImageMode.classList.remove("active");
            tabImageMode.style.background = "transparent";
            tabImageMode.style.color = "var(--text-secondary)";
        }
        if (textSubmissionPanel) textSubmissionPanel.style.display = "block";
        if (imageSubmissionPanel) imageSubmissionPanel.style.display = "none";
        updateSubmitButton();
    } else if (mode === "image") {
        if (tabImageMode) {
            tabImageMode.classList.add("active");
            tabImageMode.style.background = "";
            tabImageMode.style.color = "";
        }
        if (tabTextMode) {
            tabTextMode.classList.remove("active");
            tabTextMode.style.background = "transparent";
            tabTextMode.style.color = "var(--text-secondary)";
        }
        if (imageSubmissionPanel) imageSubmissionPanel.style.display = "block";
        if (textSubmissionPanel) textSubmissionPanel.style.display = "none";
        updateImageSubmitButton();
    }
}

if (tabTextMode) {
    tabTextMode.addEventListener("click", () => switchSubMode("text"));
}
if (tabImageMode) {
    tabImageMode.addEventListener("click", () => switchSubMode("image"));
}


// -------------------------------------------------------------
// 2. Text Confession Workflow (Preserved 100% Intact)
// -------------------------------------------------------------
function updateSubmitButton() {
    if (!submitBtn || !confessionText || !agreeRules) return;

    const hasText = confessionText.value.trim().length > 0;
    const rulesAgreed = agreeRules.checked;
    const isSignedIn = typeof getGoogleIdToken === "function" && getGoogleIdToken() !== null;

    submitBtn.disabled = !(hasText && rulesAgreed && isSignedIn);
}

// Attach to window so authentication.js can call it when login state changes
window.updateSubmitButton = updateSubmitButton;

// Draft Confession Auto-Save (LocalStorage Protection)
const DRAFT_KEY = "ucpm_draft_confession";

function loadDraftConfession() {
    if (!confessionText) return;
    const savedDraft = localStorage.getItem(DRAFT_KEY);
    if (savedDraft && !confessionText.value) {
        confessionText.value = savedDraft;
        const len = savedDraft.length;
        if (charCount) charCount.textContent = `${len} / 10000 characters`;
        updateSubmitButton();
        if (typeof showToast === "function") {
            showToast("💾 Restored your saved confession draft!", "info", 3500);
        }
    }
}

function saveDraftConfession() {
    if (!confessionText) return;
    const val = confessionText.value;
    if (val.trim().length > 0) {
        localStorage.setItem(DRAFT_KEY, val);
    } else {
        localStorage.removeItem(DRAFT_KEY);
    }
}

function clearDraftConfession() {
    localStorage.removeItem(DRAFT_KEY);
}

if (confessionText) {
    loadDraftConfession();

    confessionText.addEventListener("input", () => {
        let length = confessionText.value.length;
        if (length > 10000) {
            confessionText.value = confessionText.value.substring(0, 10000);
            length = 10000;
        }
        if (charCount) {
            charCount.textContent = `${length} / 10000 characters`;
        }
        saveDraftConfession();
        updateSubmitButton();
    });
}

if (agreeRules) {
    agreeRules.addEventListener("change", updateSubmitButton);
}

if (submitBtn) {
    submitBtn.addEventListener("click", async () => {
        // Rate limiting (30-second delay)
        const lastSubmit = localStorage.getItem("lastSubmit");
        if (lastSubmit) {
            const elapsed = Date.now() - Number(lastSubmit);
            if (elapsed < 30000) {
                const remainingSecs = Math.ceil((30000 - elapsed) / 1000);
                showStatus(`Please wait ${remainingSecs} seconds before submitting another confession.`, "error");
                return;
            }
        }

        const idToken = typeof getGoogleIdToken === "function" ? getGoogleIdToken() : null;
        if (!idToken) {
            showStatus("Google Sign-In is required before submitting a confession.", "error");
            updateSubmitButton();
            return;
        }

        const confession = confessionText.value.trim();
        if (!confession) return;

        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";

        const submission = {
            type: "text",
            content: confession,
            caption: "",
            imageUrl: "",
            timestamp: new Date().toISOString()
        };

        const payload = {
            submission: submission,
            idToken: idToken,
            confession: confession,
            type: "text",
            timestamp: submission.timestamp
        };

// Helper to perform fetch with auto-retry on network interruption
async function fetchWithRetry(url, options, maxRetries = 2) {
    let lastError = null;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) return response;
            lastError = new Error(`Server returned HTTP ${response.status}`);
        } catch (err) {
            lastError = err;
            console.warn(`Confession submission attempt ${attempt} failed. Retrying in 1.5s...`, err);
            if (attempt < maxRetries) {
                showStatus(`Connection interrupted. Auto-retrying submission (Attempt ${attempt + 1})...`, "warning");
                await new Promise(res => setTimeout(res, 1500));
            }
        }
    }
    throw lastError;
}

        try {
            const response = await fetchWithRetry(APPS_SCRIPT_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                console.error("Submission Server HTTP Error:", response.status, response.statusText);
                showStatus(`Server error (${response.status}). Please check Apps Script Web App permissions.`, "error");
                return;
            }

            const result = await response.json().catch(err => {
                console.error("JSON parse error from Apps Script response:", err);
                return null;
            });

            if (!result) {
                showStatus("Failed to receive structured response from server. Please try again.", "error");
            } else if (result.status === "success") {
                showStatus(result.message || "Confession published successfully!", "success");
                confessionText.value = "";
                clearDraftConfession();
                if (charCount) charCount.textContent = "0 / 10000 characters";
                agreeRules.checked = false;
                localStorage.setItem("lastSubmit", Date.now());
            } else if (result.status === "rejected") {
                showStatus(result.message || "Your confession contained inappropriate content and was rejected by automated moderation.", "error");
                confessionText.value = "";
                clearDraftConfession();
                if (charCount) charCount.textContent = "0 / 10000 characters";
                agreeRules.checked = false;
                localStorage.setItem("lastSubmit", Date.now());
            } else {
                showStatus(result.message || "Submission error occurred. Please review and try again.", "error");
            }
        } catch (error) {
            console.error("Confession Submission Network Error:", error);
            showStatus("Network error: Unable to connect to Apps Script server. Ensure your Apps Script Web App access is set to 'Anyone'.", "error");
        } finally {
            submitBtn.textContent = "Submit Confession";
            updateSubmitButton();
        }
    });
}


// -------------------------------------------------------------
// 3. Image Submission Workflow & File Validation
// -------------------------------------------------------------
function validateImageFile(file) {
    if (!file) return false;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    const fileName = file.name.toLowerCase();
    const isAllowedExt = fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".png") || fileName.endsWith(".webp");

    if (!allowedTypes.includes(file.type) && !isAllowedExt) {
        showStatus("Invalid file format. Please select a JPG, JPEG, PNG, or WEBP image.", "error");
        return false;
    }

    const maxSize = 10 * 1024 * 1024; // 10 MB limit
    if (file.size > maxSize) {
        showStatus("File size exceeds 10 MB limit. Please select a smaller image.", "error");
        return false;
    }

    return true;
}

function handleImageSelection(file) {
    if (!validateImageFile(file)) {
        clearImageSelection();
        return;
    }

    selectedImageFile = file;

    if (imagePreviewImg && imagePreviewName && imagePreviewSize && imagePreviewContainer) {
        imagePreviewImg.src = URL.createObjectURL(file);
        imagePreviewName.textContent = file.name;
        imagePreviewSize.textContent = formatBytes(file.size);
        imagePreviewContainer.style.display = "flex";
    }

    updateImageSubmitButton();
}

function clearImageSelection() {
    selectedImageFile = null;
    if (imageFileInput) imageFileInput.value = "";
    if (imagePreviewContainer) imagePreviewContainer.style.display = "none";
    if (imagePreviewImg) imagePreviewImg.src = "";
    updateImageSubmitButton();
}

if (removeImageBtn) {
    removeImageBtn.addEventListener("click", clearImageSelection);
}

const chooseImageBtn = document.getElementById("chooseImageBtn");
if (chooseImageBtn && imageFileInput) {
    chooseImageBtn.addEventListener("click", () => imageFileInput.click());
}

if (imageFileInput) {
    imageFileInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
            handleImageSelection(e.target.files[0]);
        }
    });
}

if (imageDropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
        imageDropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            imageDropZone.classList.add("drag-over");
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        imageDropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            imageDropZone.classList.remove("drag-over");
        }, false);
    });

    imageDropZone.addEventListener("drop", (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files.length > 0) {
            handleImageSelection(dt.files[0]);
        }
    });
}

if (imageCaptionInput) {
    imageCaptionInput.addEventListener("input", () => {
        let length = imageCaptionInput.value.length;
        if (length > 500) {
            imageCaptionInput.value = imageCaptionInput.value.substring(0, 500);
            length = 500;
        }
        if (imageCharCount) {
            imageCharCount.textContent = `${length} / 500 characters`;
        }
    });
}

function updateImageSubmitButton() {
    if (!submitImageBtn || !agreeImageRules) return;

    const hasImage = selectedImageFile !== null;
    const rulesAgreed = agreeImageRules.checked;
    const isSignedIn = typeof getGoogleIdToken === "function" && getGoogleIdToken() !== null;

    submitImageBtn.disabled = !(hasImage && rulesAgreed && isSignedIn);
}

window.updateImageSubmitButton = updateImageSubmitButton;

if (agreeImageRules) {
    agreeImageRules.addEventListener("change", updateImageSubmitButton);
}

function compressImage(file, maxWidth = 1200, maxHeight = 1200, quality = 0.82) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
            image.src = e.target.result;
        };
        reader.onerror = (err) => reject(err);

        image.onload = () => {
            let width = image.width;
            let height = image.height;

            if (width > maxWidth || height > maxHeight) {
                if (width > height) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                } else {
                    width = Math.round((width * maxHeight) / height);
                    height = maxHeight;
                }
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, width, height);

            const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
            resolve(compressedBase64);
        };
        image.onerror = (err) => reject(err);

        reader.readAsDataURL(file);
    });
}

if (submitImageBtn) {
    submitImageBtn.addEventListener("click", async () => {
        const lastSubmit = localStorage.getItem("lastSubmit");
        if (lastSubmit) {
            const elapsed = Date.now() - Number(lastSubmit);
            if (elapsed < 30000) {
                const remainingSecs = Math.ceil((30000 - elapsed) / 1000);
                showStatus(`Please wait ${remainingSecs} seconds before submitting another post.`, "error");
                return;
            }
        }

        const idToken = typeof getGoogleIdToken === "function" ? getGoogleIdToken() : null;
        if (!idToken) {
            showStatus("Google Sign-In is required before submitting an image.", "error");
            updateImageSubmitButton();
            return;
        }

        if (!selectedImageFile) {
            showStatus("Please select an image file to upload.", "error");
            return;
        }

        submitImageBtn.disabled = true;
        submitImageBtn.textContent = "Compressing & Uploading...";

        let base64Data = "";
        try {
            base64Data = await compressImage(selectedImageFile);
        } catch (readErr) {
            console.error("Failed to compress image file:", readErr);
            showStatus("Failed to process image file. Please try another file.", "error");
            submitImageBtn.textContent = "Submit Image";
            updateImageSubmitButton();
            return;
        }

        const caption = imageCaptionInput ? imageCaptionInput.value.trim() : "";
        const timestamp = new Date().toISOString();

        const payload = {
            submission: {
                type: "image",
                caption: caption,
                imageBase64: base64Data,
                fileName: selectedImageFile.name,
                mimeType: selectedImageFile.type || "image/jpeg",
                timestamp: timestamp
            },
            idToken: idToken,
            type: "image",
            caption: caption,
            imageBase64: base64Data,
            fileName: selectedImageFile.name,
            mimeType: selectedImageFile.type || "image/jpeg",
            timestamp: timestamp
        };

        try {
            const response = await fetchWithRetry(APPS_SCRIPT_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                console.error("Image Submission Server HTTP Error:", response.status, response.statusText);
                showStatus(`Server error (${response.status}). Please check Apps Script Web App permissions.`, "error");
                return;
            }

            const result = await response.json().catch(err => {
                console.error("JSON parse error from Apps Script image response:", err);
                return null;
            });

            if (result && result.status === "success") {
                showStatus(result.message || "Image confession published successfully!", "success");
                clearImageSelection();
                if (imageCaptionInput) imageCaptionInput.value = "";
                if (imageCharCount) imageCharCount.textContent = "0 / 500 characters";
                agreeImageRules.checked = false;
                localStorage.setItem("lastSubmit", Date.now());
            } else if (result && result.status === "rejected") {
                showStatus(result.message || "Your image submission was rejected by automated moderation.", "error");
                clearImageSelection();
                if (imageCaptionInput) imageCaptionInput.value = "";
                if (imageCharCount) imageCharCount.textContent = "0 / 500 characters";
                agreeImageRules.checked = false;
                localStorage.setItem("lastSubmit", Date.now());
            } else {
                showStatus(result && result.message ? result.message : "Image submission failed. Please try again.", "error");
            }
        } catch (error) {
            console.error("Image Submission Error:", error);
            showStatus("Unable to submit image. Ensure your Apps Script Web App access is set to 'Anyone'.", "error");
        } finally {
            submitImageBtn.textContent = "Submit Image";
            updateImageSubmitButton();
        }
    });
}

// Ensure login state changes re-evaluate both buttons in authentication.js
const originalUpdateSubmitButton = window.updateSubmitButton;
window.updateSubmitButton = function() {
    if (typeof originalUpdateSubmitButton === "function") originalUpdateSubmitButton();
    updateImageSubmitButton();
};

// Initial check on DOM load
document.addEventListener("DOMContentLoaded", () => {
    switchSubMode("text");
    updateSubmitButton();
    updateImageSubmitButton();
});
