import { useState } from "react";
import "./App.css";
import CalculatorBody from "./components/CalculatorBody";
import Display from "./components/Display";

function App() {
  let [result, setResult] = useState("0.00");

  return (
    <div className="wrapper">
      <div className="calculator-container">
        <Display result={result} />
        <CalculatorBody result={result} setResult={setResult} />
      </div>
    </div>
  );
}

export default App;
