
document.addEventListener('DOMContentLoaded', () => {
const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let index = 0;

    function loadImage(item) {
        const img = item.querySelector('img');
        if (img && img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    }

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        loadImage(items[index]);
        if (index > 0) loadImage(items[index - 1]);
        if (index < items.length - 1) loadImage(items[index + 1]);
    }

    loadImage(items[0]);

    prevBtn.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

});