const container = document.getElementById("grid-container");

function createRows(rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", columns);
    for (i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function colourCell() {
            cell.style.backgroundColor = "rgb(80,80,80)";
        });
    };
};

createRows(16,16);

const button = document.getElementById("button");

button.addEventListener("click", function gridSize(size) {
    size = prompt("Select grid size between 0 and 101.");
    container.innerHTML = "";
    if (0 < size && size <= 100){
        createRows(size, size);
    } else {
        createRows(16, 16);
        alert("Please enter a value between 1 and 100");
    }
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function clearCell() {
    container.innerHTML = "";
    createRows(16,16);
});