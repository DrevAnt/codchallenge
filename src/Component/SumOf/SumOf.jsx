import React from "react";
import { useState } from "react";

function SumOf() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  function calculateTotal() {
    setTotal(number1 + number2);
  }

  return (
    <div className="displayarray">
      <h3>Add 2 numbers</h3>
      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      />

      <button onClick={calculateTotal}>Add two numbers</button>
      <p>Total: {total || ""}</p>
    </div>
  );
}

export default SumOf;
