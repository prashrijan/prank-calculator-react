import "../App.css";

const Display = ({ result }) => {
  return (
    <div className="display">
      <div className="input">{result}</div>
    </div>
  );
};

export default Display;
