// import Button from "./Button";
import {useState} from "react";
import StateUse from "./UseState";

function App() {
// console.log("render app");
  const[count, setCount] = useState(0);
  const[showCount, setShowCount] = useState(true);

  function handleClick() {
      setCount(count + 1);
      setShowCount(!showCount);
   }

  return (
    <div className="d-flex flex-column justify-center align-center p-20">
      {/* <button onClick={() => setShowCount(!showCount)}>showCount</button> */}
      <button onClick={handleClick} className="mb-20">
        Submit {showCount && <span>{count}</span> }
      </button>
     
      <StateUse />
      </div>
    
  );
}

export default App;
