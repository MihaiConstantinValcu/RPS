function computerPlay(){
    let choice = Math.random()*3;
    switch(Math.floor(choice)){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    choices = playerSelection[0] + computerSelection[0];
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    switch(choices){
        case 'rS':
            case 'sP':
                case 'pR':
                    return 1;
        case 'rP':
        case 'sR':
        case 'pS':
            return 2;
        default:
            return 3;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt("Enter your choice: ");
        let computerSelection = computerPlay()
        console.log('Ola');
        switch(playRound(playerSelection,computerSelection)){
            case 1:
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
                break;
            case 2:
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                break;
            case 3:
                console.log('Draw');
                playerScore++;
                computerScore++;
        }
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if(playerScore > computerScore)
        console.log('End of game - You won!');
    else if(playerScore < computerScore)
        console.log('End of game - You lost!');
    else console.log('End of game - Draw!')
}

game();