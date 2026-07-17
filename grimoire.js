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