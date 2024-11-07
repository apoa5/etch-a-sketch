const gridArea = document.querySelector('.gridArea');
const clearButton = document.querySelector('.clearButton');
const gridSizeButton = document.querySelector('.gridSizeButton');
const rainbowButton = document.querySelector('.rainbow');
let isDrawing = false;
let isRainbow = false;

gridArea.addEventListener('mousedown', () => isDrawing = true);
document.body.addEventListener('mouseup', () => isDrawing = false);


rainbowButton.addEventListener('click', () => {
    isRainbow = !isRainbow;
});


createGrid(16);

function createGrid(size) {
    gridArea.innerHTML = ''; 
    const gridWidth = 400 / size + 'px';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.style.width = gridWidth;
            grid.style.height = gridWidth;
            grid.classList.add('grid');

            grid.addEventListener('mouseenter', () => {
                if (isDrawing) {
                    grid.style.backgroundColor = isRainbow ? getRandomColor() : 'black';
                }
            });
            grid.addEventListener('mousedown', () => {
                grid.style.backgroundColor = isRainbow ? getRandomColor() : 'black';
            });

            gridArea.appendChild(grid);
        }
    }
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

gridSizeButton.addEventListener('click', changeGridSize);

function changeGridSize() {
    let size = prompt("Please enter a new grid size not exceeding 100");

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    size = parseInt(size);
    createGrid(size); 
}

clearButton.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(grid => {
        grid.style.backgroundColor = 'white';
    });
});
