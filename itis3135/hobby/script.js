
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





// Section navigation function
function showSection(id) {
    // document.querySelectorAll('section').forEach((section) => {
    //     section.classList.remove('active');
    // });
    // document.getElementById(id).classList.add('active');
    //

    // Logic to display the section with the given ID
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Adding event listeners to each link
document.getElementById('link-who').addEventListener('click', () => showSection('who'));
document.getElementById('link-what').addEventListener('click', () => showSection('what'));
document.getElementById('link-when').addEventListener('click', () => showSection('when'));
document.getElementById('link-where').addEventListener('click', () => showSection('where'));
document.getElementById('link-how').addEventListener('click', () => showSection('how'));
document.getElementById('link-why').addEventListener('click', () => showSection('why'));
document.getElementById('link-ai-prompts').addEventListener('click', () => showSection('ai-prompts'));

