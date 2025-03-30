// A/B Testing Analytics Script

// Function to get the current variant from URL or cookie
function getCurrentVariant() {
  // Check URL parameter first
  const urlParams = new URLSearchParams(window.location.search);
  const variantParam = urlParams.get('variant');
  
  if (variantParam && ['a', 'b', 'c'].includes(variantParam)) {
    return variantParam;
  }
  
  // Check cookie next
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('variant=')) {
      const cookieVariant = cookie.substring(8);
      if (['a', 'b', 'c'].includes(cookieVariant)) {
        return cookieVariant;
      }
    }
  }
  
  // Default to variant A if no variant is found
  return 'a';
}

// Track page view for the current variant
function trackPageView() {
  const variant = getCurrentVariant();
  const pagePath = window.location.pathname;
  
  // Send to Google Analytics
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      'page_title': document.title,
      'page_path': pagePath,
      'variant': variant
    });
    
    // Also track as a custom event for easier analysis
    gtag('event', 'view_variant', {
      'variant': variant,
      'page_path': pagePath
    });
  }
}

// Track form submissions
function trackFormSubmission() {
  const variant = getCurrentVariant();
  
  // Send to Google Analytics
  if (typeof gtag === 'function') {
    gtag('event', 'generate_lead', {
      'variant': variant
    });
  }
}

// Initialize tracking
document.addEventListener('DOMContentLoaded', function() {
  // Track page view
  trackPageView();
  
  // Add event listeners to track form submissions
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function() {
      trackFormSubmission();
    });
  });
});
