function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

let currentSlide = 0;
showSlide(currentSlide);

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
    });
}

function changeSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}