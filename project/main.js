let gridContainer = document.querySelector("#grid-container");
let child = document.createElement("div");
child.classList.add("child");

child.innerHTML = "Cube"

gridContainer.appendChild(child)


let quadrado = "50px"
let valor = 800 / quadrado
let merda = valor * valor
child.style.height = quadrado;
child.style.width = quadrado;








