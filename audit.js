const fs = require("fs");


// CHANGE THIS IF YOUR FILE NAME IS DIFFERENT
const file = "javascript-sorcery.html";


const html = fs.readFileSync(file, "utf8");


// Find all spell cards
const cards = [
    ...html.matchAll(
        /<article class="spell-card" id="([^"]+)">/g
    )
];


// Find all titles
const titles = [
    ...html.matchAll(
        /<h2>(.*?)<\/h2>/g
    )
];


console.log("📖 SPELLBOOK AUDIT");
console.log("------------------");


// Total cards
console.log(
    "Total spells:",
    cards.length
);


console.log("");


// Check duplicate IDs
const ids = cards.map(card => card[1]);

const duplicateIds = [
    ...new Set(
        ids.filter(
            (id, index) =>
            ids.indexOf(id) !== index
        )
    )
];


console.log("Duplicate IDs:");

if (duplicateIds.length === 0) {

    console.log("✅ None");

} else {

    duplicateIds.forEach(id =>
        console.log("❌", id)
    );

}


console.log("");


// Check duplicate titles
const cardTitles = titles.map(title =>
    title[1]
);


const duplicateTitles = [
    ...new Set(
        cardTitles.filter(
            (title, index) =>
            cardTitles.indexOf(title) !== index
        )
    )
];


console.log("Duplicate Titles:");

if (duplicateTitles.length === 0) {

    console.log("✅ None");

} else {

    duplicateTitles.forEach(title =>
        console.log("❌", title)
    );

}


console.log("");


// Check missing IDs
const missingIds = cards.filter(card =>
    !card[1]
);


console.log("Missing IDs:");

if (missingIds.length === 0) {

    console.log("✅ None");

} else {

    console.log("❌ Found cards without IDs");

}


console.log("");


// Show card list
console.log("Spell List:");

cards.forEach((card, index) => {

    console.log(
        `${index + 1}. ${card[1]}`
    );

});