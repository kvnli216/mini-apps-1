// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay
let isPlayerOne = true;    
let board = [
  ['','',''], // row 0
  ['','',''], // row 1
  ['','','']  // row 2
];

let trackEndCondition = () => {
// check for a win

// check for a tie
};

let updateBoardState = ((row, col) => {});

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
    } else {
      event.target.innerText = 'O';
      isPlayerOne = true;

      // track board state
      let row = Number(event.target.id.split(',')[0]);
      let col = Number(event.target.id.split(',')[1]);
      board[row][col] = 'O';
    }
  }
  console.log(board);
};

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
