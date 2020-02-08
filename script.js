var i = 10;
var j = 10;
const cont = document.querySelector('#container');
const res = document.querySelector('#reset');

function createGrid(x) {
    i = x;
    j = x;
    let size = 650/i + "px";
   
    for (var row = 0; row < i; row++){
        for(var cols = 0; cols < j; cols++){
            const cell = document.createElement('div');
            cell.setAttribute("id", "gridDiv")
            cell.classList.add('grid');
            cell.style.height = size;
            cell.style.width = size;
            cell.addEventListener("mouseover", changeColor);
            cont.append(cell);  
            
        }
    }
}
function randoColor(){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);
    var genColor = "rgb(" + r + "," + g + "," + b + ")";
    return genColor;
}

function changeColor(e) {
    
        this.style.backgroundColor = randoColor();
    
}
function resetGrid(e) {
    while (cont.firstChild){
        cont.removeChild(cont.firstChild);
    }
    createGrid(i);
}

function blankGrid(e){
    while (cont.firstChild){
        cont.removeChild(cont.firstChild);
    }
}
function promptGrid(){
    //Ask user how many rows/colums they want to add
    blankGrid();
    var rc = prompt("Please Enter a grid size");
    if (rc != null) {
        createGrid(rc);
    }

}

createGrid(i);