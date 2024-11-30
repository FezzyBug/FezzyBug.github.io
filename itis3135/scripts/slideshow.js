document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    // Function to show the slide at a given index
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    };

    // Show the first slide initially
    showSlide(currentIndex);

    // Event listeners for navigation buttons
    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });
});
