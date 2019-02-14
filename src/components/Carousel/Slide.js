import React from 'react';

const Slide = ({ item }) => {
  return (
    <div className="slide">
      <img src={item.url} alt="img" />
      <div className="intro">
        <p>{item.intro}</p>
        <a href={item.address} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Slide;
