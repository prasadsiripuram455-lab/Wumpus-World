document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------
    // PLAYER POSITION
    // -----------------------------
    let playerRow = 0;
    let playerCol = 0;

    const gridSize = 5;

    // -----------------------------
    // GRID SETUP
    // -----------------------------
    const gameBoard = document.getElementById('game-board');

    function createGrid() {
        gameBoard.innerHTML = "";

        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell', 'hidden');
            gameBoard.appendChild(cell);
        }
    }

    // -----------------------------
    // RENDER PLAYER
    // -----------------------------
    function renderPlayer() {
        const cells = document.querySelectorAll('.cell');

        // Remove previous player
        cells.forEach(cell => {
            cell.classList.remove('agent-here');
            cell.textContent = '';
        });

        // Calculate index
        const index = playerRow * gridSize + playerCol;

        // Place player
        cells[index].classList.add('agent-here');
        cells[index].textContent = 'A';
    }

    // -----------------------------
    // MOVE FUNCTION
    // -----------------------------
    function movePlayer(newRow, newCol) {
        if (newRow < 0 || newRow >= gridSize || newCol < 0 || newCol >= gridSize) {
            console.log("Invalid move");
            return;
        }

        playerRow = newRow;
        playerCol = newCol;

        renderPlayer();
        console.log("Player at:", playerRow, playerCol);
    }

    // -----------------------------
    // BUTTON CONTROLS
    // -----------------------------
    const upBtn = document.getElementById("btn-up");
    const downBtn = document.getElementById("btn-down");
    const leftBtn = document.getElementById("btn-left");
    const rightBtn = document.getElementById("btn-right");

    if (upBtn && downBtn && leftBtn && rightBtn) {
        upBtn.addEventListener("click", () => movePlayer(playerRow - 1, playerCol));
        downBtn.addEventListener("click", () => movePlayer(playerRow + 1, playerCol));
        leftBtn.addEventListener("click", () => movePlayer(playerRow, playerCol - 1));
        rightBtn.addEventListener("click", () => movePlayer(playerRow, playerCol + 1));
    }

    // -----------------------------
    // RESTART BUTTON
    // -----------------------------
    const restartBtn = document.getElementById("restart-btn");

    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            playerRow = 0;
            playerCol = 0;
            renderPlayer();
        });
    }

    // -----------------------------
    // TAB SWITCHING
    // -----------------------------
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // -----------------------------
    // NAVBAR SCROLL EFFECT
    // -----------------------------
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 5%';
            navbar.style.background = 'rgba(9, 9, 11, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 5%';
            navbar.style.background = 'rgba(9, 9, 11, 0.8)';
        }
    });

    // -----------------------------
    // FADE-IN ANIMATION
    // -----------------------------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // -----------------------------
    // INITIALIZE GAME
    // -----------------------------
    if (gameBoard) {
        createGrid();
        renderPlayer();
    }

});