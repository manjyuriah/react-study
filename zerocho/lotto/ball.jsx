import React, { memo } from 'react';

const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = 'pink';
  } else if (number <= 20) {
    background = 'tomato';
  } else if (number <= 30) {
    background = 'yellowgreen';
  } else if (number <= 40) {
    background = 'skyblue';
  } else {
    background = 'palegreen';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
});

export default Ball;