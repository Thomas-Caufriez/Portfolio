console.log('skillsFilter.js loaded')

// SKILLS LISTENER
const btnSkills     = document.querySelectorAll(".btnSkills");
let btnActive       = document.querySelector(".active");
const icons         = document.querySelectorAll(".skillIcon");

btnSkills.forEach((btn) => 
    btn.addEventListener("click", () => {

        btnActive.classList.remove("active");
        btn.classList.add("active");
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
