
let rows = document.getElementsByClassName('gridRow');

const cells = document.getElementsByClassName('cell');
console.log(cells);

const container = document.querySelector('#container');

let cellNumber = 16;

function grid() {
    
    makeRows(cellNumber);
    makeColumns(cellNumber);
     
}



function makeRows(numRow) {
for (i=0; i < numRow; i++){
const rows = document.createElement('div');
rows.classList.add('gridRow');
container.appendChild(rows);
}
}
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.classList.add('cell');
            rows[j].appendChild(newCell);

        }
    }
}

grid();

const allCells = document.querySelectorAll(".cell");

const allRows = document.querySelectorAll('.gridRow');

console.log(allRows);
console.log(allCells);

//array of random colors
const color = [, "#3C9EE7", "#E7993C", "DeepPink", "#0000FF", "#FF0000", "#00FFFF", "#FF00FF", "#FFFF00", "#00FF00", "purple", "orange", "#E73C99", "#3CE746", "#E7993C"];


allCells.forEach(cell => {
    cell.addEventListener('mouseover', function handleMouseOver(event) {
        
        cell.style.background = color[Math.floor(Math.random() * color.length)];
    });
});



const reset = document.getElementById("reset");

reset.onclick = function(event) {
   allCells.forEach(cell => {

   
    cell.setAttribute('style', '');
});
}

function clearGrid() {
    const allRows = document.querySelectorAll('.gridRow');
    allRows.forEach(gridRow => {
        gridRow.remove();
        
     });
}
function newGrid() {
    

    cellNumber = prompt('how many');
    
    makeRows(cellNumber);
    makeColumns(cellNumber);

    

    const allCells = document.querySelectorAll(".cell");
    const color = [, "#3C9EE7", "#E7993C", "DeepPink", "#0000FF", "#FF0000", "#00FFFF", "#FF00FF", "#FFFF00", "#00FF00", "purple", "orange", "#E73C99", "#3CE746", "#E7993C"];


    allCells.forEach(cell => {
        cell.addEventListener('mouseover', function handleMouseOver(event) {
            
            cell.style.background = color[Math.floor(Math.random() * color.length)];
        });
    });

    const reset = document.getElementById("reset");

reset.onclick = function(event) {
   allCells.forEach(cell => {

   
    cell.setAttribute('style', '');
});
}
}


   



//const gridNumber = document.getElementById('gridNumber');

//gridNumber.onclick = function(event) {
  //clearGrid();
    
//}










