// Website Visitor Tracking Script for DECKSCAFF Client Website

interface VisitorData {
  timestamp: string;
  pageUrl: string;
  referrer: string;
  userAgent: string;
  ipAddress: string;
  country?: string;
  city?: string;
  timezone?: string;
  screenResolution?: string;
  language: string;
}

class DeckScaffTracker {
  private apiUrl: string;

  constructor(apiUrl: string = 'https://deckstaff-website-be.onrender.com/api/auth/track') {
    // https://deckstaff-website-be.onrender.com
    
    this.apiUrl = apiUrl;
  }

  async trackVisit(): Promise<void> {
    try {
      const visitorData: VisitorData = {
        timestamp: new Date().toISOString(),
        pageUrl: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        ipAddress: '', // Will be detected on backend
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`
      };

      // Send to your backend API
      await fetch(`${this.apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorData)
      });

    } catch (error) {
      // console.error('Error tracking visitor:', error);
    }
  }

  // Track page views
  trackPageView(): void {
    this.trackVisit();
    
    // Track additional interactions if needed
    window.addEventListener('beforeunload', () => {
      this.trackTimeSpent();
    });
  }

  trackTimeSpent(): void {
    // Implementation for time tracking
    const timeSpent = Math.floor((Date.now() - performance.timing.navigationStart) / 1000);
    // Send time spent data
  }
}

// Initialize tracker
const tracker = new DeckScaffTracker();
tracker.trackPageView();