/**
 * =============================================================
 * SITE-WIDE AD MONETIZATION LOADER
 * ads.js — Centralized loader for AdSense ads.
 *
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
     * Check if the slot should be blocked based on device class or visibility
     */
    function isSlotBlockedByDevice(element) {
        if (!element) return true;
        if (isMobile && (element.classList.contains('ad-slot--desktop-only') || element.classList.contains('ad-sidebar'))) return true;
        if (!isMobile && element.classList.contains('ad-slot--mobile-only')) return true;
        // Check if element or its parent is hidden
        if (element.offsetWidth === 0 && element.offsetHeight === 0) return true;
        return false;
    }

    /**
     * Trigger AdSense push for a specific container.
     */
    function loadAdSenseAd(container) {
        if (!container || isSlotBlockedByDevice(container)) return;

        // Find all <ins class="adsbygoogle"> inside this container that haven't been loaded yet
        var insTags = container.querySelectorAll('ins.adsbygoogle:not([data-ad-status="unfilled"]):not([data-adsbygoogle-status="done"])');
        
        for (var i = 0; i < insTags.length; i++) {
            var ins = insTags[i];
            var slotId = ins.id || (ins.getAttribute('data-ad-slot') + '_' + i);
            
            if (loadedSlots['adsense_' + slotId]) continue;
            if (isSlotBlockedByDevice(container)) continue;
            if (ins.offsetWidth === 0 && container.offsetWidth === 0) continue;
            
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

        // Load AdSense ads (by triggering push for ins tags within this container)
        loadAdSenseAd(containerElement);
    };

    /**
     * Discover all ads that are currently visible on page load (outside tabs or inside the active tab).
     */
    function initGlobalAds() {
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
