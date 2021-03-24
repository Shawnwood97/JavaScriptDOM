// Collaborated with Brittany, though mine was complete, excpet for comments prior to collab.

// Sets firstH1 variable to the first h1 thats inside a div thats inside the body.
// then we concatenat the string of text to the end of the text content of the H1.

var firstH1 = document.querySelector("body>div>h1");
firstH1.innerText += " I added this part";

// divHTwo is set to ALL h2's that are in divs that are in the body.
// forloop because querySelectorAll returns an array;
// changed text of all of the H2's that meet the argument condition.

var divHTwo = document.querySelectorAll("body>div>h2");
for (var i = 0; i < divHTwo.length; i++) {
  divHTwo[i].innerText = "I updated 2 h2's with this text";
}

// store element with id "button1" in variable "button1".
// change background, border, padding of button.

var button1 = document.getElementById("button1");
button1.style.background = "#B4DA55";
button1.style.border = "2px solid black";
button1.style.padding = "5px 10px";

// var circles stores an array of all elements with the classname "circle".
// for loop to iterate through the array.
// each element with that classname will be turned into a circle by altering their styles.

var circles = document.getElementsByClassName("circle");
for (var i = 0; i < circles.length; i++) {
  circles[i].style.content = '" "';
  circles[i].style.background = "black";
  circles[i].style.height = "10px";
  circles[i].style.width = "10px";
  circles[i].style.borderRadius = "50%";
}

// var h2Bg stores all h2 tags.
// forloop to iterate through them and change the color on each.

var h2Bg = document.getElementsByTagName("h2");
for (var i = 0; i < h2Bg.length; i++) {
  h2Bg[i].style.color = "#B4DA55";
}

// var createH3 stores the method to creates a new h3 element.
// next line uses the var.innerText to create an h3 with the text content of the string after.
//  next line appends it to the body.

var createH3 = document.createElement("h3");
createH3.innerText = "Boo! JS put me Here!";
document.body.append(createH3);

// Variable that creates a p tag.
// Variable that creates a text node.
// Variable that targets ID of header.
// append the text node inside the created P tag.
// append that to the inside of the header
var aPTag = document.createElement("p");
var magicText = document.createTextNode("This text was created with MAGIC");
var header = document.getElementById("header");
aPTag.append(magicText);
header.append(aPTag);

// variable that targets ID remover. Parent of removed item.
// variable that targets id removeThis. Removed item.
// uses removeChild on parent and removed child using their variables. Stores the removed child in a variable.

var remover = document.getElementById("remover");
var removed = document.getElementById("removeThis");
var removedKid = remover.removeChild(removed);

// Targetted 3 different ID's and stored them in variables for use with the classlist methods.
var classRemoved = document.getElementById("div1");
var classToggled = document.getElementById("div2");
var classAdd = document.getElementById("div3");

// remove class "illBeRemoved" from the element stored in classRemoved.
// toggle class "toggled" on element stored in classToggled. This essentially "adds" it in my case, since it doesn't exist already.
// add class "thisClassIsAdded" to the element stored in classAdd.
classRemoved.classList.remove("illBeRemoved");
classToggled.classList.toggle("toggled");
classAdd.classList.add("thisClassIsAdded");
