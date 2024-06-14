function initGame() {
    const gameBoard = document.getElementById('game-board');
  
    // Create a 10x10 grid
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
    }
  
    // Initialize the snake at the first cell
    const cells = document.querySelectorAll('.cell');
    cells[0].classList.add('snake');
  }
  
  // Initialize the game when the window loads
  window.onload = initGame;
  