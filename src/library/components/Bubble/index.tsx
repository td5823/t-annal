import React from "react";

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
