
let score = JSON.parse(localStorage.getItem('localScores'));

if(score === null){
 score = {
    wins: 0,
    loses: 0,
    ties: 0,
    }
}

document.querySelector('.scores')
    .innerHTML = `Wins: ${score.wins} - Loses: ${score.loses} - Ties: ${score.ties}`

function compPick(){
    const randValue = Math.random();
    let compPick = '';

    if(randValue >= 0 && randValue < 1/3){
        compPick = 'rock';
    }
    else if(randValue >= 1/3 && randValue < 2/3){
        compPick = 'paper';
    }
    else{
        compPick = 'scissor';
    }

    return compPick;
}

function decideResult(rps){
    const compGuess = compPick();
    let result = '';
    
    if(rps === 'rock'){
        if( compGuess === 'rock'){
            result = 'Tie';
        }
        else if(compGuess === 'paper'){
            result = 'You Lose';
        }
        else{
            result = 'You Won';
        }
    }

    else if(rps === 'paper'){
        if( compGuess === 'rock'){
            result = 'You Won';
        }
        else if(compGuess === 'paper'){
            result = 'Tie';
        }
        else{
            result = 'You Lose';
        }
    }

    else if(rps === 'scissor'){
        if( compGuess === 'rock'){
            result = 'You Lose';
        }
        else if(compGuess === 'paper'){
            result = 'You Won';
        }
        else{
            result = 'Tie';
        }
    }

    if(result === 'You Won'){
        score.wins++;
    }
    else if(result === 'You Lose'){
        score.loses++;
    }
    else{
        score.ties++;
    }


    document.querySelector('.result-text')
        .innerHTML = result;
    
    document.querySelector('.player-move-icon').src=`resources/${rps}-transparent.png`;

    document.querySelector('.computer-move-icon').src=`resources/${compGuess}-transparent.png`;

    document.querySelector('.scores')
        .innerHTML = `Wins: ${score.wins} - Loses: ${score.loses} - Ties: ${score.ties}`

    localStorage.setItem('localScores', JSON.stringify(score));
}

function scoreReset(){
    score.wins =0;
    score.loses = 0;
    score.ties = 0;

    localStorage.removeItem('localScores');

    document.querySelector('.scores')
        .innerHTML = `Wins: ${score.wins} - Loses: ${score.loses} - Ties: ${score.ties}`

    document.querySelector('.player-move-icon').src=``;

    document.querySelector('.computer-move-icon').src=``;
    
}