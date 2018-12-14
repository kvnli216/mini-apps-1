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
  }
  
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
    
    this.setState(state => {
      return {
        board: newBoard,
        playerOneTurn: !this.state.playerOneTurn
      }
    });
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