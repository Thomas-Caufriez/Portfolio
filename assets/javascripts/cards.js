console.log('cards.js loaded')

//  VARIABLES

const container = document.querySelector('.cardsContainer');
let count = 1; // set to 1 because of the html fallback
let actualDelay = 0;

// FUNCTIONS

function isEnglish() {

  return document.documentElement.lang === "en";
}

function delay() {

    actualDelay += 200;
    return actualDelay;
}

function randomiser() { // get a random number depending on the number of items in $images

    let max = illustrations.length;

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

    const lang = isEnglish() ? "en" : "fr";

    const ariaLang = isEnglish() ? `Open the project ${title}` : `Ouvrir le project ${title}`;
    const imageLang = isEnglish() ? `../assets//images/${image}` : `./assets//images/${image}`;
    const imageAltLang = isEnglish() ? `Welcome page of ${title}` : `Page d'accueil de ${title}`;
    const statusLang = isEnglish() ? "Online" : "En ligne";
    const illustration = isEnglish() ? `../assets/images/${illustrations[randomiser()]}` : `./assets/images/${illustrations[randomiser()]}`
    const tagsLang = tags[lang].map(tag => `<span>${tag}</span>`).join("\n");

    createRow(`
        <div class="cardContainer cardContainer--online" data-aos="fade-right" data-aos-delay="${delay()}">
            <a class="card" href="${href}" target="_blank" aria-label="${ariaLang}" rel="noopener noreferrer">
                <div class="front">
                    <img class="cardImg" src="${imageLang}" alt="${imageAltLang}" aria-hidden="true" loading="lazy">
                    <span class="cardOnline">${statusLang}</span>

                    <div class="cardBody">
                        <div class="cardText">

                            <h3 class="cardTitle">${title}</h3>
                            
                            <div class="cardTags">${tagsLang}</div>

                        </div>
                        <img class="cardIcon" src="${illustration}.svg" alt="" aria-hidden="true" loading="lazy">
                    </div>
                </div>
            </a>
        </div>
    `)
}

function createCardsArchive(title, image, textBehind, tags = []) { // create the card layout for not online version

    const lang = isEnglish() ? "en" : "fr";

    const ariaLang = isEnglish() ? `Open the project ${title}` : `Ouvrir le project ${title}`;
    const imageLang = isEnglish() ? `../assets//images/${image}` : `./assets//images/${image}`;
    const imageAltLang = isEnglish() ? `Welcome page of ${title}` : `Page d'accueil de ${title}`;
    const illustration = isEnglish() ? `../assets/images/${illustrations[randomiser()]}` : `./assets/images/${illustrations[randomiser()]}`
    const textLang = textBehind[lang];
    const tagsLang = tags[lang].map(tag => `<span>${tag}</span>`).join("\n");

    createRow(`
        <div class="cardContainer cardContainer--archive" data-aos="fade-right" data-aos-delay="${delay()}">
            <div class="card" aria-label="${ariaLang}">
                <div class="front">
                    <img class="cardImg" src="${imageLang}" alt="${imageAltLang}" aria-hidden="true" loading="lazy">
                    <span class="cardArchive">Archive</span>

                    <div class="cardBody">
                        <div class="cardText">

                            <h3 class="cardTitle">${title}</h3>
                            
                            <div class="cardTags">${tagsLang}</div>

                        </div>
                        <img class="cardIcon" src="${illustration}.svg" alt="" aria-hidden="true" loading="lazy">
                    </div>
                </div>

                <div class="back">
                    <div class="cardBody--back">
                        <div class="cardText--back">

                            <h3 class="cardTitle--back">${title}</h3>
                            
                            <p>${textLang}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)
}

// ILLUSTRATIONS

const illustrations = [
    "building30D",
    "satellite30D",
    "motorcycle30D",
    "plane30D",
    "hoverboard30D",
    "palm30D",
    "rocket30D",
]

// CARDS

createCardsOnline(
    "Cookup",
    "cookupCover.png",
    "https://cookup.emu.isfsc.be/",
    {
        fr : ["Étudiant", "Wordpress"],
        en : ["Student", "Wordpress"]
    }
);

createCardsArchive(
    "Au-plaisir",
    "auPlaisir.png",
    {
        fr : "Pendant mon stage de 2ᵉ année, j’ai migré un site web vers le template WordPress de mon maître de stage, permettant au client de gérer et modifier son site en toute autonomie.",
        en : "During my 2nd year internship, I migrated a website to the WordPress template of my internship supervisor, allowing the client to manage and modify their site independently."
    },
    {
        fr : ["Stage", "Wordpress"],
        en : ["Internship", "Wordpress"]
    }
);