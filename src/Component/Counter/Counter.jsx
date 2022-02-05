import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="element">
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
