const gridContainer = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');

    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridRow.appendChild(gridSquare);
    }

    gridRow.classList.add('grid-row');

    gridContainer.appendChild(gridRow);
}

const gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach(gridSquare => {
   gridSquare.addEventListener('mouseover', (e) => {
       e.target.style.backgroundColor = 'darkgray';
   })
});