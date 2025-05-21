const URL = "https://meowfacts.herokuapp.com/";
const factPara = document.querySelector("#image");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data .......");
    let response = await fetch(URL);
    console.log(response);// JSON formate
    let data = await response.json();
    factPara.innerText = data.data;
};

btn.addEventListener("click", getFacts); 