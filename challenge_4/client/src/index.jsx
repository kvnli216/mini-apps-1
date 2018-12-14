import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        [0,0,0,0,0,1],
        [1,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
      ]
    };
  }
  
  selectCol(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
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