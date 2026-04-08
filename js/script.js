console.log("Witam serdecznie wszystkich programistów! Ten kod jest już w repozytorium Git.");

let changeColorButton = document.querySelector(".button__changeColorBackground");

changeColorButton = addEventListener("click", () => {
    let body = document.querySelector(".body");
    body.classList.toogle("lightBackgroundColor");
});

changeColorButton();