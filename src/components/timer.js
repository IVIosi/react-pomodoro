import React, { useEffect, useState } from 'react';
import '../App.css';

function Timer({ title, duration, onEndActivity }) {
  const [remainingTime, setRemainingTime] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const firstRenderTime = Date.now();

  useEffect(() => {
    let interval = null;

    if (isActive) {
      console.log(firstRenderTime);

      const endTime = firstRenderTime + duration;

      if ( (endTime - firstRenderTime) >= 0 ) {
        interval = setInterval(() => {
          setRemainingTime(endTime - firstRenderTime);
        }, 1000);
      } else {
        clearInterval(interval);
        onEndActivity();
      }
    }

    return () => clearInterval(interval);
  });
  let minutes = Math.floor(remainingTime / 60000);
  let seconds = ((remainingTime % 60000) / 1000).toFixed(0);
  
  return (
    <>
      <p>
        {title}
      </p>
      <span>
        {seconds === '60' ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds}
      </span>
      <button onClick={() => setIsActive(!isActive)}>pause</button>
    </>
  );
}

export default Timer;