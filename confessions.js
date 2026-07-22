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
const APPS_SCRIPT_WEBHOOK = "https://script.google.com/macros/s/AKfycbwWdIr4S-WdfXDvzgKDRJ7Je8h5h956Spxcn5NpFxTE/exec";

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

if (confessionText) {
    confessionText.addEventListener("input", () => {
        let length = confessionText.value.length;
        if (length > 10000) {
            confessionText.value = confessionText.value.substring(0, 10000);
            length = 10000;
        }
        if (charCount) {
            charCount.textContent = `${length} / 10000 characters`;
        }
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

        try {
            const response = await fetch(APPS_SCRIPT_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json().catch(() => null);

            if (!result) {
                showStatus("Failed to receive structured response from server. Please try again.", "error");
            } else if (result.status === "success") {
                showStatus(result.message || "Confession submitted successfully!", "success");
                confessionText.value = "";
                if (charCount) charCount.textContent = "0 / 10000 characters";
                agreeRules.checked = false;
                localStorage.setItem("lastSubmit", Date.now());
            } else if (result.status === "rejected") {
                showStatus(result.message || "Your confession contained inappropriate content and was rejected by automated moderation.", "error");
                confessionText.value = "";
                if (charCount) charCount.textContent = "0 / 10000 characters";
                agreeRules.checked = false;
                localStorage.setItem("lastSubmit", Date.now());
            } else {
                showStatus(result.message || "Submission error occurred. Please review and try again.", "error");
            }
        } catch (error) {
            console.error("Confession Submission Network Error:", error);
            showStatus("Network error: Unable to connect to submission server. Please check your connection and try again.", "error");
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

function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
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
        submitImageBtn.textContent = "Uploading Image...";

        let base64Data = "";
        try {
            base64Data = await readFileAsBase64(selectedImageFile);
        } catch (readErr) {
            console.error("Failed to read image file:", readErr);
            showStatus("Failed to read image file. Please try another file.", "error");
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
            const response = await fetch(APPS_SCRIPT_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json().catch(() => null);

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
            showStatus("Unable to submit image. Please check your network connection and try again.", "error");
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
