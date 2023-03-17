// const playerX = document.querySelector(".x");
// const xSymbols = document.querySelectorAll(".x span")
// const oSymbols = document.querySelectorAll(".oval span")
// const osymbolCenter = document.querySelector(".oval span span")
// const playerO = document.querySelector(".oval");
// const btnCpu = document.querySelector(".btn-one");
// const btnPlayer = document.querySelector(".btn-two");
// const restBtn = document.querySelector(".restart-btn")
// const btn = document.querySelector(".btn")
// const trn = document.querySelector(".turn")




// playerX.addEventListener("click", function() {
//   playerX.classList.add('active')
//   playerO.classList.remove('active')
//   if (playerX.classList.contains('active')){
//     xSymbols.forEach(function(xSymbol){
//       xSymbol.style.background = 'var(--dark-grey)'
//     })
//     oSymbols.forEach(function(oSymbol){
//       oSymbol.style.background = ''
//     })
//   }
// })

// playerO.addEventListener("click", function() {
//   playerO.classList.add('active')
//   playerX.classList.remove('active')
//   if (playerO.classList.contains('active')){
//     oSymbols.forEach(function(oSymbol){
//       oSymbol.style.background = 'var(--dark-grey)'
//     })
//     xSymbols.forEach(function(xSymbol){
//       xSymbol.style.background = ''
//     })
//     osymbolCenter.style.background = 'var(--silver)'
//   }
// })


// //this is next window after choose your place

// const turnX = document.createElement('div')
// turnX.classList.add("turnx")
// btn.insertBefore(turnX, trn)

// const turnO = document.createElement('div')
// turnO.classList.add("turno")
// btn.insertBefore(turnO, trn)

// function itTurnX() {
//   turnX.style.display = 'block';
//   turnO.style.display = 'none';
// }

// function itTurnO() {
//   turnX.style.display = 'none';
//   turnO.style.display = 'block';
// }

// itTurnX()

// const box = document.querySelectorAll(".box")

// let xTurn = true



// box.forEach(function(boxes) {
//   boxes.addEventListener('click', handleClickDouble);
// });

// restBtn.addEventListener('click', function() {
//   box.forEach(function(boxes) {
//     boxes.innerHTML = ''; 
//     boxes.addEventListener('click', handleClickDouble);
//   });
//   xTurn = true;
// });

// const winConditions = [
//   //rows
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   //columns
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   //diagonals
//   [0,4,8],
//   [2,4,6]
// ]

// function checkWin() {
//   // Loop through each win condition
//   for (let i = 0; i < winConditions.length; i++) {
//     const [a, b, c] = winConditions[i];
//     const boxA = box[a];
//     const boxB = box[b];
//     const boxC = box[c];
//     // Check if all three boxes have the same class (either "x" or "o")
//     if (boxA.classList.contains("x") && boxB.classList.contains("x") && boxC.classList.contains("x")) {
//       // "X" player wins
//       console.log("X wins!");
//       // Add code to display a message or perform other actions
//       return true;
//     } else if (boxA.classList.contains("o") && boxB.classList.contains("o") && boxC.classList.contains("o")) {
//       // "O" player wins
//       console.log("O wins!");
//       // Add code to display a message or perform other actions
//       return true;
//     }
//   }
//   // No winning condition found
//   return false;
// }

// function handleClickDouble() {
//   const itX = document.createElement('div');
//   itX.classList.add(xTurn ? 'x':'o');
//   this.appendChild(itX); 
//   xTurn = !xTurn;
//   this.removeEventListener('click', handleClickDouble);
//   if (checkWin()) {
//     // Add code to handle end of game
//     console.log("Game over!");
//     return;
//   }
//   if(xTurn) {
//     itTurnO()
//   } else {
//     itTurnX()
//   }
// }





const playerX = document.querySelector(".x");
const xSymbols = document.querySelectorAll(".x span");
const oSymbols = document.querySelectorAll(".oval span");
const osymbolCenter = document.querySelector(".oval span span");
const playerO = document.querySelector(".oval");
const btnCpu = document.querySelector(".btn-one");
const btnPlayer = document.querySelector(".btn-two");
const restBtn = document.querySelector(".restart-btn");
const btn = document.querySelector(".btn");
const trn = document.querySelector(".turn");

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

showTurnX();

const boxes = document.querySelectorAll(".box");

let xTurn = true;

boxes.forEach(function(box) {
  box.addEventListener('click', handleClick);
});

restBtn.addEventListener('click', function() {
  boxes.forEach(function(box) {
    box.innerHTML = '';
    box.addEventListener('click', handleClick);
  });
  xTurn = true;
  showTurnX();
});

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
];

const conditions = ["","","","","","","","",""]



function checkWin() {
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (conditions[a] && conditions[a] === conditions[b] && conditions[b] === conditions[c] && conditions[c]) {
      console.log('works')
      return true;
    }
    console.log([a,b,c])
  }
  return false;
}

function handleClick() {
  const symbol = document.createElement('div');
  symbol.classList.add(xTurn ? 'x':'o');
  this.appendChild(symbol); 
  xTurn = !xTurn;
  this.removeEventListener('click', handleClick);
  if (checkWin()) {
    boxes.forEach(function(box) {
      box.removeEventListener('click', handleClick);
      conditions.push(box)
    });
    console.log("Game over!");
    return;
  }
  if(xTurn) {
    showTurnO();
  } else {
    showTurnX();
  }
}

