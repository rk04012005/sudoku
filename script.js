const sudokuGrid = document.getElementById('sudoku-grid');

// Generates an empty Sudoku grid
function generateSudoku() {
  sudokuGrid.innerHTML = ''; // Clear the grid

  for (let i = 0; i < 81; i++) {
    const cell = document.createElement('input');
    cell.setAttribute('type', 'text'); // Change from number to text
    cell.setAttribute('maxlength', '1'); // Allow only one character per cell
    cell.classList.add('cell');

    // Restrict input to numbers (1-9) only
    cell.addEventListener('input', function () {
      if (!/^[1-9]$/.test(cell.value)) {
        cell.value = ''; // Clear if the input is not a number between 1 and 9
      }
    });

    sudokuGrid.appendChild(cell);
  }

  // Randomly fill some cells to simulate a Sudoku puzzle (not a full generator)
  fillRandomCells();
}

// Simple function to randomly fill some cells
function fillRandomCells() {
  const preFilledCells = 25;
  for (let i = 0; i < preFilledCells; i++) {
    let randomIndex = Math.floor(Math.random() * 81);
    let randomValue = Math.floor(Math.random() * 9) + 1;
    sudokuGrid.children[randomIndex].value = randomValue;
    sudokuGrid.children[randomIndex].setAttribute('disabled', 'true'); // Disable input for pre-filled cells
  }
}

generateSudoku();
