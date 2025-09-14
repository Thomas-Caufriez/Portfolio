console.log('main.js loaded')

// load other js files
import "./skills.js";
import "./cards.js";
import "./sidebar.js";
import "./parallax.js";
import "./music.js";

// others
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        once: true,
        duration: 800,
    });
});