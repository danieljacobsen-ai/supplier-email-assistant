---
layout: default
title: Circuto | AI Email Assistant for Supply Chain Managers
---

<script>
  // Simple A/B testing - randomly redirect to one of the three variants
  document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const variant = urlParams.get('variant');
    
    // If variant is specified in URL, go to that variant
    if (variant === 'a') {
      window.location.href = '/variants/variant-a.html';
    } else if (variant === 'b') {
      window.location.href = '/variants/variant-b.html';
    } else if (variant === 'c') {
      window.location.href = '/variants/variant-c.html';
    } else {
      // Otherwise randomly select a variant
      const variants = ['a', 'b', 'c'];
      const randomVariant = variants[Math.floor(Math.random() * variants.length)];
      
      // Store the selected variant in a cookie for consistency
      document.cookie = `variant=${randomVariant}; path=/; max-age=2592000`; // 30 days
      
      // Redirect to the selected variant
      window.location.href = `/variants/variant-${randomVariant}.html`;
    }
  });
</script>

<div class="container" style="text-align: center; padding: 100px 20px;">
  <h1>Redirecting you to our landing page...</h1>
  <p>If you are not redirected automatically, please <a id="manual-redirect" href="#">click here</a>.</p>
</div>

<script>
  // Set the manual redirect link
  document.addEventListener('DOMContentLoaded', function() {
    const variants = ['a', 'b', 'c'];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    document.getElementById('manual-redirect').href = `/variants/variant-${randomVariant}.html`;
  });
</script>
