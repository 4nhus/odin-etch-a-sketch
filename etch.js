const randomUpTo100 = () => Math.ceil(Math.random() * 100);

function buildGrid(numSquaresPerRow) {
    const gridContainer = document.querySelector('.grid');
    gridContainer.remove();

    const body = document.querySelector('body');
    const newGridContainer = document.createElement('div');
    newGridContainer.classList.add('grid');

    for (let i = 0; i < numSquaresPerRow; i++) {
        const gridRow = document.createElement('div');

        for (let j = 0; j < numSquaresPerRow; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridRow.appendChild(gridSquare);
        }

        gridRow.classList.add('grid-row');

        newGridContainer.appendChild(gridRow);
    }

    body.appendChild(newGridContainer);

    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', (e) => {
            if (!e.target.classList.contains('hovered')) {
                const r = randomUpTo100();
                const g = randomUpTo100();
                const b = randomUpTo100();

                e.target.style.backgroundColor = `rgb(${r}% ${g}% ${b}% / 0.1)`;
                e.target.classList.add('hovered');
            } else if (e.target.style.backgroundColor.charAt(e.target.style.backgroundColor.lastIndexOf('.') - 1) === '0') {
                const num = e.target.style.backgroundColor.charAt(e.target.style.backgroundColor.lastIndexOf('.') + 1) - '0';
                if (num !== 9) {
                    e.target.style.backgroundColor = e.target.style.backgroundColor.slice(0, e.target.style.backgroundColor.lastIndexOf('.') + 1).concat((num + 1) + ')');
                } else {
                    e.target.style.backgroundColor = e.target.style.backgroundColor.slice(0, e.target.style.backgroundColor.lastIndexOf('0')).concat('1)');
                }
            }
        })
    });
}

const button= document.querySelector('button');
button.addEventListener('click', (e) => {
   let numSides = parseInt(prompt("How many squares per row in the new grid? Enter a maximum up to 100."));
   numSides = numSides > 100 ? 100 : numSides;
   buildGrid(numSides);
});

buildGrid(16);