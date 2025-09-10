console.log('parallax.js loaded');

const grid = document.getElementById("grid");
const sun = document.getElementById("sun");
const palms = document.getElementById("palms");
const horizon = document.getElementById("horizon");
const stars = document.getElementById("stars");
const text = document.getElementById("introText");

function onScroll() {

    const scrollY = window.scrollY;
    
    grid.style.transform = `translateY(${scrollY * 0.5}px)`;
    stars.style.transform = `translateY(${scrollY * 0.2}px)`;
    sun.style.transform = `translateY(${scrollY * 0.5}px)`;
    palms.style.transform = `translateY(${scrollY * 0.5}px)`;
    horizon.style.transform = `translateY(${scrollY * 0.5}px)`;
    text.style.transform = `translateY(${scrollY * 0.6}px) rotate(-5deg)`;
}

function loop() {

    onScroll();
    requestAnimationFrame(loop);
}

loop()