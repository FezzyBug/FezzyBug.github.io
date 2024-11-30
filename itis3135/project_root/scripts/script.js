// Highlight current page in navigation bar
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navbar a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = '#555';
            link.style.color = 'white';
        }
    });
});

// Slideshow functionality for gallery page
// Slideshow functionality for gallery page
if (window.location.pathname.includes('gallery.html')) {
    const images = [
        {
            src: 'images/cannon_equipment.png',
            alt: 'Canon Equipment',
            caption: 'Our State-of-the-Art Canon Equipment'
        },
        {
            src: 'images/headset.webp',
            alt: 'VR Headset',
            caption: 'Experience Immersive VR with Our Headsets'
        },
        {
            src: 'images/vr_workflow.webp',
            alt: 'VR Workflow',
            caption: 'Our Efficient VR Production Workflow'
        }
    ];
    let currentIndex = 0;

    const imgElement = document.querySelector('#carousel img');
    const captionElement = document.querySelector('.carousel-caption');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    const updateCarousel = () => {
        imgElement.src = images[currentIndex].src;
        imgElement.alt = images[currentIndex].alt;
        captionElement.textContent = images[currentIndex].caption;
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Auto-play functionality (optional)
    let autoPlay = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 5000); // Change image every 5 seconds

    // Pause auto-play on hover
    const carousel = document.getElementById('carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoPlay);
    });
    carousel.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }, 5000);
    });
}


// FAQ toggle functionality for services page
if (window.location.pathname.includes('services.html')) {
    const faqs = document.querySelectorAll('.faq-item h3');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const answer = faq.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
}

// Contact form validation
if (window.location.pathname.includes('contact.html')) {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const errorDisplay = document.createElement('div');

    form.appendChild(errorDisplay);

    form.addEventListener('submit', (e) => {
        let errors = [];
        if (!emailInput.value.includes('@')) {
            errors.push('Please enter a valid email address.');
        }
        if (messageInput.value.trim() === '') {
            errors.push('Message cannot be empty.');
        }

        if (errors.length > 0) {
            e.preventDefault();
            errorDisplay.textContent = errors.join(' ');
            errorDisplay.style.color = 'red';
        }
    });
}


function loadComponent(selector, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load the header and footer on all pages
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('#header', 'components/header.html');
    loadComponent('#footer', 'components/footer.html');
});
