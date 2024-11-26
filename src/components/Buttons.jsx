import React from "react";

const Buttons = ({ classVal, buttonText, calculateOperations }) => {
  return (
    <button className={classVal} onClick={calculateOperations}>
      {buttonText}
    </button>
  );
};

export default Buttons;
