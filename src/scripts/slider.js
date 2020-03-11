const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');

const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let counter = 1;

let size = sliderItems[0].clientWidth;
const resize = () => {
    size = sliderItems[0].clientWidth;
    counter = 1;
    slider.style.transform = `translateX(${-size * counter}px)`;
}
window.onresize = resize;

slider.style.transform = `translateX(${ -size * counter }px)`;

const slide = (direction) => {
    slider.style.transition = 'transform 1.5s ease-in-out';
    direction === 'right' ? counter++ : counter--;
    console.log(counter);
    slider.style.transform = `translateX(${ -size * counter }px)`;
}

btnNext.addEventListener('click', () => {
    if (counter >= (sliderItems.length - 1)) return;
    slide('right');
});

btnPrev.addEventListener('click', () => {
    if (counter <= 0) return;
    slide('left');
});

slider.addEventListener('transitionend', () => {
    if (sliderItems[counter].getAttribute('id') === 'last-copy') {
        slider.style.transition = 'none';
        counter = sliderItems.length - 2;
        slider.style.transform = `translateX(${ -size * counter }px)`;
    }

    if (sliderItems[counter].getAttribute('id') === 'first-copy') {
        slider.style.transition = 'none';
        counter = sliderItems.length - counter;
        slider.style.transform = `translateX(${ -size * counter }px)`;
    }
});

let rotating = true;
let sliderSpeed = 4500;
let slideDirection = 'right';

slider.addEventListener('mouseover', () => {
    rotating = false;
})

btnNext.addEventListener('mouseover', () => {
    rotating = false;
})

btnPrev.addEventListener('mouseover', () => {
    rotating = false;
})

slider.addEventListener('mouseout', () => {
    rotating = true;
})

const infiniteSlider = setInterval(() => {
    rotating ? slide(slideDirection) : {};
}, sliderSpeed);