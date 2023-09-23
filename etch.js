const gridContainer = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');

    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-square');
        gridRow.appendChild(squareDiv);
    }

    gridRow.classList.add('grid-row');

    gridContainer.appendChild(gridRow);
}