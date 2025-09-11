console.log('skills.js loaded')

// FUNCTIONS

function isEnglish() {
    
  return document.documentElement.lang === "en";
}

// SKILL GENERATOR

const skills = [

    { src: "./assets/images/bootstrap.svg", alt: "Bootstrap icon", category: "front"},
    { src: "./assets/images/js.svg", alt: "Javascript icon", category: "front"},
    { src: "./assets/images/php.svg", alt: "PHP icon", category: "back"},
    { src: "./assets/images/python.svg", alt: "Python icon", category: "back"},
    { src: "./assets/images/wordpress.svg", alt: "WordPress icon", category: "back"},
    { src: "./assets/images/adobe.svg", alt: "Adobe icon", category: "others"},
    { src: "./assets/images/figma.svg", alt: "Figma icon", category: "others"},
    { src: "./assets/images/slack.svg", alt: "Slack icon", category: "others"},
];

const iconLayout = document.querySelector(".skillsContainer");

skills.forEach((skill) => {

    let skillSrc = isEnglish() ? "." + skill.src : skill.src;

    iconLayout.innerHTML += `
        <div class="iconContainer">
            <img src="${skillSrc}" alt="${skill.alt}" class="skillIcon" data-category="${skill.category}" loading="lazy">
        </div>
    `
});

// SKILLS LISTENER
const btnSkills     = document.querySelectorAll(".btnSkills");
let btnActive       = document.querySelector(".selector").querySelector(".active");
const icons         = document.querySelectorAll(".skillIcon");

btnSkills.forEach((btn) => 
    btn.addEventListener("click", () => {

        btnActive.classList.remove("active");
        btnActive.setAttribute("aria-pressed", "false");
        btn.classList.add("active");
        btn.querySelector("button").setAttribute("aria-pressed", "true");
        btnActive = btn;

        const skillSelected = btn.querySelector("button").dataset.filter;
        
        if (skillSelected == "all") { // all case

            icons.forEach((icon) => {

                icon.classList.remove("hidden");
            });

        } else { // other cases

            icons.forEach((icon) => {

                if (icon.dataset.category == skillSelected) { // remove hidden if was already on the icon with the selected category

                    icon.classList.remove("hidden");

                }  else { // add hidden to anything else

                    icon.classList.add("hidden");
                }
            })
        }
    })
);

// MOUSE FOLLOWER
const iconContainers = document.querySelectorAll(".iconContainer");

iconContainers.forEach((container) => {

    const icon = container.querySelector(".skillIcon");

    container.addEventListener("mousemove", (event) => {

        if (container.querySelector(".skillIcon").classList.contains("hidden")) return; // can only move not hidden icons

        const rect = container.getBoundingClientRect(); // give positions of the container compared to the page
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 20;

        icon.style.transition = "transform 0s";
        icon.style.transform = `translate(${x}px, ${y}px)`;
    });

    container.addEventListener("mouseleave", () => { // return to normal position when mouve leave
        icon.style.transition = "transform 0.7s ease";
        icon.style.transform = "translate(0, 0)";
    });
});