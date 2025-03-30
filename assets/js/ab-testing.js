// A/B Testing Analytics Script

// Function to get the current variant from URL, cookie, or current page
function getCurrentVariant() {
  // Check URL parameter first
  const urlParams = new URLSearchParams(window.location.search);
  const variantParam = urlParams.get('variant');
  
  if (variantParam && ['a', 'b', 'c'].includes(variantParam)) {
    // Set cookie for future visits
    document.cookie = `variant=${variantParam};path=/;max-age=2592000`; // 30 days
    return variantParam;
  }
  
  // Check if we're already on a variant page
  const currentPath = window.location.pathname;
  if (currentPath.includes('variant-')) {
    const variantMatch = currentPath.match(/variant-(\w)\.html/);
    if (variantMatch && ['a', 'b', 'c'].includes(variantMatch[1])) {
      return variantMatch[1];
    }
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
  
  // If no variant is found, assign randomly
  const variants = ['a', 'b', 'c'];
  const randomVariant = variants[Math.floor(Math.random() * variants.length)];
  document.cookie = `variant=${randomVariant};path=/;max-age=2592000`; // 30 days
  return randomVariant;
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

// Redirect to the appropriate variant if on index page
function redirectToVariant() {
  const currentPath = window.location.pathname;
  // Only redirect if we're on the index page and not already on a variant
  if ((currentPath === '/' || currentPath.endsWith('index.html')) && !window.location.search.includes('variant=')) {
    const variant = getCurrentVariant();
    window.location.href = `variants/variant-${variant}.html`;
    return true;
  }
  return false;
}

// Initialize tracking
document.addEventListener('DOMContentLoaded', function() {
  // Check if we need to redirect first
  if (!redirectToVariant()) {
    // If no redirect, track the page view
    trackPageView();
    
    // Add event listeners to track form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function() {
        trackFormSubmission();
      });
    });
  }
});
