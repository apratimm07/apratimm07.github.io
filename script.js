// Quote Carousel
const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

function showNextQuote() {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('active');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

document.querySelectorAll('.education-card').forEach(card => {
  observer.observe(card);
});


// Change quote every 5 seconds
setInterval(showNextQuote, 5000);

// Mobile Navigation Toggle (Hamburger)
document.addEventListener("DOMContentLoaded", () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navList = document.querySelector('.nav-list');

    if (navbarToggle && navList) {
        navbarToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});

// Lightbox Functionality
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

// Gallery Scrolling
function scrollGallery(direction) {
    const gallery = document.getElementById('photoGallery');
    const scrollAmount = gallery.offsetWidth / 2;

    if (gallery) {
        gallery.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
}
