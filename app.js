const size_input = document.getElementById("size");
const size_btn = document.getElementById("resize");

const board = document.getElementById("board");

const totalGrid = 960;

for (let i = 0; i < 1; i++) {
  let gridSize = 16;
  let pxPerBox = totalGrid / gridSize;
  let neededBoxes = gridSize * gridSize;
  let row = document.createElement("div");
  row.classList.add("row");
  row.style.cssText = "display: flex; flex-direction: columns;";
  for (let i = 0; i < neededBoxes; i++) {
    // one div to make it square first
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.cssText = `height: ${pxPerBox - 1}px; width: ${pxPerBox - 1}px; background-color: white; border: black solid 0.5px;`;
    row.appendChild(box);
    if (i % gridSize === gridSize - 1) {
      board.appendChild(row);
      row = document.createElement("div");
      row.classList.add("row");
      row.style.cssText = "display: flex; flex-direction: columns;";
    }
  }
}

function changeGrid() {
  let gridSize = size_input.value;
  size_input.value = "";
  if (isNaN(gridSize) || gridSize === "") return;
  board.innerHTML = "";
  let pxPerBox = totalGrid / gridSize;
  let neededBoxes = gridSize * gridSize;
  let row = document.createElement("div");
  row.classList.add("row");
  row.style.cssText = "display: flex; flex-direction: columns;";
  for (let i = 0; i < neededBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.cssText = `height: ${pxPerBox - 1}px; width: ${pxPerBox - 1}px; background-color: white; border: black solid 0.5px;`;
    row.appendChild(box);
    if (i % gridSize === gridSize - 1) {
      board.appendChild(row);
      row = document.createElement("div");
      row.classList.add("row");
      row.style.cssText = "display: flex; flex-direction: columns;";
    }
  }
}

size_btn.addEventListener("click", changeGrid);
