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
        <a class="card" href="${href}" target="_blank">
            <img class="cardImg" src="/Assets//images/${image}">
            <span class="cardOnline">Online</span>

            <div class="cardBody">

                <div class="cardText">

                    <h3 class="cardTitle">${title}</h3>
                    
                    <div class="cardTags">
                        ${tagsLoop}
                    </div>

                </div>

                <img class="cardIcon" src="/Assets/images/${images[randomiser()]}.svg">

            </div>
        </a>
    `)

}

function createCardsArchive(title, image, textBehind, tags = []) { // create the card layout for not online version

    const tagsLoop = tags.map(tag => `<span>${tag}</span>`).join("\n");

    createRow(`
        <div class="card">
            <img class="cardImg" src="/Assets//images/${image}">
            <span class="cardArchive">Archive</span>

            <div class="cardBody">

                <div class="cardText">

                    <h3 class="cardTitle">${title}</h3>
                    
                    <div class="cardTags">
                        ${tagsLoop}
                    </div>

                </div>

                <img class="cardIcon" src="/Assets/images/${images[randomiser()]}.svg">

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
    "test",
    "placeholder.png",
    "#",
    ["tag", "tag", "Way bigger tag"]
);

createCardsArchive(
    "test",
    "placeholder.png",
    "lorem ipsum",
    ["tag", "tag", "Way bigger tag"]
);