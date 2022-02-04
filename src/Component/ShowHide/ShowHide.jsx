import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="showhide">
        <h3>Show/Hide Element on Screen</h3>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide me" : "Show me"}
        </button>
        {show && <div> Ololo</div>}
      </div>
    </>
  );
}

export default ShowHide;
