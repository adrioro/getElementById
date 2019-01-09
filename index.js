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