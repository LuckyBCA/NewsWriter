// Simple JS to enhance user experience on the landing page
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Example: Scroll to section smoothly
  const links = document.querySelectorAll('a[href^="#"]');
  for (let link of links) {
    link.addEventListener('click', function(e) {
      const targetID = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetID);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});