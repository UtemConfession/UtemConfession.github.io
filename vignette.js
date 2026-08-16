document.addEventListener("DOMContentLoaded", function () {
    var VIGNETTE_KEY = 'lastVignetteTime';
    var VIGNETTE_COOLDOWN = 5 * 60 * 1000; // 5 minutes in milliseconds

    var lastTime = localStorage.getItem(VIGNETTE_KEY);
    var now = Date.now();

    if (!lastTime || (now - parseInt(lastTime, 10)) > VIGNETTE_COOLDOWN) {
        // Time has passed, inject Monetag Vignette (Zone 11584116)
        (function (s) {
            s.dataset.zone = '11584116';
            s.src = 'https://n6wxm.com/vignette.min.js';
        })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));

        // Update the timestamp in localStorage
        localStorage.setItem(VIGNETTE_KEY, now.toString());
        console.log("Monetag Vignette injected. Next injection allowed in 5 minutes.");
    } else {
        var remainingMinutes = Math.floor((VIGNETTE_COOLDOWN - (now - parseInt(lastTime, 10))) / 60000);
        console.log("Monetag Vignette blocked by frequency cap. Next injection in " + remainingMinutes + " minutes.");
    }
});
