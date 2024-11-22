function getComputerChoice() {
    // Get random integer between 0 and 2
    randInt = Math.floor(Math.random() * 3);

    // Declare choice variable
    let choice;

    // Assign value to choice
    switch(randInt) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    };

    // Return computer's selection
    return choice;
}