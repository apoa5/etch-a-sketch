
const gridArea = document.querySelector('.gridArea');
const clearButton = document.querySelector('.clearButton');
let isDrawing = false;

gridArea.addEventListener('mousedown', ()=> isDrawing=true);
gridArea.addEventListener('mouseup', ()=> isDrawing=false);

for (let i=0; i<16; i++){
    for (let j=0;j<16;j++){
        const grid = document.createElement('div');
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

clearButton.addEventListener('click', ()=>{
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach(grid => {
        grid.style.backgroundColor='white';
    })
})

document.body.addEventListener('mouseup', ()=> isDrawing=false);