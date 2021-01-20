const allPieces = document.getElementsByClassName('piece');
const piece = document.getElementById('board')
const oPlayer = document.getElementById('oPlayer')
const xPlayer = document.getElementById('xPlayer')
const oWinCount = document.getElementById('oWins')
const xWinCount = document.getElementById('xWins')
const button = document.querySelector('button');

var gameState = {};
gameState.xPieces = [];
gameState.oPieces = [];
gameState.newPiece = 'X'
gameState.oWins = 0;
gameState.xWins = 0;
gameState.rotate = 0;
gameState.xPlayer = window.prompt("Who is player X?")
gameState.oPlayer = window.prompt("Who is player O?")

var winCombos = [['one', 'two', 'three'], ['four', 'five', 'six'], ['seven', 'eight', 'nine'], ['one', 'four', 'seven'], ['two', 'five', 'eight'], ['three', 'six', 'nine'], ['one', 'five', 'nine'], ['three', 'five', 'seven']];
xPlayer.innerHTML = ` X: ${gameState.xPlayer} `
oPlayer.innerHTML = ` O: ${gameState.oPlayer} `

const newGame = () => {
  for (var i = 0; i < allPieces.length; i++) {
    allPieces[i].innerHTML = '';
  }
  gameState.xPieces = [];
  gameState.oPieces = [];
}

piece.addEventListener('click', event => {
  if(event.target.innerHTML === ''){
    event.target.innerHTML = gameState.newPiece
    if(gameState.newPiece === 'X') {
      gameState.xPieces.push(event.target.id)
      gameState.newPiece = 'O';
    } else {
      gameState.oPieces.push(event.target.id)
      gameState.newPiece = 'X'
    }
    spinner();
  }
  for (var i = 0; i < winCombos.length; i++){
    if (winCombos[i].every((piece) => gameState.xPieces.indexOf(piece) > -1)) {
      gameState.newPiece = 'O';
      gameState.xWins += 1;
      window.alert(`${gameState.xPlayer} wins!`);
      xWinCount.innerHTML = gameState.xWins;
      newGame();
    }
    if (winCombos[i].every(piece => gameState.oPieces.indexOf(piece) > -1)) {
      gameState.newPiece = 'X'
      gameState.oWins += 1;
      window.alert(`${gameState.oPlayer} wins!`);
      oWinCount.innerHTML = gameState.oWins;
      newGame();
    }
  }
});

let spinner = () => {
  piece.animate([
    { transform: `rotate(${gameState.rotate}deg)` },
    { transform: `rotate(${gameState.rotate + 90}deg)` }
  ], {
    duration: 800,
  });
  gameState.rotate += 90;
  piece.style.transform = `rotate(${gameState.rotate}deg)`;
}

button.addEventListener('click', newGame);
