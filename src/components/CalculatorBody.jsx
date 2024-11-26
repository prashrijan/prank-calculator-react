import "../App.css";
import Buttons from "./Buttons";

const CalculatorBody = ({ result, setResult }) => {
  let operators = ["+", "-", "/", "*", "%"];
  let lastOperator = "";
  const clearDisplay = () => {
    setResult("0.00");
    return;
  };

  const removeLastChar = (str) => {
    return str.slice(0, -1);
  };

  const calculateOperations = (e) => {
    const val = e.target.innerText;

    if (val === "=") {
      let answer = eval(result);

      setResult(answer);
      return;
    }

    if (val === "AC") {
      clearDisplay();
      return;
    }

    if (val === "C") {
      if (result === "0.00" || result === "") {
        clearDisplay();
      } else {
        const newResult = removeLastChar(result);
        setResult(newResult || "0.00");
      }
      return;
    }

    if (operators.includes(val)) {
      if (result === "0.00" || result === "") {
        return;
      }

      const lastChar = result.slice(-1);
      if (operators.includes(lastChar)) {
        setResult(removeLastChar(result) + val);
        return;
      }

      setResult((prevVal) => prevVal + val);
      return;
    }

    if (val === ".") {
      const lastOperator = operators.find((op) => result.includes(op));
      const lastOperatorIndex = result.lastIndexOf(lastOperator);

      const afterLastOperator = result.slice(lastOperatorIndex + 1);
      if (afterLastOperator.includes(".")) {
        return;
      }

      setResult((prevVal) => prevVal + val);
      return;
    }
    setResult((prevVal) => {
      if (prevVal === "0.00") {
        return val;
      }

      return prevVal + val;
    });
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
