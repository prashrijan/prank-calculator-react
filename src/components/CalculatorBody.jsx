import "../App.css";
import Buttons from "./Buttons";

const CalculatorBody = ({ result, setResult, clearInput, setClearInput }) => {
  const calculateOperations = (e) => {
    const val = e.target.innerText;

    if (val === "=") {
      let answer = eval(result);

      setResult(answer);
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
