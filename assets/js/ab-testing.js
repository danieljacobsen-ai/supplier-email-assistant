// A/B Testing Analytics Script

// Function to get the current variant from URL or current page, or assign randomly
function getCurrentVariant() {
  // Check URL parameter first (highest priority)
  const urlParams = new URLSearchParams(window.location.search);
  const variantParam = urlParams.get('variant');
  
  if (variantParam && ['a', 'b', 'c'].includes(variantParam.toLowerCase())) {
    return variantParam.toLowerCase();
  }
  
  // Check if we're already on a variant page
  const currentPath = window.location.pathname;
  if (currentPath.includes('variant-')) {
    const variantMatch = currentPath.match(/variant-(\w)\.html/);
    if (variantMatch && ['a', 'b', 'c'].includes(variantMatch[1].toLowerCase())) {
      return variantMatch[1].toLowerCase();
    }
  }
  
  // For testing purposes - force random assignment on each page load
  // This ensures you see different variants when refreshing
  const variants = ['a', 'b', 'c'];
  return variants[Math.floor(Math.random() * variants.length)];
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
  
  // Only redirect if we're on the index page
  if (currentPath === '/' || currentPath.endsWith('index.html')) {
    const variant = getCurrentVariant();
    
    // If URL already has parameters, append variant
    if (window.location.search) {
      if (!window.location.search.includes('variant=')) {
        window.location.href = `variants/variant-${variant}.html${window.location.search}&variant=${variant}`;
      } else {
        // URL already has variant parameter, use that
        const urlParams = new URLSearchParams(window.location.search);
        const variantParam = urlParams.get('variant');
        if (variantParam && ['a', 'b', 'c'].includes(variantParam.toLowerCase())) {
          window.location.href = `variants/variant-${variantParam.toLowerCase()}.html`;
        } else {
          window.location.href = `variants/variant-${variant}.html`;
        }
      }
    } else {
      // No URL parameters
      window.location.href = `variants/variant-${variant}.html?variant=${variant}`;
    }
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
