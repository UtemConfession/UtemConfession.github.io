document.addEventListener("DOMContentLoaded", function () {
    var POPUNDER_KEY = 'lastPopunderTime';
    var POPUNDER_COOLDOWN = 3600000; // 1 hour in milliseconds

    var lastTime = localStorage.getItem(POPUNDER_KEY);
    var now = Date.now();

    if (!lastTime || (now - parseInt(lastTime, 10)) > POPUNDER_COOLDOWN) {
        // Time has passed, inject Monetag Popunder
        (function (s) {
            s.dataset.zone = '11583207';
            s.src = 'https://zovidree.com/tag.min.js';
        })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));

        // Update the timestamp in localStorage
        localStorage.setItem(POPUNDER_KEY, now.toString());
        console.log("Monetag Popunder injected. Next injection allowed in 1 hour.");
    } else {
        var remainingMinutes = Math.floor((POPUNDER_COOLDOWN - (now - parseInt(lastTime, 10))) / 60000);
        console.log("Monetag Popunder blocked by frequency cap. Next injection in " + remainingMinutes + " minutes.");
    }
});
