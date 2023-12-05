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

let form = document.getElementById("test");

let ten = document.getElementById("btn10");
let twenty = document.getElementById("btn20");
let thirty = document.getElementById("btn30");
let fourty = document.getElementById("btn40");

let field = document.getElementById("cstm");
let signUp = document.getElementById("myCheck");
let pay = document.getElementById("page2");

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Functions

chosen = [0];
YN = [false];

ten.addEventListener("click", select, false);
twenty.addEventListener("click", select, false);
fourty.addEventListener("click", select, false);
thirty.addEventListener("click", select, false);
field.addEventListener("click", select,false);
signUp.addEventListener("click", select,false)

function select () {
  if (this.id == "btn10") {
      //css goes here
      chosen [0] = 1;
  }
  else if (this.id == "btn20") {
      //css goes here
      chosen [0] = 2;
  } 
  else if (this.id == "btn30") {
      //css goes here
      chosen [0] = 3;
  }
  else if (this.id == "btn40") {
      //css goes here
      chosen [0] = 4;
  }
  else if (this.id == "cstm") {
      chosen [0] = 5;
  }
  
  if (this.id == "myCheck" && YN[0] == false) {
      YN [0] = true;
  } else {
      YN [0] = false;
  }
  console.log(chosen);
  console.log(YN);
}



form.addEventListener("submit", formInput,false);
pay.addEventListener("submit",formInput,false) 

function formInput(event) {
    event.preventDefault();
    
    if(this.id == "test") {
        modal.style.display = "block";
        console.log(this);
    }
    else if (this.id == "page2") {

        console.log("here");

        window.location.assign("http://127.0.0.1:3000/assignment-05-uiunicorns/donate.html"); //will send you back to the main page
        window.alert("Thank you for your donation");
    }
  
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


function inititialise() {

h1.textContent = "Donate";
appContainer.appendChild(h1);

document.addEventListener("DOMContentLoaded", function() {
  // Your code here
});
}

inititialise();