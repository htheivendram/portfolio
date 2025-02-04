// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

windows.onscroll = () => {
    sections.forEach(sec => {
        let top = windows.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const certificationItems = document.querySelectorAll(".certification-item");

    // Filtrage des certifications
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            certificationItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Action pour les boutons "Détails" et "Ouvrir en PDF"
    document.querySelectorAll(".detail-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Détails non disponibles pour le moment !");
        });
    });

    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Téléchargement non disponible !");
        });
    });
});
