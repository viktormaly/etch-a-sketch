let gridContainer = document.querySelector("#grid-container");
//new class
//gridContainer.classList.add("painting")

let child = document.createElement("div");



child.style.backgroundColor = "red";


function calculateGridWidth(line){
  let gridNumber = line * line
  let width1 = 800 / line;
  let squareLength = width1 + "px"  

  for(i = 1; i <= gridNumber; i++){
  let child = document.createElement("div");
  child.classList.add("child");
   let side = gridContainer.appendChild(child);
   side.style.height = squareLength;
   side.style.width = squareLength;
  }
}


gridContainer.onmouseover = function(event){
  let target = event.target;
  target.style.backgroundColor = "pink";
}
/*
gridContainer.onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';
}*/

calculateGridWidth(16)















