console.log("Witam serdecznie wszystkich programistów!");

let changeColorButton = document.querySelector(".button__changeColorBackground");

changeColorButton = addEventListener("click", () => {
    let body = document.querySelector(".body");
    body.classList.toogle("lightBackgroundColor");
});

changeColorButton();