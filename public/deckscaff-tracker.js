// DeckScaff Website Tracker - Client Version
(function() {
    'use strict';

    class DeckScaffTracker {
        constructor(apiUrl) {
            this.apiUrl = apiUrl || 'https://deckstaff-website-be.onrender.com/api/auth/track';
        }

        async trackVisit() {
            try {
                const visitorData = {
                    timestamp: new Date().toISOString(),
                    pageUrl: window.location.href,
                    referrer: document.referrer,
                    userAgent: navigator.userAgent,
                    ipAddress: '',
                    language: navigator.language,
                    screenResolution: screen.width + 'x' + screen.height
                };

                await fetch(this.apiUrl, {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(visitorData)
                });

                console.log(' DECKSCAFF: Visitor tracked successfully');

            } catch (error) {
                console.error(' DECKSCAFF: Error tracking visitor:', error);
            }
        }

        trackPageView() {
            this.trackVisit();
        }
    }

    // Auto-initialize when script loads
    const tracker = new DeckScaffTracker();
    tracker.trackPageView();
    
    // Make available globally for custom tracking
    window.DeckScaffTracker = DeckScaffTracker;

    console.log(' DECKSCAFF: Analytics tracker loaded');
})();