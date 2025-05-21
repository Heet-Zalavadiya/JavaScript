// Qs. Create a new button element. Give it a text “click me”, background color of red & text color
// of white.
// Insert the button as the first element inside the body tag.


let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


//  Qs. Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in CSS and try to append this class to the <p> element.
//  Did you notice, how you overwrite the class name when you add a new one?
//  Solve this problem using classList

let para = document.querySelector("p");
para.getAttribute("class");
// para.setAttribute("class", "newClass");

para.classList.add("newClass");
para.classList.remove("newClass");