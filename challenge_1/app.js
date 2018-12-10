// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay
let isPlayerOne = true;    
let board = [
  ['','',''], // row 0
  ['','',''], // row 1
  ['','','']  // row 2
];

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

// check for a win
let checkWinner = (X, O) => {
  if (X === 3) {
    alert('Player 1 winner!');
  } else if (O === 3) {
    alert('Player 2 winner!');
  }
}

let trackEndCondition = () => {
  let xCount = 0;
  let oCount = 0; 
  //  win condition: all of a row
  board[0].forEach(pos => {
    if (pos === 'X') {
      xCount++;
    } else if (pos === 'O') {
      oCount++;
    }
    checkWinner(xCount, oCount);
  });
  xCount = oCount = 0;  

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
      } else if (board[2 - i][2 - i] === 'O') {
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

  // console.log(board);


// track current state of board (run after each piece is played)
// if winning condition
//   alert winner (X or O)
// if tied condition
//   alert tied!

// add if condition that when board filled, cannot place pieces anymore














// let board = [];

// let assembleRow = (piece, pos = null) => {
//   let row = ['','|','','|',''];
//   if (pos >= 0 && pos <= 2) {
//     row[pos + pos] = piece;
//   }
//   return row;
// };

// // x|x|x
// // -----
// // o|o|o

// // let assembleDiv = (board => {
// //   board.push(['-','-','-','-','-']);
// // });
// let div = ['-','-','-','-','-'];

// let assembleBoard = ((r1 = null, r2 = null, r3 = null) => {
  
//   board.push(assembleRow('o', r1));
//   board.push(div);
//   board.push(assembleRow('o', r2));
//   board.push(div);
//   board.push(assembleRow('o', r3));
//   return board;
// });

// board = assembleBoard();



// document.getElementById("board").innerHTM  L(board);
