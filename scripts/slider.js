const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');

const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let counter = 1;

const size = sliderItems[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

btnNext.addEventListener('click', () => {
    if (counter >= (sliderItems.length - 1)) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

btnPrev.addEventListener('click', () => {
    if (counter <= 0) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slider.addEventListener('transitionend', () => {
    if (sliderItems[counter].getAttribute('id') === 'last-copy') {
        slider.style.transition = 'none';
        counter = sliderItems.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (sliderItems[counter].getAttribute('id') === 'first-copy') {
        slider.style.transition = 'none';
        counter = sliderItems.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});