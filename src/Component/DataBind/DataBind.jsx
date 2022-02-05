import React from "react";
import { useState } from "react";

function DataBind() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="element">
        <h3>2 Way Data Binding (Solution)</h3>
        <input
          type="text"
          placeholder="Enter text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <p>{value}</p>
      </div>
    </>
  );
}

export default DataBind;
