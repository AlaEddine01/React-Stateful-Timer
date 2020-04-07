import React from 'react';
import './App.css';
import Timer from './time/Time'

function App() {
  return (
    <div className="App">
      <img id="bg" src="https://i.pinimg.com/originals/c6/22/46/c62246425d2c45d07ff2ad24ecd620cc.jpg" alt="bcgimg"/>
      <div className='T'><Timer/></div>
    </div>
  );
}

export default App;
