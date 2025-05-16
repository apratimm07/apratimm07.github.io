const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

function showNextQuote() {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('active');
}

// Change quote every 5 seconds
setInterval(showNextQuote, 5000);

// Mobile Navigation Functionality
const navbarToggle = document.querySelector('.navbar-toggle');
const navList = document.querySelector('.nav-list');

navbarToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Open Lightbox
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src; // Set clicked image in the lightbox
    lightbox.style.display = 'flex'; // Show lightbox
}

// Close Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide lightbox
}

// Scroll Gallery
function scrollGallery(direction) {
    const gallery = document.getElementById('photoGallery');
    const scrollAmount = gallery.offsetWidth / 2; // Scroll half the gallery width
    if (direction === 'left') {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}