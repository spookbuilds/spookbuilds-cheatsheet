const fs = require("fs");

const html = fs.readFileSync("javascript-sorcery.html", "utf8");


// Find spell cards
const cards = [...html.matchAll(
    /<article class="spell-card" id="(.*?)">([\s\S]*?)<\/article>/g
)];


console.log("Total spells:", cards.length);


console.log("\n====================");
console.log("SPELL LIST");
console.log("====================\n");


cards.forEach((card, index) => {

    const id = card[1];

    const content = card[2];


    const titleMatch =
    content.match(/<h2>(.*?)<\/h2>/);


    const title = titleMatch
    ? titleMatch[1].replace(/<[^>]*>/g,"").trim()
    : "NO TITLE";


    console.log(
    `${index + 1}. ${title} (${id})`
    );


});