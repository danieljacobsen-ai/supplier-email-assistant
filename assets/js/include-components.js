// Simple component inclusion system
document.addEventListener('DOMContentLoaded', function() {
  // Find all component include elements
  const includes = document.querySelectorAll('[data-include]');
  
  // Process each include
  includes.forEach(function(element) {
    const file = element.getAttribute('data-include');
    
    // Fetch the component file
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load component: ${file}`);
        }
        return response.text();
      })
      .then(html => {
        // Replace the element with the component content
        element.innerHTML = html;
      })
      .catch(error => {
        console.error('Component inclusion error:', error);
        element.innerHTML = `<p style="color: red;">Error loading component: ${file}</p>`;
      });
  });
});
