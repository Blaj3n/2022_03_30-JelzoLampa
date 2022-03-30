window.addEventListener("load", init);
function ID(elem) {
  return document.getElementById(elem);
}

function init() {
  ID("zold").addEventListener("click", zold);
}

function zold() {
  var elem = event.target;
  elem.style.backgroundColor = "green";
  ID("piros").style.backgroundColor = "black";
}