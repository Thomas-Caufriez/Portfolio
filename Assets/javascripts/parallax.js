console.log('parallax.js loaded');

const isPortrait = window.matchMedia("(orientation: portrait)").matches;



const grid = isPortrait ? document.querySelector('#grid.portrait') : document.querySelector('#grid.landscape');



const sun = isPortrait 
  ? document.querySelector('#sun.portrait')
  : document.querySelector('#sun.landscape');

const palms = isPortrait 
  ? document.querySelector('#palms.portrait')
  : document.querySelector('#palms.landscape');;

const horizon = isPortrait 
  ? document.querySelector('#horizon.portrait')
  : document.querySelector('#horizon.landscape');

const stars = isPortrait 
  ? document.querySelector('#stars.portrait')
  : document.querySelector('#stars.landscape');

const text = document.querySelector('#introText');

function onScroll() {

    const scrollY = window.scrollY;

    grid.style.transform = `translateY(${scrollY * 0.5}px)`;
    stars.style.transform = `translateY(${scrollY * 0.2}px)`;
    sun.style.transform = `translateY(${scrollY * 0.5}px)`;
    palms.style.transform = `translateY(${scrollY * 0.5}px)`;
    horizon.style.transform = `translateY(${scrollY * 0.5}px)`;
    text.style.transform = `translateY(${scrollY * 0.4}px) rotate(-5deg)`;
}

function loop() {

    onScroll();
    requestAnimationFrame(loop);
}

loop()