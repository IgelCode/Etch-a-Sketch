const container = document.querySelector(".container");
const resizebtn = document.querySelector("#resizebtn");
let sqrnr = 16;
let squares = sqrnr * sqrnr;
let i;
let grid;

//Initial Grid on first load
function initialGrid() {
  for (i = 0; i < squares; i++) {
    grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
  }
}
initialGrid();

//BG Color Change of the Grid Items
container.addEventListener(
  "mouseover",
  (event) => (event.target.style.backgroundColor = "black")
);

//Prompt Change to new Number of Squares
resizebtn.addEventListener("click", getSqrnr);

//Function to Change the sqrnr with the prompt + calling changeGrid
function getSqrnr() {
  sqrnr = prompt("How many Squares do you want? Maximum is 100.");
  if (sqrnr < 100) {
    getSquares();
    removeGrid();
    changeGrid();
  } else {
    alert("Too many!");
    return;
  }
}

//Function to find the new Number of Squares
function getSquares() {
  squares = sqrnr * sqrnr;
}
//Changing the Grid after Prompt
function changeGrid() {
  if (i < squares) {
    for (i = 0; i < squares; i++) {
      grid = document.createElement("div");
      grid.className = "grid";
      container.appendChild(grid);
    }
  } else if (i > squares) {
    for (i = 0; i < squares; i++) {
      grid = document.createElement("div");
      grid.className = "grid";
      container.appendChild(grid);
    }
  }
}

//removing the Grid befor a fresh one can be made
function removeGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}
