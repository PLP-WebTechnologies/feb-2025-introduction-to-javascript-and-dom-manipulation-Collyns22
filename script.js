// change content dynamically
function changeContent() {
  document.getElementById("dynamicChange").textContent =
    "I told you I Change Dynamically!";
}

// changing CSS styles via JavaScript
function styleChange() {
  const cssElement = document.getElementById("changeCss");
  cssElement.style.color = "white";
  cssElement.style.backgroundColor = "black";
  cssElement.style.fontSize = "30px";
}

// Lets add or remove an element when clicked
function toggleMe() {
  const addRemove = document.getElementById("disapper");
  if (addRemove.style.display == "none") {
    addRemove.style.display = "block";
  } else {
    addRemove.style.display = "none";
  }
}