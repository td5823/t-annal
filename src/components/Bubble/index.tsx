import React from 'react';
import './index.less';

import App from './App'

const BubbleBackground = () => {
  const bubbleCount = 50;

  return (
    <div className="bubble-container">
      {[...Array(bubbleCount)].map((_, index) => (
        <div key={index} className="bubble" />
      ))}
    </div>
  );
};

export default BubbleBackground;
