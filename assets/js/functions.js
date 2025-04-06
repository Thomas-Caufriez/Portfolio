// UPDATE ALERT WINDOW

let alerted = sessionStorage.getItem('alerted') || ''; // maybe change for cookies later on
if (alerted != 'yes') {
    alert("This webpage is still under development, have a look at the readme on github to see where I am at!\nActual version : V0.2");
    sessionStorage.setItem('alerted','yes');
}

// FUNCTION TO CREATE PROJECTS CARDS PREVIEWS

function createProjectPreview(title, link, picture, tags) {
    let projectList = document.getElementById("projectList");

    let card = document.createElement("a");
    card.href = link;
    card.className = "card col-3 p-0";

    let img = document.createElement("img");
    img.src = picture;
    img.className = "card-img-top text-center";
    img.alt = title;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;

    let cardText = document.createElement("p");
    cardText.className = "fst-italic";
    cardText.textContent = tags;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(img);
    card.appendChild(cardBody);

    projectList.appendChild(card);
}

// PROJECTS

createProjectPreview("Dynalivres", "./dynalivres.html", "./assets/img/dynalivresRemake.png", "Rebranding, UX/UI, Prototyping, Development");
createProjectPreview("Cookup", "./cookup.html", "./assets/img/cookup.png", "Branding, UX/UI, Prototyping, Development");

// FUNCTIONS TO FILTER ICONS IN THE ABOUT SECTION

document.querySelectorAll('.selectIcon').forEach(hover => {
    hover.addEventListener('mouseover', function(event) {
        document.querySelectorAll('.iconActive').forEach(item => {
            item.classList.remove('iconActive');
        });
        event.target.classList.add('iconActive');
        const tag = event.target.id;
        document.querySelectorAll('#skillIcons i').forEach(icons => {
            const iconTag = icons.getAttribute('data-category');
            if (iconTag === tag) {
                icons.classList.remove('fadeOut');
                icons.classList.add('fadeIn');
            } else {
                icons.classList.remove('fadeIn');
                icons.classList.add('fadeOut');
            }
        });
    });
});

//