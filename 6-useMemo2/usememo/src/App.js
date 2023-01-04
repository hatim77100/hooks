import "./App.css";
import { useState, useMemo } from "react";

function App() {
  console.log("render app");
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);

  function complexeCalculation(list) {
    console.log('function complexe invoqué');
    return list.map(l => {
      for(let i =0; i < 1000; i++){
        l = i;
      }
      return l;
    })
  }

  const complexeList = useMemo(() => {
    console.time("computation");
    const res = complexeCalculation(list);
    console.timeEnd("computation");
    return res;
  }, [list]) ;

  return (
    <div className="App">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setList([...list, value]);
          setValue(0);
        }}
      >
        Add to list
      </button>
      <ul>
        { complexeList.map((cl, i) => (<li key ={i}>{cl}</li>)) }
      </ul>
    </div>
  );
}

export default App;
