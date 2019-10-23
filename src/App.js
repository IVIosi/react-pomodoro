import React, { useState } from 'react';
import './App.css';
import Timer from './components/timer';
import Settings from './components/settings';

function App() {
  const [pomodoroData, setPomodoroData] = useState({
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    round: 4
  });

  const [currentActivity, setCurrentActivity] = useState('work');
  const [workStep, setWorkStep] = useState(1);

  function calculateNextActivity() {
    if (currentActivity !== 'work') {
      setCurrentActivity('work');
      setWorkStep(workStep + 1);
    } else if (workStep % pomodoroData.round === 0) {
      setCurrentActivity('longBreak');
    } else {
      setCurrentActivity('shortBreak');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Timer
          title={currentActivity}
          duration={pomodoroData[`${currentActivity}Time`] * 60000}
          onEndActivity={calculateNextActivity}
        />
        <Settings
          pomodoroData={pomodoroData}
          onSetPomodoroData={setPomodoroData}
        />
      </header>
    </div>
  );
}

export default App;
