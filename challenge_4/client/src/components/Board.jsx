import React from 'react';
import BoardSlot from './BoardSlot.jsx';

const Board = (props) => {
  return (
    <div className="Board">
      {
        
        props.board.map((col, index) => {
          return (
            <div key={index} id={index} className='col' onClick={props.selectCol}>
              <BoardSlot col={col} />
              <br></br>
            </div>
          );
        })

      }
    </div>
  );
}


export default Board;
// var VideoList = (props) => {
//   return (
//     <div className="video-list">
//       {
//         props.videos.map(video => 
//           <VideoListEntry video={video} changeTitleVideo={props.changeTitleVideo} />
//         )
//       }
//     </div>
//   );
// };

// Board.propTypes = {
//   board: React.PropTypes.array.isRequired
// };
