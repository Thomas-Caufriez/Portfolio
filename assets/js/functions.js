// UPDATE ALERT WINDOW

let alerted = sessionStorage.getItem('alerted') || ''; // maybe change for cookies later on
if (alerted != 'yes') {
    alert("This webpage is still under development, have a look at the readme on github to see where I am at!\nActual version : V0.2");
    sessionStorage.setItem('alerted','yes');
}

// FUNCTION TO CREATE PROJECTS CARDS PREVIEWS

function createProjectPreview(title, link, picture, text) {
    let projectList = document.getElementById("projectList");

    let card = document.createElement("a");
    card.href = link;
    card.className = "card col-3 p-0";
    card.style.width = "30rem";

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
    cardText.className = "text-end fst-italic";
    cardText.textContent = text;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(img);
    card.appendChild(cardBody);

    projectList.appendChild(card);
}

// PROJECTS

createProjectPreview("Dynalivres", "./dynalivres.html", "./assets/img/dynalivresRemake.png", "Student project");
createProjectPreview("Cookup", "./cookup.html", "./assets/img/cookup.png", "Student project");