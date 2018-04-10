import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => {
  return (
    <div className={`arrow ${direction}`} onClick={clickFunction}>
      {glyph}
    </div>
  );
};

export default Arrow;
