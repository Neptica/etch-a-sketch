const size_input = document.getElementById("size");
const size_btn = document.getElementById("resize");

const board = document.getElementById("board");

const totalGrid = 960;
let currentColor = "black";

function changeBoxStyle() {
  this.style.backgroundColor = currentColor;
}

for (let i = 0; i < 1; i++) {
  let gridSize = 16;
  let pxPerBox = totalGrid / gridSize;
  let neededBoxes = gridSize * gridSize;
  let row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < neededBoxes; i++) {
    // one div to make it square first
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.cssText = `height: ${pxPerBox - 1}px; width: ${pxPerBox - 1}px; background-color: white; border: black solid 0.5px;`;
    box.addEventListener("mouseover", changeBoxStyle);
    row.appendChild(box);
    if (i % gridSize === gridSize - 1) {
      board.appendChild(row);
      row = document.createElement("div");
      row.classList.add("row");
    }
  }
}

function changeGrid() {
  let gridSize = size_input.value;
  size_input.value = "";
  if (isNaN(gridSize) || gridSize === "" || gridSize > 100 || gridSize < 16)
    return;
  board.innerHTML = "";
  let pxPerBox = totalGrid / gridSize;
  let neededBoxes = gridSize * gridSize;
  let row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < neededBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.cssText = `height: ${pxPerBox - 1}px; width: ${pxPerBox - 1}px; background-color: white; border: black solid 0.5px;`;
    box.addEventListener("mouseover", changeBoxStyle);
    row.appendChild(box);
    if (i % gridSize === gridSize - 1) {
      board.appendChild(row);
      row = document.createElement("div");
      row.classList.add("row");
    }
  }
}

size_btn.addEventListener("click", changeGrid);

function changeColor() {
  currentColor = this.textContent;
}

let buttons = document.getElementsByClassName("picker");
for (let btn of buttons) {
  btn.style.cssText = `background-color: ${btn.textContent};`;
  btn.addEventListener("click", changeColor);
}
