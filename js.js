const container = document.querySelector(".container");
const resizebtn = document.querySelector("#resizebtn");
const clearbtn = document.querySelector("#clearbtn");
let sqrnr = 16;
let squares = sqrnr * sqrnr;
let grid;
let isClick = false;

// EventListeners to detect mousedown
container.addEventListener("mousedown", () => {
  isClick = true;
});

container.addEventListener("mouseup", () => {
  isClick = false;
});

// Clearing the Grid - not working
clearbtn.addEventListener("click", () => {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.filter = "brightness(100%)";
  });
});

// BG Color Change of the Grid Items
container.addEventListener("mouseover", (event) => {
  if (isClick) {
    if (event.target.style.filter === "brightness(80%)") {
      event.target.style.filter = "brightness(60%)";
    } else if (event.target.style.filter === "brightness(60%)") {
      event.target.style.filter = "brightness(40%)";
    } else if (event.target.style.filter === "brightness(40%)") {
      event.target.style.filter = "brightness(20%)";
    } else if (event.target.style.filter === "brightness(20%)") {
      event.target.style.filter = "brightness(0%)";
    } else if (event.target.style.filter === "brightness(0%)") {
      event.target.style.filter = "brightness(0%)";
    } else {
      event.target.style.filter = "brightness(80%)";
    }
  }
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
  if (sqrnr < 100 || sqrnr > 0) {
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
