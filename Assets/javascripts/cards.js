console.log('cards.js loaded')

//  VARIABLES

const container = document.querySelector('.cardsContainer');
let count = 0;

// FUNCTIONS

function randomiser() { // get a random number depending on the number of items in $images

    let max = images.length;

    return Math.floor(Math.random() * max);

}

function counter() { // so there can't be more than 3 cards on a single row

    if (count < 3) {

        count += 1;
        return true;

    } else {

        count = 1;
        return false;
    }
}

function createRow(code) { // add a new row if already 3 cards

    if (counter()) {

        let rows = container.querySelectorAll('.row');
        let lastRow = rows[rows.length - 1];
        lastRow.insertAdjacentHTML("beforeend", code);
    } else {

        container.insertAdjacentHTML("beforeend", `
            
            <div class="row">
                ${code}
            </div>

        `);
    }
}


function createCardsOnline(title, image, href, tags = []) { // create the card layout for online version

    const tagsLoop = tags.map(tag => `<span>${tag}</span>`).join("\n"); // transform the list into a single string line

    createRow(`
        <div class="cardContainer cardContainer--online">
            <a class="card" href="${href}" target="_blank" aria_label="Open project ${title}">
                <div class="front">
                    <img class="cardImg" src="./Assets//images/${image}" alt="" aria-hidden="true">
                    <span class="cardOnline">Online</span>

                    <div class="cardBody">
                        <div class="cardText">

                            <h3 class="cardTitle">${title}</h3>
                            
                            <div class="cardTags">${tagsLoop}</div>

                        </div>
                        <img class="cardIcon" src="./Assets/images/${images[randomiser()]}.svg" alt="" aria-hidden="true">
                    </div>
                </div>
            </a>
        </div>
    `)

}

function createCardsArchive(title, image, textBehind, tags = []) { // create the card layout for not online version

    const tagsLoop = tags.map(tag => `<span>${tag}</span>`).join("\n");

    createRow(`
        <div class="cardContainer cardContainer--archive">
            <div class="card" aria-label="${title} project">
                <div class="front">
                    <img class="cardImg" src="./Assets//images/${image}" alt="" aria-hidden="true">
                    <span class="cardArchive">Archive</span>

                    <div class="cardBody">
                        <div class="cardText">

                            <h3 class="cardTitle">${title}</h3>
                            
                            <div class="cardTags">${tagsLoop}</div>

                        </div>
                        <img class="cardIcon" src="./Assets/images/${images[randomiser()]}.svg" alt="" aria-hidden="true">
                    </div>
                </div>

                <div class="back">
                    <div class="cardBody--back">
                        <div class="cardText--back">

                            <h3 class="cardTitle--back">${title}</h3>
                            
                            <p>${textBehind}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)

}

// ILLUSTRATIONS

const images = [
    "building30D",
    "satellite30D",
    "motorcycle30D",
    "plane30D",
    "hoverboard30D",
]

// CARDS

createCardsOnline(
    "Dynalivres",
    "dynaLivresCover.png",
    "https://thomas-caufriez.github.io/Dyna-Livres/",
    ["Redesign", "Student project"]
);

createCardsOnline(
    "Cookup",
    "cookupCover.png",
    "https://cookup.emu.isfsc.be/",
    ["Wordpress", "Student project"]
);

createCardsArchive(
    "Au-plaisir",
    "auPlaisir.png",
    "Made during my 2nd school year internship. I was tasked to migrate a website to my master of internship's WordPress template with the possibility for the client to change anything whenever they want",
    ["Wordpress", "Internship project"]
);