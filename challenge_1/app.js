// ---------------------------------------
//                 Model
// ---------------------------------------
let scoreP1 = 0;
let scoreP2 = 0;

let isPlayerOne = true;    
let board = [
  ['','',''], // row 0
  ['','',''], // row 1
  ['','','']  // row 2
];

// check for winner
let checkWinner = (X, O) => {
  if (X === 3) {
    scoreP1++;
    isPlayerOne = !isPlayerOne;
    document.getElementById('P1 score').innerHTML = scoreP1;
    alert('Player 1 winner!');
  } else if (O === 3) {
    scoreP2++;
    isPlayerOne = !isPlayerOne;
    document.getElementById('P2 score').innerHTML = scoreP2;
    alert('Player 2 winner!');
  }
}


// ---------------------------------------
//                 View
// ---------------------------------------

// ---------------------------------------
//                 Controller
// ---------------------------------------

let submitName = (event) => {
  event.preventDefault()
  let text = event.target.firstElementChild.value;
  let id = event.target.firstElementChild.id;
  let entry = document.getElementById(`${id} name`);
  entry.innerHTML = text + ':';
};


let placePiece = (event) => {
  if (event.target.innerText !== '_') {
    alert('Invalid piece placement: Select another spot on the board!');
  } else {
    if (isPlayerOne) {
      // debugger;  
      event.target.innerText = 'X';
      isPlayerOne = false;

      // track board state
      let row = Number(event.target.id.split(',')[0]);
      let col = Number(event.target.id.split(',')[1]);
      board[row][col] = 'X';
      trackEndCondition();
    } else {
      event.target.innerText = 'O';
      isPlayerOne = true;

      // track board state
      let row = Number(event.target.id.split(',')[0]);
      let col = Number(event.target.id.split(',')[1]);
      board[row][col] = 'O';
      trackEndCondition();
    }
  }
};

let resetBoard = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let id = [i, j].join(',');
      let pos = document.getElementById(id)
      pos.innerHTML = '_';
    }
  }
  board = [
    ['','',''], // row 0
    ['','',''], // row 1
    ['','','']  // row 2
  ];
};

let trackEndCondition = () => {
  let xCount = 0;
  let oCount = 0; 
  //  win condition: all of a row
  board.forEach(row => {
    row.forEach(pos => {
      if (pos === 'X') {
        xCount++;
      } else if (pos === 'O') {
        oCount++;
      }
      checkWinner(xCount, oCount);
    });
    xCount = oCount = 0; 
  });


  //  win condition: all of a col
  for (let i = 0; i < 3; i++) {
    board.forEach(row => {
      if (row[i] === 'X') {
        xCount++;
      } else if (row[i] === 'O') {
        oCount++;
      }
      checkWinner(xCount, oCount);
    });
    xCount = oCount = 0;  
  }

  //  win condition: maj diag
  for (let i = 0; i < 3; i++) {
    if (board[i][i] === 'X') {
      xCount++;
      } else if (board[i][i] === 'O') {
      oCount++;
    }
    checkWinner(xCount, oCount);
  }
  xCount = oCount = 0;
  //  win condition: min diag
  for (let i = 0; i < 3; i++) {
    if (board[i][2 - i] === 'X') {
      xCount++;
      } else if (board[i][2 - i] === 'O') {
      oCount++;
    }
    checkWinner(xCount, oCount);
  }
  xCount = oCount = 0;


  // check for a tie
  let pieceCount = 0;
  board.forEach(row => {
    row.forEach(index => {
      if (index !== '' && index !== '_') {
        pieceCount++;
      }
    });
  });
  if (pieceCount === 9) {
    alert('Game over: Tied game!');
  }
};