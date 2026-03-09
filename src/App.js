import React, { useState, useCallback } from "react";
import ButtonComponent from "./ButtonComponent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // useCallback memoizes the function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const toggleState = () => {
    setOtherState(!otherState);
  };

  return (
    <div className="container">
      
      <div className="card">
        <h2>Counter Value: {count}</h2>

        <ButtonComponent handleClick={increment} />

        <button className="toggle-btn" onClick={toggleState}>
          Toggle State
        </button>

        <p>
          Other State: <b>{otherState ? "TRUE" : "FALSE"}</b>
        </p>
      </div>
    </div>
  );
}

export default App;