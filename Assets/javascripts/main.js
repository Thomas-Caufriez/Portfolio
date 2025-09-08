console.log('main.js loaded')

import "./skills.js";
import "./cards.js";
import "./sidebar.js";

document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        once: true,
        duration: 800,
    });
});