import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCountByOne = (value) => {
    setCount((prevCount) => prevCount + 1);
  };
  const increaseCountByTen = (value) => {
    setCount((prevCount) => prevCount + 10);
  };
  const resetCount = (value) => {
    setCount(0);
  };
  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setCount(randomNum);
  };

  const reduceCountByTen = (value) => {
    setCount((prevCount) => prevCount - 10);
  };
  const reduceCountByOne = (value) => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Current Value:</h1>
      <div> {count} </div>
      <button
        onClick={() => {
          increaseCountByOne();
        }}
      >
        Add by 1
      </button>
      <button
        onClick={() => {
          increaseCountByTen();
        }}
      >
        Add by 10
      </button>
      <button
        onClick={() => {
          resetCount();
        }}
      >
        Reset Count
      </button>
      <button
        onClick={() => {
          generateRandomNumber();
        }}
      >
        Random Number
      </button>
      <button
        onClick={() => {
          reduceCountByTen();
        }}
      >
        reduce by 10
      </button>
      <button
        onClick={() => {
          reduceCountByOne();
        }}
      >
        Reduce by 1
      </button>
    </div>
  );
}

export default App;
