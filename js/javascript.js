document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const scoreValue = document.getElementById('scoreValue');
    const startButton = document.getElementById('startButton');
    let score = 1;
    let gameInterval;

    startButton.addEventListener('click', startGame);

    function startGame() {
        clearGameBoard();
        score = 1;
        updateScore();
        startButton.disabled = true;
        gameInterval = setInterval(addTarget, 1000);
    }

    function clearGameBoard() {
        gameBoard.innerHTML = '';
    }

    function updateScore() {
        scoreValue.textContent = score;
    }

    function addTarget() {
        const target = document.createElement('div');
        target.classList.add('target');
        target.addEventListener('click', hitTarget);
        gameBoard.appendChild(target);
    }

    function hitTarget(e) {
        const target = e.target;
        target.classList.remove('target');
        target.classList.add('hit');
        score++;
        updateScore();
        setTimeout(() => {
            gameBoard.removeChild(target);
        }, 500);
    }

    function endGame() {
        clearInterval(gameInterval);
        startButton.disabled = false;
    }
});
