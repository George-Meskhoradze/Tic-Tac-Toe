const boxes = document.querySelectorAll(".boxs")
const turn = document.querySelector(".turn")
const rst = document.querySelector(".restart-btn")
const playerX = document.querySelector(".x");
const xSymbols = document.querySelectorAll(".x span");
const oSymbols = document.querySelectorAll(".oval span");
const osymbolCenter = document.querySelector(".oval span span");
const playerO = document.querySelector(".oval");
const playone = document.querySelector(".playone");
const tie = document.querySelector(".tie");
const playtwo = document.querySelector(".playtwo");
const btn = document.querySelector(".btn");
const trn = document.querySelector(".turn");
const playerGame = document.querySelector(".game")
const playerContainer = document.querySelector(".container")
const btncpu = document.querySelector(".btn-one")
const btnplayer = document.querySelector(".btn-two")
const quit = document.querySelector(".buttons .btn-cancel")
const next = document.querySelector(".buttons .btn-next")
const cancelGame = document.querySelector(".buttons-2 .btn-cancel")
const clearGame = document.querySelector(".buttons-2 .btn-next")


const turnX = document.createElement('div');
turnX.classList.add("turnx");
btn.insertBefore(turnX, trn);

const turnO = document.createElement('div');
turnO.classList.add("turno");
btn.insertBefore(turnO, trn);

function showTurnX() {
  turnX.style.display = 'block';
  turnO.style.display = 'none';
}

function showTurnO() {
  turnX.style.display = 'none';
  turnO.style.display = 'block';
}




playerX.addEventListener("click", function() {
  playerX.classList.add('active');
  playerO.classList.remove('active');
  xSymbols.forEach(function(xSymbol) {
    xSymbol.style.background = 'var(--dark-grey)';
  });
  oSymbols.forEach(function(oSymbol) {
    oSymbol.style.background = '';
  });
});

playerO.addEventListener("click", function() {
  playerO.classList.add('active');
  playerX.classList.remove('active');
  oSymbols.forEach(function(oSymbol) {
    oSymbol.style.background = 'var(--dark-grey)';
  });
  xSymbols.forEach(function(xSymbol) {
    xSymbol.style.background = '';
  });
  osymbolCenter.style.background = 'var(--silver)';
});



showTurnX()


btnplayer.addEventListener('click', showPlayerGame)
quit.addEventListener('click', quitgame)
rst.addEventListener('click', restartWholeGame)



function showPlayerGame() {
  playerContainer.style.display = "none"
  playerGame.style.display = "flex"
  initializeGame()
}



function quitgame() {
  playerContainer.style.display = "flex"
  playerGame.style.display = "none"
  document.querySelector(".banner").style.display = "none"
  restartGame()
}



const winConditions = [
  //rows
  [0,1,2],
  [3,4,5],
  [6,7,8],
  //columns
  [0,3,6],
  [1,4,7],
  [2,5,8],
  //diagonals
  [0,4,8],
  [2,4,6]
]

let options = ["","","","","","","","",""]
let xTurn = true
let currentPlayer = "X"
let running = false


function initializeGame() {
  boxes.forEach(box => box.addEventListener('click', cellClicked))
  next.addEventListener('click', () => {
  document.querySelector(".banner").style.display = "none"
  restartGame()
  })
  running = true
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  currentPlayer = xTurn ? "X" : "O";

  if (currentPlayer == "X") {
    showTurnX()
  } else if (currentPlayer == "O") {
    showTurnO()
  }

  if (options[cellIndex] != '' || !running) {
    return
  }
  updateCell(this, cellIndex)
  handlerClick(this)
  checkWinner()
}

function updateCell(box, index) {
  options[index] = currentPlayer
}

let countP1 = 0
let countTie = 0
let countP2 = 0

function checkWinner() {
  roundWon = false 
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i]
    const boxesA = options[condition[0]]
    const boxesB = options[condition[1]]
    const boxesC = options[condition[2]]
    
    if (boxesA == "" || boxesB == "" || boxesC == "") {
      continue;
    } 
    
    if (boxesA ==  boxesB && boxesB == boxesC) {
      roundWon = true
      break;
    }
  }
  if (roundWon) {
    if (currentPlayer == "X") {
      countP1++
      playone.textContent = countP1
      xwins()
    } else if (currentPlayer == "O") {
      countP2++
      playtwo.textContent = countP2
      owins()
    }
    boxes.forEach(box => box.removeEventListener('click', cellClicked))
  } else if (!options.includes("")) {
    countTie++
    tie.textContent = countTie
    running = false
    tied()
  }
}

function handlerClick(box) {
  const symbol = document.createElement('div');
  symbol.classList.add(xTurn ? 'xtr':'otr');
  box.appendChild(symbol)
  xTurn = !xTurn;   
}

function restartGame() {
  currentPlayer = "X"
  options = ["","","","","","","","",""]
  boxes.forEach(box => box.textContent = "")
  boxes.forEach(box => box.addEventListener('click', cellClicked))
  xTurn = true
}
  


function xwins() {
  document.querySelector(".banner").style.display = "flex"
  document.querySelector(".banner .info h1").textContent = "YOU WON!"
  document.querySelector(".banner .winner .takeround").style.display = "flex"
  document.querySelector(".banner .winner .takeround-two").style.display = "none"
  document.querySelector(".banner .winner h1").style.color = "var(--light-blue)"
  buttonChanger()
}

function owins() {
  document.querySelector(".banner").style.display = "flex"
  document.querySelector(".banner .info h1").textContent = "OH NO, YOU LOSE!"
  document.querySelector(".banner .winner .takeround").style.display = "none"
  document.querySelector(".banner .winner .takeround-two").style.display = "flex"
  document.querySelector(".banner .winner h1").style.color = "var(--light-yellow)"
  buttonChanger()
}

function tied() {
  document.querySelector(".banner").style.display = "flex"
  document.querySelector(".banner .info h1").textContent = ""
  document.querySelector(".banner .winner .takeround").style.display = "none"
  document.querySelector(".banner .winner .takeround-two").style.display = "none"
  document.querySelector(".banner .winner h1").textContent = "ROUND TIED"
  document.querySelector(".banner .winner h1").style.color = "var(--silver)"
  buttonChanger()
}


function restartWholeGame() {
  document.querySelector(".banner").style.display = "flex"
  document.querySelector(".banner .info h1").textContent = ""
  document.querySelector(".banner .winner .takeround").style.display = "none"
  document.querySelector(".banner .winner .takeround-two").style.display = "none"
  document.querySelector(".banner .winner h1").textContent = "RESTART GAME?"
  document.querySelector(".banner .winner h1").style.color = "var(--silver)"
  quit.style.display = 'none'
  next.style.display = "none"
  cancelGame.style.display = 'flex'
  clearGame.style.display = "flex"
  document.querySelector(".banner .buttons-2 .btn-cancel h1").textContent = "NO, CANCEL"
  document.querySelector(".banner .buttons-2 .btn-next h1").textContent = "YES, RESTART"

  cancelGame.addEventListener('click', () => {
  document.querySelector(".banner").style.display = "none"

  restartGame()
  })

  clearGame.addEventListener('click', () => {
    document.querySelector(".banner").style.display = "none"
    countP1 = 0
    countTie = 0
    countP2 = 0
    playone.textContent = countP1
    playtwo.textContent = countP2
    tie.textContent = countTie
    })
    restartGame()
}


function buttonChanger() {
  clearGame.style.display = "none"
  cancelGame.style.display = 'none'
  quit.style.display = 'flex'
  next.style.display = "flex"
}