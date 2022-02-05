import React from "react";
import { useState } from "react";

function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("Parent has been updated!")}>
        Change parent state
      </button>
    </>
  );
}

function ParentState() {
  const [value, setValue] = useState("Update me from child");
  return (
    <>
      <div className="element">
        <h3>Update Parent State (callback)</h3>
        <div>Parent</div>
        <div>{value}</div>
        <h4>Press to update parent state</h4>
        <Child setValue={setValue} />
      </div>
    </>
  );
}

export default ParentState;
