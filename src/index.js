import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//1. Lagere das vorhandene JSX komplett in die <App /> Komponente aus und
//lass diese anzeigen. Die Anzeige sollte nach diesem Schritt genau wie vorher
//aussehen.
//2. Füge einen Click-Listener am Button hinzu.
//Beim Klick wird die Funktion increase() aufgerufen.
//Teste per console.log, ob die Funktion aufgerufen wird.
//3. Sorge nun mithilfe des useState Hooks dafür, dass beim Aufruf
//von increase() eine Variable counter hochgezählt wird und bei jedem
//Hochzählen die Anzeige updatet.
//4. Füge nun noch einen Button "-" hinzu, der den Zähler wieder runterzählt
