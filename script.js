// This script controls small interactivity (like filtering or toggling details)
// It can be expanded later for more functionality.

// Example: highlight active nav item dynamically
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
