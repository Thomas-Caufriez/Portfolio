console.log('parallax.js loaded');

const screenOrientation = window.matchMedia("(orientation: portrait)");

let grid, sun, palms, horizon, stars, text, scrollTooltip1, scrollTooltip2;

function updateOrientation() {

    const isPortrait = screenOrientation.matches;

    grid = isPortrait 
    ? document.querySelector('#grid.portrait') 
    : document.querySelector('#grid.landscape');

    sun = isPortrait 
    ? document.querySelector('#sun.portrait')
    : document.querySelector('#sun.landscape');

    palms = isPortrait 
    ? document.querySelector('#palms.portrait')
    : document.querySelector('#palms.landscape');;

    horizon = isPortrait 
    ? document.querySelector('#horizon.portrait')
    : document.querySelector('#horizon.landscape');

    stars = isPortrait 
    ? document.querySelector('#stars.portrait')
    : document.querySelector('#stars.landscape');

    text = document.querySelector('#introText');

    scrollTooltip1 = document.querySelector('#scroll1');
    scrollTooltip2 = document.querySelector('#scroll2');
 }

function onScroll() {

    const scrollY = window.scrollY;

    grid.style.transform = `translateY(${scrollY * 0.5}px)`;
    stars.style.transform = `translateY(${scrollY * 0.2}px)`;
    sun.style.transform = `translateY(${scrollY * 0.5}px)`;
    palms.style.transform = `translateY(${scrollY * 0.5}px)`;
    horizon.style.transform = `translateY(${scrollY * 0.5}px)`;
    text.style.transform = `translateY(${scrollY * 0.4}px) rotate(-5deg)`;
    scrollTooltip1.style.transform = `translate(-50%, ${scrollY * 0.5}px)`;
    scrollTooltip2.style.transform = `translate(-50%, ${scrollY * 0.5}px)`;
}

function loop() {

    onScroll();
    requestAnimationFrame(loop);
}

updateOrientation();

screenOrientation.addEventListener('change', updateOrientation)

loop()