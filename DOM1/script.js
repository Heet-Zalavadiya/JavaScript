alert("Welcome to DOM Demo!");
window.console.log("hello");//all are window object but not specified automatically used 
console.dir(window.document);//properties or method print  or object print
// windows.document contains all html file tags
// console.dir(head);
// console.dir(body);
let heading = document.getElementById("myid");
console.dir(heading);
let headings = document.getElementsByClassName("myclass");
console.dir(headings);//retrns html collection similar to array
console.log(headings);
let parhas = document.getElementsByTagName("p");
console.dir(parhas);

let firstEle = document.querySelector("p");//returns nodelist
console.dir(firstEle);

let allEle = document.querySelectorAll("p");//returns nodelist
console.dir(allEle);


//  Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College
//  students” to this text using JS.

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText += " from Darshan University students";


//  Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each
//  of them.

let divs = document.querySelectorAll(".box");
console.dir(divs);

let idx = 1;
for (const div of divs) {
   div.innerText = `new unique value ${idx}`;
   idx++;
}
