import React from 'react';

const BoardSlot = (props) => {
  return (
    <React.Fragment>
      {
        props.col.map((slot, index) => {
          return (
            <div key={index} className='slot'>
              {slot}
            </div>
          );
        })
      }
    </React.Fragment>
  );
}

export default BoardSlot;