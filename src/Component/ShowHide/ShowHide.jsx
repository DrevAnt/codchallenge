import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="showhide">
        <button onClick={() => setShow(!show)}>
          {show ? "Hide me" : "Show me"}
        </button>
        {show && <div> Ololo</div>}
      </div>
    </>
  );
}

export default ShowHide;
