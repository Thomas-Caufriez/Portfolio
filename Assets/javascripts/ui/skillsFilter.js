console.log('skillsFilter.js loaded')

/// BUTTONS

const btnSkills = document.querySelectorAll(".btnSkills");
let btnActive = document.querySelector(".active");

btnSkills.forEach((btn) => 
    btn.addEventListener("click", () => {

        btnActive.classList.remove("active");
        btn.classList.add("active");
        btnActive = btn;
    })
);