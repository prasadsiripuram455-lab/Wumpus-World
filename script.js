document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            // Deactivate all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activate current
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Grid Initialization
    const gameBoard = document.getElementById('game-board');
    if (gameBoard) {
        for (let i = 0; i < 25; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell', 'hidden');
            cell.textContent = '?';
            gameBoard.appendChild(cell);
        }
    }

    // Navbar Scroll Effect
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

    // Simple Animation for cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});
