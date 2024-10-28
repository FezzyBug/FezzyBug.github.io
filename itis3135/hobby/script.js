// Section navigation function
function showSection(id) {
    document.querySelectorAll('section').forEach((section) => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change slide every 4 seconds
showSlide(currentSlide); // Show the first slide initially
