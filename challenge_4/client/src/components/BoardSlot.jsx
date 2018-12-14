import React from 'react';

const BoardSlot = (props) => {
  return (
    <div>
      {
        props.col.map((slot, index) => {
          return (
            <div key={index} className='slot'>
              {slot}
            </div>
          );
        })
      }
    </div>
  );
}

export default BoardSlot;