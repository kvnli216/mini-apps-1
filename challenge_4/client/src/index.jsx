import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
      ],
      playerOneTurn: true
    };

    this.togglePlayerTurn = this.togglePlayerTurn.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.horizontalWin = this.horizontalWin.bind(this);
  }
  
  // ------------------------------------------------
  //                    State Utility
  // ------------------------------------------------
  updateBoard(newBoard) {
    this.setState(state => {
      return {
        board: newBoard
      }
    });
  }

  togglePlayerTurn() {
    this.setState(state => {
      return {
        playerOneTurn: !this.state.playerOneTurn
      }
    });
  }

  // ------------------------------------------------
  //              Checking End Condition
  // ------------------------------------------------

  horizontalWin() {
    console.log('running win check');
    let board = this.state.board;
    this.state.board.forEach((col, indexC) => { // iterate through every column
      col.forEach((slot, indexS) => { // iterate through slots of a column
        if (slot !== '') { // if a piece exists here
          let piece = slot;
          let isWinner = true;
          // check piece match for next 3 columns
          for (let i = 1; i < 4; i++) {
            if (board[indexC + i][indexS] !== piece) {
              isWinner = false;
              i = 4;
            }
          }
          if (isWinner) {
            if (this.state.playerOneTurn) {
              alert('Player 1 Wins!');
            } else {
              alert('Player 2 Wins!');
            }
          }
          return isWinner; // Todo: update scoreboard
        }
      });
    });
  }


  // ------------------------------------------------
  //                   Controller
  // ------------------------------------------------

  selectCol(e) {
    e.preventDefault();
    let slotChoice = Number(e.target.parentElement.id); // index of col
    let newBoard = this.state.board;
    for (let i = newBoard[slotChoice].length-1; i >= 0; i--) {
      if (newBoard[slotChoice][i] === '') {
        if (this.state.playerOneTurn) {
          newBoard[slotChoice][i] = 'O';
        } else {
          newBoard[slotChoice][i] = 'X';
        }
        i = 0;
      }
    }
    this.togglePlayerTurn();
    this.updateBoard(newBoard);
    this.horizontalWin();
  }

  render() {
    return (
    <div>
      <Board board={this.state.board} selectCol={this.selectCol.bind(this)}/>
    </div>
    )
  };
}


ReactDOM.render(
  // <div>testest</div>,
  <App />,
  document.getElementById('app')
);