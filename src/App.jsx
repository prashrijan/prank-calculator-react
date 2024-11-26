import "./App.css";
import CalculatorBody from "./components/CalculatorBody";
import Display from "./components/Display";

function App() {
  return (
    <div className="wrapper">
      <div className="calculator-container">
        <Display />
        <CalculatorBody />
      </div>
    </div>
  );
}

export default App;
