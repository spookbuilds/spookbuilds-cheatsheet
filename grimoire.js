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