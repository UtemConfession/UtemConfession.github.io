/**
 * =============================================================
 * ADSTERRA BANNER AD — CENTRALIZED LOADER
 * ads.js — Loads Adsterra banner ads into designated containers.
 *
 * Usage: Add <div> containers with the class "adsterra-slot" and
 *        data attributes: data-ad-key, data-ad-width, data-ad-height.
 *        This script auto-discovers and injects the ad scripts.
 *
 * Device filtering is handled via CSS visibility AND JS prevention:
 *   - Containers with "adsterra-slot--mobile-only" won't load on desktop
 *   - Containers with "adsterra-slot--desktop-only" won't load on mobile
 * =============================================================
 */

(function () {
    'use strict';

    // --- Device Detection ---
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || window.innerWidth < 768;

    // Track loaded containers to prevent duplicates
    var loadedSlots = {};

    /**
     * Inject an Adsterra iframe-format ad into a target container.
     * @param {HTMLElement} container - The .adsterra-slot element.
     */
    function loadAd(container) {
        var key    = container.getAttribute('data-ad-key');
        var width  = parseInt(container.getAttribute('data-ad-width'), 10);
        var height = parseInt(container.getAttribute('data-ad-height'), 10);
        var slotId = container.id || key;

        // Prevent double-loading
        if (!key || loadedSlots[slotId]) return;
        loadedSlots[slotId] = true;

        // Device gating: don't load scripts for hidden slots
        if (isMobile && container.classList.contains('adsterra-slot--desktop-only')) return;
        if (!isMobile && container.classList.contains('adsterra-slot--mobile-only')) return;

        // Create a sandboxed iframe to load the ad scripts.
        // This isolates the ad code and prevents it from redirecting the parent window.
        var iframe = document.createElement('iframe');
        iframe.style.width = width + 'px';
        iframe.style.height = height + 'px';
        iframe.style.border = 'none';
        iframe.style.overflow = 'hidden';
        iframe.scrolling = 'no';
        
        // sandbox permissions: allow scripts, same-origin, popups, and forms.
        // DO NOT include "allow-top-navigation" or "allow-top-navigation-by-user-activation".
        // This blocks any malicious redirect scripts from hijacking the top window.
        iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-forms');

        var htmlContent = 
            '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<style>body { margin: 0; padding: 0; overflow: hidden; background: transparent; }</style>' +
            '</head>' +
            '<body>' +
            '<script type="text/javascript">' +
            'var atOptions = {' +
            "'key': '" + key + "'," +
            "'format': 'iframe'," +
            "'height': " + height + "," +
            "'width': " + width + "," +
            "'params': {}" +
            '};' +
            '</script>' +
            '<script type="text/javascript" src="https://www.highperformanceformat.com/' + key + '/invoke.js"></script>' +
            '</body>' +
            '</html>';

        iframe.srcdoc = htmlContent;
        container.appendChild(iframe);
    }

    /**
     * Discover all .adsterra-slot containers and load ads.
     */
    function initAllAds() {
        var slots = document.querySelectorAll('.adsterra-slot[data-ad-key]');
        for (var i = 0; i < slots.length; i++) {
            loadAd(slots[i]);
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllAds);
    } else {
        initAllAds();
    }
})();
