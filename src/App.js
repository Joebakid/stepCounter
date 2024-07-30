import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <StepandCounter />
    </div>
  );
}

function StepandCounter() {
  //STEP
  const [step, setStep] = useState(0);

  function increment() {
    setStep((s) => s + 1);
  }

  function decrement() {
    setStep((s) => s - 1);
  }

  //COUNTER
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((c) => c + step);
  }

  function decrementCounter() {
    setCounter((c) => c - step);
  }

  // DATE
  const [date, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the date every second
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Calculate the target date based on the counter
  function calculateTargetDate() {
    const targetDate = new Date();
    targetDate.setDate(date.getDate() + counter);
    return targetDate;
  }

  // RESET
  function reset() {
    setStep(0);
    setCounter(0);
  }

  return (
    <div className="container">
      <div className="flex margin-y">
        <button className="btn " onClick={decrement}>
          -
        </button>
        <p className="margin">Step : {step} </p>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
      <div className="flex margin-y">
        <button className="btn" onClick={decrementCounter}>
          {" "}
          -{" "}
        </button>
        <p className="margin ">Counter :{counter} </p>{" "}
        <button className="btn" onClick={incrementCounter}>
          {" "}
          +{" "}
        </button>
      </div>
      <div className="margin-y">
        <p className="margin">
          Target Date: {calculateTargetDate().toDateString()}
        </p>
      </div>
      <button className="btn margin-y" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
