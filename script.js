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

function game(playerSelection){

    round++;
    let computerSelection = computerPlay()
    let result;
    const paragraph = document.createElement('p');

    switch(playRound(playerSelection,computerSelection)){
        case 1:
            result = `You Win! ${playerSelection} beats ${computerSelection}`
            paragraph.setAttribute('style','color: green;')
            playerScore++;
            break;
        case 2:
            result = `You Lose! ${computerSelection} beats ${playerSelection}`
            paragraph.setAttribute('style','color: red;')
            computerScore++;
            break;
        case 3:
            result = 'Draw';
            paragraph.setAttribute('style','color: gray;')
            playerScore++;
            computerScore++;
            break;
        }

    paragraph.textContent = result;
    history.appendChild(paragraph);

    if(round == 5){
        if(playerScore > computerScore)
           gameResult.textContent = 'End of game - You won!';
        else if(playerScore < computerScore)
            gameResult.textContent = 'End of game - You lost!';
        else gameResult.textContent = 'End of game - Draw!';

    body.insertBefore(gameResult, buttonsContainer);
    
    buttons.forEach((button)=>{
        button.classList.toggle('hidden');
    })

    playAgain.classList.toggle('hidden');
    

    }
}

const body = document.querySelector('body');
const buttonsContainer = document.querySelector('.buttons')
const history = document.querySelector(".history-box");
const buttons = document.querySelectorAll(".choice");
const playAgain = document.querySelector(".play-again");
const gameResult = document.createElement('h2');

let round = 0;
let playerScore = 0;
let computerScore = 0;
let playerChoice;

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        playerChoice = button.textContent;
        game(playerChoice);
    })
})

playAgain.addEventListener('click', ()=>{
    round = 0;
    playerScore = 0;
    computerScore = 0;

    const paragraphs = document.querySelectorAll(".history-box p");

    paragraphs.forEach((p)=>{
        history.removeChild(p);
    })

    buttons.forEach((button)=>{
        button.classList.toggle('hidden');
    })
    playAgain.classList.toggle('hidden');
    body.removeChild(gameResult);
    

})

//game();