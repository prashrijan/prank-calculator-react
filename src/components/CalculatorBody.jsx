import "../App.css";
import Buttons from "./Buttons";

const CalculatorBody = () => {
  const calculateOperations = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div className="buttons" onClick={calculateOperations}>
      <div className="first-row grid">
        <Buttons classVal="button operations" buttonText="AC" />
        <Buttons classVal="button operations" buttonText="C" />
        <Buttons classVal="button operations" buttonText="%" />
        <Buttons classVal="button operations" buttonText="/" />
      </div>
      <div className="second-row grid">
        <Buttons classVal="button" buttonText="7" />
        <Buttons classVal="button" buttonText="8" />
        <Buttons classVal="button" buttonText="9" />
        <Buttons classVal="button operations" buttonText="*" />
      </div>
      <div className="third-row grid">
        <Buttons classVal="button" buttonText="4" />
        <Buttons classVal="button" buttonText="5" />
        <Buttons classVal="button" buttonText="6" />
        <Buttons classVal="button operations" buttonText="-" />
      </div>
      <div className="fourth-row grid">
        <Buttons classVal="button" buttonText="1" />
        <Buttons classVal="button" buttonText="2" />
        <Buttons classVal="button" buttonText="3" />
        <Buttons classVal="button operations" buttonText="+" />
      </div>
      <div className="fifth-row grid">
        <Buttons classVal="button" buttonText="0" />
        <Buttons classVal="button" buttonText="." />
        <Buttons classVal="button operations equalTo" buttonText="=" />
      </div>
    </div>
  );
};

export default CalculatorBody;
