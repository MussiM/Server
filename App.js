import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState('');
  const getTime = () =>{fetch('./getTime').then((result)=> result.text()).then(setTime);}
  getTime();
  return (
    <div className="App">
      <h1>Time is:</h1>
      <h3>{time}</h3>
      <button onClick = {getTime}>Click to update time</button>
    </div>
  );
}

export default App;