const copyButtons = document.querySelectorAll(".copy-spell");


copyButtons.forEach(button => {

    button.addEventListener("click", () => {


        const code =
        button.nextElementSibling.innerText;


        navigator.clipboard.writeText(code);


        button.innerText = "Copied! ✨";


        setTimeout(() => {

            button.innerText = "Copy Spell 🪄";

        }, 2000);


    });

});



const searchInput = document.querySelector("#spell-search");


if (searchInput) {


    searchInput.addEventListener("input", () => {


        const searchTerm =
        searchInput.value.toLowerCase();


        const spells =
        document.querySelectorAll(".spell-card");


        spells.forEach(spell => {


            const text =
            spell.innerText.toLowerCase();


            if(text.includes(searchTerm)) {

                spell.style.display = "";

            } else {

                spell.style.display = "none";

            }


        });


    });


}

const backToTopButton = document.querySelector("#back-to-top");

if (backToTopButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTopButton.style.display = "block";

        } else {

            backToTopButton.style.display = "none";

        }

    });

    backToTopButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



// ==============================
// SPELLBOOK FILTERING
// ==============================

const filterButtons = document.querySelectorAll(".filter-button");
const spellCards = document.querySelectorAll(".spell-card");
const activeFilters = document.getElementById("active-filters");


let currentFilters = [];



filterButtons.forEach(button => {

    button.addEventListener("click", () => {


    const selectedFilter = button.textContent.trim();


    toggleFilter(selectedFilter);


    button.classList.toggle("active");


    filterSpells();


});

});



function filterSpells() {


    spellCards.forEach(card => {


        if (currentFilters.length === 0) {


            card.style.display = "block";


        } 
        
        else {


            const cardText = card.textContent.toLowerCase();


            if (
                currentFilters.every(filter =>
                cardText.includes(filter.toLowerCase())
                )
            ) {


                card.style.display = "block";


            } 
            
            else {


                card.style.display = "none";


            }


        }


    });



    if (currentFilters.length > 0) {


        activeFilters.innerHTML = currentFilters.map(filter =>

        `
        <span class="filter-chip">
            ${filter} 

            <button class="remove-filter" data-filter="${filter}">
            ❌
            </button>

        </span>
        `

        ).join("");


    }
    else {


        activeFilters.innerHTML =

        `
        <span class="no-filter">
           None
        </span>
        `;


    }


    }


function toggleFilter(filter) {


    if (currentFilters.includes(filter)) {


        currentFilters = currentFilters.filter(item => item !== filter);


    } 
    
    else {


        currentFilters.push(filter);


    }


}



// ==============================
// REMOVE ACTIVE FILTER
// ==============================


activeFilters.addEventListener("click", (event) => {


    if(event.target.classList.contains("remove-filter")) {


        const filterToRemove =
        event.target.dataset.filter;


        currentFilters =
        currentFilters.filter(filter => filter !== filterToRemove);


        filterButtons.forEach(button => {


            if(button.textContent.trim() === filterToRemove) {


                button.classList.remove("active");


            }


        });


        filterSpells();


    }


});



// ==============================
// SPELL TAG FILTERS
// ==============================

const spellTags = document.querySelectorAll(".spell-tag");


spellTags.forEach(tag => {


    tag.addEventListener("click", () => {


        const selectedTag = tag.textContent.trim();


        toggleFilter(selectedTag);


        filterSpells();


    });


});