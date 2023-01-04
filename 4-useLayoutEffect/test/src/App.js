import "./App.css";
import { useState, useRef, useLayoutEffect } from "react";

function App() {
  const [width, setWidth] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const infos = buttonRef.current.getBoundingClientRect();
    setWidth(infos.width)
  }, []);

  return (
    <>
      <button ref={buttonRef}>je suis un bouton</button>
      <p>{width}</p>
    </>
  );
}

export default App;
