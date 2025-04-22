import React from "react";

function App() {
  let [istzustand, Wert] = React.useState(0);

  function increase() {
    Wert((aktuellerWert) => aktuellerWert + 1);
  }

  function decrease() {
    Wert((aktuellerWert) => aktuellerWert - 1);
  }

  return (
    <div className="container">
      <h1>{istzustand}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
