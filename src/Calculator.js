import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setInput(result);
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else if (value === '+/-') { // Handle the +/- button
        setInput((prevInput) => {
          if (prevInput.startsWith('-')) {
            return prevInput.substring(1); // Remove the minus sign
          } else {
            return '-' + prevInput; // Add a minus sign
          }
        });
    } else if (value === '←') { 
        setInput((prevInput) => {
          if (typeof prevInput === 'string' && prevInput.length > 0) 
          return prevInput.slice(0, -1);
        });
    }
     else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttonRows = [
    ['AC','7', '4', '1', '0'],
    ['+/-','8', '5', '2', '.'],
    ['%','9', '6', '3','←'],
    ['/','*','-','+','=']

  ];

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        className="input"
        readOnly
      />
      <div className="buttons">
        {buttonRows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((buttonLabel, buttonIndex) => (
              <button
                key={buttonIndex}
                onClick={() => handleButtonClick(buttonLabel)}
                className={
                  buttonLabel === 'AC'
                    ? 'clear-button'
                    : buttonLabel === '='
                    ? 'equal-button'
                    : buttonLabel === '+'
                    ? 'operator-button add'
                    : buttonLabel === '-'
                    ? 'operator-button subtract'
                    : buttonLabel === '*'
                    ? 'operator-button multiply'
                    : buttonLabel === '/'
                    ? 'operator-button divide'
                    : ''
                }
              >
                {buttonLabel}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

