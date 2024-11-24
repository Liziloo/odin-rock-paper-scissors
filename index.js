const buttonsDiv = document.querySelector('#buttons');
const resultsDiv = document.querySelector('#results');

buttonsDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        playRound(event.target.textContent);
    }
})

const paperButton = document.createElement('button');
const rockButton = document.createElement('button')
const scissorButton = document.createElement('button');

paperButton.textContent = 'Paper';
rockButton.textContent = 'Rock';
scissorButton.textContent = 'Scissors';

buttonsDiv.appendChild(rockButton);
buttonsDiv.appendChild(paperButton);
buttonsDiv.appendChild(scissorButton);

// Create variables to track computer and human scores
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Get random integer between 0 and 2
    randInt = Math.floor(Math.random() * 3);

    // Declare choice variable
    let choice;

    // Assign value to choice
    switch(randInt) {
        case 0:
            choice = 'ROCK';
            break;
        case 1:
            choice = 'PAPER';
            break;
        case 2:
            choice = 'SCISSORS';
            break;
    };

    // Return computer's selection
    return choice;
}

function getHumanChoice() {
    // Prompt user for choice
    let choice = prompt('Rock, paper or scissors?');
    // Return choice
    return choice;
}

function playRound(humanChoice) {
    // Convert human choice to uppercase for case-insensitive comparison
    humanChoice = humanChoice.toUpperCase();
    const computerChoice = getComputerChoice();

    // IF computer and human choice the same log a tie
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a tie! Your Score: ${humanScore}, Computer Score: ${computerScore}`;
    } else {
        // ELSE check each possible human choice against each possible computer choice and log winner
        if (humanChoice === 'ROCK') {
            if (computerChoice === 'PAPER') {
                computerScore++;
                resultsDiv.textContent = `Paper beats rock -- you lose. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            } else {
                humanScore++;
                resultsDiv.textContent = `Rock beats scissors -- you win! Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            };
        } else if (humanChoice === 'PAPER') {
            if (computerChoice === 'ROCK') {
                humanScore++;
                resultsDiv.textContent = `Paper beats rock -- you win! Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            } else {
                computerScore++;
                resultsDiv.textContent = `Scissors beat paper -- you lose. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            };
        } else {
            if (computerChoice === 'ROCK') {
                computerScore++;
                resultsDiv.textContent = `Rock beats scissors -- you lose. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            } else {
                humanScore++;
                resultsDiv.textContent = `Scissors beat paper -- you win! Your Score: ${humanScore}, Computer Score: ${computerScore}`;
            };
        };
    };
    if (humanScore >= 5 || computerScore >= 5) {
        let winnerAnnouncement = '';
        if (humanScore === 5) {
            winnerAnnouncement = 'You win!'
        } else {
            winnerAnnouncement = 'The computer wins :('
        }
        window.alert(winnerAnnouncement);
        humanScore = 0;
        computerScore = 0;
    }
}

