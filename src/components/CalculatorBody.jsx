import { useState } from "react";
import "../App.css";
import Buttons from "./Buttons";

const CalculatorBody = ({ result, setResult }) => {
  let operators = ["+", "-", "/", "*", "%"];

  let [lastOperator, setLastOperator] = useState("");

  const clearDisplay = () => {
    setResult("0.00");
    setLastOperator("");
    return;
  };

  const handleClear = () => {
    if (result === "0.00" || result === "") {
      clearDisplay();
    } else {
      const newResult = result.slice(0, -1);
      setResult(newResult || "0.00");
    }
  };

  const calculateResult = () => {
    try {
      const answer = eval(result);
      setResult(answer.toString());
    } catch {
      setResult("Error");
    }
  };

  const handleOpertors = (val) => {
    const lastChar = result.slice(-1);
    if (operators.includes(lastChar)) {
      setResult(result.slice(0, -1) + val);
    } else {
      setResult(result + val);
    }
    setLastOperator(val);
  };

  const handleDecimals = () => {
    const lastOperatorIndex = result.lastIndexOf(lastOperator);
    const lastNumberSet = result.slice(lastOperatorIndex + 1);

    if (lastNumberSet.includes(".")) return;
    if (!lastOperator && result.includes(".")) return;

    setResult(result + ".");
  };

  const handleInput = (val) => {
    if (result === "0.00") {
      setResult(val);
    } else {
      setResult(result + val);
    }
  };
  const calculateOperations = (e) => {
    const val = e.target.innerText;

    if (val === "AC") return clearDisplay();
    if (val === "C") return handleClear();
    if (val === "=") return calculateResult();
    if (operators.includes(val)) return handleOpertors(val);
    if (val === ".") return handleDecimals();

    handleInput(val);
  };

  return (
    <div className="buttons">
      <div className="first-row grid">
        <Buttons
          classVal="button operations"
          buttonText="AC"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button operations"
          buttonText="C"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button operations"
          buttonText="%"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button operations"
          buttonText="/"
          calculateOperations={calculateOperations}
        />
      </div>
      <div className="second-row grid">
        <Buttons
          classVal="button"
          buttonText="7"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button"
          buttonText="8"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button"
          buttonText="9"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button operations"
          buttonText="*"
          calculateOperations={calculateOperations}
        />
      </div>
      <div className="third-row grid">
        <Buttons
          classVal="button"
          buttonText="4"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button"
          buttonText="5"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button"
          buttonText="6"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button operations"
          buttonText="-"
          calculateOperations={calculateOperations}
        />
      </div>
      <div className="fourth-row grid">
        <Buttons
          classVal="button"
          buttonText="1"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button"
          buttonText="2"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button"
          buttonText="3"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button operations"
          buttonText="+"
          calculateOperations={calculateOperations}
        />
      </div>
      <div className="fifth-row grid">
        <Buttons
          classVal="button"
          buttonText="0"
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button"
          buttonText="."
          calculateOperations={calculateOperations}
        />
        <Buttons
          classVal="button operations equalTo"
          buttonText="="
          calculateOperations={calculateOperations}
        />
      </div>
    </div>
  );
};

export default CalculatorBody;
