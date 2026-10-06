
/* =========================
   MENU MOBILNE
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".navbar nav");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("open");

    });

}


/* =========================
   ZAMYKANIE MENU PO KLIKNIĘCIU
========================= */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        nav.classList.remove("open");

    });

});


/* =========================
   ANIMACJA ELEMENTÓW
========================= */

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


/* Automatycznie animujemy karty */

document
    .querySelectorAll(".card, .feature, .price-section, .gallery-item")
    .forEach(function(element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


/* =========================
   GALERIA / LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");


galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;

        lightbox.classList.add("show");

    });

});


if (closeLightbox) {

    closeLightbox.addEventListener("click", function() {

        lightbox.classList.remove("show");

    });

}


/* Kliknięcie poza zdjęciem */

if (lightbox) {

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("show");

        }

    });

}


/* ESC zamyka galerię */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        if (lightbox) {

            lightbox.classList.remove("show");

        }

    }

});


/* =========================
   FORMULARZ
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Dziękujemy za wiadomość! " +
            "Formularz jest obecnie wersją demonstracyjną."
        );

        contactForm.reset();

    });

}
