import { useState } from "react";

function DisableButton() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="showhide">
        <h3>Disable button</h3>
        <input type="text" onChange={(e) => setValue(e.target.value)}></input>
        <button disabled={value.length < 1}>Submit</button>
      </div>
    </>
  );
}

export default DisableButton;
