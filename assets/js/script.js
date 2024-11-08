console,log;
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Ajoute un écouteur d'événement sur l'icône du menu hamburger
menuIcon.addEventListener('click', () => {
    // Bascule la classe active sur la navbar
    navbar.classList.toggle('active');
});
