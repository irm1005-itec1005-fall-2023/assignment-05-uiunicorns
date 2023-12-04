//Js for donate page
//general code for making the overall donation page work

// Variables
const h1 = document.createElement("h1");
const appID = "donate";
const donateButton = document.createElement("button");

let appContainer = document.getElementById(appID);


let donateValue = 0;
let rec = false;
let Name = "";
let Email = "";
let Phone = "";


// Functions

function inititialise() {

h1.textContent = "Donate";
appContainer.appendChild(h1);

document.addEventListener("DOMContentLoaded", function() {
  // Your code here
});
}

inititialise();