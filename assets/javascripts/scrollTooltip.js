console.log("scrollTooltip.js loaded")

const scrollTooltip1 = document.querySelector("#scroll1");
const scrollTooltip2 = document.querySelector("#scroll2");

window.setInterval(glowing, 1500);

function glowing() {

    scrollTooltip1.classList.toggle("glowing");

    scrollTooltip2.classList.toggle("glowing");
}