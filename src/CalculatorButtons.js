import React from "react";

const CalculatorButton = ({ label, onClick, className }) => (
    <button onClick={() => onClick(label)} className={className}>
      {label}
    </button>
  );
  export default CalculatorButton

