var myIdVariable = document.getElementById("myId").value = "JS put this value in here!";

//This is the same than writing:

//var myIdVariable = document.getElementById("myId");
//myIdVariable.value = "Using JS I put this value in here!";

//What about if it's an element that is not an input, so it
//does not have a value? Like a Div?
document.getElementById("test").innerHTML = "<div><b>I replaced my old Div. This is my new Div! It has a new text and it is bold.<b></div>"
document.getElementById("testafter").style.backgroundColor = "red";

//Changing bg color on click//

function changeBgColor() {
  document.getElementById("testafter1").style.backgroundColor = "green";
}

//The way we write dashes from CSS to JS is to use camelCase.//

//To avoid writing document.getElementById(id); many times later.//

function $(id) {
  return document.getElementById(id);
}

function makingChanges() {
  $("divBeingChanged").style.border = "1px solid red";
  $("divBeingChanged").innerHTML = "BORDER has been added to this div. And TEXT CHANGED too.";
  $("Button").innerHTML = "The text of this button changed! And it becames disabled.";
  $("Button").disabled = true;
}