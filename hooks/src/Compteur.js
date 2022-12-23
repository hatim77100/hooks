import React from "react";

function Compteur({count}) {
    console.log("render compteur");
  return <h1>{count}</h1>;
}

export default Compteur;
