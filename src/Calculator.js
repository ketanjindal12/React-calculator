import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  // Function to validate input
  const validateInput = () => {
    setError('');
    if (!input1.trim() || !input2.trim()) {
      setError('Please enter both numbers.');
      return false;
    }
    if (!/^-?\d*\.?\d+$/.test(input1) || !/^-?\d*\.?\d+$/.test(input2)) {
      setError('Please enter valid numbers.');
      return false;
    }
    return true;
  };

  // Function to perform arithmetic operation
  const performOperation = (operator) => {
    if (validateInput()) {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);

      switch (operator) {
        case '+':
          setResult(num1 + num2);
          break;
        case '-':
          setResult(num1 - num2);
          break;
        case '*':
          setResult(num1 * num2);
          break;
        case '/':
          if (num2 === 0) {
            setError('Division by zero is not allowed.');
          } else {
            setResult(num1 / num2);
          }
          break;
        default:
          setError('Invalid operation.');
      }
    }
  };

  return (
    <div className='wrapper'>
      <h2> React Calculator</h2>
      <input
        type="text"
        placeholder="Enter number 1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <div>
        <button className='btn' onClick={() => performOperation('+')}>+</button>
        <button className='btn' onClick={() => performOperation('-')}>-</button>
        <button className='btn' onClick={() => performOperation('*')}>*</button>
        <button className='btn' onClick={() => performOperation('/')}>/</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && <div style={{ color: 'blue' }}> SUCCESS {'\n'} Result: {result}</div>}
    </div>
  );
}

export default Calculator;
