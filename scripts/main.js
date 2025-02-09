// This file contains the JavaScript code for the CNN-like website. 
// It handles interactivity, such as navigation toggling and dynamic content loading.

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    // Additional functionality can be added here
});