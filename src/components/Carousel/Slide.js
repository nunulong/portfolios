import React from 'react';

const Slide = ({ item }) => {
  return (
    <div className="slide">
      <img src={item.url} alt="img" />
      <div className="intro">
        <h4>{item.intro}</h4>
        <a href={item.address} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Slide;
