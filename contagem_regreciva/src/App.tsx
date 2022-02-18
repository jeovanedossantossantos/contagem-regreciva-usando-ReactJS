import React from "react";

import Cronometro3 from "./components/Cronometro3";

export default function App() {
  return (
    <div className="App">
      <Cronometro3 background="blue" color="black" fontSize="80px" width="400px" height="400px" tempoFinal={45} />
    </div>
  );
}
