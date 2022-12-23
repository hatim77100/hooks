import React from "react";

function Button({onClick}) {
  return <button onClick={onClick} style={{backgroundColor : 'salmon'}}>Submit</button>;
}

export default Button;
