'use strict';

//OBTER ELEMENTOS
const botaoDado = document.querySelector('.btn--roll');
const botaoHold = document.querySelector('.btn--hold');
const botaoNew = document.querySelector('.btn--new');
const imgDado = document.querySelector('.dice');
let jogadores = document.querySelectorAll('.player');
let scoreAtual;
let scoreTotal;
let jogador;

//DEFINIR JOGADOR
function definirJogador() {
  for (let i = 0; i < 2; i++) {
    if (jogadores[i].classList.contains('player--active')) {
      scoreAtual = document.querySelector(`#current--${i}`);
      scoreTotal = document.querySelector(`#score--${i}`);
      jogador = jogadores[i];
    }
  }
}

//MUDAR JOGADOR
function mudarJogador() {
  for (let i = 0; i < 2; i++) {
    if (jogadores[i].classList.contains('player--active')) {
      scoreAtual.textContent = 0;
      jogadores[i].classList.remove('player--active');
    } else {
      jogadores[i].classList.add('player--active');
      definirJogador();
      scoreAtual.textContent = 0;
    }
  }
}

//MUDAR IMAGEM DADO
function mudarImagem(scoreDado) {
  imgDado.src = `dice-${scoreDado}.png`;
}

//GERAR DADO
function girarDado() {
  definirJogador();
  let scoreDado = Math.trunc(Math.random() * 6) + 1;
  mudarImagem(scoreDado);
  if (scoreDado === 1) {
    scoreAtual.textContent = 0;
    mudarJogador();
  } else {
    scoreAtual.textContent = Number(scoreAtual.textContent) + scoreDado;
  }
}

//HOLD
function hold() {
  scoreTotal.textContent = Number(scoreAtual.textContent) + Number(scoreTotal.textContent);
  if (Number(scoreTotal.textContent) >= 100) {
    jogador.classList.replace('player--active', 'player--winner');
    botaoDado.disabled = true;
    botaoHold.disabled = true;
  }
  mudarJogador();
}

//NOVO JOGO
function newGame() {
  for (let i = 0; i < 2; i++) {
    document.querySelector(`#score--${i}`).textContent = Number(0);
    if (jogadores[i].classList.contains('player--winner')) {
      jogadores[i].classList.remove('player--winner');
    }
    if (jogadores[i].classList.contains('player--active')) {
      scoreAtual.textContent = 0;
      jogadores[i].classList.remove('player--active');
    }
  }
  jogadores[0].classList.add('player--active');
  botaoDado.disabled = false;
  botaoHold.disabled = false;
}

//ADICIONAR EVENTOS
botaoDado.addEventListener('click', girarDado);
botaoHold.addEventListener('click', hold);
botaoNew.addEventListener('click', newGame);