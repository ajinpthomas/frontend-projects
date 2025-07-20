let scores = {
    teamA: 0,
    teamB: 0
};

function increaseScore(team, points) {
    if (team === 'A') {
        scores.teamA += points;
    } else if (team === 'B') {
        scores.teamB += points;
    } else {
        console.log('Invalid team');
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('teamA').textContent = scores.teamA;
    document.getElementById('teamB').textContent = scores.teamB;
}

function resetScores() {
    scores.teamA = 0;
    scores.teamB = 0;
    updateDisplay();
    console.log('Scores have been reset.');
}

// Initialize display when page loads
document.addEventListener('DOMContentLoaded', updateDisplay);
