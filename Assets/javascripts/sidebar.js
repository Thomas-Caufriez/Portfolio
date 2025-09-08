console.log('sidebar.js loaded')

// CONTENT
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".sidebar a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.sidebar a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
        }
        });
    },
    { threshold: 0.6 }
);

    sections.forEach((section) => {
        observer.observe(section);
});

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});