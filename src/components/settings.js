import React from 'react';
import '../App.css';

function Timer({ pomodoroData, onSetPomodoroData }) {
  return (
    Object.keys(pomodoroData).map(item => (
      <>
        <label htmlFor={item}>{item} - {pomodoroData[item]}'</label>
        <input
          min="1"
          max="60"
          step="1"
          type="range"
          value={pomodoroData[item]}
          onChange={e => onSetPomodoroData({...pomodoroData, [item]: e.target.value })}
        />
      </>
    ))
  );
}

export default Timer;