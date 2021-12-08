const container = document.querySelector(".container");
const resizebtn = document.querySelector("#resizebtn");
const clearbtn = document.querySelector("#clearbtn");
const rubberbtn = document.querySelector("#rubberbtn");
const colorbtn = document.querySelector("#colorbtn");
let sqrnr = 16;
let squares = sqrnr * sqrnr;
let grid;
let isClick = false;

// EventListeners to detect mousedown
document.addEventListener("mousedown", () => {
  isClick = true;
});

document.addEventListener("mouseup", () => {
  isClick = false;
});

// BG Color Change of the Grid Items

// Color

colorbtn.addEventListener("click", color);
function color(grid) {
  container.removeEventListener("mouseover", rubber);
  container.addEventListener("mouseover", color);
  if (isClick) {
    if (grid.target.style.filter === "brightness(80%)") {
      grid.target.style.filter = "brightness(60%)";
    } else if (grid.target.style.filter === "brightness(60%)") {
      grid.target.style.filter = "brightness(40%)";
    } else if (grid.target.style.filter === "brightness(40%)") {
      grid.target.style.filter = "brightness(20%)";
    } else if (grid.target.style.filter === "brightness(20%)") {
      grid.target.style.filter = "brightness(0%)";
    } else if (grid.target.style.filter === "brightness(0%)") {
      grid.target.style.filter = "brightness(0%)";
    } else {
      grid.target.style.filter = "brightness(80%)";
    }
    container.style.filter = "brightness(100%)";
  }
}

// Rubber
rubberbtn.addEventListener("click", rubber);
function rubber(grid) {
  container.removeEventListener("mouseover", color);
  container.addEventListener("mouseover", rubber);
  if (isClick) {
    grid.target.style.filter = "brightness(100%)";
  }
}

// Clearing the Grid
clearbtn.addEventListener("click", () => {
  container.style.filter = "brightness(100%)";
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.filter = "brightness(100%)";
  });
});

// Initial Grid on first load
function initialGrid() {
  for (i = 0; i < squares; i++) {
    grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
  }
}

// Prompt Change to new Number of Squares
resizebtn.addEventListener("click", getSqrnr);

// Function to Change the sqrnr with the prompt + calling changeGrid
function getSqrnr() {
  sqrnr = prompt("How many Squares do you want? Maximum is 100.");
  sqrnr = parseInt(sqrnr || 0);
  if (!sqrnr) {
    sqrnr = 16;
  }
  if (sqrnr < 100) {
    getSquares();
    removeGrid();
    changeGrid();
  } else {
    alert("Bad input");
    return;
  }
}

// Function to find the new Number of Squares
function getSquares() {
  squares = sqrnr * sqrnr;
}

// Changing the Grid after Prompt
function changeGrid() {
  for (let i = 0; i < squares; i++) {
    grid = document.createElement("div");
    grid.className = "grid";
    container.appendChild(grid);
    grid.style.flex = `1 0 ${100 / sqrnr}%`;
  }
}

// Removing the Grid befor a fresh one can be made
function removeGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}
initialGrid();
