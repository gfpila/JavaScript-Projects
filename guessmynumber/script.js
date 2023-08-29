'use strict';

let guess;
let score;
let highscore = 0;
//GERAR RANDOM
let random = Math.trunc(Math.random()*20) + 1;

//RECUPERAR GUESS
document.querySelector('.check').addEventListener('click', function(){
    guess = Number(document.querySelector('.guess').value);
    console.log(guess, random);
    //verificar random
    if(guess === (random)) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.message').textContent = '🎉 You guessed right! 🎉';
        document.querySelector('.number').textContent = random;
        document.querySelector('.number').style.width = '20rem';
        document.querySelector('.check').disabled = true;
        document.querySelector('.guess').disabled = true;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
        return
    }
    else if(guess < (random)) {
        document.querySelector('.message').textContent = '📉 Too low! 📉';
    }
    else if(guess > (random)) {
        document.querySelector('.message').textContent = '📈 Too high! 📈';
        }
    score = Number(document.querySelector('.score').textContent) - 1;
    document.querySelector('.score').textContent = score;
    if(score < 1) {
        document.querySelector('.message').textContent = '❌ You lost ❌';
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        document.querySelector('body').style.backgroundColor = '#AA0000';
        document.querySelector('.number').textContent = random;
        document.querySelector('.number').style.width = '20rem';
        console.log("hey");
    }
})

//REINICIAR
document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.btn.check').disabled = false;
    document.querySelector('.guess').disabled = false;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20
    random = Math.trunc(Math.random()*20) + 1;
})


