let modeBtn = document.querySelector('#mode');
let currMode = "light"; // dark
let body = document.querySelector("body");


modeBtn.addEventListener("click", () => {

    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light"
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);

});

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
};