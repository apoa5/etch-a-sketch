
const gridArea = document.querySelector('.gridArea');
const clearButton = document.querySelector('.clearButton');
const gridSizeButton = document.querySelector('.gridSizeButton');
let isDrawing = false;

gridArea.addEventListener('mousedown', ()=> isDrawing=true);
gridArea.addEventListener('mouseup', ()=> isDrawing=false);

for (let i=0; i<16; i++){
    for (let j=0; j<16; j++){
        const grid = document.createElement('div');
        grid.style.width = '25px'
        grid.style.height = '25px'
        grid.classList.add('grid');
        grid.addEventListener('mouseenter', ()=>{
            if (isDrawing){
                grid.style.backgroundColor='black';
            }
        })
        grid.addEventListener('mousedown', ()=> {
            grid.style.backgroundColor='black';
        })

        gridArea.appendChild(grid);
    }
}


gridSizeButton.addEventListener('click', changeGridSize);

function changeGridSize(){
    let size = prompt("Please enter a new grid size not exceeding 100");

    if (isNaN(size) || size < 1 || size > 100){
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    size = parseInt(size);
    console.log(size);
    gridArea.innerHTML ='';
    const gridWidth = 400/size + 'px';
    
    for (let i=0; i<size; i++){
        for (let j=0; j<size; j++){
            const grid = document.createElement('div');
            grid.style.width = gridWidth;
            grid.style.height=gridWidth;
            grid.classList.add('grid');
            grid.addEventListener('mouseenter', ()=>{
                if (isDrawing){
                    grid.style.backgroundColor='black';
                }
            })
            grid.addEventListener('mousedown', ()=> {
                grid.style.backgroundColor='black';
            })
    
            gridArea.appendChild(grid);
        }
    }

}

clearButton.addEventListener('click', ()=>{
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach(grid => {
        grid.style.backgroundColor='white';
    })
})


document.body.addEventListener('mouseup', ()=> isDrawing=false);