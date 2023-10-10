import React from "react";
import CalculatorButton from "./CalculatorButtons";

const CalculatorRow = ({ buttons ,onClick}) => (
    <div className="row">
      {buttons.map((label, index) => (
        <CalculatorButton key={index} label={label} onClick={onClick} />
      ))}
    </div>
  );
  export default CalculatorRow
