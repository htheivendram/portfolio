// Sélectionner les éléments du DOM
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Ajouter un événement au clic
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
