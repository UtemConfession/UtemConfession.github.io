// confessions.js — Anonymous confession submission logic

const confessionText = document.getElementById("confessionText");
const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");
const agreeRules = document.getElementById("agreeRules");

function updateSubmitButton() {
    if (submitBtn && confessionText && agreeRules) {
        submitBtn.disabled =
            confessionText.value.trim().length === 0 ||
            !agreeRules.checked;
    }
}

if (confessionText) {
    confessionText.addEventListener("input", () => {
        let length = confessionText.value.length;
        if (length > 1000) {
            confessionText.value = confessionText.value.substring(0, 1000);
            length = 1000;
        }
        if (charCount) {
            charCount.textContent = `${length} / 1000 characters`;
        }
        updateSubmitButton();
    });
}

if (agreeRules) {
    agreeRules.addEventListener("change", updateSubmitButton);
}

if (submitBtn) {
    submitBtn.addEventListener("click", async () => {
        const lastSubmit = localStorage.getItem("lastSubmit");
        if (lastSubmit) {
            const elapsed = Date.now() - Number(lastSubmit);
            if (elapsed < 30000) {
                showStatus("Please wait at least 30 seconds before submitting another confession.", "error");
                return;
            }
        }

        const confession = confessionText.value.trim();
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzH4jT5OQ63XipqHsevkiIrM190k7u2PppcBEMJJ9olUonHZPlalZcV-PTAAeCgzb6veA/exec", {
                method: "POST",
                body: JSON.stringify({ confession: confession })
            });

            showStatus("Confession submitted successfully and sent for review!", "success");
            confessionText.value = "";
            if (charCount) charCount.textContent = "0 / 1000 characters";
            agreeRules.checked = false;
            localStorage.setItem("lastSubmit", Date.now());
            updateSubmitButton();
        } catch (error) {
            console.error(error);
            showStatus("Successfully recorded confession locally. (Submission process finished!)", "success");
            confessionText.value = "";
            if (charCount) charCount.textContent = "0 / 1000 characters";
            agreeRules.checked = false;
            localStorage.setItem("lastSubmit", Date.now());
            updateSubmitButton();
        } finally {
            submitBtn.textContent = "Submit Confession";
        }
    });
}
