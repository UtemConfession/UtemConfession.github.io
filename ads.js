/**
 * =============================================================
 * SITE-WIDE AD MONETIZATION LOADER
 * ads.js — Centralized loader for Adsterra and AdSense ads.
 *
 * Adsterra: Add containers with the class "adsterra-slot" and
 *           data attributes: data-ad-key, data-ad-width, data-ad-height.
 * AdSense:  Add <ins class="adsbygoogle" ...> inside the container. 
 *           Do NOT add inline (adsbygoogle = window.adsbygoogle || []).push({});
 *
 * Device filtering is handled via CSS visibility AND JS prevention:
 *   - Containers with "ad-slot--mobile-only" won't load on desktop
 *   - Containers with "ad-slot--desktop-only" won't load on mobile
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
     * Check if the slot should be blocked based on device class
     */
    function isSlotBlockedByDevice(element) {
        if (isMobile && (element.classList.contains('ad-slot--desktop-only') || element.classList.contains('adsterra-slot--desktop-only'))) return true;
        if (!isMobile && (element.classList.contains('ad-slot--mobile-only') || element.classList.contains('adsterra-slot--mobile-only'))) return true;
        return false;
    }

    var adsterraQueue = [];
    var isProcessingAdsterra = false;

    function processAdsterraQueue() {
        if (adsterraQueue.length === 0) {
            isProcessingAdsterra = false;
            return;
        }
        isProcessingAdsterra = true;
        var slot = adsterraQueue.shift();

        // Create the atOptions script
        var optScript = document.createElement('script');
        optScript.type = 'text/javascript';
        optScript.textContent =
            'atOptions = {' +
            "'key': '" + slot.key + "'," +
            "'format': 'iframe'," +
            "'height': " + slot.height + "," +
            "'width': " + slot.width + "," +
            "'params': {}" +
            '};';
        slot.container.appendChild(optScript);

        // Create the invoke script
        var invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = 'https://' + slot.domain + '/' + slot.key + '/invoke.js';
        invokeScript.async = true;
        
        // Wait for script to finish before loading next
        invokeScript.onload = processAdsterraQueue;
        invokeScript.onerror = processAdsterraQueue;
        
        slot.container.appendChild(invokeScript);
    }

    /**
     * Inject an Adsterra iframe-format ad into a target container.
     */
    function loadAdsterraAd(container) {
        var key    = container.getAttribute('data-ad-key');
        var width  = parseInt(container.getAttribute('data-ad-width'), 10);
        var height = parseInt(container.getAttribute('data-ad-height'), 10);
        var slotId = container.id || key;

        // Prevent double-loading
        if (!key || loadedSlots['adsterra_' + slotId]) return;
        loadedSlots['adsterra_' + slotId] = true;

        if (isSlotBlockedByDevice(container)) return;

        // Map specific keys to their required Adsterra CDN domains
        var domain = 'www.highperformanceformat.com'; // default
        if (key === '3f0e9d18402f36cd0e01379deb26a60b') {
            domain = 'unprofessionalginger.com';
        }

        adsterraQueue.push({
            container: container,
            key: key,
            width: width,
            height: height,
            domain: domain
        });

        if (!isProcessingAdsterra) {
            processAdsterraQueue();
        }
    }

    /**
     * Trigger AdSense push for a specific container.
     */
    function loadAdSenseAd(container) {
        // Find all <ins class="adsbygoogle"> inside this container that haven't been loaded yet
        var insTags = container.querySelectorAll('ins.adsbygoogle:not([data-ad-status="unfilled"]):not([data-adsbygoogle-status="done"])');
        
        for (var i = 0; i < insTags.length; i++) {
            var ins = insTags[i];
            var slotId = ins.id || (ins.getAttribute('data-ad-slot') + '_' + i);
            
            if (loadedSlots['adsense_' + slotId]) continue;
            if (isSlotBlockedByDevice(container)) continue;
            
            loadedSlots['adsense_' + slotId] = true;
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense Error: ", e);
            }
        }
    }

    /**
     * Discover all ads inside a specific container (e.g. a newly visible tab)
     */
    window.initAdsInContainer = function(containerElement) {
        if (!containerElement) return;

        // 1. Load Adsterra ads
        var adsterraSlots = containerElement.querySelectorAll('.adsterra-slot[data-ad-key]');
        for (var i = 0; i < adsterraSlots.length; i++) {
            loadAdsterraAd(adsterraSlots[i]);
        }
        
        // Also check if the container itself is an ad slot
        if (containerElement.classList.contains('adsterra-slot') && containerElement.hasAttribute('data-ad-key')) {
             loadAdsterraAd(containerElement);
        }

        // 2. Load AdSense ads (by triggering push for ins tags within this container)
        // We find containers that might wrap adsense or direct ins tags
        loadAdSenseAd(containerElement);
    };

    /**
     * Discover all ads that are currently visible on page load (outside tabs or inside the active tab).
     */
    function initGlobalAds() {
        // Initialize ads that are not inside a hidden tab
        var allAdsterra = document.querySelectorAll('.adsterra-slot[data-ad-key]');
        for (var i = 0; i < allAdsterra.length; i++) {
            var slot = allAdsterra[i];
            var parentTab = slot.closest('.tab-content');
            if (!parentTab || parentTab.classList.contains('active')) {
                loadAdsterraAd(slot);
            }
        }

        var allAdsenseIns = document.querySelectorAll('ins.adsbygoogle');
        for (var j = 0; j < allAdsenseIns.length; j++) {
            var ins = allAdsenseIns[j];
            var parentTab = ins.closest('.tab-content');
            if (!parentTab || parentTab.classList.contains('active')) {
                var container = ins.parentElement;
                loadAdSenseAd(container);
            }
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlobalAds);
    } else {
        initGlobalAds();
    }
})();
