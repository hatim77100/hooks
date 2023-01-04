import './App.css';
import { useState } from "react";
import Calendar from './calendar';

function App() {
  console.log('render app');
  const[value, setValue]=useState("");


  return (
    <div className="App">
      <input type="text" value={value} onChange= {e => setValue(e.target.value)}/>
      <p>{value}</p>
      <Calendar/>
    </div>
  );
}

export default App;
