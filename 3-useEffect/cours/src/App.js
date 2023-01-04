import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar"; 

function App() {
  console.log("render");
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Dyma");

  useEffect(() => {
    console.log("effect render");
    document.title = title;
  }, [title]);

  return (
    <div className="App">
      <h1>hello</h1>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Navbar/>
    </div>
  );
}

export default App;
